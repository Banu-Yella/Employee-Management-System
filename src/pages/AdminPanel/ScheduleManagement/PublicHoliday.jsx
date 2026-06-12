import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const PublicHoliday = () => {

    let [publicHoliday, setPublicHoliday] = useState([]);
  
    let fetchData = async () => {
      let res = await api.get("/getallpublicholidays")
      console.log(res.data);
  
      let data = res;
      setPublicHoliday(data);
  
      let deleteData = (holidayId) => {
      console.log(holidayId);
      if (window.confirm()) {
        api.delete("/deletepublicholiday/{holidayId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setPublicHoliday(res.data);
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
            <th>Public Holiday Name</th>
            <th>Public Holiday Date</th>
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
                  <li><a onClick={() => navigate("/PublicHoliday")} className="dropdown-item" href="#">Add New Public Holiday</a></li>
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
            publicHoliday.map((value) => {
              return (
                <tr key={value.holidayId}>
                  <tr>{value.holidayId}</tr>
                  <tr>{value.publicholidayName}</tr>
                  <tr>{value.publicholidayDate}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr>
                  <td>
                    <button><Link to={'/UpdateHoliday/${value.holidayId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.holidayId) }}>Delete</button>
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

export default PublicHoliday
