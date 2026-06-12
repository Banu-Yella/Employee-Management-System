import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddEmpWeekOff = () => {

   const navigate = useNavigate();

   let [weekOffDate, setWeekOffDate] = useState('')
   let [weekOffPolicy, setWeekOffPolicy] = useState('')
   let [employee, setEmployee] = useState('')


   let fetchData = (e) => {
      e.preventDefault()
      console.log(); let payload = {
         weekOffDate, weekOffPolicy, employee
      }
      api.post("/saveempweekoff", payload)
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
                        <label htmlFor="weekOffDate" className="form-label">Week-off Date</label>
                        <input type="date" className="form-control" id="weekOffDate" onChange={(e) => { setWeekOffDate(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" class="btn btn-primary me-3" onClick={() => navigate("/EmpWeekOff")} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   )
}

export default AddEmpWeekOff
