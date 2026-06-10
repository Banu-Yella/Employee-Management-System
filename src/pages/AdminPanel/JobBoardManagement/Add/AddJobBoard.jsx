import React from 'react'

const AddJobBoard = () => {

   let [jobTitle, setJobTitle] = useState('')
   let [jobDescription, setJobDescription] = useState('')
   let [jobReferral, setJobReferral] = useState('')
   let [location, setLocation] = useState('')
   let [workplace, setWorkplace] = useState('')
   let [companyname, setCompanyname] = useState('')
   let [salaryRange, setSalaryRange] = useState('')
   let [employmentType, setEmploymentType] = useState('')
   let [postedDate, setPostedDate] = useState('')
   let [applicationDeadline, setApplicationDeadline] = useState('')
   let [requiredSkills, setRequiredSkills] = useState('')
   let [jobCategory, setJobCategory] = useState('')
   let [experienceLevel, setExperienceLevel] = useState('')
   let [educationRequirements, setEducationRequirements] = useState('')
   let [jobResponsibilities, setJobResponsibilities] = useState('')
   let [benefits, setBenefits] = useState('')
   let [contactInformation, setContactInformation] = useState('')
 

   let fetchData = () => {
      e.preventDefault()
      console.log();
      let payload = {

      }
      axios.post("/", payload)
         .then(() => {
            console.log("Data saved");
         })
         .catch(() => {
            console.log("Data is not saved");
         })
   }



   return (
      <div>
         <form>
            <div className="mb-3">
               <label htmlFor="jobTitle" className="form-label">Job Title</label>
               <input type="text" className="form-control" id="jobTitle" onChange={(e) => { setJobTitle(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="jobDescription" className="form-label">Job Description</label>
               <input type="text" className="form-control" id="jobDescription" onChange={(e) => { setJobDescription(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="jobReferral" className="form-label">Job Referral</label>
               <input type="text" className="form-control" id="jobReferral" onChange={(e) => { setJobReferral(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="location" className="form-label">Location</label>
               <input type="text" className="form-control" id="location" onChange={(e) => { setLocation(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="workplace" className="form-label">Workplace</label>
               <input type="text" className="form-control" id="workplace" onChange={(e) => { setWorkplace(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="companyname" className="form-label">Company name</label>
               <input type="text" className="form-control" id="companyname" onChange={(e) => { setCompanyname(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="salaryRange" className="form-label">Salary Range</label>
               <input type="number" className="form-control" id="salaryRange" onChange={(e) => { setSalaryRange(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="employmentType" className="form-label">Employment Type</label>
               <input type="text" className="form-control" id="employmentType" onChange={(e) => { setEmploymentType(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="postedDate" className="form-label">Posted Date</label>
               <input type="datetime-local" className="form-control" id="postedDate" onChange={(e) => { setPostedDate(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="applicationDeadline" className="form-label">Application Deadline</label>
               <input type="date" className="form-control" id="" onChange={(e) => { setApplicationDeadline(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="requiredSkills" className="form-label">Required Skills</label>
               <input type="text" className="form-control" id="requiredSkills" onChange={(e) => { setRequiredSkills(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="jobCategory" className="form-label">job Category</label>
               <input type="text" className="form-control" id="jobCategory" onChange={(e) => { setJobCategory(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="experienceLevel" className="form-label">Experience Level</label>
               <input type="tel" className="form-control" id="" onChange={(e) => { setExperienceLevel(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="educationRequirements" className="form-label">Education Requirements</label>
               <input type="text" className="form-control" id="educationRequirements" onChange={(e) => { setEducationRequirements(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="jobResponsibilities" className="form-label">Job Responsibilities</label>
               <input type="text" className="form-control" id="jobResponsibilities" onChange={(e) => { setJobResponsibilities(e.target.value) }}></input>
            </div>
            <div className="mb-3">
               <label htmlFor="benefits" className="form-label">Benefits</label>
               <input type="text" className="form-control" id="benefits" onChange={(e) => { setBenefits(e.target.value) }}></input>
            </div>
             <div className="mb-3">
               <label htmlFor="contactInformation" className="form-label">Contact Information</label>
               <input type="text" className="form-control" id="contactInformation" onChange={(e) => { setContactInformation(e.target.value) }}></input>
            </div>
            <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
         </form>
      </div>
   )
}

export default AddJobBoard
