import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/employee-management",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;