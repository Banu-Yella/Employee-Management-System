import axiosClient from "../../../api/axiosClient";

export const getAllTaxSlabs = async () => {
  return await axiosClient.get("/getalltaxslabs");
};

export const getTaxSlabById = async (id) => {
  return await axiosClient.get(`/gettaxslab/${id}`);
};

export const saveTaxSlab = async (data) => {
  return await axiosClient.post("/savetaxslab", data);
};

export const updateTaxSlab = async (id, data) => {
  return await axiosClient.put(
    `/updatetaxslab/${id}`,
    data
  );
};

export const deleteTaxSlab = async (id) => {
  return await axiosClient.delete(
    `/deletetaxslab/${id}`
  );
};