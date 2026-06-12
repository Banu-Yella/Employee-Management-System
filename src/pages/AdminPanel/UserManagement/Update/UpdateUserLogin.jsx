import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'toastify'

const UpdateUserLogin = () => {

   let [username, setUsername ] = useState('')
   let [passwordhash, setPasswordhash ] = useState('')
   let [email, setEmail ] = useState('')
   let [passwordresttoken, setPasswordresttoken ] = useState('')
   let [passwordresttokenexpiry, setPasswordresttokenexpiry ] = useState('')
   let [role, setRole ] = useState('')
   let [lastLogin, setLastLogin ] = useState('')
   let [status, setStatus ] = useState('')

   let [user, setUser ] = useState([])


    let userLoginId = useParams()
    console.log(userLoginId);

    useEffect(() => {
        api.get('/getuser/{userId}')
            .then((res) => {
                console.log(res)
                setUsername(res.data.username)
                setPasswordhash(res.data.passwordhash)
                setEmail(res.data.email)
                setPasswordresttoken(res.data.passwordresttoken)
                setPasswordresttokenexpiry(res.data.passwordresttokenexpiry)   
                setRole(res.data.role)
                setLastLogin(res.data.lastLogin)
                setStatus(res.data.status)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            username,
            passwordhash,
            email,
            passwordresttoken,
            passwordresttokenexpiry,
            role,
            lastLogin,
            status,
            user
        }

        api.put(`/updatelogindetails/{loginId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/UserLogin')
            })
            .catch(() => {
                console.log("Failed to update the data")
                toast("Failed to update the data")
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
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="username" className="form-control" id="username" onChange={(e) => { setUsername(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="passwordhash" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordhash" onChange={(e) => { setPasswordhash(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="passwordresttokenexpiry" className="form-label">Password rest token expiry</label>
                        <input type="text" className="form-control" id="passwordresttokenexpiry" onChange={(e) => { setPasswordresttokenexpiry(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input type="text" className="form-control" id="role" onChange={(e) => { setRole(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="lastLogin" className="form-label">Last Login</label>
                        <input type="datetime-local" className="form-control" id="lastLogin" onChange={(e) => { setLastLogin(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>                    
                     <button type="button" class="btn btn-primary" onClick={updateData}>Update</button>
                      <button type="button" class="btn btn-primary" onClick={(()=>navigate('/UserLogin'))}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    )
}

export default UpdateUserLogin
