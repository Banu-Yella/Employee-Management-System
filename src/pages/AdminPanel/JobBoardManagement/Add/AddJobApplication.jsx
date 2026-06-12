import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddJobApplication = () => {
   const navigate = useNavigate();

   let [appliedDate, setAppliedDate] = useState('')
   let [status, setStatus] = useState('')

   let [userId, setUserId] = useState('')
   let [jobId, setJobId] = useState('')

   let [user, setUser] = useState([])
   let [jobBoard, setJobBoard] = useState([])



   let fetchData = (e) => {
      e.preventDefault()
      console.log();
      let payload = {

      }
      api.post("/save-applications", payload)
         .then(() => {
            console.log("Data saved");
         })
         .catch(() => {
            console.log("Data is not saved");
         })
   }


   return (
      <div className="container-fluid">
         <div className="card shadow border-0">
            <div className="card-header bg-primary text-white">
            </div>
            <div className="card-body">
               <form>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                        <label htmlFor="user" className="form-label">User name</label>
                        <select className="form-control" value={userId} onChange={(e) => setUserId(e.target.value)}>
                           <option value="">Select Job title</option>
                           {user.map((u) => (<option key={u.userId} value={u.userId}>{u.name} </option>))}</select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="jobBoard" className="form-label">Job title</label>
                        <select className="form-control" value={jobId} onChange={(e) => setJobId(e.target.value)}>
                           <option value="">Select Job title</option>
                           {jobBoard.map((job) => (<option key={job.jobId} value={job.jobId}>{job.jobTitle} </option>))}</select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="appliedDate" className="form-label">appliedDate</label>
                        <input type="datetime-local" className="form-control" id="appliedDate" onChange={(e) => { setAppliedDate(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <button type="button" className="btn btn-primary  me-3" onClick={fetchData}>Submit</button>
                        <button type="button" className="btn btn-danger  me-3" onClick={() => navigate('/JobApplication')}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   )
}

export default AddJobApplication
