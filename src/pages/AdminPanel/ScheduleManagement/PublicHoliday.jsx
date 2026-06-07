import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const PublicHoliday = () => {

    let [publicHoliday, setPublicHoliday] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/getallpublicholidays")
      console.log(res.data);
  
      let data = res;
      setPublicHoliday(data);
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
