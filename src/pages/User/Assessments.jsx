import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const Assessments = () => {

      let [user, setUser] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("http://localhost:8080/api/employee-management/")
    console.log(res.data);
    
    let data = res;
    setUser(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
     <div>
      <thead>
        <tr>
          <th>Id</th>
          <th>Job title</th>
          <th>Assessment Name</th>
          <th>Student Name</th>
          <th>Score</th>
          <th>Passed</th>
          <th>Submitted at</th>
          <th>Session started at</th>
          <th>Session ended at</th>      
          <th>Session status</th>
          <th>Status</th>
          <th>Created at</th>
          <th>Updated at</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((value) => {
            return (
              <tr key={value.userAssessmentId}>
                <td>{value.userAssessmentId}</td>
                <td>{value.job?.jobTitle}</td>
                <td>{value.assessment?.assessmentName}</td>
                <td>{value.user?.studentName}</td>
                <td>{value.score}</td>
                <td>{value.passed}</td>
                <td>{value.submittedAt}</td>
                <td>{value.sessionStartedAt}</td>
                <td>{value.sessionEndedAt}</td>
                <td>{value.sessionStatus}</td>
                <td>{value.status}</td>
                <td>{value.createdAt}</td>
                <td>{value.updatedAt}</td>
              </tr>
            )
          })
        }

      </tbody>

    </div>
  )
}

export default Assessments
