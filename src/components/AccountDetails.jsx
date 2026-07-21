function AccountDetails({ register, errors, showPassword, setShowPassword }) {
  return (
    <div className="form-step">
      <h2>Account Details</h2>

      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          {...register("username")}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>

      <div className="input-group">
        <label>Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          {...register("password")}
        />

        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="input-group">
        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="checkbox-group">
        <input
          id="showPassword"
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />

        <label htmlFor="showPassword">Show Password</label>
      </div>
    </div>
  );
}

export default AccountDetails;
