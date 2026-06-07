import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const JobBoard = () => {

  let [jobBord, setJobBord] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getAll-job-board")
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
          </tr>
        </thead>
        <tbody>
          {
            jobBord.map((value) => {
              return (
                <tr key={value.id}>
                  <tr>{value.jobId}</tr>
                  <tr>{value.jobTitle}</tr>
                  <tr>{value.jobDescription}</tr>
                  <tr>{value.jobReferral}</tr>
                  <tr>{value.location}</tr>
                  <tr>{value.workplace}</tr>
                  <tr>{value.companyname}</tr>
                  <tr>{value.salaryRange}</tr>
                  <tr>{value.employmentType}</tr>
                  <tr>{value.postedDate}</tr>
                  <tr>{value.applicationDeadline}</tr>
                  <tr>{value.requiredSkills}</tr>
                  <tr>{value.jobCategory}</tr>
                  <tr>{value.experienceLevel}</tr>
                  <tr>{value.educationRequirements}</tr>
                  <tr>{value.jobResponsibilities}</tr>
                  <tr>{value.benefits}</tr>
                  <tr>{value.contactInformation}</tr>
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

export default JobBoard
