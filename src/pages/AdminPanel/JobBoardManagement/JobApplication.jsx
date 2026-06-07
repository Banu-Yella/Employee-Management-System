import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const JobApplication = () => {

  let [jobApplication, setJobApplication] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/retrieve-all-questions")
    console.log(res.data);

    let data = res;
    setJobApplication(data);
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
            <th>Job title</th>            
            <th>Applied date</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {
            jobApplication.map((value) => {
              return (
                <tr key={value.jobApplicationId}>
                  <tr>{value.jobApplicationId}</tr>
                  <tr>{value.user?.name}</tr>
                  <tr>{value.job?.jobTitle}</tr>
                  <tr>{value.appliedDate}</tr>
                  <tr>{value.status}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr> 
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
