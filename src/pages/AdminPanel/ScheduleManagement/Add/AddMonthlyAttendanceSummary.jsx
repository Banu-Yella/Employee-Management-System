import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddMonthlyAttendanceSummary = () => {
    const navigate = useNavigate();

    let [year, setYear] = useState('')
    let [month, setMonth] = useState('')
    let [totalCalendarDays, setTotalCalendarDays] = useState('')
    let [workingDays, setWorkingDays] = useState('')
    let [presentDays, setPresentDays] = useState('')
    let [halfDays, setHalfDays] = useState('')
    let [absentDays, setAbsentDays] = useState('')
    let [weekOffDays, setWeekOffDays] = useState('')
    let [publicHolidays, setPublicHolidays] = useState('')
    let [optionalHolidays, setOptionalHolidays] = useState('')
    let [sickLeaveDays, setSickLeaveDays] = useState('')
    let [casualLeaveDays, setCasualLeaveDays] = useState('')
    let [totalWorkMinutes, setTotalWorkMinutes] = useState('')
    let [totalOvertimeMinutes, setTotalOvertimeMinutes] = useState('')

    let [employee, setEmployee] = useState('')


    let fetchData = (e) => {
        e.preventDefault()
        console.log(); let payload = {

        }
        api.post("/", payload)
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
                                <label htmlFor="employee" className="form-label">Employee code</label>
                                <input type="text" className="form-control" id="employee" onChange={(e) => { setEmployee(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="year" className="form-label">Year</label>
                                <input type="number" className="form-control" id="year" onChange={(e) => { setYear(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="month" className="form-label">Month</label>
                                <input type="month" className="form-control" id="month" onChange={(e) => { setMonth(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="totalCalendarDays" className="form-label">Total Calendar Days</label>
                                <input type="number" className="form-control" id="totalCalendarDays" onChange={(e) => { setTotalCalendarDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="workingDays" className="form-label">Working Days</label>
                                <input type="number" className="form-control" id="workingDays" onChange={(e) => { setWorkingDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="presentDays" className="form-label">Present Days</label>
                                <input type="number" className="form-control" id="presentDays" onChange={(e) => { setPresentDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="halfDays" className="form-label">Half Days</label>
                                <input type="number" className="form-control" id="halfDays" onChange={(e) => { setHalfDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="absentDays" className="form-label">Absent Days</label>
                                <input type="number" className="form-control" id="absentDays" onChange={(e) => { setAbsentDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="weekOffDays" className="form-label">Week-off Days</label>
                                <input type="number" className="form-control" id="weekOffDays" onChange={(e) => { setWeekOffDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="publicHolidays" className="form-label">Public Holidays</label>
                                <input type="number" className="form-control" id="publicHolidays" onChange={(e) => { setPublicHolidays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="optionalHolidays" className="form-label">Optional Holidays</label>
                                <input type="number" className="form-control" id="" onChange={(e) => { setOptionalHolidays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="sickLeaveDays" className="form-label">Sick Leave Days</label>
                                <input type="sickLeaveDays" className="form-control" id="sickLeaveDays" onChange={(e) => { setSickLeaveDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="casualLeaveDays" className="form-label">Casual Leave Days</label>
                                <input type="number" className="form-control" id="casualLeaveDays" onChange={(e) => { setCasualLeaveDays(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="totalWorkMinutes" className="form-label">Total Work Minutes</label>
                                <input type="number" className="form-control" id="totalWorkMinutes" onChange={(e) => { setTotalWorkMinutes(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="totalOvertimeMinutes" className="form-label">Total over time minutes</label>
                                <input type="number" className="form-control" id="totalOvertimeMinutes" onChange={(e) => { setTotalOvertimeMinutes(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                            <button type="button" class="btn btn-primary me-3" onClick={fetchData} >Submit</button>
                            <button type="button" class="btn btn-primary me-3" onClick={() => navigate("/MonthlyAttendanceSummary")} >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMonthlyAttendanceSummary
