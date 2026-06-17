import axiosClient from "../../../api/axiosClient";

export const getAllHolidays = async () => {
  return await axiosClient.get("/getallpublicholidays");
};

export const getHolidayById = async (id) => {
  return await axiosClient.get(`/getpublicholiday/${id}`);
};

export const saveHoliday = async (holiday) => {
  return await axiosClient.post(
    "/savepublicholiday",
    holiday
  );
};

export const updateHoliday = async (
  holidayId,
  holiday
) => {
  return await axiosClient.put(
    `/updatepublicholiday/${holidayId}`,
    holiday
  );
};

export const deleteHoliday = async (
  holidayId
) => {
  return await axiosClient.delete(
    `/deletepublicholiday/${holidayId}`
  );
};