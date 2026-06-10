import React from 'react'

const AddUserAssessment = () => {

   let [educationType, setEducationType ] = useState('')
   let [educationLevel, setEducationLevel ] = useState('')
   let [course, setCourse ] = useState('')
   let [specialization, setSpecialization ] = useState('')
   let [university, setUniversity ] = useState('')
   let [yearOfPassing, setYearOfPassing ] = useState('')
   let [percentage, setPercentage ] = useState('')
   let [grade, setGrade ] = useState('')
   let [learningMode, setLearningMode ] = useState('')
   let [location, setLocation ] = useState('')

   let [user, setUser ] = useState('')

    let fetchData = () =>{
      e.preventDefault()
      console.log(); 
      let payload = {
         educationType,
         educationLevel,
         course,
         specialization,
         university,
         yearOfPassing,
         percentage,
         grade,
         learningMode,
         location
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
            <label htmlFor = "educationType" className="form-label">Education Type</label>
            <input type="text" className="form-control" id="educationType" onChange={(e) =>{set(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "educationLevel" className="form-label">Education Level</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setEducationLevel(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "course" className="form-label">Course</label>
            <input type="text" className="form-control" id="course" onChange={(e) =>{setCourse(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "specialization" className="form-label">Specialization</label>
            <input type="text" className="form-control" id="specialization" onChange={(e) =>{setSpecialization(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "university" className="form-label">University</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setUniversity(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "yearOfPassing" className="form-label">Year Of Passing</label>
            <input type="number" className="form-control" id="" onChange={(e) =>{setYearOfPassing(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "percentage" className="form-label">Percentage</label>
            <input type="number" className="form-control" id="" onChange={(e) =>{setPercentage(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "grade" className="form-label">Grade</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setGrade(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "learningMode" className="form-label">Learning Mode</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setLearningMode(e.target.value)}}></input>
         </div>
         <div  className="mb-3">
            <label htmlFor = "location" className="form-label">Location</label>
               <input type="text" className="form-control" id="location" onChange={(e) =>{setLocation(e.target.value)}}></input>           
         </div>
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserAssessment
