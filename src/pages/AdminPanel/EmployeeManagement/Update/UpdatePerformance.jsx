import React from 'react'

const UpdatePerformance = () => {

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

export default UpdatePerformance
