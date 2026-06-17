import { useEffect, useState } from "react";

import {
  getAllPayrolls,
  approvePayroll,
  deletePayroll,
} from "../services/payrollService";

import AddPayrollModal from "../components/AddPayrollModal";

function Payroll() {
  const [payrolls, setPayrolls] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadPayrolls();
  }, []);

  const loadPayrolls = async () => {
    try {
      const response = await getAllPayrolls();

      setPayrolls(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await approvePayroll(id, 1);

      loadPayrolls();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete payroll?")) return;

    await deletePayroll(id);

    loadPayrolls();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mb-3">
        <h2>Payroll Management</h2>

        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Generate Payroll
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Month</th>
            <th>Gross</th>
            <th>Net</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {payrolls.map((payroll) => (
            <tr key={payroll.payrollId}>
              <td>{payroll.payrollId}</td>

              <td>{payroll?.employee?.employeename}</td>

              <td>{payroll.payrollMonth}</td>

              <td>{payroll.grossSalary}</td>

              <td>{payroll.netSalary}</td>

              <td>{payroll.status}</td>

              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
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
          ))}
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

export default Payroll;
