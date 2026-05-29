import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/ems-logo.png";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    // Temporary Role Logic

    const role = "ADMIN";

    if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/employee/dashboard");
    }
  };

  return (

    <div className="login-wrapper">

      <div className="login-card">

        {/* Logo */}

        <div className="logo-section">

          <img
            src={logo}
            alt="EMS Logo"
            className="logo-img"
          />

          <h1 className="login-heading">
            EMS Portal
          </h1>

          <p className="login-subheading">
            Employee Management System
          </p>

        </div>

        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Email */}

          <div className="input-group-custom">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control custom-input"
            />

          </div>

          {/* Password */}

          <div className="input-group-custom">

            <label>
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="form-control custom-input"
            />

          </div>

          {/* Show Password */}

          <div className="show-password">

            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(!showPassword)
              }
            />

            <span>
              Show Password
            </span>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;