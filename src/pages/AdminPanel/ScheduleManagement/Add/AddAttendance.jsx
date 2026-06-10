import React from 'react'

const AddAttendance = () => {


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

   let fetchData = () => {
      e.preventDefault()
      console.log();
      let payload = {

      }
      axios.post("/", payload)
         .then(() => {
            console.log("Data saved");
         })
         .catch(() => {
            console.log("Data is not saved");
         })
   }


   return (
      <div>
         <h1>Create New Employee</h1>
         <form>
            <div className="mb-3">
               <label htmlFor="" className="form-label">Employee code</label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>      
            
            <div className="mb-3">
               <label htmlFor="attendanceDate" className="form-label">Attendance Date</label>
               <input type="date" className="form-control" id="attendanceDate" onChange={(e) => { setAttendanceDate(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="punchInTime" className="form-label">Punch-In Time</label>
               <input type="datetime-local" className="form-control" id="punchInTime" onChange={(e) => { setPunchInTime(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="punchOutTime" className="form-label">Punch-Out Time</label>
               <input type="datetime-local" className="form-control" id="punchOutTime" onChange={(e) => { setPunchOutTime(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="lateByMinutes" className="form-label">Late By Minutes</label>
               <input type="number" className="form-control" id="lateByMinutes" onChange={(e) => { setLateByMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="earlyExitMinutes" className="form-label">Early Exit Minutes</label>
               <input type="number" className="form-control" id="earlyExitMinutes" onChange={(e) => { setEarlyExitMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="totalWorkMinutes" className="form-label">Total Work Minutes</label>
               <input type="number" className="form-control" id="totalWorkMinutes" onChange={(e) => { setTotalWorkMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="overtimeMinutes" className="form-label">Overtime Minutes</label>
               <input type="number" className="form-control" id="overtimeMinutes" onChange={(e) => { setOvertimeMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label>Attendance Status</label>
               <select name="status" value={formData.attendanceStatus} onChange={handleChange}>
                  <option value="">Select Status</option>
                  {attendanceStatuses.map((attendanceStatus) => (<option key={attendanceStatus} value={attendanceStatus}>{attendanceStatus.replaceAll("_", " ")}</option>))}
               </select>
            </div>

            <div className="mb-3">
               <label htmlFor="regularization" className="form-label">Regularization</label>
               <input type="" className="form-control" id="regularization" onChange={(e) => { setRegularization(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="" className="form-label">Leave</label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>

            <div className="mb-3">
               <label htmlFor="" className="form-label">Week-off</label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div> <div className="mb-3">
               <label htmlFor="" className="form-label">Public Holiday</label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="" className="form-label">Shift</label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>                  
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
   )
}

export default AddAttendance
