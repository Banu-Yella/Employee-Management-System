import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getEmployeeById } from "../services/employeeService";

function EmployeeProfile() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?.id) {
        navigate("/login");
        return;
      }

      const response = await getEmployeeById(user.id);

      setEmployee(response.data);
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h4>Loading Profile...</h4>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="container-fluid p-4">
        <h4>Employee Profile Not Found</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Profile</h2>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/employee")}
        >
          Back
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Employee Information</h5>

          <hr />

          <p>
            <strong>Employee ID :</strong> {employee.employeeid || "N/A"}
          </p>

          <p>
            <strong>Employee Code :</strong> {employee.employeeCode || "N/A"}
          </p>

          <p>
            <strong>Name :</strong> {employee.employeename || "N/A"}
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

          <p>
            <strong>Employment Type :</strong>{" "}
            {employee.employmentType || "N/A"}
          </p>

          <p>
            <strong>Employment Status :</strong>{" "}
            {employee.employmentStatus || "N/A"}
          </p>

          <p>
            <strong>Phone Number :</strong> {employee.phonenumber || "N/A"}
          </p>

          <p>
            <strong>Company Email :</strong> {employee.companyemail || "N/A"}
          </p>

          <p>
            <strong>Work Location :</strong> {employee.workLocation || "N/A"}
          </p>

          <p>
            <strong>Joining Date :</strong> {employee.joiningDate || "N/A"}
          </p>

          <p>
            <strong>Resignation Date :</strong>{" "}
            {employee.resignationDate || "N/A"}
          </p>

          <p>
            <strong>Manager :</strong>{" "}
            {employee.manager?.employeename || "Not Assigned"}
          </p>

          <p>
            <strong>Shift :</strong>{" "}
            {employee.shift?.shiftName || "Not Assigned"}
          </p>

          <p>
            <strong>Created At :</strong> {employee.createdAt || "N/A"}
          </p>

          <p>
            <strong>Updated At :</strong> {employee.updatedAt || "N/A"}
          </p>

          <div className="mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate("/employee/change-password")}
            >
              Change Password
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/employee")}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
