import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = ({ children }) => {
  return (

    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        <AdminNavbar />

        <div className="p-4">
          {children}
        </div>

      </div>

    </div>

  );
};
export default AdminLayout;