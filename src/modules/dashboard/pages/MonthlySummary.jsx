import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function MonthlySummary() {
  const navigate = useNavigate();

  const summaryCards = useMemo(
    () => [
      { label: "Total Employees", value: "124", note: "Across all active departments" },
      { label: "Present Today", value: "96", note: "Attendance tracked in current cycle" },
      { label: "Leaves Approved", value: "18", note: "This month so far" },
      { label: "Payroll Processed", value: "₹8.4L", note: "Monthly payroll summary" },
    ],
    [],
  );

  return (
    <div className="dashboard-container">
      <div className="module-hero-card">
        <div>
          <p className="module-eyebrow">Monthly Summary</p>
          <h1>📊 Monthly Summary</h1>
          <p className="module-subtitle">A quick view of key workforce metrics, approvals, and payroll status for the current month.</p>
        </div>
        <button className="btn btn-outline-primary" onClick={() => navigate("/admin")}>Back to Dashboard</button>
      </div>

      <div className="stats-grid module-stat-grid">
        {summaryCards.map((item) => (
          <div className="stat-card module-stat-card" key={item.label}>
            <h3>{item.label}</h3>
            <h2>{item.value}</h2>
            <p className="module-subtitle">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card module-panel-card">
          <h3>Attendance Overview</h3>
          <ul>
            <li>✅ 96 employees present today</li>
            <li>✅ 8 late arrivals recorded</li>
            <li>✅ 2 employees on leave</li>
          </ul>
        </div>

        <div className="dashboard-card module-panel-card">
          <h3>Payroll & Approvals</h3>
          <ul>
            <li>💼 Payroll for the current month is ready</li>
            <li>📝 18 leave requests approved</li>
            <li>🔐 Admin review queue is healthy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MonthlySummary;
