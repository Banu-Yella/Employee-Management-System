import axiosClient from "../../../api/axiosClient";

export const getAllWeekOffs = async () => {
  return await axiosClient.get("/getallempweekoffs");
};

export const deleteWeekOff = async (id) => {
  return await axiosClient.delete(`/deleteempweekoff/${id}`);
};