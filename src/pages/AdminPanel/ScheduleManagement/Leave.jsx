import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Leave = () => {

   let [leave, setLeave] = useState([]);
  
    let fetchData = async () => {
      let res = await api.get("/getallleaves")
      console.log(res.data);
  
      let data = res;
      setLeave(data);
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
          <th>Leave Start Date</th>
          <th>Leave End Date</th>
          <th>Leave Type</th>
          <th>Approval Status</th>
          <th>Leave Days</th>
          <th>Approved by</th>
          <th>Approved on</th>
          <th>Rejected by</th>
          <th>Rejected on</th>
          <th>Rejection reason</th>
          <th>Created at</th>
          <th>Updated at</th>
        </tr>
      </thead>
      <tbody>
        {
          leave.map((value) => {
            return (
              <tr key={value.leaveId}>
                <td>{value.leaveId}</td>
                <td>{value.employee?.employeeCode}</td>
                <td>{value.leaveStartDate}</td>
                <td>{value.leaveEndDate}</td>
                <td>{value.leaveType}</td>
                <td>{value.approvalStatus}</td>
                <td>{value.leaveDays}</td>
                <td>{value.employeeApprover}</td>
                <td>{value.approvedOn}</td>
                <td>{value.rejectedBy}</td>
                <td>{value.rejectedOn}</td>
                <td>{value.rejectionReason}</td>
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

export default Leave
