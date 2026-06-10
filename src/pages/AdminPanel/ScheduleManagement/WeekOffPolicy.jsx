import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const WeekOffPolicy = () => {

  let [weekOffPolicy, setWeekOffPolicy] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallweekoffpolicies")
    console.log(res.data);

    let data = res;
    setWeekOffPolicy(data);
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
            <th>Policy Name</th>
            <th>Weekly-Off Days</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {
            weekOffPolicy.map((value) => {
              return (
                <tr key={value.policyId}>
                  <tr>{value.policyId}</tr>
                  <tr>{value.policyName}</tr>
                  <tr>{value.weeklyOffDays}</tr>
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

export default WeekOffPolicy
