import { useState } from "react";
function ChangePassword() {
  const [formData, setFormData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Change Password</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Username</label>
              <input className="form-control" type="text" />
            </div>

            <div className="mb-3">
              <label>Current Password</label>
              <input className="form-control" type="password" />
            </div>

            <div className="mb-3">
              <label>New Password</label>
              <input className="form-control" type="password" />
            </div>

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
