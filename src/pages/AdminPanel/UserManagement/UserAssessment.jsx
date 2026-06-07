import React from 'react'

const UserAssessment = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
              return (
                <tr key={value.id}>

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
