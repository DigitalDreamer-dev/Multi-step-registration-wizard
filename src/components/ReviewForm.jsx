function ReviewForm({ data }) {
  return (
    <div className="form-step">
      <h2>Review Your Details</h2>

      <div className="review-card">
        <p>
          <strong>First Name:</strong> {data.firstName}
        </p>

        <p>
          <strong>Last Name:</strong> {data.lastName}
        </p>

        <p>
          <strong>Email:</strong> {data.email}
        </p>

        <p>
          <strong>Username:</strong> {data.username}
        </p>

        <p>
          <strong>Password:</strong> {"•".repeat(data.password?.length || 0)}
        </p>
      </div>

      <p className="review-note">
        Please verify your information before submitting.
      </p>
    </div>
  );
}

export default ReviewForm;
