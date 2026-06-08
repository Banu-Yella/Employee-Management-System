import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeLogin = () => {

  let [login, setLogin] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getalllogins")
    console.log(res.data);

    let data = res;
    setEmployee(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
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
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
              return (
                <tr key={value.loginid}>
                  <td>{value.loginid}</td>
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
                    <button>Update</button>
                    <button>Delete</button>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                      </svg>
                    </div>
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
