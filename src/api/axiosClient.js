import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const axiosClient = axios.create({
    baseURL: `${API_BASE_URL}/api/employee-management`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;