import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const UserLogin = () => {

  const [userLogin, setUserLogin] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/getalllogindetails");

      console.log(res.data);

      setUserLogin(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
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
          </tr>
        </thead>

        <tbody>
          {
          userLogin.map(() => (
            <tr key={value.id}>
              <td>{value.id}</td>
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
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLogin;