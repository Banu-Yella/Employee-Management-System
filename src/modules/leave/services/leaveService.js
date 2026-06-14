import axiosClient from "../../../api/axiosClient";

export const getAllLeaves = () =>
  axiosClient.get("/getallleaves");

export const getLeaveById = (id) =>
  axiosClient.get(`/getleave/${id}`);

export const approveLeave = (id) =>
  axiosClient.put(`/approveleave/${id}`);

export const rejectLeave = (
  leaveId,
  rejectedById,
  rejectionReason
) =>
  axiosClient.put(
    `/rejectleave/${leaveId}/${rejectedById}`,
    rejectionReason
  );

export const teamLeadApproveLeave = (
  leaveId,
  approverId
) =>
  axiosClient.put(
    `/teamleadreviewleave/${leaveId}/${approverId}`
  );

export const sendToManager = (
  leaveId
) =>
  axiosClient.put(
    `/sendleavetomanager/${leaveId}`
  );

export const managerApproveLeave = (
  leaveId,
  approverId
) =>
  axiosClient.put(
    `/managerreviewleave/${leaveId}/${approverId}`
  );

export const sendToHr = (
  leaveId
) =>
  axiosClient.put(
    `/sendleavetohr/${leaveId}`
  );

export const hrApproveLeave = (
  leaveId,
  approverId
) =>
  axiosClient.put(
    `/hrreviewleave/${leaveId}/${approverId}`
  );

export const finalApproveLeave = (
  leaveId
) =>
  axiosClient.put(
    `/approveleave/${leaveId}`
  );

export const cancelLeave = (
  leaveId
) =>
  axiosClient.put(
    `/cancelleave/${leaveId}`
  );

  export const rejectLeave = (
  leaveId,
  rejectedById,
  reason
) =>
  axiosClient.put(
    `/rejectleave/${leaveId}/${rejectedById}`,
    reason,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );