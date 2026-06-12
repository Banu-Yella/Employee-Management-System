import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'

const UpdateRegularization = () => {

      let [requestedCheckIn, setRequestedCheckIn] = useState('')
       let [requestedCheckOut, setRequestedCheckOut] = useState('')
       let [attendancestatus, setAttendancestatus] = useState('')
       let [reason, setReason] = useState('')
       let [remarks, setRemarks] = useState('')
       let [requestedstatus, setRequestedstatus] = useState('')
       let [requestedOn, setRequestedOn] = useState('')
       let [approvedby, setApprovedby] = useState('')
       let [approvedOn, setApprovedOn] = useState('')
       let [rejectedBy, setRejectedBy] = useState('')
       let [rejectedOn, setRejectedOn] = useState('')
       let [rejectionReason, setRejectionReason] = useState('')
    
       let [employee, setEmployee] = useState('')
    
       let [attendance, setAttendance] = useState('')
    

   let = useParams()
        console.log();
    
        useEffect(() => {
            api.get('/getRegularizationbyId{regularizationId}')
                .then((res) => {
                    console.log(res)
                    setRequestedCheckIn(res.data.requestedCheckIn)
                    setRequestedCheckOut(res.data.requestedCheckOut)
                    setAttendancestatus(res.data.attendancestatus)
                    setReason(res.data.reason)
                    setRemarks(res.data.remarks)
                    setRequestedstatus(res.data.requestedstatus)
                    setRequestedOn(res.data.requestedOn)
                    setApprovedby(res.data.approvedby)
                    setApprovedOn(res.data.approvedOn)
                    setRejectedBy(res.data.rejectedBy)
                    setRejectedOn(res.data.rejectedOn)
                    setRejectionReason(res.data.rejectionReason)
                    setEmployee(res.data.employee)
                    setAttendance(res.data.attendance)
                });
    
        }, [])
    
        let navigate = useNavigate();
        let updateData = (e) => {
            e.preventDefault()
            let payload = {
                requestedCheckIn, requestedCheckOut, attendancestatus, reason,
                remarks, requestedstatus, requestedOn, approvedby, approvedOn,
                rejectedBy, rejectedOn, rejectionReason, employee, attendance
            }
    
            api.put(`/updateregularization/{regularizationId}`, payload)
                .then(() => {
                    console.log("Data updated successfully")
                    toast("Data updated successfully")
                    navigate('/Regularization')
                })
                .catch(() => {
                    console.log("Failed to update the data")
                    toast("Failed to update the data")
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
                        <label htmlFor="requestedCheckIn" className="form-label">Requested check-In</label>
                        <input type="time" className="form-control" id="requestedCheckIn" onChange={(e) => { setRequestedCheckIn(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="requestedCheckOut" className="form-label">Requested Check-out</label>
                        <input type="time" className="form-control" id="requestedCheckOut" onChange={(e) => { setRequestedCheckOut(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="attendancestatus" className="form-label">Attendance status</label>
                        <input type="text" className="form-control" id="attendancestatus" onChange={(e) => { setAttendancestatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="reason" className="form-label">Reason</label>
                        <input type="text" className="form-control" id="reason" onChange={(e) => { setReason(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="remarks" className="form-label">Remarks</label>
                        <input type="text" className="form-control" id="remarks" onChange={(e) => { setRemarks(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="requestedstatus" className="form-label">Requested status</label>
                        <input type="text" className="form-control" id="requestedstatus" onChange={(e) => { setRequestedstatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="requestedOn" className="form-label">Requested On</label>
                        <input type="date" className="form-control" id="" onChange={(e) => { setRequestedOn(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedby" className="form-label">Approved by</label>
                        <input type="text" className="form-control" id="" onChange={(e) => { setApprovedby(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedOn" className="form-label">Approved On</label>
                        <input type="date" className="form-control" id="" onChange={(e) => { setApprovedOn(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="rejectedBy" className="form-label">Rejected By</label>
                        <input type="text" className="form-control" id="rejectedBy" onChange={(e) => { setRejectedBy(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="rejectedOn" className="form-label">Rejected On</label>
                        <input type="date" className="form-control" id="rejectedOn" onChange={(e) => { setRejectedOn(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="rejectionReason" className="form-label">Rejection Reason</label>
                        <input type="text" className="form-control" id="rejectionReason" onChange={(e) => { setRejectionReason(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary me-3" onClick={updateData} >Update</button>
                     <button type="button" class="btn btn-primary me-3" onClick={()=>naviage('/Regularization')} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdateRegularization
