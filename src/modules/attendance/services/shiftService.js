import axiosClient from "../../../api/axiosClient";

export const getAllShifts = () =>
  axiosClient.get("/getallshifts");

export const getShiftById = (id) =>
  axiosClient.get(`/getshift/${id}`);

export const saveShift = (data) =>
  axiosClient.post("/saveshift", data);

export const updateShift = (id, data) =>
  axiosClient.put(`/updateshift/${id}`, data);

export const deleteShift = (id) =>
  axiosClient.delete(`/deleteshift/${id}`);