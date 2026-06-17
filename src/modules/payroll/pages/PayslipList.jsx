import { useEffect, useState } from "react";

import {
  getAllPayslips,
  approvePayslip,
  markPayslipPaid,
} from "../services/payslipService";

function PayslipList() {
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    loadPayslips();
  }, []);

  const loadPayslips = async () => {
    try {
      const response = await getAllPayslips();
      setPayslips(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (id) => {
    await approvePayslip(id, 1);
    loadPayslips();
  };

  const handlePaid = async (id) => {
    await markPayslipPaid(id);
    loadPayslips();
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Payslip Management</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Year</th>
            <th>Month</th>
            <th>Net Pay</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {payslips.map((p) => (
            <tr key={p.payslipId}>
              <td>{p.payslipId}</td>

              <td>{p.employee?.employeename}</td>

              <td>{p.year}</td>

              <td>{p.month}</td>

              <td>{p.netPay}</td>

              <td>{p.status}</td>

              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(p.payslipId)}
                >
                  Approve
                </button>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handlePaid(p.payslipId)}
                >
                  Mark Paid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayslipList;
