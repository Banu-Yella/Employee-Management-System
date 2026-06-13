import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const UpdateExam = () => {

    let [examName, setExamName] = useState('')
     let [examType, setExamType] = useState('')
     let [durationMinutes, setDurationMinutes] = useState('')
     let [examInstructions, setExamInstructions] = useState('')
     let [totalquestions, setTotalquestions] = useState('')
     let [questionPattern, setQuestionPattern] = useState('')
     let [passMarks, setPassMarks] = useState('')
     let [totalMarks, setTotalMarks] = useState('')
     let [status, setStatus] = useState('')
  
     let [assessment, setAssessment] = useState('')

  let ExamId = useParams()
    console.log(ExamId);

    useEffect(() => {
        api.get('/GetExamById/{ExamId}')
            .then((res) => {
              setExamName(res.data.examName) 
              setExamType(res.data.examType)
              setDurationMinutes(res.data.durationMinutes)
              setExamInstructions(res.data.examInstructions)
              setTotalquestions(res.data.totalquestions)
              setQuestionPattern(res.data.questionPattern)
              setPassMarks(res.data.passMarks)
              setTotalMarks(res.data.totalMarks)
              setStatus(res.data.status)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
          examName, examType, durationMinutes, examInstructions,
          totalquestions, questionPattern, passMarks, totalMarks, status, assessment
        }

        api.put(`/UpdateExam/{ExamId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Exam')
            })
            .catch(() => {
                console.log("Failed to update the data")
                toast("Failed to update the data")
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
                        <label htmlFor="examName" className="form-label">Exam Name</label>
                        <input type="text" className="form-control" id="examName" onChange={(e) => { setExamName(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="examType" className="form-label">Exam Type</label>
                        <input type="text" className="form-control" id="examType" onChange={(e) => { setExamType(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="durationMinutes" className="form-label">Duration Minutes</label>
                        <input type="number" className="form-control" id="durationMinutes" onChange={(e) => { setDurationMinutes(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="examInstructions" className="form-label">Exam Instructions</label>
                        <input type="text" className="form-control" id="examInstructions" onChange={(e) => { setExamInstructions(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalquestions" className="form-label">Total questions</label>
                        <input type="number" className="form-control" id="totalquestions" onChange={(e) => { setTotalquestions(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="questionPattern" className="form-label">Question Pattern</label>
                        <input type="text" className="form-control" id="questionPattern" onChange={(e) => { setQuestionPattern(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="passMarks" className="form-label">Pass Marks</label>
                        <input type="number" className="form-control" id="passMarks" onChange={(e) => { setPassMarks(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalMarks" className="form-label">Total Marks</label>
                        <input type="number" className="form-control" id="totalMarks" onChange={(e) => { setTotalMarks(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" className="btn btn-primary me-3" onClick={updateData}>Update</button>
                     <button type="button" className="btn btn-danger me-3" onClick={()=> navigate("/Exam")}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdateExam
