import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const EmpWeekOff = () => {
  const navigate = useNavigate();

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
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddEmpWeekOff")} className="dropdown-item" href="#">Add New Week-off</a></li>
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
