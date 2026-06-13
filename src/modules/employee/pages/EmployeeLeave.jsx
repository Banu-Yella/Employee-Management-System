import React from "react";
function EmployeeLeave() {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Leave Management</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>My Leaves</h5>
          <hr />

          <button className="btn btn-primary">Apply Leave</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLeave;
