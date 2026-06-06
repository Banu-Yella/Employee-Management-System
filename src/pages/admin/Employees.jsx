import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/GetAllEmp"
      );

      setEmployees(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/DeleteEmp/${id}`
      );

      getEmployees();

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Employee Management
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.employeeid}>

              <td>{employee.employeeid}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.role}</td>
              <td>{employee.designation}</td>
              <td>{employee.department}</td>

              <td>

                <Link
                  to={`/admin/edit-employee/${employee.employeeid}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    handleDelete(employee.employeeid)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Employees;