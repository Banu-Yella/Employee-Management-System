import { useEffect, useState } from "react";

import AddPayrollModal from "../components/AddPayrollModal";

import {
  getAllPayrolls,
  approvePayroll,
  deletePayroll,
} from "../services/payrollService";

function PayrollList() {
  const [payrolls, setPayrolls] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadPayrolls();
  }, []);

  const loadPayrolls = async () => {
    const response = await getAllPayrolls();

    setPayrolls(response.data || []);
  };

  const handleApprove = async (payrollId) => {
    await approvePayroll(payrollId, 1);

    loadPayrolls();
  };

  const handleDelete = async (payrollId) => {
    if (!window.confirm("Delete payroll?")) return;

    await deletePayroll(payrollId);

    loadPayrolls();
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Payroll Management</h2>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Create Payroll
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Gross</th>
            <th>Net</th>
            <th>Status</th>
            <th>Month</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {payrolls.length > 0 ? (
            payrolls.map((payroll) => (
              <tr key={payroll.payrollId}>
                <td>{payroll.payrollId}</td>

                <td>{payroll.employee?.employeename}</td>

                <td>₹{payroll.grossSalary}</td>

                <td>₹{payroll.netSalary}</td>

                <td>{payroll.status}</td>

                <td>{payroll.payrollMonth}</td>

                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleApprove(payroll.payrollId)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(payroll.payrollId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No Payroll Records
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <AddPayrollModal
          onClose={() => setShowModal(false)}
          onSuccess={loadPayrolls}
        />
      )}
    </div>
  );
}

export default PayrollList;
