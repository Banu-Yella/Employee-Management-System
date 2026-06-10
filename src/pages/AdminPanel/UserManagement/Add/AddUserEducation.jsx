import React from 'react'

const AddUserEducation = () => {

   let [name, setName ] = useState('')
   let [image, setImage ] = useState('')
   let [dateOfBirth, setDateOfBirth ] = useState('')
   let [placeofBirth, setPlaceofBirth ] = useState('')
   let [age, setAge ] = useState('')
   let [language, setLanguage ] = useState('')
   let [email, setEmail ] = useState('')
   let [phoneNumber, setPhoneNumber ] = useState('')
   let [gender, setGender ] = useState('')
   let [fatherName, setFatherName ] = useState('')
   let [motherName, setMotherName ] = useState('')
   let [currentaddress, setCurrentaddress ] = useState('')
   let [city, setCity ] = useState('')
   let [state, setState ] = useState('')
   let [country, setCountry ] = useState('')
   let [pincode, setPincode  ] = useState('')
   let [permanentAddress, setPermanentAddress ] = useState('')
   let [maritalStatus, setMaritalStatus ] = useState('')
   let [status, setStatus ] = useState('')  

   let [employee, setEmployee ] = useState('')


    let fetchData = () =>{
      e.preventDefault()
      console.log(); 
      let payload = {
         name,
         image,
         dateOfBirth,
         placeofBirth,
         age,
         language,
         email,
         phoneNumber,
         gender,
         fatherName,
         motherName,
         currentaddress,
         city,
         state,
         country,
         pincode,
         permanentAddress,
         maritalStatus,
         status
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
            <label htmlFor = "name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" onChange={(e) =>{setName(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "image" className="form-label">Image</label>
            <input type="image" className="form-control" id="image" onChange={(e) =>{setImage(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "dateOfBirth" className="form-label">Date Of Birth</label>
            <input type="date" className="form-control" id="dateOfBirth" onChange={(e) =>{setDateOfBirth(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "placeofBirth" className="form-label">placeofBirth</label>
            <input type="date" className="form-control" id="" onChange={(e) =>{setPlaceofBirth(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "age" className="form-label">Age</label>
            <input type="number" className="form-control" id="" onChange={(e) =>{setAge(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "language" className="form-label">Language</label>
            <input type="text" className="form-control" id="language" onChange={(e) =>{setLanguage(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" onChange={(e) =>{setEmail(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" onChange={(e) =>{setPhoneNumber(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "gender" className="form-check-input">Gender</label>
            <label htmlFor = "male" className="form-check-input">Male</label>
            <label htmlFor = "female" className="form-check-input">Fe-male</label>
            <input type="radio"  name="radioDefault"  className="form-check-input" id="male" onChange={(e) =>{setGender(e.target.value)}}></input>
            <input type="radio"  name="radioDefault"  className="form-check-input" id="female" onChange={(e) =>{setGender(e.target.value)}}></input>
         </div>
          <div className="mb-3">
            <label htmlFor = "fatherName" className="form-label">Father name</label>
            <input type="text" className="form-control" id="fatherName" onChange={(e) =>{setFatherName(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "motherName" className="form-label">Mother name</label>
            <input type="text" className="form-control" id="motherName" onChange={(e) =>{setMotherName(e.target.value)}}></input>
         </div>
          <div className="mb-3">
            <label htmlFor = "currentaddress" className="form-label">Current address</label>
            <input type="text" className="form-control" id="currentaddress" onChange={(e) =>{setCurrentaddress(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "city" className="form-label">City</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setCity(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "state" className="form-label">State</label>
            <input type="text" className="form-control" id="state" onChange={(e) =>{setState(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "country" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" onChange={(e) =>{setCountry(e.target.value)}}></input>
         </div>
         <div className="mb-3">
            <label htmlFor = "pincode" className="form-label">Pincode</label>
            <input type="number" className="form-control" id="pincode" onChange={(e) =>{setPincode(e.target.value)}}></input>
         </div>
           <div className="mb-3">
            <label htmlFor = "permanentAddress" className="form-label">Permanent Address</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setPermanentAddress(e.target.value)}}></input>
         </div>
           <div className="mb-3">
            <label htmlFor = "maritalStatus" className="form-label">Marital Status</label>
            <input type="text" className="form-control" id="maritalStatus" onChange={(e) =>{setMaritalStatus(e.target.value)}}></input>
         </div>
          <div className="mb-3">
            <label htmlFor = "status" className="form-label">Status</label>
            <input type="text" className="form-control" id="" onChange={(e) =>{setStatus(e.target.value)}}></input>
         </div>         
         <button type="submit" class="btn btn-primary" onClick={fetchData}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserEducation
