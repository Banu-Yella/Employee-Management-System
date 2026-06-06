import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const JobApplications = () => {

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
          <th>Applicant Name</th>
          <th>Position</th>
          <th>Application status</th>
          <th>Application Date</th>
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
                <td>{value.user?.applicantName}</td>
                <td>{value.job?.position}</td>
                <td>{value.applicationStatus}</td>
                <td>{value.applicationDate}</td>
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

export default JobApplications
