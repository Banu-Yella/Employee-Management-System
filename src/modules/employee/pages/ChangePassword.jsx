import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../auth/services/authService";

function ChangePassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.username) {
      setFormData((prev) => ({
        ...prev,
        username: user.username,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    try {
      const response = await changePassword({
        username: formData.username,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      setMessage(response.data);

      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data.message || err.response.data);
      } else {
        setError("Unable to change password");
      }
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Change Password</h2>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/employee")}
        >
          Back
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>

              <input
                className="form-control"
                type="text"
                name="username"
                value={formData.username}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Current Password</label>

              <input
                className="form-control"
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>

              <input
                className="form-control"
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>

              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {message && <div className="alert alert-success">{message}</div>}

            <button type="submit" className="btn btn-success">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
