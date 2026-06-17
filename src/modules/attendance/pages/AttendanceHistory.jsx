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
      const currentDate = new Date();

      const year = currentDate.getFullYear();

      const month = currentDate.getMonth() + 1;

      const response = await getAttendanceByEmployee(id, year, month);

      setRecords(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Employee Attendance History</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Punch In</th>
            <th>Punch Out</th>
          </tr>
        </thead>

        <tbody>
          {records.length > 0 ? (
            records.map((record) => (
              <tr key={record.attendanceId}>
                <td>{record.attendanceDate}</td>

                <td>{record.attendanceStatus}</td>

                <td>{record.punchInTime || "-"}</td>

                <td>{record.punchOutTime || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Attendance Records Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
