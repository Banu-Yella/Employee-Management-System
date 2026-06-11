import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {toast} from 'toastify'
const UpdateUser = () => {

  let = useParams()
            console.log();
        
            useEffect(() => {
                api.get('/ /${}')
                    .then((res) => {
        
                    });
        
            }, [])
        
            let navigate = useNavigate();
            let updateData = (e) => {
                e.preventDefault()
                let payload = {
        
                }
        
                api.put(`/Update/${}`, payload)
                    .then(() => {
                        console.log("Data updated successfully")
                        toast("Data updated successfully")
                        navigate('/Employee')
                    })
                    .catch(() => {
                        console.log("Failed to update the data")
                        toast("Failed to update the data")
                    })
            }

  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
