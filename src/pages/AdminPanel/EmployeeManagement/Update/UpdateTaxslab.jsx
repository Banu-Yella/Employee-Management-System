import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdateTaxslab = () => {
    let [slabName, setSlabName] = useState('')
       let [minAmount, setMinAmount] = useState('')
       let [maxAmount, setMaxAmount] = useState('')
       let [percentage, setPercentage] = useState('')
       let [taxregimeType, setTaxregimeType] = useState('')
       let [active, setActive] = useState('')

 let taxid = useParams()
    console.log(taxid);

    useEffect(() => {
        api.get('gettaxslab/${taxid}')
            .then((res) => {
                console.log(res)
                setSlabName(res.data.slabName)
                setMinAmount(res.data.minAmount)
                setMaxAmount(res.data.maxAmount)
                setPercentage(res.data.percentage)
                setTaxregimeType(res.data.taxregimeType)
                setActive(res.data.active)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            slabName,
            minAmount,
            maxAmount,
            percentage,
            taxregimeType,
            active

        }

        api.put(`/updatetaxslab/{taxid}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Taxslab')
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
                     <button type="button" class="btn btn-primary  me-3" onClick={updateData}>Update</button>
                     <button type="button" class="btn btn-primary  me-3" onClick={()=> navigate("/Taxslab")}>Cancel</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default UpdateTaxslab
