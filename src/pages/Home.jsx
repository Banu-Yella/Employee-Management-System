import React from "react";
import { Link } from "react-router-dom";

/* Images */
import logo from "../assets/ems-logo.png";
import employeeBot from "../assets/home-employeebot.png";

/* CSS */
import "../styles/home.css";

const Home = () => {
    
  return (

    <div className="home-page">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* ================= LOGO ================= */}
          <Link className="navbar-brand d-flex align-items-center gap-3" to="/" >
            <img src={logo} alt="EMS Logo" className="logo-img"/>
            <div> 
                <h4 className="logo-title">EMS Portal</h4>
                <small className="logo-subtitle">Employee Management System</small>
            </div>
          </Link>
          {/* ================= BUTTONS ================= */}
          <div className="d-flex gap-3">
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>

      </nav>
      {/* ================= HERO SECTION ================= */}
      <div className="container hero-section">
        <div className="row align-items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-6">
            <h1 className="hero-title">Smart Employee<br /><span className="hero-highlight">Management System</span></h1>
            <p className="hero-description">
              Manage employees, payroll, attendance,
              departments, and HR operations
              in one modern and secure HRMS platform.
            </p>

            <div className="d-flex gap-3">
              <Link to="/Login" className="btn btn-primary btn-lg">Get Started</Link>
              <Link  to="/login" className="btn btn-outline-dark btn-lg"> Login</Link>
            </div>
          </div>
          {/* ================= RIGHT IMAGE ================= */}
          <div className="col-lg-6 text-center">
            <img src={employeeBot} alt="Employee Bot"  className="hero-image img-fluid" />
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="container features-section">
        <div className="text-center mb-5">
          <h2 className="fw-bold"> HRMS Features</h2>
          <p className="text-muted"> Everything you need to manage employees efficiently</p>
        </div>
        <div className="row g-4">
          {/* ================= FEATURE 1 ================= */}
          <div className="col-md-4">
            <div className="card shadow-sm feature-card">
              <h4 className="feature-title">Employee Management</h4>
              <p className="text-muted">
                Add, update, edit, and manage employee
                information with ease.
              </p>
            </div>
          </div>
          {/* ================= FEATURE 2 ================= */}
          <div className="col-md-4">
            <div className="card shadow-sm feature-card">
              <h4 className="feature-title"> Attendance Tracking</h4>
              <p className="text-muted">
                Track employee attendance,
                work hours, and leave records.
              </p>
            </div>
          </div>

          {/* ================= FEATURE 3 ================= */}
          <div className="col-md-4">
            <div className="card shadow-sm feature-card">
              <h4 className="feature-title"> Payroll Management</h4>
              <p className="text-muted">
                Generate salary reports,
                payroll records, and payment history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer-section">
        <p className="mb-0">
          © 2026 EMS Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;