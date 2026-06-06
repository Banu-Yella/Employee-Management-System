import React from "react";

import AdminSidebar from "../components/AdminComponents/AdminSidebar";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";

const AdminLayout = ({ children }) => {

  return (

    <>
      <AdminSidebar />

      <AdminNavbar />

      <main
        style={{
          marginLeft: "260px",
          marginTop: "70px",
          padding: "25px",
          minHeight: "100vh",
          background: "#f8fafc"
        }}
      >
        {children}
      </main>

    </>
  );
};

export default AdminLayout;