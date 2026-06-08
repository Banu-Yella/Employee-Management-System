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
             <th>
                <div className="dropdown modify-dropdown">            
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/CreateProduct")} className="dropdown-item" href="#">Add New Product</a></li>
                  <li><a onClick={() => navigate("/Variants")} className="dropdown-item" href="#">View Variants</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
                </div> 
                </th>       
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
