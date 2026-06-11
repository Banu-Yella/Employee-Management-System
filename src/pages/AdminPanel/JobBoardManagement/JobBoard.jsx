import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const JobBoard = () => {
  const navigate = useNavigate();

  let [jobBord, setJobBord] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getAll-job-board")
    console.log(res.data);

    let data = res;
    setJobBord(data);

    let deleteData = (jobBoardId) => {
      console.log(jobBoardId);
      if (window.confirm()) {
        api.delete("/job-board/{jobBoardId}")
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
            <th>Job title</th>
            <th>Job description</th>
            <th>Job referral</th>
            <th>Location</th>
            <th>Workplace</th>
            <th>Company name</th>
            <th>Salary range</th>
            <th>Employment type</th>
            <th>Posted date</th>
            <th>Application deadline</th>
            <th>Required skills</th>
            <th>Job category</th>
            <th>Experience level</th>
            <th>Education requirements</th>
            <th>Job responsibilities</th>
            <th>Benefits</th>
            <th>Contact information</th>
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
                  <li><a onClick={() => navigate("/AddJobBoard")} className="dropdown-item" href="#">Add New Job-Board</a></li>
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
            jobBord.map((value) => {
              return (
                <tr key={value.jobBoardId}>
                  <td>{value.jobBoardId}</td>
                  <td>{value.jobTitle}</td>
                  <td>{value.jobDescription}</td>
                  <td>{value.jobReferral}</td>
                  <td>{value.location}</td>
                  <td>{value.workplace}</td>
                  <td>{value.companyname}</td>
                  <td>{value.salaryRange}</td>
                  <td>{value.employmentType}</td>
                  <td>{value.postedDate}</td>
                  <td>{value.applicationDeadline}</td>
                  <td>{value.requiredSkills}</td>
                  <td>{value.jobCategory}</td>
                  <td>{value.experienceLevel}</td>
                  <td>{value.educationRequirements}</td>
                  <td>{value.jobResponsibilities}</td>
                  <td>{value.benefits}</td>
                  <td>{value.contactInformation}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateJobBoard/${value.jobBoardId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.jobBoardId) }}>Delete</button>
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

export default JobBoard
