import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Payroll = () => {

  let [payroll, setPayroll] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getallpayrolls")
    console.log(res.data);

    let data = res;
    setPayroll(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <table className="table">
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
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
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
