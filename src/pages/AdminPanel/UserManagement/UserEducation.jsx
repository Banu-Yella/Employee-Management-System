import React from 'react'

const UserEducation = () => {

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
      <table className="table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
               
              </tr>
            )
          })
        }

      </tbody>
        </table>
    </div>
  )
}

export default UserEducation
