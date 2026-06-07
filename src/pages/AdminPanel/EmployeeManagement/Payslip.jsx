import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Payslip = () => {

  let [payslip, setPayslip] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/getallpayslips")
    console.log(res.data);

    let data = res;
    setPayslip(data);
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
          </tr>
        </thead>
        <tbody>
          {
            user.map((value) => {
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
