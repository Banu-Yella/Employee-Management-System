import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserLogin = () => {

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/employee-management/"
      );

      console.log(res.data);

      setUsers(res.data);
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLogin;