import React from "react";
import "../../styles/AdminDashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <p>Welcome back, Administrator 👋</p>
      </div>

      {/* Statistics Cards */}

      <div className="row g-4">

        <div className="col-md-3">
          <div className="stats-card employees">
            <h3>125</h3>
            <p>Total Employees</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stats-card attendance">
            <h3>98%</h3>
            <p>Attendance</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stats-card payroll">
            <h3>₹12.5L</h3>
            <p>Monthly Payroll</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stats-card departments">
            <h3>8</h3>
            <p>Departments</p>
          </div>
        </div>

      </div>

      {/* Recent Employees */}

      <div className="dashboard-table mt-5">

        <h4>Recent Employees</h4>

        <table className="table table-hover">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>EMP001</td>
              <td>John Doe</td>
              <td>IT</td>
              <td>
                <span className="badge bg-success">
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td>EMP002</td>
              <td>Priya Sharma</td>
              <td>HR</td>
              <td>
                <span className="badge bg-success">
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td>EMP003</td>
              <td>Rahul Kumar</td>
              <td>Finance</td>
              <td>
                <span className="badge bg-warning">
                  Leave
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;