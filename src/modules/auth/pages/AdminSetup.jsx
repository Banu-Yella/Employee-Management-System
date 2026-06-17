import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEmployee, saveLogin } from "../services/setupService";
import { employeeLogin } from "../services/authService";

function AdminSetup({ onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetup = async () => {
    try {
      setError("");
      setSuccess("");

      if (
        !formData.employeeName ||
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("All fields are required");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      setLoading(true);

      // STEP 1 - Create Employee

      const employeeResponse = await saveEmployee({
        employeename: formData.employeeName,
        role: "ADMIN",
        designation: "MANAGER",
        department: "ADMIN",
        employmentType: "FULL_TIME",
        employmentStatus: "ACTIVE",
        workLocation: "Head Office",
      });

      const employeeId = employeeResponse.data.employeeid;

      if (!employeeId) {
        throw new Error("Employee ID not returned from backend");
      }

      // STEP 2 - Create Login

      await saveLogin({
        employee: {
          employeeid: employeeId,
        },
        username: formData.username,
        passwordHash: formData.password,
        role: "ADMIN",
        status: "ACTIVE",
      });

      // STEP 3 - Auto Login

      const loginResponse = await employeeLogin({
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("user", JSON.stringify(loginResponse.data));

      setSuccess("Admin account created successfully");

      setTimeout(() => {
        if (onClose) {
          onClose();
        }

        navigate("/admin");
      }, 1000);
    } catch (err) {
      console.error(err);

      if (
        err.code === "ECONNREFUSED" ||
        err.message?.includes("ECONNREFUSED")
      ) {
        setError(
          "Backend server is not running on http://127.0.0.1:8080. Start the backend first.",
        );
      } else if (err.response) {
        setError(
          err.response.data.message ||
            err.response.data.error ||
            "Admin setup failed",
        );
      } else {
        setError(err.message || "Admin setup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-setup-card">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">System Admin Setup</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Employee Name"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          className="btn btn-success w-100"
          onClick={handleSetup}
          disabled={loading}
        >
          {loading ? "Creating Admin..." : "Create Admin"}
        </button>

        <button
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          Cancel
        </button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {success && <div className="alert alert-success mt-3">{success}</div>}
      </div>
    </div>
  );
}

export default AdminSetup;
