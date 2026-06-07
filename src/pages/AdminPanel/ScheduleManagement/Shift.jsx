import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Shift = () => {

    let [shift, setShift] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/getallshifts")
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
