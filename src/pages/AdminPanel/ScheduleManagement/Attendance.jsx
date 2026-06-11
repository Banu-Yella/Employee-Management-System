import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Attendance = () => {
  const navigate = useNavigate();

  let [attendance, setAttendance] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallattendance")
    console.log(res.data);

    let data = res;
    setAttendance(data);
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
            <th>Employee name</th>
            <th>Shift Type</th>
            <th>Public holiday</th>
            <th>Week Off</th>
            <th>Leave</th>
            <th>Attendance Date</th>
            <th>Punch-in Time</th>
            <th>Punch-out Time</th>
            <th>Late-by Minutes</th>
            <th>Early-exit Minutes</th>
            <th>Total Work Minutes</th>
            <th>Over time Minutes</th>
            <th>Attendance status</th>            
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
                  <li><a onClick={() => navigate("/AddAttendance")} className="dropdown-item" href="#">Add New Attendance</a></li>
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
            attendance.map((value) => {
              return (
                <tr key={value.attendanceId}>
                  <td>{value.attendanceId}</td>
                  <td>{value.employee?.employeename}</td>
                  <td>{value.shift?.shiftType}</td>
                  <td>{value.publicHoliday}</td>
                  <td>{value.weekOff}</td>
                  <td>{value.attendanceDate}</td>
                  <td>{value.punchInTime}</td>
                  <td>{value.punchOutTime}</td>
                  <td>{value.lateByMinutes}</td>
                  <td>{value.earlyExitMinutes}</td>
                  <td>{value.totalWorkMinutes}</td>
                  <td>{value.overtimeMinutes}</td>
                  <td>{value.attendanceStatus}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>                  
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>

  );
};

export default Attendance;