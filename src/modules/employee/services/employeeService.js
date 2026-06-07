import axios from "axios";

const API_URL =
  "http://localhost:8080/api/employee-management";

/* GET ALL */

export const getEmployees = () =>
  axios.get(`${API_URL}/GetAllEmp`);

/* GET BY ID */

export const getEmployeeById = (id) =>
  axios.get(`${API_URL}/EmployeeById/${id}`);

/* ADD */

export const addEmployee = (employee) =>
  axios.post(`${API_URL}/Saveemp`, employee);

/* UPDATE */

export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/Update/${id}`, employee);

/* DELETE */

export const deleteEmployee = (id) =>
  axios.delete(`${API_URL}/DeleteEmp/${id}`);