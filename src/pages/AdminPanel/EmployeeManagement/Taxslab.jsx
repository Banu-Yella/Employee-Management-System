import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Taxslab = () => {

   let [taxslab, setTaxslab] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getalltaxslabs")
    console.log(res.data);

    let data = res;
    setPayslip(data);
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
            taxslab.map((value) => {
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
