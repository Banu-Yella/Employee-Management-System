import React, { useState } from "react";
import UserSidebar from "../components/UserLayout/UserSidebar";
import UserNavbar from "../components/UserLayout/UserNavbar";

const UserLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 70 : 250;

  return (
   <>
      <UserSidebar collapsed={collapsed} toggleSidebar={() => setCollapsed((prev) => !prev)} />
      <UserNavbar collapsed={collapsed} toggleSidebar={() => setCollapsed((prev) => !prev)} />
      <main
        style={{
          marginLeft: `${sidebarWidth}px`,
          marginTop: "70px",
          padding: "25px",
          minHeight: "100vh",
          backgroundColor: "#f5f7fb"
        }}
      >
        {children}
      </main>
    </>
  )
}

export default UserLayout
