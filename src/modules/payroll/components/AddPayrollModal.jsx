import { useEffect, useState } from "react";

import { savePayroll } from "../services/payrollService";

import { getEmployees } from "../../employee/services/employeeService";

import { getAllTaxSlabs } from "../../tax/services/taxService";

function AddPayrollModal({ onClose, onSuccess }) {
  const [employees, setEmployees] = useState([]);

  const [taxSlabs, setTaxSlabs] = useState([]);

  const [payroll, setPayroll] = useState({
    employeeId: "",
    taxId: "",
    basicSalary: "",
    hra: "",
    allowances: "",
    bonus: "",
    deductions: "",
    pf: "",
    esi: "",
    professionalTax: "",
    incomeTax: "",
    payrollMonth: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const empResponse = await getEmployees();

    const taxResponse = await getAllTaxSlabs();

    setEmployees(empResponse.data || []);

    setTaxSlabs(taxResponse.data || []);
  };

  const handleChange = (e) => {
    setPayroll({
      ...payroll,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      employee: {
        employeeid: Number(payroll.employeeId),
      },

      taxSlab: {
        taxid: Number(payroll.taxId),
      },

      basicSalary: Number(payroll.basicSalary),

      hra: Number(payroll.hra),

      allowances: Number(payroll.allowances),

      bonus: Number(payroll.bonus),

      deductions: Number(payroll.deductions),

      pf: Number(payroll.pf),

      esi: Number(payroll.esi),

      professionalTax: Number(payroll.professionalTax),

      incomeTax: Number(payroll.incomeTax),

      payrollMonth: payroll.payrollMonth,
    };

    try {
      await savePayroll(payload);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Payroll save failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h4>Create Payroll</h4>

          <button className="btn-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <select
            className="form-control mb-2"
            name="employeeId"
            value={payroll.employeeId}
            onChange={handleChange}
            required
          >
            <option value="">Select Employee</option>

            {employees.map((emp) => (
              <option key={emp.employeeid} value={emp.employeeid}>
                {emp.employeename}
              </option>
            ))}
          </select>

          <select
            className="form-control mb-2"
            name="taxId"
            value={payroll.taxId}
            onChange={handleChange}
            required
          >
            <option value="">Select Tax Slab</option>

            {taxSlabs.map((tax) => (
              <option key={tax.taxid} value={tax.taxid}>
                {tax.slabName}
              </option>
            ))}
          </select>

          <input
            className="form-control mb-2"
            placeholder="Basic Salary"
            name="basicSalary"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="HRA"
            name="hra"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Allowances"
            name="allowances"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Bonus"
            name="bonus"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Deductions"
            name="deductions"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="PF"
            name="pf"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="ESI"
            name="esi"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Professional Tax"
            name="professionalTax"
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Income Tax"
            name="incomeTax"
            onChange={handleChange}
          />

          <input
            type="date"
            className="form-control mb-3"
            name="payrollMonth"
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">Save Payroll</button>
        </form>
      </div>
    </div>
  );
}

export default AddPayrollModal;
