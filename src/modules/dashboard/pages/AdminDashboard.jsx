import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getEmployees } from "../../employee/services/employeeService";
import { getAllAttendance } from "../../attendance/services/attendanceService";

import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadAttendance();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data || []);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  const loadAttendance = async () => {
    try {
      const response = await getAllAttendance();

      console.log("Attendance Response:", response.data);

      setAttendance(response.data || []);
    } catch (error) {
      console.error("Error loading attendance:", error);
    }
  };

  const presentToday = attendance.filter(
    (item) => item.attendanceStatus === "PRESENT",
  ).length;

  return (
    <div className="dashboard-container">
      {/* Welcome */}

      <div className="dashboard-welcome">
        <h1>Welcome Admin 👋</h1>

        <p>
          Manage employees, attendance, payroll, recruitment and organizational
          activities.
        </p>
      </div>

      {/* Statistics */}

      <div className="stats-grid">
        <div className="stat-card" onClick={() => navigate("/admin/employees")}>
          <h3>Total Employees</h3>
          <h2>{employees.length}</h2>
        </div>

        <div
          className="stat-card"
          onClick={() => navigate("/admin/attendance")}
        >
          <h3>Present Today</h3>
          <h2>{presentToday}</h2>
        </div>

        <div className="stat-card" onClick={() => navigate("/admin/leave")}>
          <h3>Pending Leaves</h3>
          <h2>0</h2>
        </div>

        <div className="stat-card" onClick={() => navigate("/admin/payroll")}>
          <h3>Monthly Payroll</h3>
          <h2>₹0</h2>
        </div>
      </div>

      {/* Activity + Pending */}

      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Today's Activity</h3>

          <ul>
            <li>✅ Employee records synchronized</li>
            <li>✅ Employee data fetched successfully</li>
            <li>✅ Attendance data fetched successfully</li>
            <li>✅ Dashboard loaded successfully</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Pending Approvals</h3>

          <ul>
            <li>🟠 Leave Requests - 0</li>
            <li>🟠 Regularizations - 0</li>
            <li>🟠 KYC Verifications - 0</li>
            <li>🟠 Payroll Approvals - 0</li>
          </ul>
        </div>
      </div>

      {/* Department Summary */}

      <div className="dashboard-card">
        <h3>Department Summary</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Employees</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              Object.entries(
                employees.reduce((acc, emp) => {
                  const department = emp.department || "Unknown";

                  acc[department] = (acc[department] || 0) + 1;

                  return acc;
                }, {}),
              ).map(([department, count]) => (
                <tr key={department}>
                  <td>{department}</td>
                  <td>{count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No department data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Recent Employees */}

      <div className="dashboard-card">
        <h3>Recent Employees</h3>

        <table className="table employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.slice(0, 5).map((employee) => (
                <tr
                  key={employee.employeeid}
                  onClick={() => navigate("/admin/employees")}
                >
                  <td>{employee.employeeid}</td>
                  <td>{employee.employeeName}</td>
                  <td>{employee.department}</td>
                  <td>{employee.designation}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Upcoming Events */}

      <div className="dashboard-card">
        <h3>Upcoming Events</h3>

        <ul>
          <li>📅 Payroll Processing</li>
          <li>📅 Recruitment Drive</li>
          <li>📅 Quarterly Performance Review</li>
          <li>📅 HR Meeting</li>
        </ul>
      </div>

      {/* Quick Actions */}

      <div className="dashboard-card">
        <h3>Quick Actions</h3>

        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/admin/employees")}
          >
            Add Employee
          </button>

          <button
            className="btn btn-success"
            onClick={() => navigate("/admin/payroll")}
          >
            Generate Payroll
          </button>

          <button
            className="btn btn-warning"
            onClick={() => navigate("/admin/leave")}
          >
            Approve Leaves
          </button>

          <button
            className="btn btn-dark"
            onClick={() => navigate("/admin/reports")}
          >
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
