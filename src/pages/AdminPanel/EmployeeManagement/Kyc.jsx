import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Kyc = () => {

  let [kyc, setKyc] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getalltaxslabs")
    console.log(res.data);

    let data = res;
    setKyc(data);
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
            <th>Employee Code</th>
            <th>Aadhaar number</th>
            <th>Pan number</th>
            <th>Bank name</th>
            <th>Bank account number</th>
            <th>Ifsc code</th>
            <th>Verified</th>
            <th>Verified by</th>
            <th>Verified on</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
              return (
                <tr key={value.kycId}>
                  <td>{value.kycId}</td>
                  <td>{value.employee}</td>
                  <td>{value.aadhaarNumber}</td>
                  <td>{value.panNumber}</td>
                  <td>{value.bankAccountNumber}</td>
                  <td>{value.ifscCode}</td>
                  <td>{value.bankName}</td>
                  <td>{value.verified}</td>
                  <td>{value.verifiedBy}</td>
                  <td>{value.verifiedOn}</td>
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

export default Kyc
