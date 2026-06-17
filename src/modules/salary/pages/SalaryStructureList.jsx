import { useEffect, useState } from "react";

import {
  getAllSalaryStructures,
  deleteSalaryStructure,
} from "../services/salaryStructureService";

import AddSalaryStructureModal from "../components/AddSalaryStructureModal";

function SalaryStructureList() {
  const [salaryStructures, setSalaryStructures] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadSalaryStructures();
  }, []);

  const loadSalaryStructures = async () => {
    try {
      const response = await getAllSalaryStructures();

      setSalaryStructures(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Salary Structure?")) {
      return;
    }

    await deleteSalaryStructure(id);

    loadSalaryStructures();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mb-3">
        <h2>Salary Structure Management</h2>

        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Salary Structure
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Basic</th>
            <th>HRA</th>
            <th>Allowance</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {salaryStructures.map((salary) => (
            <tr key={salary.salaryStructureId}>
              <td>{salary.salaryStructureId}</td>

              <td>{salary.employee?.employeename}</td>

              <td>{salary.basicSalary}</td>

              <td>{salary.hra}</td>

              <td>{salary.allowances}</td>

              <td>{salary.pf}</td>

              <td>{salary.esi}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(salary.salaryStructureId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <AddSalaryStructureModal
          onClose={() => setShowModal(false)}
          onSuccess={loadSalaryStructures}
        />
      )}
    </div>
  );
}

export default SalaryStructureList;
