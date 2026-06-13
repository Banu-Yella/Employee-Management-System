import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdateJobApplication = () => {
    
    let [appliedDate, setAppliedDate] = useState('')
       let [status, setStatus] = useState('')
    
       let [userId, setUserId] = useState('')
       let [jobId, setJobId] = useState('')
    
       let [user, setUser] = useState([])
       let [jobBoard, setJobBoard] = useState([])
    

   let applicationId = useParams()
    console.log(applicationId);

    useEffect(() => {
        api.get('/job-applications/{applicationId}')
            .then((res) => {
                console.log(res)
                setAppliedDate(res.data.appliedDate) 
                setStatus(res.data.status)
                setUserId(res.data.userId)
                setJobId(res.data.jobId)
                setUser(res.data.user)
                setJobBoard(res.data.jobBoard)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            appliedDate, status, userId,
            jobId, user, jobBoard
        }

        api.put(`/update-applications/{applicationId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/JobApplication')
            })
            .catch(() => {
                console.log("Failed to update the data")
                toast("Failed to update the data")
            })
    }

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
                        <button type="button" className="btn btn-primary  me-3" onClick={updateData}>Update</button>
                        <button type="button" className="btn btn-danger  me-3" onClick={() => navigate('/JobApplication')}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

  )
}

export default UpdateJobApplication
