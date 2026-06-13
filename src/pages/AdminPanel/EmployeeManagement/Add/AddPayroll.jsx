import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from "../../../../axiosInstance.jsx";
import {calculateGrossSalary, calculateNetSalary} from "./Payroll.js";
import { toast } from 'react-toastify';


const AddPayroll = () => {
   const navigate = useNavigate();
   
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

        const [formData, setFormData] = useState({
    employeeId: "",
    basicSalary: "",
    hra: "",
    allowances: "",
    bonus: "",
    deductions: "",
    pf: "",
    esi: "",
    professionalTax: "",
    incomeTax: "",
    grossSalary: 0,
    netSalary: 0,
    taxid: "",
    approved: false,
    payrollMonth: "",
    status: "DRAFT",
    approvedBy: ""
});
   
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

   const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

  useEffect(() => {

    const grossSalary =
        calculateGrossSalary(formData);

    const netSalary =
        calculateNetSalary(formData);

    setFormData(prev => ({
        ...prev,
        grossSalary,
        netSalary
    }));

}, [
    formData.basicSalary,
    formData.hra,
    formData.allowances,
    formData.bonus,
    formData.deductions,
    formData.pf,
    formData.esi,
    formData.professionalTax,
    formData.incomeTax
]);


  

   const savePayroll = async () => {

    try {

        const payload = {

            employee: {
                employeeid: Number(formData.employeeId)
            },

            basicSalary: Number(formData.basicSalary),
            hra: Number(formData.hra),
            allowances: Number(formData.allowances),
            bonus: Number(formData.bonus),

            deductions: Number(formData.deductions),
            pf: Number(formData.pf),
            esi: Number(formData.esi),
            professionalTax: Number(formData.professionalTax),
            incomeTax: Number(formData.incomeTax),

            grossSalary: Number(formData.grossSalary),
            netSalary: Number(formData.netSalary),

            taxSlab: {
                taxid: Number(formData.taxid)
            },

            approved: formData.approved === true,

            payrollMonth: formData.payrollMonth,

            status: formData.status,

            approvedBy: formData.approvedBy
                ? {
                    employeeid: Number(formData.approvedBy)
                }
                : null
        };

        await api.post("/savepayroll", payload);
        toast("Payroll saved successfully");
        navigate("/Payroll");

    } catch (error) {

        console.error(error);
        toast(error.response?.data?.message || "Failed to save payroll");
    }
};


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
                        <label className="form-label">Employee</label>
                        <select className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeId} value={emp.employeeId}>{emp.employeeCode}</option>))}</select>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="basicSalary" className="form-label">Basic Salary</label>
                        <input type="number" className="form-control" id="basicSalary" value={formData.basicSalary} onChange={handleChange}></input>
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
                        <input type="number" className="form-control" value={formData.grossSalary} readOnly></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="netSalary" className="form-label">Net Salary</label>
                        <input type="number" className="form-control" value={formData.netSalary} readOnly></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="taxSlab" className="form-label">Tax Slab</label>
                        <select id="taxSlab" className="form-select" value={formData.taxid} onChange={handleChange}>
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
                        <input type="date" className="form-control" id="payrollMonth" onChange={(e) => { setPayrollMonth(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-label" id="status" onChange={(e) => { setStatus(e.target.value) }}></input>
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="approvedBy" className="form-label">Approved by</label>
                        <select className="form-control" value={formData.employeeId} onChange={handleChange}>
                           <option value="">Select Employee</option>
                           {employees.map((emp) => (<option key={emp.employeeid} value={emp.employeeid}>{emp.employeeCode}</option>))}</select>
                     </div>
                  </div>
                  <div >
                     <button type="button" className="btn btn-primary me-3" onClick={savePayroll}>Save</button>
                     <button type="button" className="btn btn-danger me-3" onClick={() => navigate("/Payroll")}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddPayroll
