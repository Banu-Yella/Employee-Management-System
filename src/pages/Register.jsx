import React from "react";

const Register = () => {

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Register Page
      </h2>

      <form className="w-50 mx-auto">

        <div className="mb-3">

          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />

        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
        >
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;