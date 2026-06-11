import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddRegularization = () => {

   const navigate = useNavigate();

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


   let fetchData = (e) => {
      e.preventDefault()
      console.log(); let payload = {

      }
      api.post("/", payload)
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
                     <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" class="btn btn-primary me-3" onClick={()=>naviage('/Regularization')} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddRegularization
