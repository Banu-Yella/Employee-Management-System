import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdateEmployeeLogin = () => {
   let [employee, setEmployee] = useState('')
    let [role, setRole] = useState('')
    let [username, setUsername] = useState('')
    let [passwordHash, setPasswordHash] = useState('')
    let [passwordResetToken, setPasswordResetToken] = useState('')
    let [passwordResetExpiry, setPasswordResetExpiry] = useState('')
    let [lastLogin, setLastLogin] = useState('')
    let [status, setStatus] = useState('')

    let loginid = useParams()
    console.log(loginid);

    useEffect(() => {
        api.get('/getlogin/${loginId}')
            .then((res) => {
                console.log(res)
                setEmployee(res.data.employee)
                setRole(res.data.role)
                setUsername(res.data.username)
                setPasswordHash(res.data.passwordHash)
                setPasswordResetToken(res.data.passwordResetToken)
                setPasswordResetExpiry(res.data.passwordResetExpiry)
                setLastLogin(res.data.lastLogin)
                setStatus(res.data.status)
            });

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            employee,
            role,
            username,
            passwordHash,
            passwordResetToken,
            passwordResetExpiry,
            lastLogin,
            status
        }

        api.put(`/updatelogin/${loginId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/EmployeeLogin')
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
                                <label htmlFor="empName" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" id="empName" value={employee} onChange={(e) => { setEmployee(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <input type="text" className="form-control" id="role" value={role} onChange={(e) => { setRole(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">User name</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passhash" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passhash" value={passwordHash} onChange={(e) => { setPasswordHash(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passrest" className="form-label">Rest Password</label>
                                <input type="password" className="form-control" id="passrest" value={passwordResetToken} onChange={(e) => { setPasswordResetToken(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passexpiry" className="form-label">Password Expiry</label>
                                <input type="datetime-local" className="form-control" id="passexpiry" value={passwordResetExpiry} onChange={(e) => { setPasswordResetExpiry(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastlogin" className="form-label">Last Login</label>
                                <input type="datetime-local" className="form-control" id="lastlogin" value={lastLogin} onChange={(e) => { setLastLogin(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <input type="text" className="form-control" id="status" value={status} onChange={(e) => { setStatus(e.target.value) }}></input>
                            </div>
                            <button type="button" className="btn btn-primary me-3" onClick={updateData} >Update</button>
                            <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/EmployeeLogin")}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployeeLogin
