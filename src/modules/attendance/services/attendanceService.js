import axios from "axios";

const API_URL =
  "http://localhost:8080/api/employee-management";

export const getAllAttendance = () =>
  axios.get(`${API_URL}/getallattendance`);

export const getAttendanceByEmployee = (
  employeeId,
  year,
  month
) =>
  axios.get(
    `${API_URL}/getemployeeattendance/${employeeId}/${year}/${month}`
  );

export const getAttendanceById = (
  attendanceId
) =>
  axios.get(
    `${API_URL}/getattendance/${attendanceId}`
  );