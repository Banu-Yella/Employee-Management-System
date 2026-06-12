import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'

const UpdatePublicHoliday = () => {
     let [publicholidayName, setPublicholidayName] = useState('')
    let [publicholidayDate, setPublicholidayDate] = useState('')
    

  let = useParams()
      console.log();
  
      useEffect(() => {
          api.get('getpublicholiday/{holidayId}')
              .then((res) => {
                setPublicholidayName(res.data.publicholidayName)
                setPublicholidayDate(res.data.publicholidayDate)
              });
  
      }, [])
  
      let navigate = useNavigate();
      let updateData = (e) => {
          e.preventDefault()
          let payload = {
            publicholidayName,publicholidayDate
          }
  
          api.put(`/updatepublicholiday/{holidayId}`, payload)
              .then(() => {
                  console.log("Data updated successfully")
                  toast("Data updated successfully")
                  navigate('/PublicHoliday')
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
                           <label htmlFor="publicholidayName" className="form-label">Public holiday name</label>
                           <input type="text" className="form-control" id="publicholidayName" onChange={(e) => { setPublicholidayName(e.target.value) }}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="publicholidayDate" className="form-label">Public holiday date</label>
                           <input type="date" className="form-control" id="" onChange={(e) => { setPublicholidayDate(e.target.value) }}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                        <button type="button" class="btn btn-primary me-3" onClick={updateData} >Save</button>
                        <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Cancel</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
  )
}

export default UpdatePublicHoliday
