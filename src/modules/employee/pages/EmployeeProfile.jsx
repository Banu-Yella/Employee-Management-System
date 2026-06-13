import React from "react";

function EmployeeProfile() {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">My Profile</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Employee Information</h5>
          <hr />

          <p>
            <strong>Employee ID:</strong> --
          </p>
          <p>
            <strong>Name:</strong> --
          </p>
          <p>
            <strong>Department:</strong> --
          </p>
          <p>
            <strong>Designation:</strong> --
          </p>
          <p>
            <strong>Role:</strong> --
          </p>
          <p>
            <strong>Status:</strong> --
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
