import React, { useState } from "react";
import axios from "axios";

const AddEmployee = () => {

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

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/Saveemp",
        employee
      );

      console.log(response.data);

      alert("Employee Added Successfully");

      setEmployee({
        employeeName: "",
        role: "",
        joiningDate: "",
        designation: "",
        department: "",
        employmentType: "",
        employmentStatus: "",
        workLocation: ""
      });

    } catch (error) {

      console.error(error);

      alert("Error Adding Employee");

    }
  };

  return (

    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            Add Employee
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              {/* Employee Name */}

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
                  required
                />

              </div>

              {/* Role */}

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
                  required
                />

              </div>

              {/* Joining Date */}

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

              {/* Designation */}

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
                  required
                />

              </div>

              {/* Department */}

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
                  required
                />

              </div>

              {/* Employment Type */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Employment Type
                </label>

                <select
                  name="employmentType"
                  value={employee.employmentType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">
                    Select Employment Type
                  </option>

                  <option value="FULL_TIME">
                    Full Time
                  </option>

                  <option value="PART_TIME">
                    Part Time
                  </option>

                  <option value="CONTRACT">
                    Contract
                  </option>

                  <option value="INTERN">
                    Intern
                  </option>

                </select>

              </div>

              {/* Employment Status */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Employment Status
                </label>

                <select
                  name="employmentStatus"
                  value={employee.employmentStatus}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">
                    Select Status
                  </option>

                  <option value="ACTIVE">
                    Active
                  </option>

                  <option value="RESIGNED">
                    Resigned
                  </option>

                  <option value="TERMINATED">
                    Terminated
                  </option>

                </select>

              </div>

              {/* Work Location */}

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
                  required
                />

              </div>

            </div>

            <div className="mt-3">

              <button
                type="submit"
                className="btn btn-primary me-3"
              >
                Save Employee
              </button>

              <button
                type="reset"
                className="btn btn-secondary"
              >
                Clear
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
};

export default AddEmployee;