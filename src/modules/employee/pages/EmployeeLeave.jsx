import { useEffect, useState } from "react";

import {
  applyLeave,
  getEmployeeLeaves,
  cancelLeave,
} from "../../leave/services/leaveService";

function EmployeeLeave() {
  const [leaves, setLeaves] = useState([]);

  const [formData, setFormData] = useState({
    leaveType: "CASUAL",
    leaveStartDate: "",
    leaveEndDate: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await getEmployeeLeaves(user.id);

      setLeaves(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyLeave = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await applyLeave({
        employee: {
          employeeid: user.id,
        },

        leaveType: formData.leaveType,

        leaveStartDate: formData.leaveStartDate,

        leaveEndDate: formData.leaveEndDate,
      });

      setMessage("Leave request submitted successfully");

      setFormData({
        leaveType: "CASUAL",
        leaveStartDate: "",
        leaveEndDate: "",
      });

      loadLeaves();
    } catch (error) {
      console.error(error);

      setMessage("Unable to submit leave request");
    }
  };

  const handleCancelLeave = async (leaveId) => {
    try {
      await cancelLeave(leaveId);

      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Leave Management</h2>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5>Apply Leave</h5>

          <form onSubmit={handleApplyLeave}>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Leave Type</label>

                <select
                  className="form-control"
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                >
                  <option value="CASUAL">Casual</option>

                  <option value="SICK">Sick</option>

                  <option value="EARNED">Earned</option>

                  <option value="OPTIONAL_HOLIDAY">Optional Holiday</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Start Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="leaveStartDate"
                  value={formData.leaveStartDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">End Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="leaveEndDate"
                  value={formData.leaveEndDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Apply Leave
            </button>
          </form>

          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>My Leave Requests</h5>

          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Days</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {leaves.length > 0 ? (
                leaves.map((leave) => (
                  <tr key={leave.leaveId}>
                    <td>{leave.leaveId}</td>

                    <td>{leave.leaveType}</td>

                    <td>{leave.leaveStartDate}</td>

                    <td>{leave.leaveEndDate}</td>

                    <td>{leave.leaveDays}</td>

                    <td>{leave.approvalStatus}</td>

                    <td>
                      {leave.approvalStatus !== "APPROVED" && (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleCancelLeave(leave.leaveId)}
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No Leave Requests Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLeave;
