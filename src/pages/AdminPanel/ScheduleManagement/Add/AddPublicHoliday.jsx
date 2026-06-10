import React from 'react'

const AddPublicHoliday = () => {

   let [publicholidayName, setPublicholidayName ] = useState('')
   let [publicholidayDate, setPublicholidayDate ] = useState('')  


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
               <label htmlFor="publicholidayName" className="form-label">Public holiday name</label>
               <input type="text" className="form-control" id="publicholidayName" onChange={(e) => { setPublicholidayName(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="publicholidayDate" className="form-label">Public holiday date</label>
               <input type="date" className="form-control" id="" onChange={(e) => { setPublicholidayDate(e.target.value) }}></input>
            </div>            
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
  )
}

export default AddPublicHoliday
