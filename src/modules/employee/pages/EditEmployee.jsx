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
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={employee.employeeName || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            value={employee.role || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={employee.designation || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={employee.department || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employment Type</label>
          <input
            type="text"
            className="form-control"
            name="employmentType"
            value={employee.employmentType || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employment Status</label>
          <input
            type="text"
            className="form-control"
            name="employmentStatus"
            value={employee.employmentStatus || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Work Location</label>
          <input
            type="text"
            className="form-control"
            name="workLocation"
            value={employee.workLocation || ""}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
