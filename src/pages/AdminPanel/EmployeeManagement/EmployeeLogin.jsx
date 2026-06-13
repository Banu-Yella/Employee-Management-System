import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";


const EmployeeLogin = () => {

  const [emplogin, setEmpLogin] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await api.get("/getalllogins")
    console.log(res.data);

    let deleteData = (emploginid) => {
      console.log(emploginid);
      if (window.confirm()) {
        api.delete("/deletelogin/{loginId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setEmpLogin(res.data);
  };

useEffect(() => {
    fetchData();
  }, []);

  return (
   <div className="table-container">
    <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee code</th>
            <th>Role</th>
            <th>Username</th>
            <th>Password hash</th>
            <th>Password rest token</th>
            <th>Password rest expiry</th>
            <th>Last Login</th>
            <th>Status</th>
            <th>Created on</th>
            <th>Updated on</th>
            <th  className="align-middle">
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddEmployeeLogin")} className="dropdown-item">Add New Login</a></li>
                  <li><a onClick={() => navigate("/DeleteAll")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            emplogin.map((value) => {
              return (
                <tr key={value.emploginid}>
                  <td>{value.emploginid}</td>
                  <td>{value.employee?.employeeCode}</td>
                  <td>{value.role}</td>
                  <td>{value.username}</td>
                  <td>{value.passwordHash}</td>
                  <td>{value.passwordResetToken}</td>
                  <td>{value.passwordResetExpiry}</td>
                  <td>{value.lastLogin}</td>
                  <td>{value.status}</td>
                  <td>{value.createdon}</td>
                  <td>{value.updatedon}</td>
                  <td>
                    <button><Link to={'/UpdateEmployeeLogin/${value.emploginid}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.emploginid) }}>Delete</button>
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

export default EmployeeLogin
