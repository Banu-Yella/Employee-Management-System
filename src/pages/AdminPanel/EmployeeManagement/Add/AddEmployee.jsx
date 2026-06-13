import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import api from "../../../../axiosInstance.jsx";

const AddEmployee = () => {

  const navigate = useNavigate();

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
 

  const [shifts, setShifts] = useState([]);


  let fetchData = (e) => {
    e.preventDefault()
    console.log(employeeName, manager, role, joiningDate, resignationDate, designation,
      department, employmentType, employmentStatus, workLocation, shiftid );
      

    let payload = {
      
      employeeName, manager, role, joiningDate, resignationDate, designation,
      department, employmentType, employmentStatus, workLocation,  shiftId: Number(shiftid)
      
    }
    console.log("Payload:", payload);
    
    api.post("/Saveemp", payload)
      .then(() => {
        console.log("Data saved successfully");
      }).catch(() => {
        console.log("Failed to save data!")
      })
  }

  const fetchShift = async () => {
    try {
      const res = await api.get("/getallshifts");
      setShifts(res.data);
    } catch (error) {
      console.error("Unable to load shifts", error);
    }
  };


  useEffect(() => {
    fetchShift();    
  }, []);


  return (

    <div className="container-fluid mt-3">
      <div className="card app-form-card">
        <div className="card-header app-form-header">Add Employee</div>
        <div className="card-body app-form-body">
          <form className="app-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Employee Name</label>
                <input type="text" name="employeeName" className="form-control" required onChange={(e) => { setEmployeeName(e.target.value) }} />
              </div>

              {/* Manager */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Manager</label>
                <input type="text" name="manager" className="form-control" onChange={(e) => { setManager(e.target.value) }} />
              </div>

              {/* Role */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Role</label>
                <input type="text" name="role" className="form-control" required onChange={(e) => { setRole(e.target.value) }} />
              </div>

              {/* Joining Date */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Joining Date</label>
                <input type="date" name="joiningDate" className="form-control" onChange={(e) => { setJoiningDate(e.target.value) }} />
              </div>

              {/* Resignation Date */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Resignation Date</label>
                <input type="date" name="resignationDate" className="form-control" onChange={(e) => { setResignationDate(e.target.value) }} />
              </div>

              {/* Designation */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Designation</label>
                <input type="text" name="designation" className="form-control" required onChange={(e) => { setDesignation(e.target.value) }} />
              </div>

              {/* Department */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>
                <input type="text" name="department" className="form-control" required onChange={(e) => { setDepartment(e.target.value) }} />
              </div>

              {/* Employment Type */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Employment Type</label>
                <select name="employmentType" className="form-select" required onChange={(e) => { setEmploymentType(e.target.value) }} >
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
                <select name="employmentStatus" className="form-select" required onChange={(e) => { setEmploymentStatus(e.target.value) }} >
                  <option value="">Select Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="RESIGNED">Resigned</option>
                  <option value="TERMINATED">Terminated</option>
                </select>
              </div>

              {/* Work Location */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Work Location</label>
                <input type="text" name="workLocation" className="form-control" required onChange={(e) => { setWorkLocation(e.target.value) }} />
              </div>
             

              {/* Shift */}

              <div className="col-md-6 mb-3">
                <label className="form-label">Shift</label>
                <select name="shiftid" className="form-select" required onChange={(e) => { setShiftid(e.target.value) }} >
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
            <div className="col-md-6 mb-3">
              <button type="button" className="btn btn-primary me-3" onClick={fetchData}>Save</button>
              <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/Employees")}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddEmployee;