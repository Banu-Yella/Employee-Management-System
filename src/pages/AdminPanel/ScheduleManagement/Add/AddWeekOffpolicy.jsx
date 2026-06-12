import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddWeekOffPolicy = () => {
   const navigate = useNavigate();

   let [policyName, setPolicyName] = useState('')
   let [weeklyOffDays, setWeeklyOffDays] = useState('')

   let fetchData = (e) => {
      e.preventDefault()
      console.log(); let payload = {
         policyName,
         weeklyOffDays
      }
      api.post("/saveweekoffpolicy", payload)
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
                        <label htmlFor="policyName" className="form-label">Policy Name</label>
                        <input type="text" className="form-control" id="policyName" onChange={(e) => { setPolicyName(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="weeklyOffDays" className="form-label">Weekly Off Days</label>
                        <input type="number" className="form-control" id="weeklyOffDays" onChange={(e) => { setWeeklyOffDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" class="btn btn-primary me-3" onClick={()=>navigate('/WeekOffpolicy')} >Cancel</button>
                  </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddWeekOffPolicy
