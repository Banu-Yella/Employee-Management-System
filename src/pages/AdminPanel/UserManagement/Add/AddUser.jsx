import React from 'react'

const AddUser = () => {

  return (
     <div>
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
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
                <td>{value.}</td>
              </tr>
            )
          })
        }

      </tbody>

    </div>
  )
}

export default AddUser
