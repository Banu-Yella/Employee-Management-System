import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from "../../../axiosInstance.jsx";
import { useNavigate, Link } from "react-router-dom";

const Payslip = () => {

  let [payslip, setPayslip] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getallpayslips")
    console.log(res.data);

    let data = res;
    setPayslip(data);

    let deleteData = (payslipId) => {
      console.log(payslipId);
      if (window.confirm()) {
        api.delete("/deletepayslip/{payslipId}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
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
            <th>Payroll month</th>
            <th>Month</th>
            <th>Year</th>
            <th>Pay period start</th>
            <th>Pay period end</th>
            <th>Working days</th>
            <th>Total calander days</th>
            <th>Paid days</th>
            <th>Lop days</th>
            <th>Basic salary</th>
            <th>HRA</th>
            <th>Allowances</th>
            <th>Bonus</th>
            <th>Gross earnings</th>
            <th>Lop deduction</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Professional tax</th>
            <th>Income tax</th>
            <th>Other deductions</th>
            <th>Total deductions</th>
            <th>Status</th>
            <th>Approved by</th>
            <th>Approved on</th>
            <th>Paid on</th>
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
                  <li><a onClick={() => navigate("/AddPayslip")} className="dropdown-item" href="#">Gemerate New Payslip</a></li>
                  <li><a onClick={() => navigate("/DeleteAllPayslips")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            payslip.map((value) => {
              return (
                <tr key={value.payslipId}>
                  <td>{value.payslipId}</td>
                  <td>{value.employee?.employeeCode}</td>
                  <td>{value.payroll?.payrollMonth}</td>
                  <td>{value.month}</td>
                  <td>{value.year}</td>
                  <td>{value.payPeriodStart}</td>
                  <td>{value.payPeriodEnd}</td>
                  <td>{value.workingDays}</td>
                  <td>{value.monthlySummary?.totalCalendarDays}</td>
                  <td>{value.paidDays}</td>
                  <td>{value.lopDays}</td>
                  <td>{value.basicSalary}</td>
                  <td>{value.hra}</td>
                  <td>{value.allowances}</td>
                  <td>{value.bonus}</td>
                  <td>{value.grossEarnings}</td>
                  <td>{value.lopDeduction}</td>
                  <td>{value.pf}</td>
                  <td>{value.esi}</td>
                  <td>{value.professionalTax}</td>
                  <td>{value.incomeTax}</td>
                  <td>{value.otherDeductions}</td>
                  <td>{value.totalDeductions}</td>
                  <td>{value.netPay}</td>
                  <td>{value.status}</td>
                  <td>{value.approvedBy}</td>
                  <td>{value.approvedOn}</td>
                  <td>{value.paidOn}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdatePayslip/${value.payslipId}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.payslipId) }}>Delete</button>
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

export default Payslip
