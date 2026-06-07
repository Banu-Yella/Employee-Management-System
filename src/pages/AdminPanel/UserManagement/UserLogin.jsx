import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UserLogin = () => {

  const [userLogin, setUserLogin] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/employee-management/");

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
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {
          userLogin.map(() => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.userName}</td>
              <td>{value.email}</td>
              <td>{value.mobile}</td>
              <td>{value.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLogin;