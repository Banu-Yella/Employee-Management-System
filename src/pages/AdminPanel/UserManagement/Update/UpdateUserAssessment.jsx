import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdateUserAssessment = () => {
    let [educationType, setEducationType] = useState('')
    let [educationLevel, setEducationLevel] = useState('')
    let [course, setCourse] = useState('')
    let [specialization, setSpecialization] = useState('')
    let [university, setUniversity] = useState('')
    let [yearOfPassing, setYearOfPassing] = useState('')
    let [percentage, setPercentage] = useState('')
    let [grade, setGrade] = useState('')
    let [learningMode, setLearningMode] = useState('')
    let [location, setLocation] = useState('')

    let [user, setUser] = useState('')

    let userAssessmentId = useParams()
    console.log(userAssessmentId);

    useEffect(() => {
        api.get('/getuserassessment/{userAssessmentId}')
            .then((res) => {
                setEducationType(res.data.educationType)
                setEducationLevel(res.data.educationLevel)
                setCourse(res.data.course)
                setSpecialization(res.data.specialization)
                setUniversity(res.data.university)
                setYearOfPassing(res.data.yearOfPassing)
                setPercentage(res.data.percentage)
                setGrade(res.data.grade)
                setLearningMode(res.data.learningMode)
                setLocation(res.data.location)
                setUser(res.data.user)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
        educationType,
         educationLevel,
         course,
         specialization,
         university,
         yearOfPassing,
         percentage,
         grade,
         learningMode,
         location
        }

        api.put(`/updateuserassessment/{userAssessmentId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/UserAssessment')
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
                        <label htmlFor="educationType" className="form-label">Education Type</label>
                        <input type="text" className="form-control" id="educationType" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="educationLevel" className="form-label">Education Level</label>
                        <input type="text" className="form-control" id="" onChange={(e) => { setEducationLevel(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="course" className="form-label">Course</label>
                        <input type="text" className="form-control" id="course" onChange={(e) => { setCourse(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="specialization" className="form-label">Specialization</label>
                        <input type="text" className="form-control" id="specialization" onChange={(e) => { setSpecialization(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="university" className="form-label">University</label>
                        <input type="text" className="form-control" id="" onChange={(e) => { setUniversity(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="yearOfPassing" className="form-label">Year Of Passing</label>
                        <input type="number" className="form-control" id="" onChange={(e) => { setYearOfPassing(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="percentage" className="form-label">Percentage</label>
                        <input type="number" className="form-control" id="" onChange={(e) => { setPercentage(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="grade" className="form-label">Grade</label>
                        <input type="text" className="form-control" id="" onChange={(e) => { setGrade(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="learningMode" className="form-label">Learning Mode</label>
                        <input type="text" className="form-control" id="" onChange={(e) => { setLearningMode(e.target.value) }}></input>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" onChange={(e) => { setLocation(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary" onClick={updateData}>Update</button>
                     <button type="button" class="btn btn-danger" onClick={() => navigate('/UserAssessment')}>Cancel</button>
                  </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
    )
}

export default UpdateUserAssessment
