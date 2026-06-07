import axiosClient from "../../../api/axiosClient";

export const employeeLogin = (data) => {
    return axiosClient.post(
        "/employee/login",
        data
    );
};

export const userLogin = (data) => {
    return axiosClient.post(
        "/user/login",
        data
    );
};