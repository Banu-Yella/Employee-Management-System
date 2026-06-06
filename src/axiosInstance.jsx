import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/employee-management',
  withCredentials: true,   // required for your HttpSession login to work
  headers: {
    'Content-Type': 'application/json'
  }
})