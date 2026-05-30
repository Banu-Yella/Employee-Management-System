import React from "react";

import "../../styles/EmployeeNavbar.css";

const EmployeeNavbar = () => {

  return (

    <nav className="employee-navbar">

      <div>

        <h4 className="mb-0 fw-bold">
          Employee Dashboard
        </h4>

        <small className="text-muted">
          Welcome back, Employee
        </small>

      </div>

      <div className="employee-profile">

        <div className="notification-icon">

          <span className="notification-badge">
            2
          </span>

          🔔

        </div>

        <div className="profile-section">

          <div className="profile-avatar">
            PK
          </div>

          <div>

            <div className="fw-semibold">
              Pavan Kumar
            </div>

            <small className="text-muted">
              Software Developer
            </small>

          </div>

        </div>

      </div>

    </nav>

  );
};

export default EmployeeNavbar;