import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../axiosInstance.jsx";
import axios from 'axios'


const UserAssessment = () => {
  const navigate = useNavigate();

  let [userAssessment, setUserAssessment] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getalluserassessments")
    console.log(res.data);

    let data = res;
    setUserAssessment(data);
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
            <th>User name</th>
            <th>Job title</th>
            <th>Assessment Name</th>
            <th>Score</th>
            <th>Passed</th>
            <th>Session started at</th>
            <th>Session ends at</th>
            <th>Submitted at</th>
            <th>Session status</th>
            <th>Assessment date</th>
            <th>created at</th>
            <th>updated at</th>
            <th>Jop application status</th>
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
                  <li><a onClick={() => navigate("/AddUserAssessment")} className="dropdown-item" href="#">Add New Assessment</a></li>
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
            userAssessment.map((value) => {
              return (
                <tr key={value.userAssessmentId}>
                  <td>{value.userAssessmentId}</td>
                  <td>{value.user?.name}</td>
                  <td>{value.jobApplication?.jobBoard?.jobTitle}</td>
                  <td>{value.score}</td>
                  <td>{value.passed}</td>
                  <td>{value.sessionStartedAt}</td>
                  <td>{value.sessionEndsAt}</td>
                  <td>{value.submittedAt}</td>
                  <td>{value.sessionStatus}</td>
                  <td>{value.assessmentDate}</td>
                  <td>{value.jobApplication?.status}</td>
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

export default UserAssessment
