import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdateUserExperience = () => {    
    let [companyName, setCompanyName] = useState('')
    let [jobTitle, setJobTitle] = useState('')
    let [startDate, setStartDate] = useState('')
    let [endDate, setEndDate] = useState('')
    let [currentlyWorking, setCurrentlyWorking] = useState('')
    let [rolesAndResponsibilities, setRolesAndResponsibilities] = useState('')
    let [location, setLocation] = useState('')
    let [salary, setSalary] = useState('')
    let [workplace, setWorkplace] = useState('')
    let [reasonForLeaving, setReasonForLeaving] = useState('')
    let [skills, setSkills] = useState('')
    let [toolsUsed, setToolsUsed] = useState('')

    let [user, setUser] = useState('')

    let experienceId = useParams()
    console.log(experienceId);

    useEffect(() => {
        api.get('/getexperience/{experienceId}')
            .then((res) => {
                setCompanyName(res.data.companyName)
                setJobTitle(res.data.jobTitle)
                setStartDate(res.data.startDate)
                setEndDate(res.data.endDate)
                setCurrentlyWorking(res.data.currentlyWorking)
                setRolesAndResponsibilities(res.data.rolesAndResponsibilities)
                setLocation(res.data.location)
                setSalary(res.data.salary)
                setWorkplace(res.data.workplace)
                setReasonForLeaving(res.data.reasonForLeaving)
                setSkills(res.data.skills)
                setToolsUsed(res.data.toolsUsed)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            companyName,
            jobTitle,
            startDate,
            endDate,
            currentlyWorking,
            rolesAndResponsibilities,
            location,
            salary,
            workplace,
            reasonForLeaving,
            skills,
            toolsUsed

        }

        api.put(`/updateexperience/{experienceId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/UserExperience')
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
                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                <input type="text" className="form-control" id="companyName" onChange={(e) => { setCompanyName(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                <input type="" className="form-control" id="jobTitle" onChange={(e) => { setJobTitle(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="" onChange={(e) => { setStartDate(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="endDate" className="form-label">EndDate</label>
                                <input type="date" className="form-control" id="" onChange={(e) => { setEndDate(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="currentlyWorking" className="form-label">Currently Working</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setCurrentlyWorking(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="rolesAndResponsibilities" className="form-label">Roles And Responsibilities</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setRolesAndResponsibilities(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setLocation(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="salary" className="form-label">Salary</label>
                                <input type="number" className="form-control" id="salary" onChange={(e) => { setSalary(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="workplace" className="form-label">Workplace</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setWorkplace(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="reasonForLeaving" className="form-label">ReasonForLeaving</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setReasonForLeaving(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="skills" className="form-label">Skills</label>
                                <input type="text" className="form-control" id="" onChange={(e) => { setSkills(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="toolsUsed" className="form-label">Tools Used</label>
                                <input type="text" className="form-control" id="toolsUsed" onChange={(e) => { setToolsUsed(e.target.value) }}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button type="button" class="btn btn-primary" onClick={updateData}>Update</button>
                                <button type="button" class="btn btn-danger" onClick={() => Navigate('/UserExperience')}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserExperience
