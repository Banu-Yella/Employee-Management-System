import axiosClient from "../../../api/axiosClient";

const isNetworkFailure = (error) =>
  error?.code === "ECONNREFUSED" ||
  error?.message?.includes("ECONNREFUSED") ||
  error?.message?.includes("ERR_CONNECTION_REFUSED") ||
  error?.message?.includes("502") ||
  error?.response?.status === 502;

const mockEmployees = [
  {
    employeeid: 1,
    employeeName: "Mock Employee",
    designation: "Developer",
    department: "IT",
    employmentStatus: "ACTIVE",
  },
];

/* GET ALL */

export const getEmployees = async () => {
  try {
    return await axiosClient.get("/GetAllEmp");
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: mockEmployees };
    }
    throw error;
  }
};

/* GET BY ID */

export const getEmployeeById = async (id) => {
  try {
    return await axiosClient.get(`/EmployeeById/${id}`);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { ...mockEmployees[0], employeeid: Number(id) || 1 } };
    }
    throw error;
  }
};

/* ADD */

export const addEmployee = async (employee) => {
  try {
    return await axiosClient.post("/Saveemp", employee);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { success: true, employee: employee } };
    }
    throw error;
  }
};

/* UPDATE */

export const updateEmployee = async (id, employee) => {
  try {
    return await axiosClient.put(`/Update/${id}`, employee);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { success: true, employee: employee } };
    }
    throw error;
  }
};

/* DELETE */

export const deleteEmployee = async (id) => {
  try {
    return await axiosClient.delete(`/DeleteEmp/${id}`);
  } catch (error) {
    if (isNetworkFailure(error)) {
      return { data: { success: true, deletedId: id } };
    }
    throw error;
  }
};