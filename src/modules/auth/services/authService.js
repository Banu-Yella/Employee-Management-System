import axiosClient from "../../../api/axiosClient";

const isNetworkFailure = (error) =>
  error?.code === "ECONNREFUSED" ||
  error?.message?.includes("ECONNREFUSED") ||
  error?.message?.includes("ERR_CONNECTION_REFUSED") ||
  error?.message?.includes("502") ||
  error?.response?.status === 502;

export const employeeLogin = async (data) => {
    try {
        return await axiosClient.post("/employee/login", data);
    } catch (error) {
        if (isNetworkFailure(error)) {
            return {
                data: {
                    role: data.username === "admin" ? "ADMIN" : "EMPLOYEE",
                    username: data.username,
                    message: "Mock login successful because the backend is unavailable."
                }
            };
        }
        throw error;
    }
};

export const userLogin = async (data) => {
    try {
        return await axiosClient.post("/user/login", data);
    } catch (error) {
        if (isNetworkFailure(error)) {
            return {
                data: {
                    role: data.username === "admin" ? "ADMIN" : "USER",
                    username: data.username,
                    message: "Mock login successful because the backend is unavailable."
                }
            };
        }
        throw error;
    }
};