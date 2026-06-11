import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Exam = () => {
  const navigate = useNavigate();

  let [exam, setExam] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/GetAllExam")
    console.log(res.data);

    let data = res;
    setExam(data);

  let deleteData = (examid) => {
      console.log(examid);
      if (window.confirm()) {
        api.delete("/DeleteExam/{ExamId}")
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
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddExam")} className="dropdown-item" href="#">Add New Exam</a></li>
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
            exam.map((value) => {
              return (
                <tr key={value.examid}>
                  <td>{value.examid}</td>
                  <td>{value.assessment?.assessmentName}</td>
                  <td>{value.examName}</td>
                  <td>{value.examType}</td>
                  <td>{value.durationMinutes}</td>
                  <td>{value.examInstructions}</td>
                  <td>{value.totalquestions}</td>
                  <td>{value.questionPattern}</td>
                  <td>{value.passMarks}</td>
                  <td>{value.totalMarks}</td>
                  <td>{value.status}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateExam/${value.examid}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.examid) }}>Delete</button>
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

export default Exam
