import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'toastify'


const UpdateWeekOffPolicy = () => {
    let [policyName, setPolicyName] = useState('')
    let [weeklyOffDays, setWeeklyOffDays] = useState('')

    let = useParams()
    console.log();

    useEffect(() => {
        api.get('/getweekoffpolicy/{policyId}')
            .then((res) => {
                setPolicyName(res.data.policyName)
                setWeeklyOffDays(res.data.weeklyOffDays)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            policyName,
         weeklyOffDays
        }

        api.put(`/updateweekoffpolicy/{policyId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/WeekOffpolicy')
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
                        <label htmlFor="policyName" className="form-label">Policy Name</label>
                        <input type="text" className="form-control" id="policyName" onChange={(e) => { setPolicyName(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="weeklyOffDays" className="form-label">Weekly Off Days</label>
                        <input type="number" className="form-control" id="weeklyOffDays" onChange={(e) => { setWeeklyOffDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary me-3" onClick={updateData} >Update</button>
                     <button type="button" class="btn btn-primary me-3" onClick={()=>navigate('/WeekOffpolicy')} >Cancel</button>
                  </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
    )
}

export default UpdateWeekOffPolicy
