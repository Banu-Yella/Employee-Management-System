import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Exam = () => {

    let [exam, setExam] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/GetAllExam")
      console.log(res.data);
  
      let data = res;
      setExam(data);
    };
  
    React.useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Assessment Name</th>
            <th>Exam Name</th>
            <th>Exam Type</th>
            <th>Duration Minutes</th>
            <th>Exam Instructions</th>
            <th>Total questions</th>
            <th>Question pattern</th>
            <th>Pass marks</th>
            <th>Total marks</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>            
          </tr>
        </thead>
        <tbody>
          {
            exam.map((value) => {
              return (
                <tr key={value.examid}>
                  <tr>{value.examid}</tr>
                  <tr>{value.assessment?.assessmentName}</tr>
                  <tr>{value.examName}</tr>
                  <tr>{value.examType}</tr>
                  <tr>{value.durationMinutes}</tr>
                  <tr>{value.examInstructions}</tr>
                  <tr>{value.totalquestions}</tr>
                  <tr>{value.questionPattern}</tr>
                  <tr>{value.passMarks}</tr>
                  <tr>{value.totalMarks}</tr>
                  <tr>{value.status}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Exam
