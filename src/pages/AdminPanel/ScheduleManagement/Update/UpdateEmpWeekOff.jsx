import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'

const UpdateEmpWeekOff = () => {
  let [weekOffDate, setWeekOffDate] = useState('')
       let [weekOffPolicy, setWeekOffPolicy] = useState('')
       let [employee, setEmployee] = useState('')

   let = useParams()
      console.log();
  
      useEffect(() => {
          api.get('/getempweekoff/{weekOffId}')
              .then((res) => {
                setWeekOffDate(res.data.weekOffDate)
                setWeekOffPolicy(res.data.weekOffPolicy)
                setEmployee(res.data.employee)
              });
  
      }, [])
  
      let navigate = useNavigate();
      let updateData = (e) => {
          e.preventDefault()
          let payload = {
             weekOffDate, weekOffPolicy, employee
          }
  
          api.put(`/updateempweekoff/{weekOffId}`, payload)
              .then(() => {
                  console.log("Data updated successfully")
                  toast("Data updated successfully")
                  navigate('/EmpWeekOff')
              })
              .catch(() => {
                  console.log("Failed to update the data")
                  toast("Failed to update the data")
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
                     <button type="button" class="btn btn-primary me-3" onClick={updateData} >Update</button>
                     <button type="button" class="btn btn-primary me-3" onClick={() => navigate("/EmpWeekOff")} >Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdateEmpWeekOff
