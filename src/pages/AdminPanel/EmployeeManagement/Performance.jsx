import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Performance = () => {

   let [performance, setPerformance] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getallperformances")
    console.log(res.data);

    let data = res;
    setPerformance(data);
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
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
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
