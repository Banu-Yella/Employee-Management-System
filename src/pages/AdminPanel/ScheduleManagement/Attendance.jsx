import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Attendance = () => {

  let [attendance, setAttendance] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getallattendance")
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