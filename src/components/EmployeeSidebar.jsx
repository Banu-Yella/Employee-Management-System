import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/EmployeeSidebar.css";

const EmployeeSidebar = () => {

  return (

    <div className="employee-sidebar">

      <div className="sidebar-header">

        <h2>EMS Employee</h2>

      </div>

      <ul className="sidebar-menu">

        <li>

          <NavLink
            to="/employee/dashboard"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Dashboard
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/employee/profile"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Profile
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/employee/attendance"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Attendance
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/employee/payroll"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
          >
            Payroll
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/login"
            className="sidebar-link logout-link"
          >
            Logout
          </NavLink>

        </li>

      </ul>

    </div>

  );
};

export default EmployeeSidebar;