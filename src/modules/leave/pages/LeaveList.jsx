import { useEffect, useState } from "react";

import {
  getAllLeaves,
  teamLeadApproveLeave,
  sendToManager,
  managerApproveLeave,
  sendToHr,
  hrApproveLeave,
  finalApproveLeave,
  cancelLeave,
  rejectLeave,
} from "../services/leaveService";
function LeaveList() {
  const [leaves, setLeaves] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const [rejectReason, setRejectReason] = useState("");

  const [selectedLeaveId, setSelectedLeaveId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    try {
      const response = await getAllLeaves();

      setLeaves(response.data || []);
    } catch (error) {
      console.error("Error loading leaves", error);
    }
  };
  const adminId = Number(sessionStorage.getItem("employeeId"));

  const handleTeamLeadApprove = async (leaveId) => {
    try {
      await teamLeadApproveLeave(leaveId, adminId);

      await sendToManager(leaveId);

      await loadLeaves();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to approve leave");
    }
  };

  const handleManagerApprove = async (leaveId) => {
    try {
      await managerApproveLeave(leaveId, adminId);

      await sendToHr(leaveId);

      await loadLeaves();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to approve leave");
    }
  };

  const handleHrApprove = async (leaveId) => {
    try {
      await hrApproveLeave(leaveId, adminId);

      await loadLeaves();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to approve leave");
    }
  };

  const handleFinalApprove = async (leaveId) => {
    try {
      await finalApproveLeave(leaveId);

      await loadLeaves();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to approve leave");
    }
  };

  const handleCancelLeave = async (leaveId) => {
    const confirmCancel = window.confirm("Cancel this leave?");

    if (!confirmCancel) {
      return;
    }

    try {
      await cancelLeave(leaveId);

      await loadLeaves();
    } catch (error) {
      console.error("Cancel Error:", error);

      console.log("Response Data:", error.response?.data);
      console.log("Status:", error.response?.status);

      alert(JSON.stringify(error.response?.data) || "Failed to cancel leave");
    }
  };
  const handleRejectLeave = async () => {
    try {
      await rejectLeave(selectedLeaveId, adminId, rejectReason);

      setShowRejectModal(false);

      setRejectReason("");

      await loadLeaves();
    } catch (error) {
      console.error(error);

      alert(error?.response?.data?.message || "Failed to reject leave");
    }
  };
  const filteredLeaves = leaves.filter((leave) => {
    const employeeMatch =
      !search ||
      leave.employeeName?.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "ALL" || leave.approvalStatus === statusFilter;

    return employeeMatch && statusMatch;
  });

  const pendingCount = leaves.filter(
    (leave) =>
      leave.approvalStatus !== "APPROVED" &&
      leave.approvalStatus !== "REJECTED" &&
      leave.approvalStatus !== "CANCELLED",
  ).length;

  const approvedCount = leaves.filter(
    (leave) => leave.approvalStatus === "APPROVED",
  ).length;

  const rejectedCount = leaves.filter(
    (leave) => leave.approvalStatus === "REJECTED",
  ).length;
  const cancelledCount = leaves.filter(
    (leave) => leave.approvalStatus === "CANCELLED",
  ).length;
  return (
    <div className="container-fluid">
      <h2 className="mb-4">Leave Management</h2>

      {/* Summary Cards */}

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6>Total Leaves</h6>
              <h2>{leaves.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6>Pending</h6>
              <h2>{pendingCount}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6>Approved</h6>
              <h2>{approvedCount}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6>Rejected</h6>
              <h2>{rejectedCount}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search Employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6>Cancelled</h6>
              <h2>{cancelledCount}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All Status</option>

            <option value="PENDING_TEAM_LEAD">Pending Team Lead</option>

            <option value="PENDING_MANAGER">Pending Manager</option>

            <option value="PENDING_HR">Pending HR</option>

            <option value="APPROVED">Approved</option>

            <option value="REJECTED">Rejected</option>

            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Leave Table */}

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

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeaves.length > 0 ? (
              filteredLeaves.map((leave) => (
                <tr key={leave.leaveId}>
                  <td>{leave.employeeId}</td>

                  <td>{leave.employeeName}</td>

                  <td>{leave.department}</td>

                  <td>{leave.leaveType}</td>

                  <td>{leave.leaveStartDate}</td>

                  <td>{leave.leaveEndDate}</td>

                  <td>{leave.leaveDays}</td>

                  <td>
                    <span
                      className={`badge ${
                        leave.approvalStatus === "APPROVED"
                          ? "bg-success"
                          : leave.approvalStatus === "REJECTED"
                            ? "bg-danger"
                            : leave.approvalStatus === "CANCELLED"
                              ? "bg-secondary"
                              : "bg-warning text-dark"
                      }`}
                    >
                      {leave.approvalStatus}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => setSelectedLeave(leave)}
                    >
                      View
                    </button>
                    {leave.approvalStatus !== "APPROVED" &&
                      leave.approvalStatus !== "REJECTED" &&
                      leave.approvalStatus !== "CANCELLED" && (
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => {
                            setSelectedLeaveId(leave.leaveId);

                            setShowRejectModal(true);
                          }}
                        >
                          Reject
                        </button>
                      )}

                    {leave.approvalStatus === "PENDING_TEAM_LEAD" && (
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleTeamLeadApprove(leave.leaveId)}
                      >
                        Team Lead Approve
                      </button>
                    )}

                    {leave.approvalStatus === "PENDING_MANAGER" && (
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleManagerApprove(leave.leaveId)}
                      >
                        Manager Approve
                      </button>
                    )}

                    {leave.approvalStatus === "PENDING_HR" && (
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleHrApprove(leave.leaveId)}
                      >
                        HR Approve
                      </button>
                    )}

                    {leave.approvalStatus === "HR_REVIEWED" && (
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleFinalApprove(leave.leaveId)}
                      >
                        Final Approve
                      </button>
                    )}

                    {leave.approvalStatus === "APPROVED" && (
                      <button
                        className="btn btn-sm btn-warning"
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
                <td colSpan="9">No Leave Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Leave Details Modal */}

      {selectedLeave && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Leave Details</h5>

                <button
                  className="btn-close"
                  onClick={() => setSelectedLeave(null)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <strong>Employee Name</strong>
                    <p>{selectedLeave.employeeName}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Employee ID</strong>
                    <p>{selectedLeave.employeeId}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Department</strong>
                    <p>{selectedLeave.department}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Leave Type</strong>
                    <p>{selectedLeave.leaveType}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Start Date</strong>
                    <p>{selectedLeave.leaveStartDate}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>End Date</strong>
                    <p>{selectedLeave.leaveEndDate}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Leave Days</strong>
                    <p>{selectedLeave.leaveDays}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Status</strong>
                    <p>{selectedLeave.approvalStatus}</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedLeave(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaveList;
