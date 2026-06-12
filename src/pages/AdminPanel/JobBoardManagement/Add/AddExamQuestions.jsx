import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddExamQuestions = () => {
   const navigate = useNavigate();

   let [questionType, setQuestionType] = useState('')
   let [question, setQuestion] = useState('')
   let [answer, setAnswer] = useState('')
   let [marks, setMarks] = useState('')
   let [marksObtained, setMarksObtained] = useState('')
   let [correct, setCorrect] = useState('')
   let [totalMarks, setTotalMarks] = useState('')
   let [correctAnswer, setCorrectAnswer] = useState('')


   let [exam, setExam] = useState([])


   let fetchData = (e) => {
      e.preventDefault()
      console.log();
      let payload = {
         questionType, question, answer, marks,
         marksObtained, correct, totalMarks, correctAnswer
      }
      api.post("/save-questions", payload)
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
                        <label htmlFor="questionType" className="form-label">Question Type</label>
                        <input type="text" className="form-control" id="questionType" onChange={(e) => { setQuestionType(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="question" className="form-label">Question</label>
                        <input type="" className="form-control" id="question" onChange={(e) => { setQuestion(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" className="form-control" id="answer" onChange={(e) => { setAnswer(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="marks" className="form-label">Marks</label>
                        <input type="number" className="form-control" id="marks" onChange={(e) => { setMarks(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="marksObtained" className="form-label">Marks Obtained</label>
                        <input type="number" className="form-control" id="marksObtained" onChange={(e) => { setMarksObtained(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="correct" className="form-label">Correct</label>
                        <select className="form-select" id="correct" onChange={(e) => { setCorrect(e.target.value) }}>
                           <option>True</option>
                           <option>False</option>
                        </select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalMarks" className="form-label">Total Marks</label>
                        <input type="number" className="form-control" id="totalMarks" onChange={(e) => { setTotalMarks(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="correctAnswer" className="form-label">Correct Answer</label>
                        <input type="text" className="form-control" id="correctAnswer" onChange={(e) => { setCorrectAnswer(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <button type="button" className="btn btn-primary  me-3" onClick={fetchData}>Save</button>
                        <button type="button" className="btn btn-danger  me-3" onClick={() => navigate('/ExamQuestion')}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddExamQuestions
