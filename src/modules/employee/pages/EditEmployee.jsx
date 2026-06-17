import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getEmployeeById, updateEmployee } from "../services/employeeService";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    loadEmployee();
  }, [id]);

  const loadEmployee = async () => {
    try {
      const response = await getEmployeeById(id);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error loading employee:", error);
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
      await updateEmployee(id, employee);

      alert("Employee updated successfully");

      navigate("/admin/employees");
    } catch (error) {
      console.error(error);
      alert("Failed to update employee");
    }
  };

  return (
    <div className="employee-container">
      <h2 className="mb-4">Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        {/* Employee Name */}

        <div className="mb-3">
          <label className="form-label">Employee Name</label>

          <input
            type="text"
            className="form-control"
            name="employeename"
            value={employee.employeename || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role */}

        <div className="mb-3">
          <label className="form-label">Role</label>

          <select
            className="form-control"
            name="role"
            value={employee.role || ""}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="HR">HR</option>
            <option value="MANAGER">Manager</option>
            <option value="TEAM_LEAD">Team Lead</option>
            <option value="EMPLOYEE">Employee</option>
            <option value="PROJECT_MANAGER">Project Manager</option>
            <option value="RECRUITMENT_LEAD">Recruitment Lead</option>
            <option value="TEACHER_TRAINER">Teacher Trainer</option>
            <option value="FINANCE">Finance</option>
            <option value="PAYROLL_ADMIN">Payroll Admin</option>
          </select>
        </div>

        {/* Designation */}

        <div className="mb-3">
          <label className="form-label">Designation</label>

          <select
            className="form-control"
            name="designation"
            value={employee.designation || ""}
            onChange={handleChange}
          >
            <option value="">Select Designation</option>
            <option value="INTERN">Intern</option>
            <option value="TRAINEE">Trainee</option>
            <option value="ASSOCIATE">Associate</option>
            <option value="SENIOR_ASSOCIATE">Senior Associate</option>
            <option value="SME">SME</option>
            <option value="TRAINER">Trainer</option>
            <option value="TEAM_LEAD">Team Lead</option>
            <option value="ASSISTANT_MANAGER">Assistant Manager</option>
            <option value="MANAGER">Manager</option>
            <option value="SENIOR_MANAGER">Senior Manager</option>
            <option value="DIRECTOR">Director</option>
            <option value="VICE_PRESIDENT">Vice President</option>
            <option value="C_LEVEL_EXECUTIVE">C Level Executive</option>
            <option value="CEO">CEO</option>
            <option value="MANAGING_DIRECTOR">Managing Director</option>
            <option value="CHAIRMAN">Chairman</option>
          </select>
        </div>

        {/* Department */}

        <div className="mb-3">
          <label className="form-label">Department</label>

          <select
            className="form-control"
            name="department"
            value={employee.department || ""}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="SALES">Sales</option>
            <option value="CUSTOMER_SERVICE">Customer Service</option>
            <option value="SOFTWARE">Software</option>
            <option value="FINANCE">Finance</option>
            <option value="OPERATIONS">Operations</option>
            <option value="RECRUITMENT">Recruitment</option>
            <option value="TRAINING">Training</option>
            <option value="ADMIN">Admin</option>
            <option value="MANAGEMENT">Management</option>
          </select>
        </div>

        {/* Employment Type */}

        <div className="mb-3">
          <label className="form-label">Employment Type</label>

          <select
            className="form-control"
            name="employmentType"
            value={employee.employmentType || ""}
            onChange={handleChange}
          >
            <option value="">Select Employment Type</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="CONTRACT">Contract</option>
            <option value="INTERN">Intern</option>
            <option value="FREELANCER">Freelancer</option>
          </select>
        </div>

        {/* Employment Status */}

        <div className="mb-3">
          <label className="form-label">Employment Status</label>

          <select
            className="form-control"
            name="employmentStatus"
            value={employee.employmentStatus || ""}
            onChange={handleChange}
          >
            <option value="ACTIVE">Active</option>
            <option value="NOTICE_PERIOD">Notice Period</option>
            <option value="RESIGNED">Resigned</option>
            <option value="TERMINATED">Terminated</option>
            <option value="ABSCONDED">Absconded</option>
          </select>
        </div>

        {/* Work Location */}

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

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Update Employee
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/employees")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
