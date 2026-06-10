import React from 'react'

const AddExam = () => {

   let [examName, setExamName] = useState('')
   let [examType, setExamType ] = useState('')
   let [durationMinutes, setDurationMinutes] = useState('')
   let [examInstructions, setExamInstructions ] = useState('')
   let [totalquestions, setTotalquestions ] = useState('')
   let [questionPattern, setQuestionPattern ] = useState('')
   let [passMarks, setPassMarks ] = useState('')
   let [totalMarks, setTotalMarks ] = useState('')
   let [status, setStatus ] = useState('')
  
   let [assessment, setAssessment] = useState('')


    let fetchData = () =>{
      e.preventDefault()
      console.log(); 
      let payload = {

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
            <label htmlFor = "examName" className="form-label">Exam Name</label>
            <input type="text" className="form-control" id="examName" onChange={(e) =>{setExamName(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "examType" className="form-label">Exam Type</label>
            <input type="text" className="form-control" id="examType" onChange={(e) =>{setExamType(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "durationMinutes" className="form-label">Duration Minutes</label>
            <input type="number" className="form-control" id="durationMinutes" onChange={(e) =>{setDurationMinutes(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "examInstructions" className="form-label">Exam Instructions</label>
            <input type="text" className="form-control" id="examInstructions" onChange={(e) =>{setExamInstructions(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "totalquestions" className="form-label">Total questions</label>
            <input type="number" className="form-control" id="totalquestions" onChange={(e) =>{setTotalquestions(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "questionPattern" className="form-label">Question Pattern</label>
            <input type="text" className="form-control" id="questionPattern" onChange={(e) =>{setQuestionPattern(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "passMarks" className="form-label">Pass Marks</label>
            <input type="number" className="form-control" id="passMarks" onChange={(e) =>{setPassMarks(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "totalMarks" className="form-label">Total Marks</label>
            <input type="number" className="form-control" id="totalMarks" onChange={(e) =>{setTotalMarks(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "status" className="form-label">Status</label>
            <input type="text" className="form-control" id="status" onChange={(e) =>{setStatus(e.target.value)}}></input>
         </div>
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddExam
