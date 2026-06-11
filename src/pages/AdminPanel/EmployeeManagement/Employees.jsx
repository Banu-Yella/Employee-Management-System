import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Employees = () => {

  let [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await api.get("/GetAllEmp");

      console.log(res.data);

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }

    let deleteData = (employeeid) => {
      console.log(employeeid);
      if (window.confirm()) {
        api.delete("/DeleteEmp/{employeeId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Employee name</th>
            <th>Employee Code</th>
            <th>Contact Number</th>
            <th>Role</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Shift Type</th>
            <th>Work location</th>
            <th>Employment type</th>
            <th>Employment status</th>
            <th>Joining date</th>
            <th>Resignation date</th>
            <th>created at</th>
            <th>updated at</th>
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddEmployee")} className="dropdown-item" href="#">Add New Employee</a></li>
                  <li><a onClick={() => navigate("/DeleteAllEmp")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((value) => {
              return (
                <tr key={value.employeeid}>
                  <td>{value.employeeid}</td>
                  <td>{value.image}</td>
                  <td>{value.employeename}</td>
                  <td>{value.employeeCode}</td>
                  <td>{value.user?.phoneNumber}</td>
                  <td>{value.role}</td>
                  <td>{value.designation}</td>
                  <td>{value.department}</td>
                  <td>{value.manager?.employeename}</td>
                  <td>{value.shift?.shiftType}</td>
                  <td>{value.workLocation}</td>
                  <td>{value.employmentType}</td>
                  <td>{value.employmentStatus}</td>
                  <td>{value.joiningDate}</td>
                  <td>{value.resignationDate}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateEmployee/${value.employeeid}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.employeeid) }}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Employees
