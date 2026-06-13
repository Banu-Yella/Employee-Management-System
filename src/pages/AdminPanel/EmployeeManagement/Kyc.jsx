import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../axiosInstance.jsx";

const Kyc = () => {

  const [kyc, setKyc] = useState([]);
  const navigate = useNavigate();

  let fetchData = async () => {
    try {
      const res = await api.get("/getallkycs");

      console.log(res.data);

      setKyc(res.data);
    } catch (error) {
      console.log(error);
    }

    let deleteData = (kycId) => {
      console.log(kycId);
      if (window.confirm()) {
        api.delete("/deletekyc/{kycId}")
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


  useEffect(() => {
    fetchData();
  }, []);

  return (
     <div className="table-container">
    <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee Code</th>
            <th>Aadhaar number</th>
            <th>Pan number</th>
            <th>Bank name</th>
            <th>Bank account number</th>
            <th>Ifsc code</th>
            <th>Verified</th>
            <th>Verified by</th>
            <th>Verified on</th>
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
                  <li><a onClick={() => navigate("/AddKyc")} className="dropdown-item" href="#">Add New Kyc</a></li>
                  <li><a onClick={() => navigate("/DeleteAllKyc")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            kyc.map((value) => {
              return (
                <tr key={value.kycId}>
                  <td>{value.kycId}</td>
                  <td>{value.employee}</td>
                  <td>{value.aadhaarNumber}</td>
                  <td>{value.panNumber}</td>
                  <td>{value.bankAccountNumber}</td>
                  <td>{value.ifscCode}</td>
                  <td>{value.bankName}</td>
                  <td>{value.verified}</td>
                  <td>{value.verifiedBy}</td>
                  <td>{value.verifiedOn}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateKyc/${value.kycId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.kycId) }}>Delete</button>
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

export default Kyc
