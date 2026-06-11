import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Assessment = () => {
  const navigate = useNavigate();

  let [assessment, setAssessment] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/GetAllAssessments")
    console.log(res.data);

    let data = res;
    setAssessment(data);

    let deleteData = (assessmentId) => {
      console.log(assessmentId);
      if (window.confirm()) {
        api.delete("/DeleteAssessment/{assessmentId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
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
            <th>Job Title</th>
            <th>Assessment name</th>
            <th>Total score</th>
            <th>Qualifying score</th>
            <th>Assessment stage</th>
            <th>Assessment type</th>
            <th>Assessment result</th>
            <th>Feedback</th>
            <th>Assessment status</th>
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
                  <li><a onClick={() => navigate("/AddAssessment")} className="dropdown-item" href="#">Add New Assessment</a></li>
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
            assessment.map((value) => {
              return (
                <tr key={value.assessmentId}>
                  <td>{value.assessmentId}</td>
                  <td>{value.job?.jobTitle}</td>
                  <td>{value.assessmentName}</td>
                  <td>{value.totalScore}</td>
                  <td>{value.qualifyingScore}</td>
                  <td>{value.assessmentStage}</td>
                  <td>{value.assessmentType}</td>
                  <td>{value.assessmentResult}</td>
                  <td>{value.feedback}</td>
                  <td>{value.assessmentStatus}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateAssessment/${value.assessmentId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.assessmentId) }}>Delete</button>
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

export default Assessment
