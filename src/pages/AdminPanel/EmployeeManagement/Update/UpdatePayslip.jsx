import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UpdatePayslip = () => {

   let [year, setYear] = useState('')
    let [month, setMonth] = useState('')
    let [payPeriodStart, setPayPeriodStart] = useState('')
    let [payPeriodEnd, setPayPeriodEnd] = useState('')
    let [workingDays, setWorkingDays] = useState('')
    let [paidDays, setPaidDays] = useState('')
    let [lopDays, setLopDays] = useState('')
    let [basicSalary, setBasicSalary] = useState('')
    let [hra, setHra] = useState('')
    let [allowances, setAllowances] = useState('')
    let [bonus, setBonus] = useState('')
    let [grossEarnings, setGrossEarnings] = useState('')
    let [lopDeduction, setLopDeduction] = useState('')
    let [pf, setPf] = useState('')
    let [esi, setEsi] = useState('')
    let [professionalTax, setProfessionalTax] = useState('')
    let [incomeTax, setIncomeTax] = useState('')
    let [otherDeductions, setOtherDeductions] = useState('')
    let [totalDeductions, setTotalDeductions] = useState('')
    let [netPay, setNetPay] = useState('')
    let [status, setStatus] = useState('')
    let [approvedBy, setApprovedBy] = useState('')
    let [approvedOn, setApprovedOn] = useState('')
    let [paidOn, setPaidOn] = useState('')

    let [summaryId, setSummaryId] = useState('')
    let [payrollId, setPayrollId] = useState('')
    let [employeeId, setEmployeeId] = useState('')

    let [monthlySummary, setMonthlySummary] = useState([])
    let [payroll, setPayroll] = useState([])
    let [employee, setEmployee] = useState([])


    let payslipId = useParams()
    console.log(payslipId);

    const fetchMasterData = async () => {
        try {
            const empRes = await api.get("/GetAllEmp");
            const sumRes = await api.get("/getallsummaries");
            const payRes = await api.get("/getallpayrolls");

            setEmployees(empRes.data);
            setMonthlySummary(sumRes.data);
            setPayroll(payRes.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        api.get('/getpayslip/{payslipId}')
            .then((res) => {
                console.log(res)
                setYear(res.data.year)
                setMonth(res.data.month)
                setPayPeriodStart(res.data.payPeriodStart)
                setPayPeriodEnd(res.data.payPeriodEnd)
                setWorkingDays(res.data.workingDays)
                setPaidDays(res.data.paidDays)
                setLopDays(res.data.lopDays)
                setBasicSalary(res.data.basicSalary)
                setHra(res.data.hra)
                setAllowances(res.data.allowances)
                setBonus(res.data.bonus)
                setGrossEarnings(res.data.grossEarnings)
                setLopDeduction(res.data.lopDeduction)
                setPf(res.data.pf)
                setEsi(res.data.esi)
                setProfessionalTax(res.data.professionalTax)
                setIncomeTax(res.data.incomeTax)
                setOtherDeductions(res.data.otherDeductions)
                setTotalDeductions(res.data.totalDeductions)
                setNetPay(res.data.netPay)
                setStatus(res.data.status)
                setApprovedBy(res.data.approvedBy)
                setApprovedOn(res.data.approvedOn)
                setPaidOn(res.data.paidOn)
                setSummaryId(res.data.summaryId)
                setPayrollId(res.data.payrollId)
                setEmployeeId(res.data.employeeId)
                setMonthlySummary(res.data.monthlySummary)
                setPayroll(res.data.payroll)
                setEmployee(res.data.employee)
            });
        fetchMasterData();

    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            year, month, payPeriodStart, payPeriodEnd, workingDays, paidDays, lopDays, basicSalary, hra,
            allowances, bonus, grossEarnings, lopDeduction, pf, esi, professionalTax, incomeTax, otherDeductions,
            totalDeductions, netPay, status, approvedBy, approvedOn, paidOn, summaryId, payrollId, employeeId,
            monthlySummary, payroll, employee

        }

        api.put(`/recalculatepayslip/${payslipId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Payslip')
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
                        <label htmlFor="year" className="form-label">Year</label>
                        <input type="year" className="form-control" id="year" onChange={(e) => { setYear(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="month" className="form-label">Month</label>
                        <input type="month" className="form-control" id="month" onChange={(e) => { setMonth(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="payPeriodStart" className="form-label">Pay Period Start</label>
                        <input type="date" className="form-control" id="payPeriodStart" onChange={(e) => { setPayPeriodStart(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="payPeriodEnd" className="form-label">Pay Period End</label>
                        <input type="date" className="form-control" id="payPeriodEnd" onChange={(e) => { setPayPeriodEnd(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="workingDays" className="form-label">Working Days</label>
                        <input type="number" className="form-control" id="workingDays" onChange={(e) => { setWorkingDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="paidDays" className="form-label">Paid Days</label>
                        <input type="number" className="form-control" id="paidDays" onChange={(e) => { setPaidDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="lopDays" className="form-label">Lop Days</label>
                        <input type="number" className="form-control" id="lopDays" onChange={(e) => { setLopDays(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="basicSalary" className="form-label">Basic Salary</label>
                        <input type="number" className="form-control" id="basicSalary" onChange={(e) => { setBasicSalary(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="hra" className="form-label">HRA</label>
                        <input type="number" className="form-control" id="hra" onChange={(e) => { setHra(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="allowances" className="form-label">Allowances</label>
                        <input type="number" className="form-control" id="allowances" onChange={(e) => { setAllowances(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="bonus" className="form-label">Bonus</label>
                        <input type="number" className="form-control" id="bonus" onChange={(e) => { setBonus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="grossEarnings" className="form-label">Gross Earnings</label>
                        <input type="" className="form-control" id="grossEarnings" onChange={(e) => { setGrossEarnings(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="lopDeduction" className="form-label">Lop Deduction</label>
                        <input type="number" className="form-control" id="lopDeduction" onChange={(e) => { setLopDeduction(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="pf" className="form-label">PF</label>
                        <input type="number" className="form-control" id="pf" onChange={(e) => { setPf(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="esi" className="form-label">ESI</label>
                        <input type="number" className="form-control" id="esi" onChange={(e) => { setEsi(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="professionalTax" className="form-label">Professional Tax</label>
                        <input type="number" className="form-control" id="professionalTax" onChange={(e) => { setProfessionalTax(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="incomeTax" className="form-label">Income Tax</label>
                        <input type="number" className="form-control" id="incomeTax" onChange={(e) => { setIncomeTax(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="otherDeductions" className="form-label">Other Deductions</label>
                        <input type="number" className="form-control" id="otherDeductions" onChange={(e) => { setOtherDeductions(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="totalDeductions" className="form-label">Total Deductions</label>
                        <input type="number" className="form-control" id="totalDeductions" onChange={(e) => { set(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="netPay" className="form-label">Net Pay</label>
                        <input type="number" className="form-control" id="netPay" onChange={(e) => { setNetPay(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                           <option value="">Select Status</option>
                           <option value="GENERATED">Generated</option>
                           <option value="HR_APPROVED">HR Approved</option>
                           <option value="FINANCE_APPROVED">Finance Approved</option>
                           <option value="PAID">Paid</option>
                           <option value="CANCELLED">Cancelled</option>
                        </select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedBy" className="form-label">Approved by</label>
                        <select className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeename}</option>))}</select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedOn" className="form-label">Approved On</label>
                        <input type="datetime-local" className="form-control" id="approvedOn" onChange={(e) => { setApprovedOn(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="paidOn" className="form-label">Paid On</label>
                        <input type="datetime-local" className="form-control" id="paidOn" onChange={(e) => { setPaidOn(e.target.value) }}></input>
                     </div>
                     <button type="button" class="btn btn-primary me-3" onClick={updateData}>Update</button>
                     <button type="button" class="btn btn-primary me-3" onClick={() => navigate("/Payslip")}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    )
}

export default UpdatePayslip
