import React from 'react'
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../../styles/MainLayout.css"

const MainLayout = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <div>
            <>
                <div >
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="Admin-panel">Admin Panel</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                All created, updated, and deleted records must be documented clearly for transparency and tracking. If you face any challenges, kindly use discussion threads to connect with teammates for guidance and resolution.
                            </div>
                            <div className="management-menu-stack">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Employee management
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a onClick={() => navigate("/Employees")} className="dropdown-item" >Employees</a></li>
                                    <li><a onClick={() => navigate("/EmployeeLogin")} className="dropdown-item" >Employee Login</a></li>
                                    <li><a onClick={() => navigate("/Kyc")} className="dropdown-item" >Kyc</a></li>
                                    <li><a onClick={() => navigate("/Payroll")} className="dropdown-item" >Payroll</a></li>
                                    <li><a onClick={() => navigate("/Payslip")} className="dropdown-item">Payslip</a></li>
                                    <li><a onClick={() => navigate("/Performance")} className="dropdown-item">Performance</a></li>
                                    <li><a onClick={() => navigate("/Taxslab")} className="dropdown-item">Tax slab</a></li>
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Job-board management
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a onClick={() => navigate("/JobBoard")} className="dropdown-item">Job-Board</a></li>
                                    <li><a onClick={() => navigate("/Assessment")} className="dropdown-item">Assessment</a></li>
                                    <li><a onClick={() => navigate("/Exam")} className="dropdown-item" >Exam</a></li>
                                    <li><a onClick={() => navigate("/ExamQuestion")} className="dropdown-item" >Exam Question</a></li>
                                    <li><a onClick={() => navigate("/JobApplication")} className="dropdown-item" >Job Application</a></li>
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Schedule management
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a onClick={() => navigate("/Attendance")} className="dropdown-item">Attendance</a></li>
                                    <li><a onClick={() => navigate("/EmpWeekOff")} className="dropdown-item" >Employee Week-Off</a></li>
                                    <li><a onClick={() => navigate("/Leave")} className="dropdown-item" >Employee Leaves</a></li>
                                    <li><a onClick={() => navigate("/MonthlyAttendanceSummary")} className="dropdown-item" >Monthly Attendance Summary</a></li>
                                    <li><a onClick={() => navigate("/PublicHoliday")} className="dropdown-item" >Public Holidays</a></li>
                                    <li><a onClick={() => navigate("/Regularization")} className="dropdown-item" >Regularization</a></li>
                                    <li><a onClick={() => navigate("/Shift")} className="dropdown-item" >Shift</a></li>
                                    <li><a onClick={() => navigate("/WeekOffPolicy")} className="dropdown-item" >Week-Off Policy</a></li>
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    User management
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a onClick={() => navigate("/User")} className="dropdown-item">User</a></li>
                                    <li><a onClick={() => navigate("/UserAssessment")} className="dropdown-item" >User Assessment</a></li>
                                    <li><a onClick={() => navigate("/UserEducation")} className="dropdown-item" >User Education</a></li>
                                    <li><a onClick={() => navigate("/UserExperience")} className="dropdown-item" >User Experience</a></li>
                                    <li><a onClick={() => navigate("/UserLogin")} className="dropdown-item" >User Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOP BAR (SIMPLE) */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="btn btn-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </a>
                        <span>
                            <svg onClick={() => navigate("/")} role="button" xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                            </svg>
                        </span>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link active" type="button" aria-current="page" onClick={() => navigate("/")}>
                                        Home
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Link
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link disabled" aria-disabled="true">
                                        Disabled
                                    </span>
                                </li>
                            </ul>

                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle d-flex align-items-center gap-2 border-0 bg-transparent"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span>Profile</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                type="button"
                                                onClick={() => goTo("/")}
                                            >
                                                Profile
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                type="button"
                                                onClick={() => goTo("/")}
                                            >
                                                Settings
                                            </button>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <button className="dropdown-item text-danger" type="button">
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="container-fluid py-3">
                    <Outlet />
                </main>
            </>
        </div>
    )
}

export default MainLayout
