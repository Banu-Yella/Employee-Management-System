import React from "react";

const EmployeeDashboard = () => {

  return (

    <div className="container-fluid">

      <h2 className="fw-bold mb-3">
        Employee Dashboard
      </h2>

      <p className="text-muted mb-4">
        Welcome back, Pavan Kumar 👋
      </p>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4">
            <h3>95%</h3>
            <p>Attendance</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4">
            <h3>₹65,000</h3>
            <p>Current Salary</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4">
            <h3>5</h3>
            <p>Leaves Left</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4">
            <h3>IT</h3>
            <p>Department</p>
          </div>
        </div>

      </div>

    </div>

  );
};

export default EmployeeDashboard;