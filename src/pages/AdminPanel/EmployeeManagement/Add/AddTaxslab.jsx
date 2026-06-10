import React from 'react'

const AddTaxslab = () => {

   let [slabName, setSlabName] = useState('')
   let [minAmount, setMinAmount ] = useState('')
   let [maxAmount, setMaxAmount ] = useState('')
   let [percentage, setPercentage ] = useState('')
   let [taxregimeType, setTaxregimeType ] = useState('')
   let [active, setActive ] = useState('') 
   
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
            <label htmlFor = "slabName" className="form-label">Slab Name</label>
            <input type="text" className="form-control" id="slabName" onChange={(e) =>{setSlabName(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "minAmount" className="form-label">Min Amount</label>
            <input type="number" className="form-control" id="minAmount" onChange={(e) =>{setMinAmount(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "maxAmount" className="form-label">Max Amount</label>
            <input type="number" className="form-control" id="maxAmount" onChange={(e) =>{setMaxAmount(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "percentage" className="form-label">Percentage</label>
            <input type="number" className="form-control" id="percentage" onChange={(e) =>{setPercentage(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "taxregimeType" className="form-label">Tax Regime Type</label>
            <input type="text" className="form-control" id="taxregimeType" onChange={(e) =>{setTaxregimeType(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "active" className="form-label">Active</label>
            <select className="form-select" id="active" onChange={(e) => { setActive(e.target.value) }}>
                  <option>True</option>
                  <option>False</option>
               </select>
         </div>         
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddTaxslab
