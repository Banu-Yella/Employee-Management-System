import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddAttendance = () => {

   const navigate = useNavigate();

   let [attendanceDate, setAttendanceDate] = useState('')
   let [punchInTime, setPunchInTime] = useState('')
   let [punchOutTime, setPunchOutTime] = useState('')
   let [lateByMinutes, setLateByMinutes] = useState('')
   let [earlyExitMinutes, setEarlyExitMinutes] = useState('')
   let [totalWorkMinutes, setTotalWorkMinutes] = useState('')
   let [overtimeMinutes, setOvertimeMinutes] = useState('')
   let [attendanceStatus, setAttendanceStatus] = useState('')

   let [regularization, setRegularization] = useState('')
   let [leave, setLeave] = useState('')
   let [weekOff, setWeekOff] = useState('')
   let [publicHoliday, setPublicHoliday] = useState('')
   let [shift, setShift] = useState('')
   let [employee, setEmployee] = useState('')

   let fetchData = (e) => {
      e.preventDefault()
      console.log();
      let payload = {

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
                        <label htmlFor="" className="form-label">Employee code</label>
                        <input type="text" className="form-control" id="empName" onChange={(e) => { setEmployee(e.target.value) }}></input>
                     </div>

                     <div className="col-md-6 mb-3">
                        <label htmlFor="attendanceDate" className="form-label">Attendance Date</label>
                        <input type="date" className="form-control" id="attendanceDate" onChange={(e) => { setAttendanceDate(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="punchInTime" className="form-label">Punch-In Time</label>
                        <input type="datetime-local" className="form-control" id="punchInTime" onChange={(e) => { setPunchInTime(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="punchOutTime" className="form-label">Punch-Out Time</label>
                        <input type="datetime-local" className="form-control" id="punchOutTime" onChange={(e) => { setPunchOutTime(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="lateByMinutes" className="form-label">Late By Minutes</label>
                        <input type="number" className="form-control" id="lateByMinutes" onChange={(e) => { setLateByMinutes(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="earlyExitMinutes" className="form-label">Early Exit Minutes</label>
                        <input type="number" className="form-control" id="earlyExitMinutes" onChange={(e) => { setEarlyExitMinutes(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalWorkMinutes" className="form-label">Total Work Minutes</label>
                        <input type="number" className="form-control" id="totalWorkMinutes" onChange={(e) => { setTotalWorkMinutes(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="overtimeMinutes" className="form-label">Overtime Minutes</label>
                        <input type="number" className="form-control" id="overtimeMinutes" onChange={(e) => { setOvertimeMinutes(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label>Attendance Status</label>
                        <select name="status" value={formData.attendanceStatus} onChange={handleChange}>
                           <option value="">Select Status</option>
                           {attendanceStatuses.map((attendanceStatus) => (<option key={attendanceStatus} value={attendanceStatus}>{attendanceStatus.replaceAll("_", " ")}</option>))}
                        </select>
                     </div>

                     <div className="col-md-6 mb-3">
                        <label htmlFor="regularization" className="form-label">Regularization</label>
                        <input type="" className="form-control" id="regularization" onChange={(e) => { setRegularization(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label">Leave</label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div>

                     <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label">Week-off</label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div> <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label">Public Holiday</label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label">Shift</label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Save</button>
                        <button type="button" class="btn btn-danger me-3" onClick={() => navigate('/Attendance')} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddAttendance
