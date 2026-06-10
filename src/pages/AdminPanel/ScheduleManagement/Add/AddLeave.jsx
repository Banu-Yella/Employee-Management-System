import React from 'react'

const AddLeave = () => {

   let [leaveStartDate, setLeaveStartDate ] = useState('')
   let [leaveEndDate, setLeaveEndDate ] = useState('')
   let [leaveType, setLeaveType ] = useState('')
   let [approvalStatus, setApprovalStatus ] = useState('')
   let [leaveDays, setLeaveDays ] = useState('')   
   let [approvedOn, setApprovedOn ] = useState('')
   let [rejectedBy, setRejectedBy ] = useState('')
   let [rejectedOn, setRejectedOn] = useState('')
   let [rejectionReason, setRejectionReason] = useState('')

   let [employee, setEmployee ] = useState('')
   let [employeeApprover, setEmployeeApprover ] = useState('')

    let fetchData = () =>{
      e.preventDefault()
      console.log(); let payload = {

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
               <label htmlFor="leaveStartDate" className="form-label">Leave Start Date</label>
               <input type="date" className="form-control" id="leaveStartDate" onChange={(e) => { setLeaveStartDate(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="leaveEndDate" className="form-label">Leave End Date</label>
               <input type="date" className="form-control" id="leaveEndDate" onChange={(e) => { setLeaveEndDate(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="leaveType" className="form-label">Leave Type</label>
               <input type="text" className="form-control" id="leaveType" onChange={(e) => { setLeaveType(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="approvalStatus" className="form-label">Approval Status</label>
               <input type="text" className="form-control" id="approvalStatus" onChange={(e) => { setApprovalStatus(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="leaveDays" className="form-label">Leave Days</label>
               <input type="number" className="form-control" id="leaveDays" onChange={(e) => { setLeaveDays(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="approvedOn" className="form-label">Approved on</label>
               <input type="datetime-local" className="form-control" id="approvedOn" onChange={(e) => { setApprovedOn(e.target.value) }}></input>
            </div>

            <div className="mb-3">
               <label htmlFor="rejectedBy" className="form-label">Rejected By</label>
               <input type="" className="form-control" id="rejectedBy" onChange={(e) => { setRejectedBy(e.target.value) }}></input>
            </div>

            <div className="mb-3">
               <label htmlFor="rejectedOn" className="form-label">Rejected on</label>
               <input type="datetime-local" className="form-control" id="rejectedOn" onChange={(e) => { setRejectedOn(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="rejectionReason" className="form-label">Rejection Reason</label>
               <input type="text" className="form-control" id="rejectionReason" onChange={(e) => { setRejectionReason(e.target.value) }}></input>
            </div>            
            <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
         </form>
      </div>
  )
}

export default AddLeave
