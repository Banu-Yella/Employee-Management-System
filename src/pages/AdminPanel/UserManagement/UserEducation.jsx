import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UserEducation = () => {

  let [userEducation, setUserEducation] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getAllEducations")
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
