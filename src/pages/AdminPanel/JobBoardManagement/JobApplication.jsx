import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";


const JobApplication = () => {
  const navigate = useNavigate();

  let [jobApplication, setJobApplication] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/retrieve-all-questions")
    console.log(res.data);

    let data = res;
    setJobApplication(data);

    let deleteData = (jobApplicationId) => {
      console.log(jobApplicationId);
      if (window.confirm()) {
        api.delete("/delete-job-applications/{applicationId}")
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
    <div className="table-container">
      <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Job title</th>
            <th>Applied date</th>
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
                  <li><a onClick={() => navigate("/AddJobApplication")} className="dropdown-item" href="#">Add New Job Application</a></li>
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
            jobApplication.map((value) => {
              return (
                <tr key={value.jobApplicationId}>
                  <td>{value.jobApplicationId}</td>
                  <td>{value.user?.name}</td>
                  <td>{value.job?.jobTitle}</td>
                  <td>{value.appliedDate}</td>
                  <td>{value.status}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateJobApplication/${value.jobApplicationId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.jobApplicationId) }}>Delete</button>
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

export default JobApplication
