import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAttendanceByEmployee } from "../services/attendanceService";

function AttendanceHistory() {
  const { id } = useParams();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const response = await getAllAttendance();

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Attendance History</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Punch In</th>
            <th>Punch Out</th>
            <th>Status</th>
            <th>Work Minutes</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.attendanceId}>
              <td>{record.attendanceDate}</td>

              <td>{record.punchInTime}</td>

              <td>{record.punchOutTime}</td>

              <td>{record.attendanceStatus}</td>

              <td>{record.totalWorkMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
