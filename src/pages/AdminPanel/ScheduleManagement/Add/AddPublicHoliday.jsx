import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddPublicHoliday = () => {
   const navigate = useNavigate();

   let [publicholidayName, setPublicholidayName] = useState('')
   let [publicholidayDate, setPublicholidayDate] = useState('')


   let fetchData = (e) => {
      e.preventDefault()
      console.log(); let payload = {

      }
      api.post("/savepublicholiday", payload)
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
                           <label htmlFor="publicholidayName" className="form-label">Public holiday name</label>
                           <input type="text" className="form-control" id="publicholidayName" onChange={(e) => { setPublicholidayName(e.target.value) }}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="publicholidayDate" className="form-label">Public holiday date</label>
                           <input type="date" className="form-control" id="" onChange={(e) => { setPublicholidayDate(e.target.value) }}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                        <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Save</button>
                        <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Cancel</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
   )
}

export default AddPublicHoliday
