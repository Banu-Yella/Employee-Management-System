import { useState } from "react";
import { saveHoliday } from "../services/holidayService";

function AddHolidayModal({ onClose, onSuccess }) {
  const [holiday, setHoliday] = useState({
    publicholidayName: "",
    publicholidayDate: "",
  });

  const handleChange = (e) => {
    setHoliday({
      ...holiday,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await saveHoliday(holiday);

    onSuccess();

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Add Public Holiday</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Holiday Name"
            name="publicholidayName"
            value={holiday.publicholidayName}
            onChange={handleChange}
          />

          <input
            type="date"
            className="form-control mb-3"
            name="publicholidayDate"
            value={holiday.publicholidayDate}
            onChange={handleChange}
          />

          <button className="btn btn-success">Save Holiday</button>
        </form>
      </div>
    </div>
  );
}

export default AddHolidayModal;
