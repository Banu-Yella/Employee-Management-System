import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddEmployeeLogin = () => {

   const navigate = useNavigate();

   let [employee, setEmployee] = useState('')
   let [role, setRole] = useState('')
   let [username, setUsername] = useState('')
   let [passwordHash, setPasswordHash] = useState('')
   let [passwordResetToken, setPasswordResetToken] = useState('')
   let [passwordResetExpiry, setPasswordResetExpiry] = useState('')
   let [lastLogin, setLastLogin] = useState('')
   let [status, setStatus] = useState('')

   const fetchData = (e) => {
      e.preventDefault();

      const payload = {
         employee,
         role,
         username,
         passwordHash,
         passwordResetToken,
         passwordResetExpiry,
         lastLogin,
         status
      };

      api.post("/savelogin", payload)
         .then(() => {
            console.log("Data saved");
            navigate("/EmployeeLogin");
         })
         .catch((err) => {
            console.log(err);
         });
   };



   return (
    <div className="container-fluid mt-3">

    <div className="card app-form-card">

        <div className="card-header app-form-header">
            Add Employee
        </div>

        <div className="card-body app-form-body">

            <form className="app-form">

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <label htmlFor="empName" className="form-label">Employee Name</label>
                        <input type="text" className="form-control" id="empName" onChange={(e) => { setEmployee(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input type="text" className="form-control" id="role" onChange={(e) => { setRole(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="username" className="form-label">User name</label>
                        <input type="text" className="form-control" id="username" onChange={(e) => { setUsername(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="passhash" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passhash" onChange={(e) => { setPasswordHash(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="passrest" className="form-label">Rest Password</label>
                        <input type="password" className="form-control" id="passrest" onChange={(e) => { setPasswordResetToken(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="passexpiry" className="form-label">Password Expiry</label>
                        <input type="datetime-local" className="form-control" id="passexpiry" onChange={(e) => { setPasswordResetExpiry(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="lastlogin" className="form-label">Last Login</label>
                        <input type="datetime-local" className="form-control" id="lastlogin" onChange={(e) => { setLastLogin(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" className="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/EmployeeLogin")}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   )
}

export default AddEmployeeLogin
