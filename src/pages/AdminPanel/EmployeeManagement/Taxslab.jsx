import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import api from "../../../axiosInstance.jsx";

const Taxslab = () => {
  const navigate = useNavigate();

  let [taxslab, setTaxslab] = useState([]);

  let fetchData = async () => {
    let res = await api.get("/getalltaxslabs")
    console.log(res.data);

    let data = res;
    setTaxslab(data);

   let deleteData = (taxid) => {
      console.log(taxid);
      if (window.confirm()) {
        api.delete("/deletetaxslab/{taxid}")
          .then(() => {
            console.log("Data deleted successfully");
            window.location.reload("Are you sure you want to delete data?")
          })
          .catch(() => {
            console.log("Failed to delete data");

          })
      }
    }
    setLogin(res.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slab name</th>
            <th>Minimum amount</th>
            <th>Maximum amount</th>
            <th>Percentage</th>
            <th>Tax regime type</th>
            <th>Active</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>
              <div className="dropdown modify-dropdown">
                <span>Modify</span>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={() => navigate("/AddTaxslab")} className="dropdown-item" href="#">Add New Tax slab</a></li>
                  <li><a onClick={() => navigate("/DeleteAll")} className="dropdown-item" href="#">Delete all</a></li>
                  <li><a className="dropdown-item" href="#">Bulk Upload</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            taxslab.map((value) => {
              return (
                <tr key={value.taxid}>
                  <td>{value.taxid}</td>
                  <td>{value.slabName}</td>
                  <td>{value.minAmount}</td>
                  <td>{value.maxAmount}</td>
                  <td>{value.percentage}</td>
                  <td>{value.taxregimeType}</td>
                  <td>{value.active}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.updatedAt}</td>
                  <td>
                    <button><Link to={'/UpdateTaxslab/${value.taxid}'}>Update</Link></button>
                    <button onClick={() => { deleteData(value.taxid) }}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Taxslab
