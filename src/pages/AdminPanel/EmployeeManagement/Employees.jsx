import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Employee name</th>
            <th>Employee Code</th>            
            <th>Contact Number</th>            
            <th>Role</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Manager</th>   
            <th>Shift Type</th>             
            <th>Work location</th>
            <th>Employment type</th>
            <th>Employment status</th>
            <th>Joining date</th>
            <th>Resignation date</th> 
            <th>created at</th>
            <th>updated at</th>            
          </tr>
        </thead>
        <tbody>
          {
            employee.map((value) => {
              return (
                <tr key={value.employeeid}>
                  <td>{value.employeeid}</td>
                  <td>{value.image}</td>
                  <td>{value.employeename}</td>
                  <td>{value.employeeCode}</td>                  
                  <td>{value.user?.phoneNumber}</td>
                  <td>{value.role}</td>
                  <td>{value.designation}</td>
                  <td>{value.department}</td>
                  <td>{value.employee?.manager}</td>
                  <td>{value.Shift?.shiftType}</td>                                               
                  <td>{value.workLocation}</td>             
                  <td>{value.employmentType}</td>
                  <td>{value.employmentStatus}</td> 
                  <td>{value.joiningDate}</td>
                  <td>{value.resignationDate}</td>
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

export default Employees
