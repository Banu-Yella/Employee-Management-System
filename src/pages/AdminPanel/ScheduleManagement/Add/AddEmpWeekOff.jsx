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
      <div className="container-fluid mt-3">

    <div className="card app-form-card">

        <div className="card-header app-form-header">
            Add Employee
        </div>

        <div className="card-body app-form-body">

            <form className="app-form">

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
                     <button type="button" className="btn btn-primary me-3" onClick={fetchData} >Save</button>
                     <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/EmpWeekOff")} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   )
}

export default AddEmpWeekOff
