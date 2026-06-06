import React from "react";

const Attendance = () => {

  return (

    <div className="container-fluid">

      <h2 className="mb-4">
        Attendance
      </h2>

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>01-06-2026</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>02-06-2026</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>03-06-2026</td>
            <td>Leave</td>
          </tr>

        </tbody>

      </table>

    </div>

  );
};

export default Attendance;