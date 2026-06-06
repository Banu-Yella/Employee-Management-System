import React from "react";

import EmployeeSidebar from "../components/EmployeeComponents/EmployeeSidebar";
import EmployeeNavbar from "../components/EmployeeComponents/EmployeeNavbar";

const EmployeeLayout = ({ children }) => {

  return (

    <div className="d-flex">

      {/* Sidebar */}

      <EmployeeSidebar />

      {/* Main Content */}

      <div
        className="flex-grow-1"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f7fb"
        }}
      >

        {/* Navbar */}

        <EmployeeNavbar />

        {/* Page Content */}

        <div className="p-4">

          {children}

        </div>

      </div>

    </div>

  );
};

export default EmployeeLayout;