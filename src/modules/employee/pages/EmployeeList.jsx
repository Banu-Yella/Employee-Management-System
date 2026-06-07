import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeModal from "../components/AddEmployeeModal";

import { getEmployees, deleteEmployee } from "../services/employeeService";

import "../styles/Employee.css";

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();

      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete Employee?");

    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);

      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.employeeName?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h2>Employee Management</h2>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Employee
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EmployeeTable
        employees={filteredEmployees}
        onView={(id) => navigate(`/admin/employees/view/${id}`)}
        onEdit={(id) => navigate(`/admin/employees/edit/${id}`)}
        onDelete={handleDelete}
      />

      {showModal && (
        <AddEmployeeModal
          onClose={() => setShowModal(false)}
          onSuccess={fetchEmployees}
        />
      )}
    </div>
  );
}

export default EmployeeList;
