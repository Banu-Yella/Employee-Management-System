import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/LandingPages/Home'
import Register from './pages/LandingPages/Register'
import Login from './pages/LandingPages/Login'
import MainLayout from './pages/MainLayout/MainLayout'

import Employees from './pages/AdminPanel/EmployeeManagement/Employees'
import AddEmployee from './pages/AdminPanel/EmployeeManagement/Add/AddEmployee'
import UpdateEmployee from './pages/AdminPanel/EmployeeManagement/Update/UpdateEmployee'

import EmployeeLogin from './pages/AdminPanel/EmployeeManagement/EmployeeLogin'
import AddEmployeeLogin from './pages/AdminPanel/EmployeeManagement/Add/AddEmployeeLogin'
import UpdateEmployeeLogin from './pages/AdminPanel/EmployeeManagement/Update/UpdateEmployeeLogin'

import Kyc from './pages/AdminPanel/EmployeeManagement/Kyc'
import AddKyc from './pages/AdminPanel/EmployeeManagement/Add/AddKyc'
import UpdateKyc from './pages/AdminPanel/EmployeeManagement/Update/UpdateKyc'

import Payroll from './pages/AdminPanel/EmployeeManagement/Payroll'
import AddPayroll from './pages/AdminPanel/EmployeeManagement/Add/AddPayroll'
import UpdatePayroll from './pages/AdminPanel/EmployeeManagement/Update/UpdatePayroll'

import Payslip from './pages/AdminPanel/EmployeeManagement/Payslip'
import AddPayslip from './pages/AdminPanel/EmployeeManagement/Add/AddPayslip'
import UpdatePayslip from './pages/AdminPanel/EmployeeManagement/Update/UpdatePayslip'

import Performance from './pages/AdminPanel/EmployeeManagement/Performance'
import AddPerformance from './pages/AdminPanel/EmployeeManagement/Add/AddPerformance'
import UpdatePerformance from './pages/AdminPanel/EmployeeManagement/Update/UpdatePerformance'

import Taxslab from './pages/AdminPanel/EmployeeManagement/Taxslab'
import AddTaxslab from './pages/AdminPanel/EmployeeManagement/Add/AddTaxslab'
import UpdateTaxslab from './pages/AdminPanel/EmployeeManagement/Update/UpdateTaxslab'

import JobBoard from './pages/AdminPanel/JobBoardManagement/JobBoard'
import AddJobBoard from './pages/AdminPanel/JobBoardManagement/Add/AddJobBoard'
import UpdateJobBoard from './pages/AdminPanel/JobBoardManagement/Update/UpdateJobBoard'

import Assessment from './pages/AdminPanel/JobBoardManagement/Assessment'
import AddAssessment from './pages/AdminPanel/JobBoardManagement/Add/AddAssessment'
import UpdateAssessment from './pages/AdminPanel/JobBoardManagement/Update/UpdateAssessment'

import Exam from './pages/AdminPanel/JobBoardManagement/Exam'
import AddExam from './pages/AdminPanel/JobBoardManagement/Add/AddExam'
import UpdateExam from './pages/AdminPanel/JobBoardManagement/Update/UpdateExam'

import ExamQuestion from './pages/AdminPanel/JobBoardManagement/ExamQuestion'
import AddExamQuestion from './pages/AdminPanel/JobBoardManagement/Add/AddExamQuestions'
import UpdateExamQuestion from './pages/AdminPanel/JobBoardManagement/Update/UpdateExamQuestion'

import JobApplication from './pages/AdminPanel/JobBoardManagement/JobApplication'
import AddJobApplication from './pages/AdminPanel/JobBoardManagement/Add/AddJobApplication'
import UpdateJobApplication from './pages/AdminPanel/JobBoardManagement/Update/UpdateJobApplication'

import Attendance from './pages/AdminPanel/ScheduleManagement/Attendance'
import AddAttendance from './pages/AdminPanel/ScheduleManagement/Add/AddAttendance'
import UpdateAttendance from './pages/AdminPanel/ScheduleManagement/Update/UpdateAttendance'

import EmpWeekOff from './pages/AdminPanel/ScheduleManagement/EmpWeekOff'
import AddEmpWeekOff from './pages/AdminPanel/ScheduleManagement/Add/AddEmpWeekOff'
import UpdateEmpWeekOff from './pages/AdminPanel/ScheduleManagement/Update/UpdateEmpWeekOff'

import Leave from './pages/AdminPanel/ScheduleManagement/Leave'
import AddLeave from './pages/AdminPanel/ScheduleManagement/Add/AddLeave'
import UpdateLeave from './pages/AdminPanel/ScheduleManagement/Update/UpdateLeave'

import MonthlyAttendanceSummary from './pages/AdminPanel/ScheduleManagement/MonthlyAttendanceSummary'
import AddMonthlyAttendanceSummary from './pages/AdminPanel/ScheduleManagement/Add/AddMonthlyAttendanceSummary'

import PublicHoliday from './pages/AdminPanel/ScheduleManagement/PublicHoliday'
import AddPublicHoliday from './pages/AdminPanel/ScheduleManagement/Add/AddPublicHoliday'
import UpdatePublicHoliday from './pages/AdminPanel/ScheduleManagement/Update/UpdatePublicHoliday'

import Regularization from './pages/AdminPanel/ScheduleManagement/Regularization'
import AddRegularization from './pages/AdminPanel/ScheduleManagement/Add/AddRegularization'
import UpdateRegularization from './pages/AdminPanel/ScheduleManagement/Update/UpdateRegularization'

import Shift from './pages/AdminPanel/ScheduleManagement/Shift'
import AddShift from './pages/AdminPanel/ScheduleManagement/Add/AddShift'
import UpdateShift from './pages/AdminPanel/ScheduleManagement/Update/UpdateShift'

import WeekOffPolicy from './pages/AdminPanel/ScheduleManagement/WeekOffPolicy'
import AddWeekOffPolicy from './pages/AdminPanel/ScheduleManagement/Add/AddWeekOffpolicy'
import UpdateWeekOffPolicy from './pages/AdminPanel/ScheduleManagement/Update/UpdateWeekOffPolicy'

import User from './pages/AdminPanel/UserManagement/User'
import AddUser from './pages/AdminPanel/UserManagement/Add/AddUser'
import UpdateUser from './pages/AdminPanel/UserManagement/Update/UpdateUser'

import UserAssessment from './pages/AdminPanel/UserManagement/UserAssessment'
import AddUserAssessment from './pages/AdminPanel/UserManagement/Add/AddUserAssessment'
import UpdateUserAssessment from './pages/AdminPanel/UserManagement/Update/UpdateUserAssessment'

import UserEducation from './pages/AdminPanel/UserManagement/UserEducation'
import AddUserEducation from './pages/AdminPanel/UserManagement/Add/AddUserEducation'
import UpdateUserEducation from './pages/AdminPanel/UserManagement/Update/UpdateUserEducation'

import UserExperience from './pages/AdminPanel/UserManagement/UserExperience'
import AddUserExperience from './pages/AdminPanel/UserManagement/Add/AddUserExperience'
import UpdateUserExperience from './pages/AdminPanel/UserManagement/Update/UpdateUserExperience'

import UserLogin from './pages/AdminPanel/UserManagement/UserLogin'
import AddUserLogin from './pages/AdminPanel/UserManagement/Add/AddUserLogin'
import UpdateUserLogin from './pages/AdminPanel/UserManagement/Update/UpdateUserLogin'


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
          <Route path="/UpdateEmployee/:employeeid" element={<UpdateEmployee />} />

          <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
          <Route path="/AddEmployeeLogin" element={<AddEmployeeLogin/>} />
          <Route path="/UpdateEmployeeLogin/:loginid" element={<UpdateEmployeeLogin />} />

          <Route path="/Kyc" element={<Kyc />} />
          <Route path='/AddKyc' element={<AddKyc />} />
          <Route path="/UpdateKyc/:kycId " element={<UpdateKyc />} />

          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/AddPayroll" element={<AddPayroll />} />
          <Route path="/UpdatePayroll/:payrollId" element={<UpdatePayroll />} />

          <Route path="/Payslip" element={<Payslip />} />
          <Route path='/AddPayslip' element={<AddPayslip />} />
          <Route path='/UpdatePayslip/:payslipId' element={<UpdatePayslip />} />

          <Route path="/Performance" element={<Performance />} />
          <Route path="/AddPerformance" element={<AddPerformance />} />
          <Route path="/UpdatePerformance/:performanceid" element={<UpdatePerformance />} />

          <Route path="/Taxslab" element={<Taxslab />} />
          <Route path="/AddTaxslab" element={<AddTaxslab />} />
          <Route path="/UpdateTaxslab/:taxid" element={<UpdateTaxslab />} />

          <Route path="/JobBoard" element={<JobBoard />} />
          <Route path="/AddJobBoard" element={<AddJobBoard />} />
          <Route path="/UpdateJobBoard/:jobBoardId" element={<UpdateJobBoard />} />

          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/AddAssessment" element={< AddAssessment />} />
          <Route path="/UpdateAssessment/:assessmentId" element={< UpdateAssessment />} />

          <Route path="/Exam" element={<Exam />} />
          <Route path="/AddExam" element={<AddExam />} />
          <Route path="/UpdateExam/:examid" element={<UpdateExam />} />

          <Route path="/ExamQuestion" element={<ExamQuestion />} />
          <Route path="/AddExamQuestion" element={<AddExamQuestion />} />
          <Route path="/UpdateExamQuestion/:questionId" element={<UpdateExamQuestion />} />
          
          <Route path="/JobApplication" element={<JobApplication />} />
          <Route path="/AddJobApplication" element={<AddJobApplication />} />
          <Route path="/UpdateJobApplication/:jobApplicationId" element={<UpdateJobApplication />} />
          
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/AddAttendance" element={<AddAttendance />} />
          <Route path="/UpdateAttendance/:attendanceId" element={<UpdateAttendance />} />
          
          <Route path="/EmpWeekOff" element={<EmpWeekOff />} />
          <Route path="/AddEmpWeekOff" element={<AddEmpWeekOff />} />
          <Route path="/UpdateEmpWeekOff/:weekOffId" element={<UpdateEmpWeekOff />} />

          <Route path="/Leave" element={<Leave />} />
          <Route path="/AddLeave" element={<AddLeave />} />
          <Route path="/UpdateLeave/:leaveId" element={<UpdateLeave />} />

          <Route path="/MonthlyAttendanceSummary" element={<MonthlyAttendanceSummary />} />
          <Route path="/AddMonthlyAttendanceSummary" element={<AddMonthlyAttendanceSummary />} />
        
          <Route path="/PublicHoliday" element={<PublicHoliday />} />
          <Route path="/AddPublicHoliday" element={<AddPublicHoliday />} />
          <Route path="/UpdatePublicHoliday/:holidayId" element={<UpdatePublicHoliday />} />

          <Route path="/Regularization" element={<Regularization />} />
          <Route path="/AddRegularization" element={<AddRegularization />} />
          <Route path="/UpdateRegularization/:regularizationId" element={<UpdateRegularization />} />          

          <Route path="/Shift" element={<Shift />} />
          <Route path="/AddShift" element={<AddShift />} />
          <Route path="/UpdateShift/:shiftid" element={<UpdateShift />} />

          <Route path="/WeekOffPolicy" element={<WeekOffPolicy />} />
          <Route path="/AddWeekOffPolicy" element={<AddWeekOffPolicy />} />
          <Route path="/UpdateWeekOffPolicy/:policyId" element={<UpdateEmpWeekOff />} />

          <Route path="/User" element={<User />} />
          <Route path="/AddUser" element={<AddUser />} />
           <Route path="/UpdateUser/:userId" element={<UpdateUser />} />

          <Route path="/UserAssessment" element={<UserAssessment />} />
          <Route path="/AddUserAssessment" element={<AddUserAssessment />} />
          <Route path="/UpdateUserAssessment/:userAssessmentId" element={<UpdateUserAssessment />} />

          <Route path="/UserEducation" element={<UserEducation />} />
          <Route path="/AddUserEducation" element={<AddUserEducation />} />
          <Route path="/UpdateUserEducation/:educationId" element={<UpdateUserEducation />} />

          <Route path="/UserExperience" element={<UserExperience />} />
          <Route path="/AddUserExperience" element={<AddUserExperience />} />          
          <Route path="/UpdateUserExperience/:experienceId" element={<UpdateUserExperience />} />

          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/AddUserLogin" element={<AddUserLogin />} />
          <Route path="/UpdateUserLogin/:userLoginId" element={<UpdateUserLogin />} />          
          

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
