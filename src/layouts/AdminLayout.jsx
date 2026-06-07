import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Layouts/AdminNavbar";

function AdminLayout() {
  return (
    <>
      <AdminNavbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
