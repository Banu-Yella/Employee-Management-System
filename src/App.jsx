import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/LandingPages/Home'
import Register from './pages/LandingPages/Register'
import Login from './pages/LandingPages/Login'
import MainLayout from './pages/MainLayout/MainLayout'

import Employees from './pages/AdminPanel/EmployeeManagement/Employees'
import AddEmployee from './pages/AdminPanel/EmployeeManagement/Add/AddEmployee'

import EmployeeLogin from './pages/AdminPanel/EmployeeManagement/EmployeeLogin'
import AddEmployeeLogin from './pages/AdminPanel/EmployeeManagement/Add/AddEmployeeLogin'

import Kyc from './pages/AdminPanel/EmployeeManagement/Kyc'
import AddKyc from './pages/AdminPanel/EmployeeManagement/Add/AddKyc'

import Payroll from './pages/AdminPanel/EmployeeManagement/Payroll'
import AddPayroll from './pages/AdminPanel/EmployeeManagement/Add/AddPayroll'

import Payslip from './pages/AdminPanel/EmployeeManagement/Payslip'
import AddPayslip from './pages/AdminPanel/EmployeeManagement/Add/AddPayslip'

import Performance from './pages/AdminPanel/EmployeeManagement/Performance'
import AddPerformance from './pages/AdminPanel/EmployeeManagement/Add/AddPerformance'

import Taxslab from './pages/AdminPanel/EmployeeManagement/Taxslab'

import JobBoard from './pages/AdminPanel/JobBoardManagement/JobBoard'
import Assessment from './pages/AdminPanel/JobBoardManagement/Assessment'
import Exam from './pages/AdminPanel/JobBoardManagement/Exam'
import ExamQuestion from './pages/AdminPanel/JobBoardManagement/ExamQuestion'
import JobApplication from './pages/AdminPanel/JobBoardManagement/JobApplication'

import Attendance from './pages/AdminPanel/ScheduleManagement/Attendance'
import EmpWeekOff from './pages/AdminPanel/ScheduleManagement/EmpWeekOff'
import Leave from './pages/AdminPanel/ScheduleManagement/Leave'
import MonthlyAttendanceSummary from './pages/AdminPanel/ScheduleManagement/MonthlyAttendanceSummary'
import PublicHoliday from './pages/AdminPanel/ScheduleManagement/PublicHoliday'
import Regularization from './pages/AdminPanel/ScheduleManagement/Regularization'
import Shift from './pages/AdminPanel/ScheduleManagement/Shift'
import WeekOffPolicy from './pages/AdminPanel/ScheduleManagement/WeekOffPolicy'

import User from './pages/AdminPanel/UserManagement/User'
import UserAssessment from './pages/AdminPanel/UserManagement/UserAssessment'
import UserEducation from './pages/AdminPanel/UserManagement/UserEducation'
import UserExperience from './pages/AdminPanel/UserManagement/UserExperience'
import UserLogin from './pages/AdminPanel/UserManagement/UserLogin'

import AddWeekOffPolicy from './pages/AdminPanel/ScheduleManagement/Add/AddWeekOffpolicy'
import UpdateEmpWeekOff from './pages/AdminPanel/ScheduleManagement/Update/UpdateEmpWeekOff'
import UpdateLeave from './pages/AdminPanel/ScheduleManagement/Update/UpdateLeave'
import UpdatePublicHoliday from './pages/AdminPanel/ScheduleManagement/Update/UpdatePublicHoliday'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<MainLayout />}>
        {/* Employee - Database Crud */}
          <Route path="/Employees" element={<Employees />} />
          <Route path="/AddEmployee" element={<AddEmployee />}/>


          <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
          <Route path="/AddEmployeeLogin" element={<AddEmployeeLogin/>} />

          <Route path="/Kyc" element={<Kyc />} />
          <Route path='/AddKyc' element={<AddKyc />} />

          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/AddPayroll" element={<AddPayroll />} />

          <Route path="/Payslip" element={<Payslip />} />
          <Route path='/AddPayslip' element={<AddPayslip />} />

          <Route path="/Performance" element={<Performance />} />
          <Route path="/AddPerformance" element={<AddPerformance />} />

          <Route path="/Taxslab" element={<Taxslab />} />


          <Route path="/JobBoard" element={<JobBoard />} />
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/ExamQuestion" element={<ExamQuestion />} />
          <Route path="/JobApplication" element={<JobApplication />} />

          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/EmpWeekOff" element={<EmpWeekOff />} />
          <Route path="/Leave" element={<Leave />} />
          <Route path="/MonthlyAttendanceSummary" element={<MonthlyAttendanceSummary />} />
          <Route path="/PublicHoliday" element={<PublicHoliday />} />
          <Route path="/Regularization" element={<Regularization />} />
          <Route path="/Shift" element={<Shift />} />
          <Route path="/WeekOffPolicy" element={<WeekOffPolicy />} />

          <Route path="/User" element={<User />} />
          <Route path="/UserAssessment" element={<UserAssessment />} />
          <Route path="/UserEducation" element={<UserEducation />} />
          <Route path="/UserExperience" element={<UserExperience />} />
          <Route path="/UserLogin" element={<UserLogin />} />

          <Route path="/add-week-off-policy" element={<AddWeekOffPolicy />} />
          <Route path="/update-emp-week-off" element={<UpdateEmpWeekOff />} />
          <Route path="/update-leave" element={<UpdateLeave />} />
          <Route path="/update-public-holiday" element={<UpdatePublicHoliday />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
