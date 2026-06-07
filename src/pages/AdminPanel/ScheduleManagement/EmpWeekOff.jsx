import React from 'react'

const EmpWeekOff = () => {
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
                  <td>{value.id}</td>

                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default EmpWeekOff
