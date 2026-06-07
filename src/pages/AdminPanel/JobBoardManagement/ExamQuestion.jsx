import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ExamQuestion = () => {

  let [examQuestion, setExamQuestion] = useState([]);
  
    let fetchData = async () => {
      let res = await axios.get("/retrieve-all-questions")
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
            <th>Exam name</th>
            <th>Question</th>
            <th>Question type</th>
            <th>Answer</th>
            <th>Marks</th>
            <th>Marks obtained</th>
            <th>Correct</th>
            <th>Total marks</th>
            <th>Correct answer</th>
            <th>Created at</th>
            <th>Updated at</th>           
          </tr>
        </thead>
        <tbody>
          {
            examQuestion.map(() => {
              return (
                <tr key={value.questionId}>
                  <tr>{value.questionId}</tr>
                  <tr>{value.exam?.examName}</tr>
                  <tr>{value.question}</tr>
                  <tr>{value.questionType}</tr>                  
                  <tr>{value.answer}</tr>
                  <tr>{value.marks}</tr>
                  <tr>{value.marksObtained}</tr>
                  <tr>{value.correct}</tr>
                  <tr>{value.totalMarks}</tr>
                  <tr>{value.correctAnswer}</tr>
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

export default ExamQuestion
