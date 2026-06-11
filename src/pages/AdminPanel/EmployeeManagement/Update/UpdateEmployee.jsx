import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { toast } from 'toastify'


const UpdateEmployee = () => {

  let employeeid = useParams()
  console.log(employeeid);

  useEffect(() => {
    api.get('/getuser/{userId}')
      .then((res) => {

      });

  }, [])

  let navigate = useNavigate();
  let updateData = (e) => {
    e.preventDefault()
    let payload = {

    }

     api.put(`/Update/${employeeId}`, payload)
            .then (()=> {
                console.log("Data updated successfully")
                toast("Data updated successfully")
                navigate('/Employee')
            })
            .catch(() => {
                console.log("Failed to update the data")
                toast("Failed to update the data")
            })
        }

      return(
    <div>
      
    </div >
  )
}

export default UpdateEmployee
