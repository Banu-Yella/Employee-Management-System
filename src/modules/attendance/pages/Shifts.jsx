import { useEffect, useState } from "react";
import { getAllShifts, deleteShift } from "../services/shiftService";

function Shifts() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    loadShifts();
  }, []);

  const loadShifts = async () => {
    try {
      const response = await getAllShifts();
      setShifts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this shift?")) return;

    await deleteShift(id);
    loadShifts();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Shift Management</h2>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Shift Name</th>
            <th>Type</th>
            <th>Start</th>
            <th>End</th>
            <th>Work Hours</th>
            <th>Late Grace</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.shiftid}>
              <td>{shift.shiftid}</td>
              <td>{shift.shiftName}</td>
              <td>{shift.shiftType}</td>
              <td>{shift.startTime}</td>
              <td>{shift.endTime}</td>
              <td>{shift.minWorkHours}</td>
              <td>{shift.lateGraceMinutes} min</td>
              <td>{shift.active ? "Yes" : "No"}</td>

              <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(shift.shiftid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shifts;
