import React from "react";

import "../../styles/EmployeeNavbar.css";

const EmployeeNavbar = ({ collapsed, toggleSidebar }) => {
  const sidebarWidth = collapsed ? 70 : 250;

  return (
    <nav
      className="employee-navbar"
      style={{ left: `${sidebarWidth}px`, width: `calc(100% - ${sidebarWidth}px)` }}
    >
      <div className="employee-navbar-left">     
        <div>
          <h4 className="mb-0 fw-bold">Employee Dashboard</h4>
          <small className="text-muted">Welcome back, Employee</small>
        </div>
      </div>

      <div className="employee-profile">
        <div className="notification-icon">
          <span className="notification-badge">2</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </div>

        <div className="profile-section">
          <div className="profile-avatar">PK</div>
          <div>
            <div className="fw-semibold">Pavan Kumar</div>
            <small className="text-muted">Software Developer</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EmployeeNavbar;