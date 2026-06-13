import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../axiosInstance.jsx";
import axios from 'axios'


const User = () => {
  const navigate = useNavigate();

  let [user, setUser] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallusers")
    console.log(res.data);

    let data = res;
    setUser(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
  <div className="table-container">
    <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>            
            <th>Image</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of birth</th>
            <th>Place of birth</th>
            <th>Age</th>
            <th>Native Language</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Marital Status</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pin code</th>
            <th>Permanent Address</th>
            <th>Resume</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
              <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddUser")} className="dropdown-item" href="#">Add New User</a></li>
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
            user.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.middleName}</td>
                  <td>{value.imageurl}</td>
                  <td>{value.email}</td>
                  <td>{value.phoneNumber}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.placeOfBirth}</td>
                  <td>{value.age}</td>
                  <td>{value.nativeLanguage}</td>
                  <td>{value.fatherName}</td>
                  <td>{value.motherName}</td>
                  <td>{value.maritalStatus}</td>
                  <td>{value.address}</td>
                  <td>{value.city}</td>
                  <td>{value.state}</td>
                  <td>{value.country}</td>
                  <td>{value.pinCode}</td>
                  <td>{value.permanentAddress}</td>
                  <td>{value.resumeUrl}</td>
                  <td>{value.status}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default User
