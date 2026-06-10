import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const MonthlyAttendanceSummary = () => {
  
    let [monthlyAttendanceSummary, setMonthlyAttendanceSummary] = useState([]);
  
    let fetchData = async () => {
      let res = await api.get("/getallsummaries")
      console.log(res.data);
  
      let data = res;
      setMonthlyAttendanceSummary(data);
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
            <th></th>
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
