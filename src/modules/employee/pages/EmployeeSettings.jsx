import { Link } from "react-router-dom";
function EmployeeSettings() {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Settings</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Account Settings</h5>
          <hr />

          <Link to="/employee/change-password" className="btn btn-warning">
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSettings;
