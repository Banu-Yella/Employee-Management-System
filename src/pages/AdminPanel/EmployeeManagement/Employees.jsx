import React from 'react'
import {useState, useEffect } from 'react'
import axios from '../../api/axiosInstance'

const Employees = () => {

      let [employee, setEmployee] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/GetAllEmp")
      console.log(res.data);
  
      let data = res;
      setEmployee(data);
    };
  
    React.useEffect(() => {
      fetchData();
    }, []);
  
  return (
         <div>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          employee.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
               
              </tr>
            )
          })
        }

      </tbody>

    </div>
  )
}

export default Employees
