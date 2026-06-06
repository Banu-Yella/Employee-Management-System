import React from "react";

const Attendance = () => {

  return (

         <div>
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

    </div>

  );
};

export default Attendance;