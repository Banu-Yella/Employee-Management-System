import React from 'react'

const AddAttendance = () => {

   let [ , ] = useState('')
   let [ , ] = useState('')
   let [ , ] = useState('')
   let [ , ] = useState('')
   let [ , ] = useState('')
   let [ , ] = useState('')
   let [ , ] = useState('')


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
         <h1>Create New Employee</h1>
         <form>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="" className="form-label"></label>
               <input type="" className="form-control" id="" onChange={(e) => { set(e.target.value) }}></input>
            </div>
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
  )
}

export default AddAttendance
