import React from "react";
import "../../src/styles/Sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (

    <div
      className="bg-dark text-white"
      style={{
        width: "250px",
        minHeight: "100vh",
        padding: "20px"
      }}
    >

      <h3 className="mb-4">
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

export default Sidebar;