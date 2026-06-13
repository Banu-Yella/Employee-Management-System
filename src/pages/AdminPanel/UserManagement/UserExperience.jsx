import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";


const UserExperience = () => {
  const navigate = useNavigate();
  
  let [userExperience, setUserExperience] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallexperience")
    console.log(res.data);

    let data = res;
    setUserExperience(data);
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
            <th>User Name</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Currently Working</th>
            <th>Roles And Responsibilities</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Workplace</th>
            <th>Reason For Leaving</th>
            <th>Skills</th>
            <th>Tools Used</th>
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
                  <li><a onClick={() => navigate("/AddUserExperience")} className="dropdown-item" href="#">Add New Experience</a></li>
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
            userExperience.map((value) => {
              return (
                <tr key={value.experienceId}>
                  <td>{value.experienceId}</td>
                  <td>{value.user?.name}</td>
                  <td>{value.companyName}</td>
                  <td>{value.jobTitle}</td>
                  <td>{value.startDate}</td>
                  <td>{value.endDate}</td>
                  <td>{value.currentlyWorking}</td>
                  <td>{value.rolesAndResponsibilities}</td>
                  <td>{value.location}</td>
                  <td>{value.salary}</td>
                  <td>{value.workplace}</td>
                  <td>{value.reasonForLeaving}</td>
                  <td>{value.skills}</td>
                  <td>{value.toolsUsed}</td>
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

export default UserExperience
