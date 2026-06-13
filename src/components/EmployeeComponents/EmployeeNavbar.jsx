import { NavLink, useNavigate } from "react-router-dom";

function EmployeeNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Employee Portal</span>

        <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
          <NavLink className="nav-link" to="/employee/dashboard">
            Dashboard
          </NavLink>

          <NavLink className="nav-link" to="/employee/profile">
            Profile
          </NavLink>

          <NavLink className="nav-link" to="/employee/attendance">
            Attendance
          </NavLink>

          <NavLink className="nav-link" to="/employee/leave">
            Leave
          </NavLink>

          <NavLink className="nav-link" to="/employee/payslips">
            Payslips
          </NavLink>

          <NavLink className="nav-link" to="/employee/settings">
            Settings
          </NavLink>

          <button
            className="btn btn-outline-light btn-sm ms-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default EmployeeNavbar;
