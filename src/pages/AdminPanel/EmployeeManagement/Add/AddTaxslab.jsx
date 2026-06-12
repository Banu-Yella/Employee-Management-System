import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";

const AddTaxslab = () => {

      const navigate = useNavigate();

   let [slabName, setSlabName] = useState('')
   let [minAmount, setMinAmount] = useState('')
   let [maxAmount, setMaxAmount] = useState('')
   let [percentage, setPercentage] = useState('')
   let [taxregimeType, setTaxregimeType] = useState('')
   let [active, setActive] = useState('')

   let fetchData = (e) => {
      e.preventDefault()
      console.log();
      let payload = {

      }
      api.post("/getalltaxslabs", payload)
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
                        <label htmlFor="slabName" className="form-label">Slab Name</label>
                        <input type="text" className="form-control" id="slabName" onChange={(e) => { setSlabName(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="minAmount" className="form-label">Min Amount</label>
                        <input type="number" className="form-control" id="minAmount" onChange={(e) => { setMinAmount(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="maxAmount" className="form-label">Max Amount</label>
                        <input type="number" className="form-control" id="maxAmount" onChange={(e) => { setMaxAmount(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="percentage" className="form-label">Percentage</label>
                        <input type="number" className="form-control" id="percentage" onChange={(e) => { setPercentage(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="taxregimeType" className="form-label">Tax Regime Type</label>
                        <input type="text" className="form-control" id="taxregimeType" onChange={(e) => { setTaxregimeType(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="active" className="form-label">Active</label>
                        <select className="form-select" id="active" onChange={(e) => { setActive(e.target.value) }}>
                           <option>True</option>
                           <option>False</option>
                        </select>
                        
                     </div>
                     <div className="col-md-6 mb-3">
                     <button type="button" class="btn btn-primary  me-3" onClick={fetchData}>Save</button>
                     <button type="button" class="btn btn-primary  me-3" onClick={()=> navigate("/Taxslab")}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddTaxslab
