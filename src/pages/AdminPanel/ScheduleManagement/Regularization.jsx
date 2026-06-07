import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Regularization = () => {

    let [regularization, setRegularization] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/getAllRegularization")
      console.log(res.data);
  
      let data = res;
      setRegularization(data);
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
            <th>Attendance Date</th>
            <th>Employee Code</th>
            <th>Requested Check-In</th>
            <th>Requested Check-Out</th>
            <th>Attendance status</th>
            <th>Reason</th>
            <th>Remarks</th>
            <th>Requested status</th>
            <th>Requested On</th>
            <th>Approved by</th>
            <th>Approved on</th>
            <th>Rejected by</th>
            <th>Rejected on</th>
            <th>Rejection Reason</th>
            <th>Created on</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {
            regularization.map((value) => {
              return (
                <tr key={value.id}>
                  <tr>{value.attendance?.attendanceDate}</tr>
                  <tr>{value.employee?.employeeCode}</tr>
                  <tr>{value.requestedCheckIn}</tr>
                  <tr>{value.requestedCheckOut}</tr>
                  <tr>{value.attendancestatus}</tr>
                  <tr>{value.reason}</tr>
                  <tr>{value.remarks}</tr>
                  <tr>{value.requestedstatus}</tr>
                  <tr>{value.requestedOn}</tr>
                  <tr>{value.approvedby}</tr>
                  <tr>{value.approvedOn}</tr>
                  <tr>{value.rejectedBy}</tr>
                  <tr>{value.rejectedOn}</tr>
                  <tr>{value.rejectionReason}</tr>
                  <tr>{value.createdOn}</tr>
                  <tr>{value.UpdatedOn}</tr>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Regularization
