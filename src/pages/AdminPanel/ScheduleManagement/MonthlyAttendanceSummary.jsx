import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";


const MonthlyAttendanceSummary = () => {
  const navigate = useNavigate();

  let [monthlyAttendanceSummary, setMonthlyAttendanceSummary] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallsummaries")
    console.log(res.data);

    let data = res;
    setMonthlyAttendanceSummary(data);


    let deleteData = (summaryId) => {
      console.log(summaryId);
      if (window.confirm()) {
        api.delete("/deletesummary/{summaryId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setMonthlyAttendanceSummary(res.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee code</th>
            <th>Year</th>
            <th>Month</th>
            <th>Total Calendar Days</th>
            <th>Working Days</th>
            <th>Present Days</th>
            <th>Half Days</th>
            <th>Absent Days</th>
            <th>WeekOff Days</th>
            <th>Public Holidays</th>
            <th>Optional Holidays</th>
            <th>Sick Leave Days</th>
            <th>Casual Leave Days</th>
            <th>Total Work Minutes</th>
            <th>Total Overtime Minutes</th>
            <th>Created at</th>
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddMonthlyAttendanceSummary")} className="dropdown-item" href="#">Add New Summary</a></li>
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
            monthlyAttendanceSummary.map((value) => {
              return (
                <tr key={value.summaryId}>
                  <tr>{value.summaryId}</tr>
                  <tr>{value.employee?.employeeCode}</tr>
                  <tr>{value.year}</tr>
                  <tr>{value.month}</tr>
                  <tr>{value.totalCalendarDays}</tr>
                  <tr>{value.presentDays}</tr>
                  <tr>{value.halfDays}</tr>
                  <tr>{value.absentDays}</tr>
                  <tr>{value.weekOffDays}</tr>
                  <tr>{value.publicHolidays}</tr>
                  <tr>{value.optionalHolidays}</tr>
                  <tr>{value.sickLeaveDays}</tr>
                  <tr>{value.casualLeaveDays}</tr>
                  <tr>{value.totalWorkMinutes}</tr>
                  <tr>{value.totalOvertimeMinutes}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr>
                  <td>
                    <button><Link to={'/UpdateMonthlyAttendanceSummary/${value.summaryId}'}>Save</Link></button>
                    <button onClick={() => { deleteData(value.summaryId) }}>Delete</button>
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

export default MonthlyAttendanceSummary
