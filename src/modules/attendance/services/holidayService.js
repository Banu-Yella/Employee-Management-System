import axiosClient from "../../../api/axiosClient";

export const getAllHolidays = async () => {
  return await axiosClient.get("/getallpublicholidays");
};

export const getHolidayById = async (id) => {
  return await axiosClient.get(`/getpublicholiday/${id}`);
};

export const saveHoliday = async (data) => {
  return await axiosClient.post("/savepublicholiday", data);
};

export const updateHoliday = async (id, data) => {
  return await axiosClient.put(`/updatepublicholiday/${id}`, data);
};

export const deleteHoliday = async (id) => {
  return await axiosClient.delete(`/deletepublicholiday/${id}`);
};