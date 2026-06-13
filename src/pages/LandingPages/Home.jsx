import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* Images */
import logo from "../../assets/ems-logo.png";
import heroImage from "../../assets/hero-image.png";
import historyImage from "../../assets/history-of-hrms.png";
import hrmsImage from "../../assets/hrms-human-resource-management-system.png";

/* CSS */


const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg landing-navbar">
        <div className="container">

          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="EMS Logo" width="45" />
            <span className="fw-bold">EMS Portal</span>
          </Link>

          <div className="ms-auto d-flex gap-3">

            <Link
              className="btn btn-outline-dark"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-dark"
              to="/register"
            >
              Register
            </Link>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="hero-title">
                Modern Human Resource
                Management System
              </h1>

              <p className="hero-description">
                Streamline employee management,
                attendance, payroll, recruitment,
                performance tracking and workforce
                analytics through a single platform.
              </p>

              <Link
                to="/register"
                className="btn btn-dark btn-lg me-3"
              >
                Get Started
              </Link>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={workspaceImage}
                alt="HRMS"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* EVOLUTION */}
      <section className="feature-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src={historyImage}
                className="img-fluid rounded"
                alt="HRMS Evolution"
              />

            </div>

            <div className="col-lg-6">

              <h2>
                Evolution of Human Resource
                Management
              </h2>

              <p>
                Human resource management has evolved
                from manual workforce administration
                into intelligent digital platforms.
                Modern HRMS solutions integrate
                recruitment, attendance, payroll,
                employee records and analytics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MODULES */}
      <section className="feature-section bg-light">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2>
                Complete HRMS Modules
              </h2>

              <p>
                Manage employee lifecycle through
                Employee Management, Attendance,
                Leave, Payroll, Recruitment,
                Performance Management,
                Asset Tracking and Training.
              </p>

            </div>

            <div className="col-lg-6">

              <img
                src={modulesImage}
                className="img-fluid rounded"
                alt="HRMS Modules"
              />

            </div>

          </div>

        </div>

      </section>

      {/* DIGITAL WORKPLACE */}
      <section className="feature-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src={workspaceImage}
                className="img-fluid rounded"
                alt="Digital Workplace"
              />

            </div>

            <div className="col-lg-6">

              <h2>
                Connected Digital Workforce
              </h2>

              <p>
                Enable collaboration, automate
                workflows, monitor productivity and
                gain workforce insights through
                centralized dashboards and reporting.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div className="container text-center">

          <h2>
            Ready To Transform Your HR Operations?
          </h2>

          <p>
            Manage employees, attendance,
            payroll and performance in one
            centralized platform.
          </p>

          <Link
            to="/register"
            className="btn btn-light btn-lg"
          >
            Start Today
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer-section">

        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <h5>EMS Portal</h5>

              <p>
                Modern HRMS solution for growing
                organizations.
              </p>

            </div>

            <div className="col-md-4">

              <h5>Services</h5>

              <ul className="footer-links">

                <li><a href="#">Employee Management</a></li>
                <li><a href="#">Attendance Management</a></li>
                <li><a href="#">Payroll Management</a></li>
                <li><a href="#">Recruitment</a></li>

              </ul>

            </div>

            <div className="col-md-4">

              <h5>Contact Us</h5>

              <p>Hyderabad, Telangana</p>

              <p>support@emsportal.com</p>

              <p>+91 XXXXX XXXXX</p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;