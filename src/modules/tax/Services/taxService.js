import axiosClient from "../../../api/axiosClient";

export const getAllTaxSlabs = async () => {
  return await axiosClient.get("/getalltaxslabs");
};

export const getTaxSlabById = async (taxId) => {
  return await axiosClient.get(`/gettaxslab/${taxId}`);
};

export const saveTaxSlab = async (data) => {
  return await axiosClient.post("/savetaxslab", data);
};

export const updateTaxSlab = async (taxId, data) => {
  return await axiosClient.put(
    `/updatetaxslab/${taxId}`,
    data
  );
};

export const deleteTaxSlab = async (taxId) => {
  return await axiosClient.delete(
    `/deletetaxslab/${taxId}`
  );
};