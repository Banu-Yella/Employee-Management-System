import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getEmployeeById } from "../services/employeeService";

function EmployeeDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const response = await getEmployeeById(id);

      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!employee) return <h3>Loading...</h3>;

  return (
    <div className="employee-container">
      <h2>Employee Details</h2>

      <div className="employee-details-card">
        <p>
          <strong>ID:</strong> {employee.employeeid}
        </p>

        <p>
          <strong>Name:</strong> {employee.employeeName}
        </p>

        <p>
          <strong>Role:</strong> {employee.role}
        </p>

        <p>
          <strong>Designation:</strong> {employee.designation}
        </p>

        <p>
          <strong>Department:</strong> {employee.department}
        </p>

        <p>
          <strong>Joining Date:</strong> {employee.joiningDate}
        </p>

        <p>
          <strong>Employment Type:</strong> {employee.employmentType}
        </p>

        <p>
          <strong>Status:</strong> {employee.employmentStatus}
        </p>

        <p>
          <strong>Location:</strong> {employee.workLocation}
        </p>
      </div>

      <button
        className="btn btn-primary me-2"
        onClick={() => navigate(`/admin/employees/edit/${id}`)}
      >
        Edit Employee
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => navigate("/admin/employees")}
      >
        Back
      </button>
    </div>
  );
}

export default EmployeeDetails;
