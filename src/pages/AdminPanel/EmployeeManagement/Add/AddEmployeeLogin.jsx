import React from 'react'

const AddEmployeeLogin = () => {

   let [employee, setEmployee] = useState('')
   let [role, setRole] = useState('')
   let [username, setUsername] = useState('')
   let [passwordHash, setPasswordHash] = useState('')
   let [passwordResetToken, setPasswordResetToken] = useState('')
   let [passwordResetExpiry, setPasswordResetExpiry] = useState('')
   let [lastLogin, setLastLogin] = useState('')
   let [status, setStatus] = useState('')

   let fetchData = () => {
      e.preventDefault()
      console.log(employee, role, username, passwordHash, passwordResetToken, passwordResetExpiry, lastLogin, status);
      let payload = {
         employee, role, username, passwordHash, passwordResetToken,
         passwordResetExpiry, lastLogin, status
      }
      axios.post("/savelogin", payload)
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
               <label htmlFor="empName" className="form-label"></label>
               <input type="text" className="form-control" id="empName" onChange={(e) => { setEmployee(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="role" className="form-label"></label>
               <input type="text" className="form-control" id="role" onChange={(e) => { setRole(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="username" className="form-label"></label>
               <input type="text" className="form-control" id="username" onChange={(e) => { setUsername(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="passhash" className="form-label"></label>
               <input type="password" className="form-control" id="passhash" onChange={(e) => { setPasswordHash(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="passrest" className="form-label"></label>
               <input type="password" className="form-control" id="passrest" onChange={(e) => { setPasswordResetToken(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="passexpiry" className="form-label"></label>
               <input type="datetime-local" className="form-control" id="passexpiry" onChange={(e) => { setPasswordResetExpiry(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="lastlogin" className="form-label"></label>
               <input type="datetime-local" className="form-control" id="lastlogin" onChange={(e) => { setLastLogin(e.target.value) }}></input>
            </div>
            <div class="mb-3">
               <label htmlFor="status" className="form-label"></label>
               <input type="text" className="form-control" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
            </div>           
            <button type="submit" class="btn btn-primary" onClick={fetchData} >Submit</button>
         </form>
      </div>
   )
}

export default AddEmployeeLogin
