import React from "react";
import "../../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar">

      <h3 className="sidebar-title">
        EMS Admin
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-3">
          <NavLink
            to="/admin/employees"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Employees
          </NavLink>
        </li>

        <li className="nav-item mb-3">
          <NavLink
            to="/admin/add-employee"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Add Employee
          </NavLink>
        </li>

        <li className="nav-item mb-3">
          <NavLink
            to="/admin/payroll"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Payroll
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default AdminSidebar;