import { useEffect, useState } from "react";

import { getEmployeePayslips } from "../../payroll/services/payslipService";

function EmployeePayslips() {
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    loadPayslips();
  }, []);

  const loadPayslips = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await getEmployeePayslips(user.employeeId);

      setPayslips(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <h2>My Payslips</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Net Pay</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payslips.map((p) => (
            <tr key={p.payslipId}>
              <td>{p.year}</td>

              <td>{p.month}</td>

              <td>{p.netPay}</td>

              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePayslips;
