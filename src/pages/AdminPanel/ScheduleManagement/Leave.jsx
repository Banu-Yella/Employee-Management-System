import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Leave = () => {

  const navigate = useNavigate();

  let [leave, setLeave] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallleaves")
    console.log(res.data);

    let data = res;
    setLeave(data);

  let deleteData = (leaveId) => {
      console.log(leaveId);
      if (window.confirm()) {
        api.delete("/deleteleave/{leaveId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLeave(res.data);
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
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddLeave")} className="dropdown-item" href="#">Add New Leave</a></li>
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
                  <td>
                    <button><Link to={'/UpdateLeave/${value.leaveId}'}>Save</Link></button>
                    <button onClick={() => { deleteData(value.leaveId) }}>Delete</button>
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

export default Leave
