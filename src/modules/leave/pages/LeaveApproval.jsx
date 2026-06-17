import { useEffect, useState } from "react";
import {
  getAllLeaves,
  teamLeadApproveLeave,
  managerApproveLeave,
  hrApproveLeave,
  finalApproveLeave,
  rejectLeave,
  cancelLeave,
} from "../services/leaveService";

function LeaveApproval() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const approverId = user?.id;

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    try {
      const response = await getAllLeaves();
      setLeaves(response.data || []);
    } catch (error) {
      console.error("Error loading leaves:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTeamLeadApprove = async (leaveId) => {
    try {
      await teamLeadApproveLeave(leaveId, approverId);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  const handleManagerApprove = async (leaveId) => {
    try {
      await managerApproveLeave(leaveId, approverId);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  const handleHrApprove = async (leaveId) => {
    try {
      await hrApproveLeave(leaveId, approverId);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFinalApprove = async (leaveId) => {
    try {
      await finalApproveLeave(leaveId);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (leaveId) => {
    const reason = prompt("Enter rejection reason");

    if (!reason) return;

    try {
      await rejectLeave(leaveId, approverId, reason);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = async (leaveId) => {
    if (!window.confirm("Cancel this leave?")) {
      return;
    }

    try {
      await cancelLeave(leaveId);
      loadLeaves();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h4>Loading Leave Requests...</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2>Leave Approval Management</h2>

          <hr />

          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Days</th>
                  <th>Status</th>
                  <th width="450">Actions</th>
                </tr>
              </thead>

              <tbody>
                {leaves.length > 0 ? (
                  leaves.map((leave) => (
                    <tr key={leave.leaveId}>
                      <td>{leave.leaveId}</td>

                      <td>{leave.employeeName}</td>

                      <td>{leave.department}</td>

                      <td>{leave.leaveType}</td>

                      <td>{leave.leaveStartDate}</td>

                      <td>{leave.leaveEndDate}</td>

                      <td>{leave.leaveDays}</td>

                      <td>
                        <span className="badge bg-info">
                          {leave.approvalStatus}
                        </span>
                      </td>

                      <td>
                        <button
                          className="btn btn-primary btn-sm me-1"
                          onClick={() => handleTeamLeadApprove(leave.leaveId)}
                        >
                          Team Lead
                        </button>

                        <button
                          className="btn btn-warning btn-sm me-1"
                          onClick={() => handleManagerApprove(leave.leaveId)}
                        >
                          Manager
                        </button>

                        <button
                          className="btn btn-info btn-sm me-1"
                          onClick={() => handleHrApprove(leave.leaveId)}
                        >
                          HR
                        </button>

                        <button
                          className="btn btn-success btn-sm me-1"
                          onClick={() => handleFinalApprove(leave.leaveId)}
                        >
                          Final
                        </button>

                        <button
                          className="btn btn-danger btn-sm me-1"
                          onClick={() => handleReject(leave.leaveId)}
                        >
                          Reject
                        </button>

                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleCancel(leave.leaveId)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No Leave Requests Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveApproval;
