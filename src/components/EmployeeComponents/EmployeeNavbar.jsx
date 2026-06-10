import { useNavigate } from "react-router-dom";

function EmployeeNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
      <div>
        <h5 className="mb-0">Employee Portal</h5>
        <small className="text-muted">Welcome back</small>
      </div>
      <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default EmployeeNavbar;
