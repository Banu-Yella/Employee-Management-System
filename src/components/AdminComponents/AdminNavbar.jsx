import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="admin-navbar" ref={navbarRef}>
      <div className="navbar-left">
        <img src="/ems-logo.png" alt="EMS" className="navbar-logo" />

        <div>
          <h5 className="system-title">Employee Management System</h5>

          <small className="system-subtitle">Admin Portal</small>
        </div>
      </div>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
        {/* Dashboard */}
        <li>
          <NavLink to="/admin" onClick={closeMenu}>
            Dashboard
          </NavLink>
        </li>

        {/* Employee */}
        <li className="admin-dropdown">
          <button
            type="button"
            className="menu-btn"
            onClick={() => toggleMenu("employee")}
          >
            Employee ▾
          </button>

          {openMenu === "employee" && (
            <div className="admin-dropdown-menu">
              <NavLink to="/admin/employees" onClick={closeMenu}>
                Employees
              </NavLink>

              <NavLink to="/admin/kyc" onClick={closeMenu}>
                KYC
              </NavLink>

              <NavLink to="/admin/performance" onClick={closeMenu}>
                Performance
              </NavLink>
            </div>
          )}
        </li>

        {/* Attendance */}
        <li className="admin-dropdown">
          <button
            type="button"
            className="menu-btn"
            onClick={() => toggleMenu("attendance")}
          >
            Attendance ▾
          </button>

          {openMenu === "attendance" && (
            <div className="admin-dropdown-menu">
              <NavLink to="/admin/attendance" onClick={closeMenu}>
                Attendance
              </NavLink>

              <NavLink to="/admin/attendance-summary" onClick={closeMenu}>
                Attendance Summary
              </NavLink>

              <NavLink to="/admin/shifts" onClick={closeMenu}>
                Shifts
              </NavLink>

              <NavLink to="/admin/weekoffs" onClick={closeMenu}>
                Week Offs
              </NavLink>

              <NavLink to="/admin/holidays" onClick={closeMenu}>
                Holidays
              </NavLink>
            </div>
          )}
        </li>

        {/* Leave */}
        <li className="admin-dropdown">
          <button
            type="button"
            className="menu-btn"
            onClick={() => toggleMenu("leave")}
          >
            Leave ▾
          </button>

          {openMenu === "leave" && (
            <div className="admin-dropdown-menu">
              <NavLink to="/admin/leave" onClick={closeMenu}>
                Leave Requests
              </NavLink>

              <NavLink to="/admin/leave-approval" onClick={closeMenu}>
                Leave Approval
              </NavLink>
            </div>
          )}
        </li>

        {/* Payroll */}
        <li className="admin-dropdown">
          <button
            type="button"
            className="menu-btn"
            onClick={() => toggleMenu("payroll")}
          >
            Payroll ▾
          </button>

          {openMenu === "payroll" && (
            <div className="admin-dropdown-menu">
              <NavLink to="/admin/salary-structure" onClick={closeMenu}>
                Salary Structure
              </NavLink>

              <NavLink to="/admin/payroll" onClick={closeMenu}>
                Payroll
              </NavLink>

              <NavLink to="/admin/payslips" onClick={closeMenu}>
                Payslips
              </NavLink>

              <NavLink to="/admin/tax" onClick={closeMenu}>
                Tax Slabs
              </NavLink>
            </div>
          )}
        </li>

        {/* Users */}
        <li className="admin-dropdown">
          <button
            type="button"
            className="menu-btn"
            onClick={() => toggleMenu("users")}
          >
            Users ▾
          </button>

          {openMenu === "users" && (
            <div className="admin-dropdown-menu">
              <NavLink to="/admin/users" onClick={closeMenu}>
                Users
              </NavLink>

              <NavLink to="/admin/education" onClick={closeMenu}>
                Education
              </NavLink>

              <NavLink to="/admin/experience" onClick={closeMenu}>
                Experience
              </NavLink>

              <NavLink to="/admin/assessments" onClick={closeMenu}>
                Assessments
              </NavLink>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/admin/reports" onClick={closeMenu}>
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/settings" onClick={closeMenu}>
            Settings
          </NavLink>
        </li>

        <li>
          <button className="logout-btn-navbar" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
