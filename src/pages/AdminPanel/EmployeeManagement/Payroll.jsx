import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";



const Payroll = () => {
  const navigate = useNavigate();

  let [payroll, setPayroll] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallpayrolls")
    console.log(res.data);

    let data = res;
    setPayroll(data);

    let deleteData = (payrollId) => {
      console.log(payrollId);
      if (window.confirm("Are you sure you want to delete this payroll?")) {
        api.delete(`/deletepayroll/${payrollId}`)
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload()
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
  };



  React.useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="table-container">
      <table className="table table-striped table-hover app-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee code</th>
            <th>Basic salary</th>
            <th>HRA</th>
            <th>Allowances</th>
            <th>Bonus</th>
            <th>Deductions</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Income tax</th>
            <th>Professional tax</th>
            <th>Gross salary</th>
            <th>Net salary</th>
            <th>Tax slab</th>
            <th>Pay roll Month</th>
            <th>Payroll Status</th>
            <th>Approved</th>
            <th>Approved by</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddPayroll")} className="dropdown-item" href="#">Add New Payroll</a></li>
                  <li><a onClick={() => navigate("/DeleteAllPayrolls")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            payroll.map((value) => {
              return (
                <tr key={value.payrollId}>
                  <td>{value.payrollId}</td>
                  <td>{value.employee?.employeeCode}</td>
                  <td>{value.basicSalary}</td>
                  <td>{value.hra}</td>
                  <td>{value.allowances}</td>
                  <td>{value.bonus}</td>
                  <td>{value.deductions}</td>
                  <td>{value.pf}</td>
                  <td>{value.esi}</td>
                  <td>{value.professionalTax}</td>
                  <td>{value.incomeTax}</td>
                  <td>{value.grossSalary}</td>
                  <td>{value.netSalary}</td>
                  <td>{value.taxSlab}</td>
                  <td>{value.payrollMonth}</td>
                  <td>{value.status}</td>
                  <td>{value.approved}</td>
                  <td>{value.approvedBy}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={`/UpdatePayroll/${value.payrollId}`}>Update</Link></button>
                    <button onClick={() => { deleteData(value.payrollId) }}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Payroll
