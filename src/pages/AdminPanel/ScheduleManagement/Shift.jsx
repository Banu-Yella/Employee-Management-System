import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Shift = () => {
   const navigate = useNavigate();

    let [shift, setShift] = useState([]);
  
    let fetchData = async () => {
      let res = await api.get("/getallshifts")
      console.log(res.data);
  
      let data = res;
      setShift(data);
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
            <th>Shift Type</th>
            <th>Shift Name</th>
            <th>Parent Shift</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Cross Day</th>
            <th>Late Grace Minutes</th>
            <th>Early Exit Grace Minutes</th>
            <th>Min Work Hours</th>
            <th>active</th>
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
                  <li><a onClick={() => navigate("/AddShift")} className="dropdown-item" href="#">Add New Shift</a></li>
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
            shift.map((value) => {
              return (
                <tr key={value.shiftid}>
                  <tr>{value.shiftid}</tr>
                  <tr>{value.shiftType}</tr>
                  <tr>{value.shiftName}</tr>
                  <tr>{value.parentShift}</tr>
                  <tr>{value.startTime}</tr>
                  <tr>{value.endTime}</tr>
                  <tr>{value.crossDay}</tr>
                  <tr>{value.lateGraceMinutes}</tr>
                  <tr>{value.earlyExitGraceMinutes}</tr>
                  <tr>{value.minWorkHours}</tr>
                  <tr>{value.active}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr>                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Shift
