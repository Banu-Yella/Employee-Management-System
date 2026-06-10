import React from 'react'

const AddShift = () => {

   let [shiftType, setShiftType ] = useState('')
   let [shiftName, setShiftName ] = useState('')
   let [startTime, setStartTime ] = useState('')
   let [endTime, setEndTime ] = useState('')
   let [crossDay, setCrossDay ] = useState('')
   let [lateGraceMinutes, setLateGraceMinutes ] = useState('')
   let [earlyExitGraceMinutes, setEarlyExitGraceMinutes ] = useState('')
   let [minWorkHours, setMinWorkHours ] = useState('')
   let [active, setActive ] = useState('')  

    let fetchData = () =>{
      e.preventDefault()
      console.log(); let payload = {
         shiftType,
         shiftName,
         startTime,
         endTime,
         crossDay,
         lateGraceMinutes,
         earlyExitGraceMinutes,
         minWorkHours,
         active

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
               <label htmlFor="shiftName" className="form-label">ShiftName</label>
               <input type="text" className="form-control" id="shiftName" onChange={(e) => { setShiftName(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="shiftType" className="form-label">Shift Type</label>
               <input type="text" className="form-control" id="shiftType" onChange={(e) => { setShiftType(e.target.value) }}></input>
            </div>           
            <div className="mb-3">
               <label htmlFor="startTime" className="form-label">Start Time</label>
               <input type="time" className="form-control" id="startTime" onChange={(e) => { setStartTime(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="endTime" className="form-label">End Time</label>
               <input type="time" className="form-control" id="endTime" onChange={(e) => { setEndTime(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="crossDay" className="form-label">Cross Day</label>
               <select className="form-select" id="crossDay" onChange={(e) => { setCrossDay(e.target.value) }}>
                  <option>True</option>
                  <option>False</option>
               </select>
            </div>
            <div className="mb-3">
               <label htmlFor="lateGraceMinutes" className="form-label">Late Grace Minutes</label>
               <input type="number" className="form-control" id="lateGraceMinutes" onChange={(e) => { setLateGraceMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="earlyExitGraceMinutes" className="form-label">Early Exit Grace Minutes</label>
               <input type="number" className="form-control" id="earlyExitGraceMinutes" onChange={(e) => { setEarlyExitGraceMinutes(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="minWorkHours" className="form-label">Min Work Hours</label>
               <input type="number" className="form-control" id="minWorkHours" onChange={(e) => { setMinWorkHours(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="active" className="form-label">Active</label>
                 <select className="form-select" id="active" onChange={(e) => { setActive(e.target.value) }}>
                  <option>True</option>
                  <option>False</option>
               </select>
            </div>
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
  )
}

export default AddShift
