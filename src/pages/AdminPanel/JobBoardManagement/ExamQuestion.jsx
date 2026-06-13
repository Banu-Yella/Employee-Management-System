import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";


const ExamQuestion = () => {
  const navigate = useNavigate();

  let [examQuestion, setExamQuestion] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/retrieve-all-questions")
    console.log(res.data);

    let data = res;
    setExamQuestion(data);

    let deleteData = (questionId) => {
      console.log(questionId);
      if (window.confirm()) {
        api.delete("/delete-questions/{QuestionId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table className="table table-striped table-hover app-table">
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
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddExamQuestion")} className="dropdown-item" href="#">Add New Exam Question</a></li>
                  <li><a onClick={() => navigate("/DeleteAll")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            examQuestion.map(() => {
              return (
                <tr key={value.questionId}>
                  <td>{value.questionId}</td>
                  <td>{value.exam?.examName}</td>
                  <td>{value.question}</td>
                  <td>{value.questionType}</td>
                  <td>{value.answer}</td>
                  <td>{value.marks}</td>
                  <td>{value.marksObtained}</td>
                  <td>{value.correct}</td>
                  <td>{value.totalMarks}</td>
                  <td>{value.correctAnswer}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateExamQuestion/${value.questionId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.questionId) }}>Delete</button>
                  </td>
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
