import React from 'react'

const AddEmpWeekOff = () => {

   let [weekOffDate, setWeekOffDate ] = useState('')
   let [weekOffPolicy, setWeekOffPolicy ] = useState('')
   let [employee, setEmployee] = useState('')


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
               <label htmlFor="weekOffDate" className="form-label">Week-off Date</label>
               <input type="date" className="form-control" id="weekOffDate" onChange={(e) => { setWeekOffDate(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>            
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
  )
}

export default AddEmpWeekOff
