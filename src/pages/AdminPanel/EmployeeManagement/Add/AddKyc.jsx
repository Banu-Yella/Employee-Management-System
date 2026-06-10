import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddKyc = () => {

   const navigate = useNavigate();

   let [aadhaarNumber, setAadhaarNumber] = useState('')
   let [panNumber, setPanNumber] = useState('')
   let [bankAccountNumber, setBankAccountNumber] = useState('')
   let [ifscCode, setIfscCode] = useState('')
   let [bankName, setBankName] = useState('')
   let [verified, setVerified] = useState('')
   let [verifiedById, setVerifiedById] = useState('')
   let [employeeId, setEmployeeId] = useState('');
   let [verifiedOn, setVerifiedOn] = useState('')
   let [createdAt, setCreatedAt] = useState('')
   let [updatedAt, setUpdatedAt] = useState('')


   let [employees, setEmployees] = useState([])

   const fetchMasterData = async () => {
      try {
         const empRes = await api.get("/GetAllEmp");

         setEmployees(empRes.data);

      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchMasterData();
   }, []);

   let fetchData = (e) => {
      e.preventDefault()
      console.log();
      let payload = {
         aadhaarNumber,
         panNumber,
         bankAccountNumber,
         ifscCode,
         bankName,
         employee: { employeeId: employeeId },
         verifiedBy: { employeeId: verifiedById, },
         verifiedOn,
         createdAt,

      }

      api.post("/savekyc", payload)
         .then(() => {
            console.log("Data saved");
         })
         .catch(() => {
            console.log("Data is not saved");
         })
   }

   return (
      <div className="container-fluid">
         <div>
            <form>
               <div className="row">
                  <div className="col-md-6 mb-3">
                     <label className="form-label">Employee Code</label>
                     <select className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                        <option value="">Select Employee</option>
                        {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeeCode}</option>))}</select>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="aadhaarNumber" className="form-label">Aadhaar Number</label>
                     <input type="number" className="form-control" id="aadhaarNumber" onChange={(e) => { setAadhaarNumber(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="panNumber" className="form-label">PAN Number</label>
                     <input type="text" className="form-control" id="panNumber" onChange={(e) => { setPanNumber(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="bankAccountNumber" className="form-label">Bank Account Number</label>
                     <input type="" className="form-control" id="bankAccountNumber" onChange={(e) => { setBankAccountNumber(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
                     <input type="text" className="form-control" id="ifscCode" onChange={(e) => { setIfscCode(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="bankName" className="form-label">Bank Name</label>
                     <input type="" className="form-control" id="bankName" onChange={(e) => { setBankName(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="verified" className="form-label">Verified</label>
                     <select className="form-select" id="verified" onChange={(e) => { setVerified(e.target.value) }}>
                        <option>True</option>
                        <option>False</option>
                     </select>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="verifiedBy" className="form-label">Verified By</label>
                     <select className="form-control" value={verifiedById} onChange={(e) => setVerifiedById(e.target.value)}>
                        <option value="">Select Verifier</option>
                        {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeeName} </option>))}</select>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="verifiedOn" className="form-label">Verified on</label>
                     <input type="datetime-local" className="form-control" id="verifiedOn" onChange={(e) => { setVerifiedOn(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="createdAt" className="form-label">Created at</label>
                     <input type="datetime-local" className="form-control" id="createdAt" onChange={(e) => { setCreatedAt(e.target.value) }}></input>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="updatedAt" className="form-label">Updated at</label>
                     <input type="datetime-local" className="form-control" id="updatedAt" onChange={(e) => { setUpdatedAt(e.target.value) }}></input>
                  </div>
               </div>
               <div className="col-md-6 mb-3">
                  <button type="button" className="btn btn-primary me-3" onClick={fetchData} >Save Kyc</button>
                  <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/Kyc")} >Cancel</button>
               </div>
            </form>
         </div>
      </div>

   )
}

export default AddKyc
