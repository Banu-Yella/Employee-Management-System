import { useEffect, useState } from "react";
import { getAllAttendance } from "../services/attendanceService";

function AttendanceSummary() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getAllAttendance();
    setAttendance(response.data);
  };

  const presentCount = attendance.filter(
    (a) => a.attendanceStatus === "PRESENT",
  ).length;

  const absentCount = attendance.filter(
    (a) => a.attendanceStatus === "ABSENT",
  ).length;

  const leaveCount = attendance.filter(
    (a) => a.attendanceStatus === "LEAVE",
  ).length;

  const holidayCount = attendance.filter(
    (a) => a.attendanceStatus === "HOLIDAY",
  ).length;

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Attendance Summary</h2>

      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Total Records</h5>
              <h2>{attendance.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Present</h5>
              <h2>{presentCount}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Absent</h5>
              <h2>{absentCount}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Leave</h5>
              <h2>{leaveCount}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceSummary;
