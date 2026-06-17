import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getEmployeeById } from "../services/employeeService";
import { getAttendanceSummary } from "../../attendance/services/attendanceService";

function EmployeeDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [attendance, setAttendance] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");

      if (!storedUser?.id) {
        navigate("/login");
        return;
      }

      setUser(storedUser);

      const employeeResponse = await getEmployeeById(storedUser.id);

      setEmployee(employeeResponse.data);

      const attendanceResponse = await getAttendanceSummary(storedUser.id);

      setAttendance(attendanceResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome mb-4">
        <h1>Welcome {employee?.employeename || user?.username}</h1>

        <p>Manage your profile, attendance, leaves and account settings.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Employee ID</h3>
          <h2>{employee?.employeeid || "-"}</h2>
        </div>

        <div className="stat-card">
          <h3>Department</h3>
          <h2>{employee?.department || "-"}</h2>
        </div>

        <div className="stat-card">
          <h3>Designation</h3>
          <h2>{employee?.designation || "-"}</h2>
        </div>

        <div className="stat-card">
          <h3>Role</h3>
          <h2>{employee?.role || "-"}</h2>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Attendance Summary</h3>

          <p>
            <strong>Working Days :</strong> {attendance?.workingDays || 0}
          </p>

          <p>
            <strong>Present :</strong> {attendance?.presentDays || 0}
          </p>

          <p>
            <strong>Leave :</strong> {attendance?.leaveDays || 0}
          </p>

          <p>
            <strong>Absent :</strong> {attendance?.absentDays || 0}
          </p>

          <p>
            <strong>Attendance % :</strong>{" "}
            {attendance?.attendancePercentage || 0}%
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Employee Information</h3>

          <p>
            <strong>Name :</strong> {employee?.employeename || "-"}
          </p>

          <p>
            <strong>Department :</strong> {employee?.department || "-"}
          </p>

          <p>
            <strong>Designation :</strong> {employee?.designation || "-"}
          </p>

          <p>
            <strong>Status :</strong> {employee?.employmentStatus || "-"}
          </p>

          <p>
            <strong>Work Location :</strong> {employee?.workLocation || "-"}
          </p>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Quick Actions</h3>

        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/employee/profile")}
          >
            My Profile
          </button>

          <button
            className="btn btn-success"
            onClick={() => navigate("/employee/attendance")}
          >
            Attendance
          </button>

          <button
            className="btn btn-warning"
            onClick={() => navigate("/employee/leave")}
          >
            Leave Requests
          </button>

          <button
            className="btn btn-info"
            onClick={() => navigate("/employee/change-password")}
          >
            Change Password
          </button>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
