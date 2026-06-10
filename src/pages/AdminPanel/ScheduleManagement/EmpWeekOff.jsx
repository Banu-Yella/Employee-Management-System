import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const EmpWeekOff = () => {

  let [empWeekoff, setEmpWeekoff] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallempweekoffs")
    console.log(res.data);

    let data = res;
    setEmpWeekoff(data);
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
            <th>WeekOff Date</th>
            <th>Employee code</th>
            <th>WeekOff Policy</th>
            <th>Created at</th>
            <th>Updated at</th>
            
          </tr>
        </thead>
        <tbody>
          {
            empWeekoff.map((value) => {
              return (
                <tr key={value.weekOffId}>
                  <td>{value.weekOffId}</td>
                  <td>{value.weekOffDate}</td>
                  <td>{value.employee?.employeeCode}</td>
                  <td>{value.weekOffPolicy}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>         
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default EmpWeekOff
