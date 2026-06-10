import React from 'react'

const AddJobApplication = () => {
    
   let [appliedDate, setAppliedDate ] = useState('')
   let [status, setStatus ] = useState('')

   let [userId, setUserId] = useState('')
   let [jobId, setJobId ] = useState('')

   let [user, setUser] = useState([])
   let [jobBoard, setJobBoard ] = useState([])
   


    let fetchData = () =>{
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
      <form>
         <div className="mb-3">
            <label htmlFor = "user" className="form-label">User name</label>
            <select className="form-control" value={userId} onChange={(e) => setUserId(e.target.value)}>
                  <option value="">Select Job title</option>
                  {user.map((u) => (<option key={u.userId} value={u.userId}>{u.name} </option>))}</select>
         </div>
         <div className="mb-3">
            <label htmlFor = "jobBoard" className="form-label">Job title</label>
           <select className="form-control" value={jobId} onChange={(e) => setJobId(e.target.value)}>
                  <option value="">Select Job title</option>
                  {jobBoard.map((job) => (<option key={job.jobId} value={job.jobId}>{job.jobTitle} </option>))}</select>
         </div>
         <div className="mb-3">
            <label htmlFor = "appliedDate" className="form-label">appliedDate</label>
            <input type="datetime-local" className="form-control" id="appliedDate" onChange={(e) =>{setAppliedDate(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "status" className="form-label">Status</label>
            <input type="text" className="form-control" id="status" onChange={(e) =>{setStatus(e.target.value)}}></input>
         </div>         
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddJobApplication
