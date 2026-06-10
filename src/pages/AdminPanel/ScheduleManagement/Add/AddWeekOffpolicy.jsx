import React from 'react'

const AddWeekOffPolicy = () => {

   let [policyName, setPolicyName ] = useState('')
   let [weeklyOffDays, setWeeklyOffDays ] = useState('')

    let fetchData = () =>{
      e.preventDefault()
      console.log(); let payload = {

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
         <h1>Create New Employee</h1>
         <form>
            <div className="mb-3">
               <label htmlFor="policyName" className="form-label">Policy Name</label>
               <input type="text" className="form-control" id="policyName" onChange={(e) => { setPolicyName(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="weeklyOffDays" className="form-label">Weekly Off Days</label>
               <input type="date" className="form-control" id="weeklyOffDays" onChange={(e) => { setWeeklyOffDays(e.target.value) }}></input>
            </div>            
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
  )
}

export default AddWeekOffPolicy
