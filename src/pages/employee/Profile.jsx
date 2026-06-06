import React from "react";

const Profile = () => {

  return (

    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          Employee Profile
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">
              <strong>Name:</strong> Pavan Kumar
            </div>

            <div className="col-md-6 mb-3">
              <strong>Employee ID:</strong> EMP001
            </div>

            <div className="col-md-6 mb-3">
              <strong>Department:</strong> Embedded
            </div>

            <div className="col-md-6 mb-3">
              <strong>Role:</strong> Developer
            </div>

            <div className="col-md-6 mb-3">
              <strong>Location:</strong> Hyderabad
            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Profile;