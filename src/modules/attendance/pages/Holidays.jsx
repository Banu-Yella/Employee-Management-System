import { useEffect, useState } from "react";
import { getAllHolidays, deleteHoliday } from "../services/holidayService";

function Holidays() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    loadHolidays();
  }, []);

  const loadHolidays = async () => {
    try {
      const response = await getAllHolidays();
      setHolidays(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this holiday?")) return;

    await deleteHoliday(id);
    loadHolidays();
  };

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Holiday Management</h2>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Holiday Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {holidays.map((holiday) => (
            <tr key={holiday.holidayId}>
              <td>{holiday.holidayId}</td>
              <td>{holiday.publicholidayName}</td>
              <td>{holiday.publicholidayDate}</td>

              <td>
                <button className="btn btn-sm btn-primary me-2">
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() =>
                    handleDelete(holiday.holidayId)
                  }
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

export default Holidays;