import axiosClient from "../../../api/axiosClient";

const isNetworkFailure = (error) =>
  error?.code === "ECONNREFUSED" ||
  error?.message?.includes("ECONNREFUSED") ||
  error?.message?.includes("ERR_CONNECTION_REFUSED") ||
  error?.message?.includes("502") ||
  error?.response?.status === 502;

const mockAttendance = [
  { attendanceId: 1, employeeId: 1, status: "PRESENT", date: "2026-06-09" },
];

export const getAllAttendance = async () => {
  try {
    return await axiosClient.get("/getallattendance");
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: mockAttendance };
    }
    throw error;
  }
};

export const getAttendanceByEmployee = async (
  employeeId,
  year,
  month
) => {
  try {
    return await axiosClient.get(
      `/getemployeeattendance/${employeeId}/${year}/${month}`
    );
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: mockAttendance.filter((item) => item.employeeId === Number(employeeId)) };
    }
    throw error;
  }
};

export const getAttendanceById = async (
  attendanceId
) => {
  try {
    return await axiosClient.get(
      `/getattendance/${attendanceId}`
    );
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: mockAttendance.find((item) => item.attendanceId === Number(attendanceId)) || mockAttendance[0] };
    }
    throw error;
  }
};

export const getAttendanceSummary = async (
  employeeId
) => {
  try {
    return await axiosClient.get(
      `/attendance-summary/${employeeId}`
    );
  } catch (error) {
    if (isNetworkFailure(error)) {
      return {
        data: {
          workingDays: 22,
          presentDays: 20,
          leaveDays: 1,
          absentDays: 1,
          publicHolidays: 2,
          attendancePercentage: 95.45,
        },
      };
    }

    throw error;
  }
};

export const getEmployeeAttendanceSummary = async (
  employeeId
) => {
  return axiosClient.get(
    `/attendance-summary/${employeeId}`
  );
};