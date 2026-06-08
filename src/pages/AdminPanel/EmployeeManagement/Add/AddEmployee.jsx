import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {

  let [employeeName, setEmployeeName] = useState('')
  let [manager, setManager] = useState('')
  let [role, setRole] = useState('')
  let [joiningDate, setJoiningDate] = useState('')
  let [resignationDate, setResignationDate] = useState('')
  let [designation, setDesignation] = useState('')
  let [department, setDepartment] = useState('')
  let [employmentType, setEmploymentType] = useState('')
  let [employmentStatus, setEmploymentStatus] = useState('')
  let [workLocation, setWorkLocation] = useState('')
  let [shiftid, setShiftid] = useState('')
  let [userid, setUserid] = useState('')

  const [shifts, setShifts] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  let fetchData = () => {
    e.preventDefault()
    console.log(employeeName, manager, role, joiningDate, resignationDate, designation,
      department, employmentType, employmentStatus, workLocation, shiftid, userid);
    let payload = {
      employeeName, manager, role, joiningDate, resignationDate, designation,
      department, employmentType, employmentStatus, workLocation, shiftid, userid
    }
    axios.post("/Saveemp", payload) 
      .then(() => {
        console.log("Data saved");
      })
      .catch(() => {
        console.log("Data is not saved");
      })
  }

 
  const fetchShift = async () => {
    try {
      const res = await axios.get("/getallshifts");
      setShifts(res.data);
    } catch (error) {
      console.error("Unable to load shifts", error);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("/getallusers");
      setUsers(res.data);
    } catch (error) {
      console.error("Unable to load users", error);
    }
  };




return (

  <div className="container-fluid">
    <div className="card shadow border-0">
      <div className="card-header bg-primary text-white">
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <div className="row">

            {/* Employee Name */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Employee Name</label>
              <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className="form-control" required />
            </div>

            {/* Manager */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Manager</label>
              <input type="text" name="manager" value={formData.manager} onChange={handleChange} className="form-control" />
            </div>

            {/* Role */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Role</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} className="form-control" required />
            </div>

            {/* Joining Date */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="form-control" />
            </div>

            {/* Resignation Date */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Resignation Date</label>
              <input type="date" name="resignationDate" value={formData.resignationDate} onChange={handleChange} className="form-control" />
            </div>

            {/* Designation */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Designation</label>
              <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="form-control" required />
            </div>

            {/* Department */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-control" required />
            </div>

            {/* Employment Type */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Employment Type</label>
              <select name="employmentType" value={formData.employmentType} onChange={handleChange} className="form-select" required>
                <option value="">Select Employment Type</option>
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERN">Intern</option>
              </select>
            </div>

            {/* Employment Status */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Employment Status</label>
              <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="form-select" required>
                <option value="">Select Status</option>
                <option value="ACTIVE">Active</option>
                <option value="RESIGNED">Resigned</option>
                <option value="TERMINATED">Terminated</option>
              </select>
            </div>

            {/* Work Location */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Work Location</label>
              <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} className="form-control" required />
            </div>

            {/* User */}

            <div className="col-md-6 mb-3">
              <label className="form-label">User</label>
              <select name="userid" value={formData.userid} onChange={handleChange} className="form-select" required>
                <option value="">Select User</option>
                {
                  users.map((item) => (
                    <option key={item.userId || item.id} value={item.userId || item.id}>
                      {item.username || item.name || item.userId}
                    </option>
                  ))}
              </select>
            </div>

            {/* Shift */}

            <div className="col-md-6 mb-3">
              <label className="form-label">Shift</label>
              <select name="shiftid" value={formData.shiftid} onChange={handleChange} className="form-select" required>
                <option value="">Select Shift</option>
                {
                  shifts.map((item) => (
                    <option key={item.shiftid || item.id} value={item.shiftid || item.id}>
                      {item.shiftName || item.name || item.shiftid}
                    </option>
                  ))}
              </select>
            </div>

          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary me-3">Save Employee</button>
            <button type="reset" className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

);
};

export default AddEmployee;