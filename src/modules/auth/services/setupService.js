import axiosClient from "../../../api/axiosClient";

const isNetworkFailure = (error) =>
  error?.code === "ECONNREFUSED" ||
  error?.message?.includes("ECONNREFUSED") ||
  error?.message?.includes("ERR_CONNECTION_REFUSED") ||
  error?.message?.includes("502") ||
  error?.response?.status === 502;

export const saveEmployee = async (data) => {
  try {
    return await axiosClient.post("/Saveemp", data);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { employeeid: 999, message: "Mock employee created because backend is unavailable." } };
    }
    throw error;
  }
};

export const saveLogin = async (data) => {
  try {
    return await axiosClient.post("/savelogin", data);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { success: true, message: "Mock login created because backend is unavailable." } };
    }
    throw error;
  }
};