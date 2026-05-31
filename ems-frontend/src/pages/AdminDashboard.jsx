import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h3>Total Employees: 25</h3>

      <Link to="/employees">
        <button>Employee List</button>
      </Link>

      <Link to="/add-employee">
        <button>Add Employee</button>
      </Link>
    </div>
  );
}

export default AdminDashboard;