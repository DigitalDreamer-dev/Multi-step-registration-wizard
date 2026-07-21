import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schemas/formSchema";
import signImage from "./assets/sign.svg";

import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import ReviewForm from "./components/ReviewForm";
import SuccessPage from "./components/SuccessPage";
import ProgressBar from "./components/ProgressBar";

import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const values = watch();

  const step1Valid =
    values.firstName &&
    values.lastName &&
    values.email &&
    !errors.firstName &&
    !errors.lastName &&
    !errors.email;

  const step2Valid =
    values.username &&
    values.password &&
    values.confirmPassword &&
    !errors.username &&
    !errors.password &&
    !errors.confirmPassword;
  const nextStep = async (e) => {
    e.preventDefault();

    let valid = false;

    if (step === 1) {
      valid = await trigger(["firstName", "lastName", "email"]);
    }

    if (step === 2) {
      valid = await trigger(["username", "password", "confirmPassword"]);
    }

    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessPage />;
  }
  return (
    <div className="page">
      <div className={`card ${step === 2 ? "flipped" : ""}`}>
        {}

        <div className="left-panel">
          <img src={signImage} alt="Signup" className="signup-image" />
        </div>

        {}

        <div className="right-panel">
          <ProgressBar step={step} />

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {step === 1 && <PersonalInfo register={register} errors={errors} />}

            {step === 2 && (
              <AccountDetails
                register={register}
                errors={errors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}

            {step === 3 && <ReviewForm data={values} />}

            <div className="buttons">
              {step > 1 && (
                <button type="button" onClick={prevStep}>
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={(e) => nextStep(e)}
                  disabled={
                    (step === 1 && !step1Valid) || (step === 2 && !step2Valid)
                  }
                >
                  Next
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
