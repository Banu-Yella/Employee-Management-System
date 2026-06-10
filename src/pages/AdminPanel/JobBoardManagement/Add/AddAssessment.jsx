import React from 'react'

const AddAssessment = () => {

   let [assessmentName, setAssessmentName ] = useState('')
   let [totalScore, setTotalScore ] = useState('')
   let [qualifyingScore, setQualifyingScore ] = useState('')
   let [assessmentStage, setAssessmentStage ] = useState('')
   let [assessmentType, setAssessmentType ] = useState('')
   let [assessmentResult, setAssessmentResult ] = useState('')
   let [feedback, setFeedback ] = useState('')
   let [assessmentStatus, setAssessmentStatus ] = useState('')   

   let [job, setJob ] = useState([])


    let fetchData = () =>{
      e.preventDefault()
      console.log(); 
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
      axios.post("/", payload)
         .then(() => {
            console.log("Data saved");
         })
         .catch(() => {
            console.log("Data is not saved");
         })
   }

  

  return (
     <div>
      <form>
         <div className="mb-3">
            <label htmlFor = "assessmentName" className="form-label">Assessment Name</label>
            <input type="" className="form-control" id="assessmentName" onChange={(e) =>{setAssessmentName(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "totalScore" className="form-label">Total Score</label>
            <input type="number" className="form-control" id="totalScore" onChange={(e) =>{setTotalScore(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "qualifyingScore" className="form-label">Qualifying Score</label>
            <input type="number" className="form-control" id="qualifyingScore" onChange={(e) =>{setQualifyingScore(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "assessmentStage" className="form-label">Assessment Stage</label>
            <input type="text" className="form-control" id="assessmentStage" onChange={(e) =>{setAssessmentStage(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "assessmentType" className="form-label">Assessment Type</label>
            <input type="text" className="form-control" id="assessmentType" onChange={(e) =>{setAssessmentType(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "assessmentResult" className="form-label">Assessment Result</label>
            <input type="number" className="form-control" id="assessmentResult" onChange={(e) =>{setAssessmentResult(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "feedback" className="form-label">Feedback</label>
            <input type="text" className="form-control" id="feedback" onChange={(e) =>{setFeedback(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "assessmentStatus" className="form-label">Assessment Status</label>
            <input type="text" className="form-control" id="assessmentStatus" onChange={(e) =>{setAssessmentStatus(e.target.value)}}></input>
         </div>        
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddAssessment
