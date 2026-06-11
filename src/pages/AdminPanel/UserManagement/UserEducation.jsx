import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../axiosInstance.jsx";
import axios from 'axios'

const UserEducation = () => {
  const navigate = useNavigate();

  let [userEducation, setUserEducation] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getAllEducations")
    console.log(res.data);

    let data = res;
    setUserEducation(data);
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
            <th>User Name</th>
            <th>Education Type</th>
            <th>Education Level</th>
            <th>Course</th>
            <th>Specialization</th>
            <th>University</th>
            <th>Year Of Passing</th>
            <th>Percentage</th>
            <th>grade</th>
            <th>Learning Mode</th>
            <th>Location</th>
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
                  <li><a onClick={() => navigate("/AddUserEducation")} className="dropdown-item" href="#">Add New Education</a></li>
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
            userEducation.map((value) => {
              return (
                <tr key={value.educationId}>
                  <td>{value.educationId}</td>
                  <td>{vaalue.user?.name}</td>
                  <td>{value.educationType}</td>
                  <td>{value.educationLevel}</td>
                  <td>{value.course}</td>
                  <td>{value.specialization}</td>
                  <td>{value.university}</td>
                  <td>{value.yearOfPassing}</td>
                  <td>{value.percentage}</td>
                  <td>{value.grade}</td>
                  <td>{value.learningMode}</td>
                  <td>{value.location}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                   <td>
                <button>Update</button>
                <button>Delete</button>
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

export default UserEducation
