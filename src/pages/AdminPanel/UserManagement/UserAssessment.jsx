import React from 'react'

const UserAssessment = () => {

  
  return (
    <div>
      <table className="table">
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
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
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
