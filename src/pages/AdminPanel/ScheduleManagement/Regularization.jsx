import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Regularization = () => {
  const navigate = useNavigate();

    let [regularization, setRegularization] = useState([]);
  
    let fetchData = async () => {
      let res = await api.get("/getAllRegularization")
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
              <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddRegularization")} className="dropdown-item" href="#">Add Regularization</a></li>
                  <li><a onClick={() => navigate("/DeleteAll")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
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
