import { useEffect, useState } from "react";

import { getAttendanceSummary } from "../../attendance/services/attendanceService";

function EmployeeAttendance() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    loadAttendanceSummary();
  }, []);

  const loadAttendanceSummary = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await getAttendanceSummary(user.id);

      setSummary(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">My Attendance</h2>

      {summary && (
        <div className="row">
          <div className="col-md-3">
            <div className="card p-3">
              <h5>Working Days</h5>
              <h3>{summary.workingDays}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Present</h5>
              <h3>{summary.presentDays}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Leaves</h5>
              <h3>{summary.leaveDays}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Attendance %</h5>
              <h3>{summary.attendancePercentage}%</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeAttendance;
