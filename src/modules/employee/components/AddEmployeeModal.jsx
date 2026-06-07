import { useState, useEffect } from "react";

import { addEmployee, getEmployees } from "../services/employeeService";

function AddEmployeeModal({ onClose, onSuccess }) {
  const [managers, setManagers] = useState([]);

  const [employee, setEmployee] = useState({
    employeeName: "",
    role: "",
    designation: "",
    department: "",
    joiningDate: "",
    employmentType: "",
    employmentStatus: "ACTIVE",
    workLocation: "",
    managerId: "",
  });

  useEffect(() => {
    loadManagers();
  }, []);

  const loadManagers = async () => {
    try {
      const response = await getEmployees();

      setManagers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        employeeName: employee.employeeName,

        role: employee.role,

        designation: employee.designation,

        department: employee.department,

        joiningDate: employee.joiningDate,

        employmentType: employee.employmentType,

        employmentStatus: employee.employmentStatus,

        workLocation: employee.workLocation,

        manager: employee.managerId
          ? {
              employeeid: parseInt(employee.managerId),
            }
          : null,
      };

      await addEmployee(payload);

      onSuccess();

      onClose();
    } catch (error) {
      console.error("Employee Save Error:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h3>Add Employee</h3>

          <button className="btn-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Employee Name"
            name="employeeName"
            value={employee.employeeName}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Role"
            name="role"
            value={employee.role}
            onChange={handleChange}
          />

          <select
            className="form-control mb-3"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          >
            <option value="">Select Designation</option>

            <option>Intern</option>

            <option>Associate</option>

            <option>Senior Associate</option>

            <option>SME</option>

            <option>Team Lead</option>

            <option>Manager</option>
          </select>

          <select
            className="form-control mb-3"
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>

            <option>IT</option>

            <option>HR</option>

            <option>Finance</option>

            <option>Operations</option>

            <option>Sales</option>

            <option>Recruitment</option>
          </select>

          <input
            type="date"
            className="form-control mb-3"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleChange}
          />

          <select
            className="form-control mb-3"
            name="employmentType"
            value={employee.employmentType}
            onChange={handleChange}
          >
            <option value="">Select Employment Type</option>

            <option>FULL_TIME</option>

            <option>PART_TIME</option>

            <option>CONTRACT</option>

            <option>INTERN</option>

            <option>WORK_FROM_HOME</option>
          </select>

          <select
            className="form-control mb-3"
            name="employmentStatus"
            value={employee.employmentStatus}
            onChange={handleChange}
          >
            <option>ACTIVE</option>

            <option>RESIGNED</option>

            <option>TERMINATED</option>

            <option>ABSCONDED</option>
          </select>

          <input
            className="form-control mb-3"
            placeholder="Work Location"
            name="workLocation"
            value={employee.workLocation}
            onChange={handleChange}
          />

          {/* Manager Dropdown */}

          <select
            className="form-control mb-3"
            name="managerId"
            value={employee.managerId}
            onChange={handleChange}
          >
            <option value="">Select Manager</option>

            {managers.map((manager) => (
              <option key={manager.employeeid} value={manager.employeeid}>
                {manager.employeeName}
              </option>
            ))}
          </select>

          <button className="btn btn-success w-100" type="submit">
            Save Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeModal;
