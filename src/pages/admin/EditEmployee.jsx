import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    employeeName: "",
    role: "",
    joiningDate: "",
    designation: "",
    department: "",
    employmentType: "",
    employmentStatus: "",
    workLocation: ""
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/EmployeeById/${id}`
      );

      setEmployee(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load employee");

    }

  };

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });

  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:8080/Update/${id}`,
        employee
      );

      alert("Employee Updated Successfully");

      navigate("/admin/employees");

    } catch (error) {

      console.error(error);

      alert("Failed to update employee");

    }

  };

  return (

    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-warning">

          <h3 className="mb-0">
            Edit Employee
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleUpdate}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Employee Name
                </label>

                <input
                  type="text"
                  name="employeeName"
                  value={employee.employeeName}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Role
                </label>

                <input
                  type="text"
                  name="role"
                  value={employee.role}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Joining Date
                </label>

                <input
                  type="date"
                  name="joiningDate"
                  value={employee.joiningDate}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={employee.designation}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Department
                </label>

                <input
                  type="text"
                  name="department"
                  value={employee.department}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Employment Type
                </label>

                <select
                  name="employmentType"
                  value={employee.employmentType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERN">Intern</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Employment Status
                </label>

                <select
                  name="employmentStatus"
                  value={employee.employmentStatus}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="RESIGNED">Resigned</option>
                  <option value="TERMINATED">Terminated</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Work Location
                </label>

                <input
                  type="text"
                  name="workLocation"
                  value={employee.workLocation}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-warning"
            >
              Update Employee
            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default EditEmployee;