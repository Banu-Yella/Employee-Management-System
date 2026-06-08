import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getEmployeeById } from "../services/employeeService";

function EmployeeDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

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

  if (!employee) {
    return (
      <div className="employee-container">
        <h3>Loading Employee Details...</h3>
      </div>
    );
  }

  return (
    <div className="employee-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Employee Details</h2>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/admin/employees")}
        >
          Back
        </button>
      </div>

      {/* Basic Information */}

      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0">Basic Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Employee ID :</strong> {employee.employeeid}
          </p>

          <p>
            <strong>Employee Name :</strong> {employee.employeeName}
          </p>

          <p>
            <strong>Department :</strong> {employee.department || "N/A"}
          </p>

          <p>
            <strong>Designation :</strong> {employee.designation || "N/A"}
          </p>

          <p>
            <strong>Role :</strong> {employee.role || "N/A"}
          </p>
        </div>
      </div>

      {/* Employment Information */}

      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0">Employment Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Employment Status :</strong>{" "}
            {employee.employmentStatus || "N/A"}
          </p>

          <p>
            <strong>Employment Type :</strong>{" "}
            {employee.employmentType || "N/A"}
          </p>

          <p>
            <strong>Joining Date :</strong> {employee.joiningDate || "N/A"}
          </p>

          <p>
            <strong>Resignation Date :</strong>{" "}
            {employee.resignationDate || "N/A"}
          </p>

          <p>
            <strong>Work Location :</strong> {employee.workLocation || "N/A"}
          </p>
        </div>
      </div>

      {/* Shift Information */}

      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0">Shift Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Assigned Shift :</strong>{" "}
            {employee.shift ? employee.shift.shiftName : "Not Assigned"}
          </p>
        </div>
      </div>

      {/* System Information */}

      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0">System Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Created At :</strong> {employee.createdAt || "N/A"}
          </p>

          <p>
            <strong>Last Updated :</strong> {employee.updatedAt || "N/A"}
          </p>
        </div>
      </div>

      {/* Actions */}

      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/admin/employees/edit/${id}`)}
        >
          Edit Employee
        </button>

        <button
          className="btn btn-info"
          onClick={() => navigate(`/admin/attendance/${id}`)}
        >
          View Attendance
        </button>

        <button
          className="btn btn-warning"
          onClick={() => navigate(`/admin/kyc`)}
        >
          View KYC
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetails;
