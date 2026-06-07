import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../modules/dashboard/pages/AdminDashboard";
import EmployeeList from "../modules/employee/pages/EmployeeList";
import EmployeeDetails from "../modules/employee/pages/EmployeeDetails";
import AddEmployee from "../modules/employee/components/EmployeeTable";
import EditEmployee from "../modules/employee/pages/EditEmployee";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Dashboard */}
        <Route index element={<AdminDashboard />} />

        {/* Employee Module */}
        <Route path="employees" element={<EmployeeList />} />
        <Route path="kyc" element={<h2>KYC Management Module</h2>} />

        {/* Schedule Module */}
        <Route path="attendance" element={<h2>Attendance Module</h2>} />
        <Route path="leave" element={<h2>Leave Management Module</h2>} />
        <Route path="shifts" element={<h2>Shift Management Module</h2>} />
        <Route path="weekoffs" element={<h2>Week Off Management Module</h2>} />
        <Route path="holidays" element={<h2>Public Holiday Module</h2>} />
        <Route path="regularization" element={<h2>Regularization Module</h2>} />

        {/* Payroll Module */}
        <Route path="payroll" element={<h2>Payroll Module</h2>} />
        <Route path="payslips" element={<h2>Payslip Module</h2>} />
        <Route path="tax" element={<h2>Tax Slab Module</h2>} />

        {/* Performance */}
        <Route
          path="performance"
          element={<h2>Performance Management Module</h2>}
        />

        {/* User Module */}
        <Route path="users" element={<h2>User Management Module</h2>} />
        <Route path="education" element={<h2>Education Module</h2>} />
        <Route path="experience" element={<h2>Experience Module</h2>} />
        <Route path="assessments" element={<h2>Assessment Module</h2>} />

        {/* Common */}
        <Route path="reports" element={<h2>Reports Module</h2>} />
        <Route path="settings" element={<h2>Settings Module</h2>} />

        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/view/:id" element={<EmployeeDetails />} />
        <Route path="employees/edit/:id" element={<EditEmployee />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
