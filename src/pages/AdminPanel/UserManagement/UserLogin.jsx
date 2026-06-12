import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const UserLogin = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/getalllogindetails");

      console.log(res.data);

      setUserLogin(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

    let deleteData = (userLoginId) => {
      console.log(userLoginId);
      if (window.confirm()) {
        api.delete("/deletelogindetails/${loginId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setUserLogin(res.data);
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <h2>User Login List</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Password</th>
            <th>email</th>
            <th>Password rest</th>
            <th>Password rest expiry</th>
            <th>Role</th>
            <th>Last login</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Modify</th>
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddLogin")} className="dropdown-item" href="#">Add New Login</a></li>
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
            userLogin.map(() => (
              <tr key={value.userLoginId}>
                <td>{value.userLoginId}</td>
                <td>{value.user?.name}</td>
                <td>{value.username}</td>
                <td>{value.passwordhash}</td>
                <td>{value.email}</td>
                <td>{value.passwordresttoken}</td>
                <td>{value.passwordresttokenexpiry}</td>
                <td>{value.role}</td>
                <td>{value.lastLogin}</td>
                <td>{value.status}</td>
                <td>{value.createdAt}</td>
                <td>{value.updatedAt}</td>
                <td>
                  <button><Link to={'/UpdateUserLogin/${value.userLoginId}'}>Update</Link></button>
                  <button onClick={() => { deleteData(value.userLoginId) }}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLogin;