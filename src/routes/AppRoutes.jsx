import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../modules/auth/pages/Login";
import AdminSetup from "../modules/auth/pages/AdminSetup";
import EmployeeRegister from "../modules/auth/pages/EmployeeRegister";

import AdminRoutes from "./AdminRoutes";

import EmployeeRoutes from "./EmployeeRoutes";
import CandidateDashboard from "../modules/dashboard/pages/CandidateDashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<EmployeeRegister />} />
        <Route path="/admin-setup" element={<AdminSetup />} />

        {/* ADMIN MODULE */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        {/* EMPLOYEE MODULE */}
        <Route
          path="/employee/*"
          element={
            <ProtectedRoute>
              <EmployeeRoutes />
            </ProtectedRoute>
          }
        />

        {/* CANDIDATE MODULE */}
        <Route
          path="/candidate"
          element={
            <ProtectedRoute>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
