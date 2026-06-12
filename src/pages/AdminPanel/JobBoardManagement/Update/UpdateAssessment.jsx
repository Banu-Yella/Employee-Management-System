import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'

const UpdateAssessment = () => {
    let [assessmentName, setAssessmentName] = useState('')
     let [totalScore, setTotalScore] = useState('')
     let [qualifyingScore, setQualifyingScore] = useState('')
     let [assessmentStage, setAssessmentStage] = useState('')
     let [assessmentType, setAssessmentType] = useState('')
     let [assessmentResult, setAssessmentResult] = useState('')
     let [feedback, setFeedback] = useState('')
     let [assessmentStatus, setAssessmentStatus] = useState('')
  
     let [job, setJob] = useState([])

  let = useParams()
    console.log();

    useEffect(() => {
        api.get('/GetAssessmentById/{assessmentId}')
            .then((res) => {
              console.log(res)
              setAssessmentName(res.data.assessmentName)
              setTotalScore(res.data.totalScore)
              setQualifyingScore(res.data.qualifyingScore)
              setAssessmentStage(res.data.assessmentStage)
              setAssessmentType(res.data.assessmentType)
              setAssessmentResult(res.data.assessmentResult)
              setFeedback(res.data.feedback)
              setAssessmentStatus(res.data.assessmentStatus)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
        assessmentName,
         totalScore,
         qualifyingScore,
         assessmentStage,
         assessmentType,
         assessmentResult,
         feedback,
         assessmentStatus
        }

        api.put(`/UpdateAssessment/{assessmentId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Assessment')
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
                        <label htmlFor="assessmentName" className="form-label">Assessment Name</label>
                        <input type="" className="form-control" id="assessmentName" onChange={(e) => { setAssessmentName(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalScore" className="form-label">Total Score</label>
                        <input type="number" className="form-control" id="totalScore" onChange={(e) => { setTotalScore(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="qualifyingScore" className="form-label">Qualifying Score</label>
                        <input type="number" className="form-control" id="qualifyingScore" onChange={(e) => { setQualifyingScore(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="assessmentStage" className="form-label">Assessment Stage</label>
                        <input type="text" className="form-control" id="assessmentStage" onChange={(e) => { setAssessmentStage(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="assessmentType" className="form-label">Assessment Type</label>
                        <input type="text" className="form-control" id="assessmentType" onChange={(e) => { setAssessmentType(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="assessmentResult" className="form-label">Assessment Result</label>
                        <input type="number" className="form-control" id="assessmentResult" onChange={(e) => { setAssessmentResult(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="feedback" className="form-label">Feedback</label>
                        <input type="text" className="form-control" id="feedback" onChange={(e) => { setFeedback(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="assessmentStatus" className="form-label">Assessment Status</label>
                        <input type="text" className="form-control" id="assessmentStatus" onChange={(e) => { setAssessmentStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="submit" className="btn btn-primary me-3" onClick={updateData}>Submit</button>
                     <button type="submit" className="btn btn-primary me-3" onClick={()=>navigate("/Assessment")}>Canvel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdateAssessment
