import { useEffect, useState } from "react";

function EmployeeDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    setUser(storedUser);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome mb-4">
        <h1>Employee Dashboard</h1>

        <p>
          Track your profile, attendance, leave, and daily work updates from one
          place.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Welcome</h3>

          <h2>{user?.username || "Employee"}</h2>

          <p className="text-muted">Role: {user?.role || "EMPLOYEE"}</p>
        </div>

        <div className="stat-card">
          <h3>Attendance</h3>

          <h2>Present</h2>

          <p className="text-muted">Today's status is active</p>
        </div>

        <div className="stat-card">
          <h3>Leave Balance</h3>

          <h2>12 Days</h2>

          <p className="text-muted">Available this month</p>
        </div>

        <div className="stat-card">
          <h3>Profile</h3>

          <h2>Updated</h2>

          <p className="text-muted">Keep your contact details current</p>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>My Summary</h3>

          <ul>
            <li>✅ Employee account is active</li>
            <li>✅ Attendance records are synced</li>
            <li>✅ Leave balance is available</li>
            <li>✅ HR updates can be viewed here</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Today's Tasks</h3>

          <ul>
            <li>📌 Mark attendance before shift end</li>
            <li>📌 Review leave requests and approvals</li>
            <li>📌 Check for HR announcements</li>
          </ul>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Attendance Overview</h3>

          <p className="text-muted">
            You are currently marked present for today.
          </p>

          <div className="action-buttons mt-3">
            <button className="btn btn-primary">View Attendance</button>

            <button className="btn btn-outline-secondary ms-2">
              Request Leave
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Profile & Contact</h3>

          <p>
            <strong>Name:</strong> {user?.username || "Employee User"}
          </p>

          <p>
            <strong>Role:</strong> {user?.role || "EMPLOYEE"}
          </p>

          <p>
            <strong>Status:</strong> Active
          </p>

          <button className="btn btn-success mt-2">Update Profile</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
