import { useEffect, useState } from "react";

import { getAllHolidays, deleteHoliday } from "../services/holidayService";

import AddHolidayModal from "../components/AddHolidayModal";

function Holidays() {
  const [holidays, setHolidays] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadHolidays();
  }, []);

  const loadHolidays = async () => {
    try {
      const response = await getAllHolidays();

      setHolidays(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (holidayId) => {
    try {
      await deleteHoliday(holidayId);

      loadHolidays();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Holiday Management</h2>

        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Holiday
        </button>
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
          {holidays.length > 0 ? (
            holidays.map((holiday) => (
              <tr key={holiday.holidayId}>
                <td>{holiday.holidayId}</td>

                <td>{holiday.publicholidayName}</td>

                <td>{holiday.publicholidayDate}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(holiday.holidayId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Holidays Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <AddHolidayModal
          onClose={() => setShowModal(false)}
          onSuccess={loadHolidays}
        />
      )}
    </div>
  );
}

export default Holidays;
