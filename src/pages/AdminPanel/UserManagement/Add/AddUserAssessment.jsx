import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddUserAssessment = () => {
   const navigate = useNavigate();

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

   let fetchData = (e) => {
      e.preventDefault()
      console.log();
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
      api.post("/saveuserassessment", payload)
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
                        <button type="button" className="btn btn-primary me-3" onClick={fetchData}>Save</button>
                        <button type="button" className="btn btn-danger me-3" onClick={() => navigate('/UserAssessment')}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddUserAssessment
