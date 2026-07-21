function PersonalInfo({ register, errors }) {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>

      <div className="input-group">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
      </div>

      <div className="input-group">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          {...register("lastName")}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
      </div>

      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
    </div>
  );
}

export default PersonalInfo;
