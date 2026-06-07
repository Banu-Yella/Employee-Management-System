import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { getEmployeeById, updateEmployee } from "../services/employeeService";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const response = await getEmployeeById(id);

    setEmployee(response.data);
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateEmployee(id, employee);

    navigate("/admin/employees");
  };

  return (
    <div className="employee-container">
      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="employeeName"
          value={employee.employeeName || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="role"
          value={employee.role || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="designation"
          value={employee.designation || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="department"
          value={employee.department || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="employmentType"
          value={employee.employmentType || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="employmentStatus"
          value={employee.employmentStatus || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="workLocation"
          value={employee.workLocation || ""}
          onChange={handleChange}
        />

        <button className="btn btn-success">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
