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
     <div className="container-fluid mt-3">

    <div className="card app-form-card">

        <div className="card-header app-form-header">
            Add Employee
        </div>

        <div className="card-body app-form-body">

            <form className="app-form">

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
                     <button type="button" className="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" className="btn btn-danger me-3" onClick={()=>navigate('/WeekOffpolicy')} >Cancel</button>
                  </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddWeekOffPolicy
