import axiosClient from "../../../api/axiosClient";

export const getAllSalaryStructures = async () => {
  return await axiosClient.get("/getallsalarystructures");
};

export const getSalaryStructureByEmployee = async (
  employeeId
) => {
  return await axiosClient.get(
    `/getsalarystructure/${employeeId}`
  );
};

export const saveSalaryStructure = async (data) => {
  return await axiosClient.post(
    "/savesalarystructure",
    data
  );
};

export const deleteSalaryStructure = async (
  salaryStructureId
) => {
  return await axiosClient.delete(
    `/deletesalarystructure/${salaryStructureId}`
  );
};