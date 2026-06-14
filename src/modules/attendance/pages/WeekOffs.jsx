import { useEffect, useState } from "react";
import { getAllWeekOffs, deleteWeekOff } from "../services/weekOffService";

function WeekOffs() {
  const [weekOffs, setWeekOffs] = useState([]);

  useEffect(() => {
    loadWeekOffs();
  }, []);

  const loadWeekOffs = async () => {
    try {
      const response = await getAllWeekOffs();
      setWeekOffs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this week off?")) return;

    await deleteWeekOff(id);
    loadWeekOffs();
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-3">Employee Week Off Management</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Week Off Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {weekOffs.map((weekOff) => (
            <tr key={weekOff.weekOffId}>
              <td>{weekOff.weekOffId}</td>
              <td>{weekOff.weekOffDate}</td>

              <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(weekOff.weekOffId)}
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

export default WeekOffs;
