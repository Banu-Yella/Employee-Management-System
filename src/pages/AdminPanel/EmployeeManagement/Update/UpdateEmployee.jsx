import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const UpdateEmployee = () => {

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

  let employeeid = useParams()
  console.log(employeeid);

  useEffect(() => {
    api.get('/getuser/{userId}')
      .then((res) => {
        console.log(res)
        setEmployeeName(res.data.employeeName)
        setManager(res.data.manager)
        setRole(res.data.role)
        setJoiningDate(res.data.joiningDate)
        setResignationDate(res.data.resignationDate)
        setDesignation(res.data.designation)
        setDepartment(res.data.department)
        setEmploymentType(res.data.employmentType)
        setEmploymentStatus(res.data.employmentStatus)
        setWorkLocation(res.data.workLocation)
        setShiftid(res.data.shiftid)
        setUserid(res.data.userid)
        setShifts(res.data.shifts)
        setUsers(res.data.users)
        fetchShift();
        fetchUser();
      });

  }, [])

  let navigate = useNavigate();
  let updateData = (e) => {
    e.preventDefault()
    let payload = {
      employeeName, manager, role, joiningDate, resignationDate, designation,
      department, employmentType, employmentStatus, workLocation, shiftid, userid

    }

    api.put(`/Update/${employeeId}`, payload)
      .then(() => {
        console.log("Data updated successfully")
        toast("Data updated successfully")
        navigate('/Employee')
      })
      .catch(() => {
        console.log("Failed to update the data")
        toast("Failed to update the data")
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

  const fetchUser = async () => {
    try {
      const res = await api.get("/getallusers");
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

          <form>

            <div className="row">

              {/* Employee Name */}

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

              {/* User */}

              <div className="col-md-6 mb-3">
                <label className="form-label">User</label>
                <select name="userid" className="form-select" required onChange={(e) => { setUserid(e.target.value) }} >
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
              <button type="button" className="btn btn-primary me-3" onClick={updateData}>Update</button>
              <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/Employees")}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default UpdateEmployee
