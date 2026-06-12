import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'toastify'


const UpdatePayroll = () => {

   let [basicSalary, setBasicSalary] = useState('')
    let [hra, setHra] = useState('')
    let [allowances, setAllowances] = useState('')
    let [bonus, setBonus] = useState('')
    let [deductions, setDeductions] = useState('')
    let [pf, setPf] = useState('')
    let [esi, setEsi] = useState('')
    let [professionalTax, setProfessionalTax] = useState('')
    let [incomeTax, setIncomeTax] = useState('')
    let [grossSalary, setGrossSalary] = useState('')
    let [netSalary, setNetSalary] = useState('')
    let [approved, setApproved] = useState('')
    let [payrollMonth, setPayrollMonth] = useState('')
    let [status, setStatus] = useState('')
    let [approvedBy, setApprovedBy] = useState('')

    let [employeeId, setEmployeeId] = useState("");
    let [taxid, setTaxid] = useState([])

    let [taxSlab, setTaxSlab] = useState([])
    let [employees, setEmployees] = useState([])


    let = useParams()
    console.log();

    const fetchMasterData = async () => {
        try {
            const empRes = await api.get("/GetAllEmp");
            const taxRes = await api.get("/GetAllTaxSlabs");

            setEmployees(empRes.data);
            setTaxSlabs(taxRes.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        api.get('/getkyc/${kycId}')
            .then((res) => {
                 console.log(res)
                setBasicSalary(res.data.basicSalary)
                useState(res.data.hra)
                setAllowances(res.data.allowances)
                setBonus(res.data.bonus)
                setDeductions(res.data.deductions)
                setPf(res.data.pf)
                setEsi(res.data.esi)
                setProfessionalTax(res.data.professionalTax)
                setIncomeTax(res.data.incomeTax)
                setGrossSalary(res.data.grossSalary)
                setNetSalary(res.data.netSalary)
                setApproved(res.data.approved)
                setPayrollMonth(res.data.payrollMonth)
                setStatus(res.data.status)
                setApprovedBy(res.data.approvedBy)
                setTaxSlab(res.data.taxSlab)
                setEmployees(res.data.employees)
            });
        fetchMasterData();
    }, [])

    let navigate = useNavigate();
    let updateData = (e) => {
        e.preventDefault()
        let payload = {
            basicSalary, hra, allowances, bonus, deductions, pf, esi, professionalTax,
            incomeTax, grossSalary, netSalary, approved, payrollMonth, status,
            approvedBy, employees: { employeeId: employeeId }, taxSlab: { taxid: taxid }
        }

        api.put(`/updatekyc/${kycId}`, payload)
            .then(() => {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Payroll')
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
                        <label className="form-label">Employee</label>
                        <select className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeeCode}</option>))}</select>
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
                        <label htmlFor="deductions" className="form-label">Deductions</label>
                        <input type="number" className="form-control" id="deductions" onChange={(e) => { setDeductions(e.target.value) }}></input>
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
                        <label htmlFor="grossSalary" className="form-label">Gross Salary</label>
                        <input type="number" className="form-control" id="grossSalary" onChange={(e) => { setGrossSalary(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="netSalary" className="form-label">Net Salary</label>
                        <input type="number" className="form-control" id="netSalary" onChange={(e) => { setNetSalary(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="taxSlab" className="form-label">Tax Slab</label>
                        <select id="taxSlab" className="form-select" value={taxid} onChange={(e) => setTaxid(e.target.value)}>
                           <option value="">Select Tax Slab</option>{taxSlab.map((slab) =>
                              (<option key={slab.taxid} value={slab.taxid}>{slab.taxName}</option>))}
                        </select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approved" className="form-label">Approved</label>
                        <select className="form-select" id="verified" onChange={(e) => { setApproved(e.target.value) }}>
                           <option>True</option>
                           <option>False</option>
                        </select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="payrollMonth" className="form-label">Payroll Month</label>
                        <input type="datetime-local" className="form-control" id="payrollMonth" onChange={(e) => { setPayrollMonth(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-label" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedBy" className="form-label">Approved by</label>
                        <select className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeename}</option>))}</select>
                     </div>
                  </div>
                  <div >
                     <button type="button" className="btn btn-primary me-3" onClick={updateData}>Update</button>
                     <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/Payroll")}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    )
}

export default UpdatePayroll
