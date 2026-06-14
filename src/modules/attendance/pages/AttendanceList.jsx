import { useEffect, useState } from "react";
import { getAllAttendance } from "../services/attendanceService";

function AttendanceList() {
  const [attendance, setAttendance] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");

  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const response = await getAllAttendance();

      setAttendance(response.data || []);
    } catch (error) {
      console.error("Error loading attendance", error);
    }
  };

  const filteredAttendance = attendance.filter((record) => {
    const employeeMatch =
      !search ||
      record.employeeName?.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "ALL" || record.attendanceStatus === statusFilter;

    const dateMatch = !dateFilter || record.attendanceDate === dateFilter;

    return employeeMatch && statusMatch && dateMatch;
  });

  const totalPresent = attendance.filter(
    (item) => item.attendanceStatus === "PRESENT",
  ).length;

  const totalAbsent = attendance.filter(
    (item) => item.attendanceStatus === "ABSENT",
  ).length;

  const totalLeave = attendance.filter(
    (item) => item.attendanceStatus === "LEAVE",
  ).length;

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Attendance Management</h2>

      {/* Summary Cards */}

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6>Total Records</h6>
              <h3>{attendance.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6>Present</h6>
              <h3>{totalPresent}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6>Absent</h6>
              <h3>{totalAbsent}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6>Leave</h6>
              <h3>{totalLeave}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}

      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All Status</option>

            <option value="PRESENT">PRESENT</option>

            <option value="ABSENT">ABSENT</option>

            <option value="LEAVE">LEAVE</option>

            <option value="HALF_DAY">HALF DAY</option>

            <option value="WEEK_OFF">WEEK OFF</option>

            <option value="HOLIDAY">HOLIDAY</option>
          </select>
        </div>
      </div>

      {/* Attendance Table */}

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Department</th>
              <th>Date</th>
              <th>Status</th>
              <th>Punch In</th>
              <th>Punch Out</th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendance.length > 0 ? (
              filteredAttendance.map((record) => (
                <tr key={record.attendanceId}>
                  <td>{record.employeeId}</td>

                  <td>{record.employeeName}</td>

                  <td>{record.department || "-"}</td>

                  <td>{record.attendanceDate}</td>

                  <td>
                    <span
                      className={`badge ${
                        record.attendanceStatus === "PRESENT"
                          ? "bg-success"
                          : record.attendanceStatus === "ABSENT"
                            ? "bg-danger"
                            : record.attendanceStatus === "LEAVE"
                              ? "bg-warning text-dark"
                              : "bg-secondary"
                      }`}
                    >
                      {record.attendanceStatus}
                    </span>
                  </td>

                  <td>{record.punchInTime || "-"}</td>

                  <td>{record.punchOutTime || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Attendance Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceList;
