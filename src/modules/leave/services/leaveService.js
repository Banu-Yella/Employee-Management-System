import axiosClient from "../../../api/axiosClient";

export const getAllLeaves = async () => {
  return await axiosClient.get("/getallleaves");
};

export const getEmployeeLeaves = async (employeeId) => {
  return await axiosClient.get(
    `/getemployeeleaves/${employeeId}`
  );
};

export const applyLeave = async (data) => {
  return await axiosClient.post(
    "/saveleave",
    data
  );
};

export const cancelLeave = async (leaveId) => {
  return await axiosClient.put(
    `/cancelleave/${leaveId}`
  );
};

export const finalApproveLeave = async (leaveId) => {
  return await axiosClient.put(
    `/approveleave/${leaveId}`
  );
};

export const rejectLeave = async (
  leaveId,
  rejectedById,
  reason
) => {
  return await axiosClient.put(
    `/rejectleave/${leaveId}/${rejectedById}`,
    reason
  );
};

export const sendToManager = async (leaveId) => {
  return await axiosClient.put(
    `/sendleavetomanager/${leaveId}`
  );
};

export const sendToHr = async (leaveId) => {
  return await axiosClient.put(
    `/sendleavetohr/${leaveId}`
  );
};

export const approveByTeamLead = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/teamleadreviewleave/${leaveId}/${approverId}`
  );
};

export const approveByManager = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/managerreviewleave/${leaveId}/${approverId}`
  );
};

export const approveByHr = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/hrreviewleave/${leaveId}/${approverId}`
  );
};

export const hrApproveLeave = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/hrreviewleave/${leaveId}/${approverId}`
  );
};

export const teamLeadApproveLeave = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/teamleadreviewleave/${leaveId}/${approverId}`
  );
};

export const managerApproveLeave = async (
  leaveId,
  approverId
) => {
  return await axiosClient.put(
    `/managerreviewleave/${leaveId}/${approverId}`
  );
};


