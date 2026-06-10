import React from 'react'

const AddExamQuestions = () => {

   let [questionType, setQuestionType ] = useState('')
   let [question, setQuestion ] = useState('')
   let [answer, setAnswer ] = useState('')
   let [marks, setMarks ] = useState('')
   let [marksObtained, setMarksObtained ] = useState('')
   let [correct, setCorrect] = useState('')
   let [totalMarks, setTotalMarks ] = useState('')
   let [correctAnswer, setCorrectAnswer] = useState('')
  

   let [exam, setExam ] = useState([])


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
            <label htmlFor = "questionType" className="form-label">Question Type</label>
            <input type="text" className="form-control" id="questionType" onChange={(e) =>{setQuestionType(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "question" className="form-label">Question</label>
            <input type="" className="form-control" id="question" onChange={(e) =>{setQuestion(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "answer" className="form-label">Answer</label>
            <input type="text" className="form-control" id="answer" onChange={(e) =>{setAnswer(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "marks" className="form-label">Marks</label>
            <input type="number" className="form-control" id="marks" onChange={(e) =>{setMarks(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "marksObtained" className="form-label">Marks Obtained</label>
            <input type="number" className="form-control" id="marksObtained" onChange={(e) =>{setMarksObtained(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "correct" className="form-label">Correct</label>
              <select className="form-select" id="correct" onChange={(e) => { setCorrect(e.target.value) }}>
                  <option>True</option>
                  <option>False</option>
               </select>
         </div>
         <div className="mb-3">
            <label htmlFor = "totalMarks" className="form-label">Total Marks</label>
            <input type="number" className="form-control" id="totalMarks" onChange={(e) =>{setTotalMarks(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "correctAnswer" className="form-label">Correct Answer</label>
            <input type="text" className="form-control" id="correctAnswer" onChange={(e) =>{setCorrectAnswer(e.target.value)}}></input>
         </div>         
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddExamQuestions
