import axiosClient from "../../../api/axiosClient";

export const saveEmployee = (data) => {
  return axiosClient.post("/Saveemp", data);
};

export const saveLogin = (data) => {
  return axiosClient.post("/savelogin", data);
};