import { useNavigate } from "react-router-dom";

function ModulePlaceholder({
  title,
  subtitle,
  highlights = [],
  quickStats = [],
  actionLabel = "Go to dashboard",
  actionPath = "/admin",
  accent = "📋",
}) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="module-hero-card">
        <div>
          <p className="module-eyebrow">Admin Module</p>
          <h1>{accent} {title}</h1>
          <p className="module-subtitle">{subtitle}</p>
        </div>
        <div className="module-badge">Live workspace overview</div>
      </div>

      <div className="stats-grid module-stat-grid">
        {quickStats.map((item) => (
          <div className="stat-card module-stat-card" key={item.label}>
            <h3>{item.label}</h3>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card module-panel-card">
          <h3>What this module covers</h3>
          <ul>
            {highlights.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card module-panel-card">
          <h3>Current status</h3>
          <ul>
            <li>📌 Ready for admin workflow integration</li>
            <li>📊 Designed to match the existing dashboard layout</li>
            <li>🔄 Connects to the backend once the API is available</li>
          </ul>

          <div className="module-action-row">
            <button
              className="btn btn-primary"
              onClick={() => navigate(actionPath)}
            >
              {actionLabel}
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/admin/employees")}
            >
              Open Employees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModulePlaceholder;
