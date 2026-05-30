import React, { useState } from "react";
import "../../styles/AdminNavbar.css";

const AdminNavbar = () => {

  const [showNotifications, setShowNotifications] =
    useState(false);

  const notifications = [
    "New employee joined today",
    "Payroll generated successfully",
    "3 leave requests pending",
    "Attendance report available"
  ];

  return (

    <nav className="admin-navbar d-flex justify-content-between align-items-center">

      {/* Left Side */}

      <div>

        <h4 className="mb-0 fw-bold">
          Admin Dashboard
        </h4>

        <small className="text-muted">
          Welcome back, Administrator
        </small>

      </div>

      {/* Right Side */}

      <div className="d-flex align-items-center gap-4">

        {/* Notification */}

        <div className="notification-container">

          <button
            className="notification-btn"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
          >

            <i className="bi bi-bell-fill"></i>

            <span className="notification-badge">
              {notifications.length}
            </span>

          </button>

          {showNotifications && (

            <div className="notification-dropdown">

              <h6 className="fw-bold mb-3">
                Notifications
              </h6>

              {notifications.map((item, index) => (

                <div
                  key={index}
                  className="notification-item"
                >
                  {item}
                </div>

              ))}

            </div>

          )}

        </div>

        {/* Profile */}

        <div className="d-flex align-items-center gap-2">

          <img
            src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff"
            alt="Admin"
            className="admin-profile-img"
          />

          <div>

            <div className="fw-semibold">
              Admin
            </div>

            <small className="text-muted">
              HR Manager
            </small>

          </div>

        </div>

      </div>

    </nav>

  );
};

export default AdminNavbar;