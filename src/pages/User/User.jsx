import React from 'react'

const User = () => {

  let [user, setUser] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("http://localhost:8080/api/employee-management/")
    console.log(res.data);

    let data = res;
    setUser(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
     <div>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Name</th>
          <th>image</th>
          <th>Email</th>
          <th>Phone Number</th>          
          <th>Date of birth</th>
          <th>Place of birth</th>
          <th>Age</th>
          <th>Native Language</th>          
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>Marital Status</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Pin code</th>
          <th>Permanent Address</th>
          <th>Status</th>
          <th>Created at</th>
          <th>Updated at</th>          
        </tr>
      </thead>
      <tbody>
        {
          user.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.middleName}</td>
                <td>{value.image}</td>
                <td>{value.email}</td>
                <td>{value.phoneNumber}</td>
                <td>{value.dateOfBirth}</td>
                <td>{value.placeOfBirth}</td>
                <td>{value.age}</td>
                <td>{value.nativeLanguage}</td>
                <td>{value.fatherName}</td>
                <td>{value.motherName}</td>
                <td>{value.maritalStatus}</td>
                <td>{value.address}</td>
                <td>{value.city}</td>
                <td>{value.state}</td>
                <td>{value.country}</td>
                <td>{value.pinCode}</td>
                <td>{value.permanentAddress}</td>
                <td>{value.status}</td>
                <td>{value.createdAt}</td>
                <td>{value.updatedAt}</td>
              </tr>
            )
          })
        }

      </tbody>

    </div>
  )
}

export default User
