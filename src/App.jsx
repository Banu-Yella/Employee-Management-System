import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Components Folder */
import AdminNavbar from "./components/AdminNavbar";
import EmployeeNavbar from "./components/EmployeeNavbar";
import Navbar from "./components/Navbar";
import ProtectRoute from "./components/ProtectRoute";
import Sidebar from "./components/Sidebar";

/* Admin Pages */
import AddEmployee from "./pages/admin/AddEmployee";
import Dashboard from "./pages/admin/Dashboard";
import EditEmployee from "./pages/admin/EditEmployee";
import Employees from "./pages/admin/Employees";
import PayrollManagement from "./pages/admin/PayrollManagement";

/* Employee Pages */
import Attendance from "./pages/employee/Attendance";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import Payroll from "./pages/employee/Payroll";
import Profile from "./pages/employee/Profile";

/* Layouts */
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================= REGISTER ================= */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/add-employee"
          element={
            <AdminLayout>
              <AddEmployee />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/employees"
          element={
            <AdminLayout>
              <Employees />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/edit-employee/:id"
          element={
            <AdminLayout>
              <EditEmployee />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/payroll"
          element={
            <AdminLayout>
              <PayrollManagement />
            </AdminLayout>
          }
        />

        {/* ================= EMPLOYEE ROUTES ================= */}

        <Route
          path="/employee/dashboard"
          element={
            <EmployeeLayout>
              <EmployeeDashboard />
            </EmployeeLayout>
          }
        />

        <Route
          path="/employee/attendance"
          element={
            <EmployeeLayout>
              <Attendance />
            </EmployeeLayout>
          }
        />

        <Route
          path="/employee/payroll"
          element={
            <EmployeeLayout>
              <Payroll />
            </EmployeeLayout>
          }
        />

        <Route
          path="/employee/profile"
          element={
            <EmployeeLayout>
              <Profile />
            </EmployeeLayout>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;