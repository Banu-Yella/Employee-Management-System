import "../styles/AdminSidebar.css";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="/ems-logo.png" alt="EMS Logo" />
        </div>

        <h2 className="portal-title">EMS Portal</h2>

        <p className="portal-subtitle">Smart Workforce Management</p>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin" className="sidebar-link">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/employees" className="sidebar-link">
            Employee Management
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/attendance" className="sidebar-link">
            Attendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/leave" className="sidebar-link">
            Leave Management
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/payroll" className="sidebar-link">
            Payroll
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/recruitment" className="sidebar-link">
            Recruitment
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/reports" className="sidebar-link">
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/settings" className="sidebar-link">
            Settings
          </NavLink>
        </li>
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
}

export default AdminSidebar;
