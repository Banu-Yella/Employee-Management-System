function DashboardCards() {
  return (
    <div className="row g-4">
      <div className="col-md-3">
        <div className="dashboard-card">
          <h4>Total Employees</h4>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-card">
          <h4>Present Today</h4>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-card">
          <h4>Open Positions</h4>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-card">
          <h4>Pending Leaves</h4>
          <h2>0</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
