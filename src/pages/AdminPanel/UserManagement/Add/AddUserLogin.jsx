import React from 'react'

const AddUserLogin = () => {

   let [username, setUsername ] = useState('')
   let [passwordhash, setPasswordhash ] = useState('')
   let [email, setEmail ] = useState('')
   let [passwordresttoken, setPasswordresttoken ] = useState('')
   let [passwordresttokenexpiry, setPasswordresttokenexpiry ] = useState('')
   let [role, setRole ] = useState('')
   let [lastLogin, setLastLogin ] = useState('')
   let [status, setStatus ] = useState('')

   let [user, setUser ] = useState([])


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
            <label htmlFor = "username" className="form-label">Username</label>
            <input type="username" className="form-control" id="username" onChange={(e) =>{setUsername(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "passwordhash" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordhash" onChange={(e) =>{setPasswordhash(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "passwordresttokenexpiry" className="form-label">Password rest token expiry</label>
            <input type="text" className="form-control" id="passwordresttokenexpiry" onChange={(e) =>{setPasswordresttokenexpiry(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" onChange={(e) =>{setRole(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "lastLogin" className="form-label">Last Login</label>
            <input type="datetime-local" className="form-control" id="lastLogin" onChange={(e) =>{setLastLogin(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "status" className="form-label">Status</label>
            <input type="text" className="form-control" id="status" onChange={(e) =>{setStatus(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "" className="form-label"></label>
            <input type="" className="form-control" id="" onChange={(e) =>{set(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "" className="form-label"></label>
            <input type="" className="form-control" id="" onChange={(e) =>{set(e.target.value)}}></input>
         </div>         
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserLogin
