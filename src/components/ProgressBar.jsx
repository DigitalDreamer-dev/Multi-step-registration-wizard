function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-container">
      <h2>Multi-Step Registration Form</h2>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <p>Step {step} of 3</p>
    </div>
  );
}

export default ProgressBar;
