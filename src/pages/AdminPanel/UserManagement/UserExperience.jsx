import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UserExperience = () => {

  let [userExperience, setUserExperience] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getallexperience")
    console.log(res.data);

    let data = res;
    setUserExperience(data);
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
