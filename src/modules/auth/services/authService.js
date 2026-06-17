import axiosClient from "../../../api/axiosClient";

export const employeeLogin = async (data) => {
  return await axiosClient.post("/employee/login", data);
};

export const userLogin = async (data) => {
  return await axiosClient.post("/user/login", data);
};

export const changePassword = async (data) => {
  return await axiosClient.post(
    "/change-password",
    data
  );
};