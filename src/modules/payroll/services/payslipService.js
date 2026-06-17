import axiosClient from "../../../api/axiosClient";

export const getAllPayslips = () => {
  return axiosClient.get("/getallpayslips");
};

export const getEmployeePayslips = (employeeId) => {
  return axiosClient.get(
    `/getemployeepayslips/${employeeId}`
  );
};

export const generatePayslip = (
  employeeId,
  year,
  month
) => {
  return axiosClient.post(
    `/generatepayslip/${employeeId}/${year}/${month}`
  );
};

export const approvePayslip = (
  payslipId,
  approvedById
) => {
  return axiosClient.put(
    `/approvepayslip/${payslipId}/${approvedById}`
  );
};

export const markPayslipPaid = (payslipId) => {
  return axiosClient.put(
    `/markpayslippaid/${payslipId}`
  );
};

export const deletePayslip = (payslipId) => {
  return axiosClient.delete(
    `/deletepayslip/${payslipId}`
  );
};