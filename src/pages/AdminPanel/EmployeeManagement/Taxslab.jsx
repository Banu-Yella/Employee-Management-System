import React from 'react'

const Taxslab = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slab name</th>
            <th>Minimum amount</th>
            <th>Maximum amount</th>
            <th>Percentage</th>
            <th>Tax regime type</th>
            <th>Active</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.slabName}</td>
                  <td>{value.minAmount}</td>
                  <td>{value.maxAmount}</td>
                  <td>{value.percentage}</td>
                  <td>{value.taxregimeType}</td>
                  <td>{value.active}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Taxslab
