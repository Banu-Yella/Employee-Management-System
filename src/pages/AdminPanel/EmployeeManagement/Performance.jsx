import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Performance = () => {
  const navigate = useNavigate();

  let [performance, setPerformance] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallperformances")
    console.log(res.data);

    let data = res;
    setPerformance(data);

   let deleteData = (performanceid) => {
      console.log(performanceid);
      if (window.confirm()) {
        api.delete("/deleteperformance/{performanceId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   <div className="table-container">
    <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee code</th>
            <th>Total login hours</th>
            <th>Total working days</th>
            <th>Total number of days absent</th>
            <th>Total number of days on leave</th>
            <th>Average log in time</th>
            <th>Total leave balance</th>
            <th>Total overtime hours</th>
            <th>Optional holidays</th>
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
                  <li><a onClick={() => navigate("/AddPerformance")} className="dropdown-item" href="#">Add New performance</a></li>
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
            performance.map((value) => {
              return (
                <tr key={value.performanceid}>
                  <td>{value.performanceid}</td>
                  <td>{value.employee?.employeeCode}</td>
                  <td>{value.totalLoginHrs}</td>
                  <td>{value.totalWorkingDays}</td>
                  <td>{value.totalNumberofDaysAbsent}</td>
                  <td>{value.totalNumberofDaysOnLeave}</td>
                  <td>{value.averageLoginTime}</td>
                  <td>{value.totalLeavebalance}</td>
                  <td>{value.totalOvertimeHrs}</td>
                  <td>{value.optionalholidays}</td>
                  <td>{value.createdon}</td>
                  <td>{value.updatedon}</td>
                  <td>
                    <button><Link to={'/UpdatePerformance/${value.performanceid}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.performanceid) }}>Delete</button>
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

export default Performance
