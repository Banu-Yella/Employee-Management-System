import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'


const UpdatePerformance = () => {

      let [totalLoginHrs, setTotalLoginHrs] = useState('')
       let [totalWorkingDays, setTotalWorkingDays] = useState('')
       let [totalNumberofDaysAbsent, setTotalNumberofDaysAbsent] = useState('')
       let [totalNumberofDaysOnLeave, setTotalNumberofDaysOnLeave] = useState('')
       let [averageLoginTime, setAverageLoginTime] = useState('')
       let [totalLeavebalance, setTotalLeavebalance] = useState('')
       let [totalOvertimeHrs, setTotalOvertimeHrs] = useState('')
       let [optionalholidays, setOptionalholidays] = useState('')
       let [employeeid, setEmployeeid] = useState('');
    

     let = useParams()
    console.log();

    useEffect(() => {
        api.get('/getperformance/{performanceId}')
            .then((res) => {
                console.log(res)
                setTotalLoginHrs(res.data.totalLoginHrs)
                setTotalWorkingDays(res.data.totalWorkingDays)
                setTotalNumberofDaysAbsent(res.data.totalNumberofDaysAbsent)
                setTotalNumberofDaysOnLeave(res.data.totalNumberofDaysOnLeave)
                setAverageLoginTime(res.data.averageLoginTime)
                setTotalLeavebalance(res.data.totalLeavebalance)
                setTotalOvertimeHrs(res.data.totalOvertimeHrs)
                setOptionalholidays(res.data.optionalholidays)
                setEmployeeid(res.data.employeeid)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
        totalLoginHrs,
         totalWorkingDays,
         totalNumberofDaysAbsent,
         totalNumberofDaysOnLeave,
         averageLoginTime,
         totalLeavebalance,
         totalOvertimeHrs,
         optionalholidays,
         employeeid: Number(employeeid)

        }

        api.put(`/updateperformance/${performanceId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Performance')
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
                        <label className="form-label">Employee Code</label>
                        <select className="form-control" value={employeeid} onChange={(e) => setEmployeeid(e.target.value)}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeid} value={emp.employeeid}>{emp.employeeCode}</option>))}</select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalLoginHrs" className="form-label">Total Login Hours</label>
                        <input type="number" className="form-control" id="totalLoginHrs" onChange={(e) => { setTotalLoginHrs(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalWorkingDays" className="form-label">Total Working Days</label>
                        <input type="number" className="form-control" id="totalWorkingDays" onChange={(e) => { setTotalWorkingDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalNumberofDaysAbsent" className="form-label">Total Number of Days Absent</label>
                        <input type="number" className="form-control" id="totalNumberofDaysAbsent" onChange={(e) => { setTotalNumberofDaysAbsent(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalNumberofDaysOnLeave" className="form-label">totalNumberofDaysOnLeave</label>
                        <input type="number" className="form-control" id="totalNumberofDaysOnLeave" onChange={(e) => { setTotalNumberofDaysOnLeave(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="averageLoginTime" className="form-label">Average Log-in Time</label>
                        <input type="number" className="form-control" id="averageLoginTime" onChange={(e) => { setAverageLoginTime(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalLeavebalance" className="form-label">Total leave balance</label>
                        <input type="number" className="form-control" id="totalLeavebalance" onChange={(e) => { setTotalLeavebalance(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalOvertimeHrs" className="form-label">Total Overtime Hours</label>
                        <input type="number" className="form-control" id="totalOvertimeHrs" onChange={(e) => { setTotalOvertimeHrs(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="optionalholidays" className="form-label">Optional holidays</label>
                        <input type="number" className="form-control" id="optionalholidays" onChange={(e) => { setOptionalholidays(e.target.value) }}></input>
                     </div>
                     <button type="button" class="btn btn-primary me-3" onClick={updateData}>Update</button>
                     <button type="button" class="btn btn-primary me-3" onClick={() => navigate("/Performance")}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdatePerformance
