import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../modules/dashboard/pages/AdminDashboard";
import ModulePlaceholder from "../modules/dashboard/components/ModulePlaceholder";
import EmployeeList from "../modules/employee/pages/EmployeeList";
import EmployeeDetails from "../modules/employee/pages/EmployeeDetails";
import EditEmployee from "../modules/employee/pages/EditEmployee";
import AttendanceHistory from "../modules/attendance/pages/AttendanceHistory";
import MonthlySummary from "../modules/dashboard/pages/MonthlySummary";
import SettingsPage from "../modules/dashboard/pages/SettingsPage";
import AttendanceList from "../modules/attendance/pages/AttendanceList";
import AttendanceSummary from "../modules/attendance/pages/AttendanceSummary";
import Shifts from "../modules/attendance/pages/Shifts";
import LeaveList from "../modules/leave/pages/LeaveList";
import LeaveDetails from "../modules/leave/pages/LeaveDetails";
import LeaveApproval from "../modules/leave/pages/LeaveApproval";
import WeekOffs from "../modules/attendance/pages/WeekOffs";
import Holidays from "../modules/attendance/pages/Holidays";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Dashboard */}
        <Route index element={<AdminDashboard />} />
        <Route path="summary" element={<MonthlySummary />} />

        {/* Employee Module */}
        <Route
          path="kyc"
          element={
            <ModulePlaceholder
              title="KYC Management"
              subtitle="Track employee verification records, document status, and approval progress."
              highlights={[
                "Verify KYC documents and status updates",
                "Monitor approvals and pending reviews",
                "Keep compliance and onboarding records centralized",
              ]}
              quickStats={[
                { label: "Pending KYC", value: "12" },
                { label: "Verified", value: "84" },
                { label: "Documents", value: "96" },
              ]}
            />
          }
        />

        {/* Schedule Module */}
        <Route path="leave" element={<LeaveList />} />

        <Route path="leave/:id" element={<LeaveDetails />} />

        <Route path="leave/approval" element={<LeaveApproval />} />
        {/* Payroll Module */}
        <Route
          path="payroll"
          element={
            <ModulePlaceholder
              title="Payroll Module"
              subtitle="Manage salary processing, payroll summaries, and monthly compensation workflows."
              highlights={[
                "Review payroll runs and processing status",
                "Monitor deductions, reimbursements, and payouts",
                "Generate payroll summaries for finance teams",
              ]}
              quickStats={[
                { label: "Payroll Runs", value: "12" },
                { label: "Processed", value: "98%" },
                { label: "Pending", value: "2" },
              ]}
            />
          }
        />
        <Route
          path="payslips"
          element={
            <ModulePlaceholder
              title="Payslips"
              subtitle="Share payslips, review salary breakdowns, and manage monthly statements."
              highlights={[
                "Send payslips to employees",
                "Show salary and deduction breakdowns",
                "Track issuance and download history",
              ]}
              quickStats={[
                { label: "Payslips Issued", value: "124" },
                { label: "Download Rate", value: "91%" },
                { label: "Pending", value: "6" },
              ]}
            />
          }
        />
        <Route
          path="tax"
          element={
            <ModulePlaceholder
              title="Tax Slabs"
              subtitle="Configure tax rules, exemption bands, and salary deduction parameters."
              highlights={[
                "Maintain tax tables and deduction rules",
                "Apply compliance updates quickly",
                "Review impact on payroll calculations",
              ]}
              quickStats={[
                { label: "Tax Rules", value: "18" },
                { label: "Updated This Month", value: "2" },
                { label: "Compliance", value: "100%" },
              ]}
            />
          }
        />

        {/* Performance */}
        <Route
          path="performance"
          element={
            <ModulePlaceholder
              title="Performance Management"
              subtitle="Track goals, reviews, and employee performance insights."
              highlights={[
                "Monitor appraisal progress",
                "Review goals and KRAs",
                "Prepare review summaries for managers",
              ]}
              quickStats={[
                { label: "Reviews Due", value: "9" },
                { label: "Completed", value: "36" },
                { label: "Top Rating", value: "A" },
              ]}
            />
          }
        />

        {/* User Module */}
        <Route
          path="users"
          element={
            <ModulePlaceholder
              title="User Management"
              subtitle="Manage employee access, roles, and admin-level user controls."
              highlights={[
                "Assign roles and permissions",
                "Review active users and role groups",
                "Support onboarding and account changes",
              ]}
              quickStats={[
                { label: "Active Users", value: "64" },
                { label: "Admins", value: "4" },
                { label: "Suspended", value: "1" },
              ]}
            />
          }
        />
        <Route
          path="education"
          element={
            <ModulePlaceholder
              title="Education Records"
              subtitle="Store qualifications, certifications, and education history."
              highlights={[
                "Maintain employee education details",
                "Track certifications and expiry dates",
                "Support internal skills mapping",
              ]}
              quickStats={[
                { label: "Certificates", value: "34" },
                { label: "Expiring Soon", value: "3" },
                { label: "Verified", value: "29" },
              ]}
            />
          }
        />
        <Route
          path="experience"
          element={
            <ModulePlaceholder
              title="Experience Records"
              subtitle="Review prior employment history, tenure, and domain experience."
              highlights={[
                "Track relevant work experience",
                "Highlight seniority and domain knowledge",
                "Support recruitment and internal mobility",
              ]}
              quickStats={[
                { label: "Profiles", value: "58" },
                { label: "Avg. Tenure", value: "4.2 yrs" },
                { label: "Key Roles", value: "12" },
              ]}
            />
          }
        />
        <Route
          path="assessments"
          element={
            <ModulePlaceholder
              title="Assessments"
              subtitle="Review tests, evaluations, and competency scores for employees."
              highlights={[
                "Manage assessment cycles",
                "Track evaluation outcomes",
                "Support learning and development planning",
              ]}
              quickStats={[
                { label: "Assessments", value: "19" },
                { label: "Average Score", value: "82%" },
                { label: "Pending", value: "4" },
              ]}
            />
          }
        />

        {/* Common */}
        <Route
          path="reports"
          element={
            <ModulePlaceholder
              title="Reports"
              subtitle="See workforce trends, summaries, and administrative reports at a glance."
              highlights={[
                "Review attendance and employee trend reports",
                "Monitor payroll and leave summaries",
                "Prepare management-ready data views",
              ]}
              quickStats={[
                { label: "Reports Ready", value: "8" },
                { label: "Monthly Views", value: "24" },
                { label: "Export Formats", value: "3" },
              ]}
            />
          }
        />
        <Route path="settings" element={<SettingsPage />} />

        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/view/:id" element={<EmployeeDetails />} />
        <Route path="employees/edit/:id" element={<EditEmployee />} />

        {/* =========================
             Attendance Module
            ========================= */}

        <Route path="attendance" element={<AttendanceList />} />

        <Route path="attendance-summary" element={<AttendanceSummary />} />

        <Route path="attendance/:id" element={<AttendanceHistory />} />

        <Route path="shifts" element={<Shifts />} />

        <Route path="weekoffs" element={<WeekOffs />} />

        <Route path="holidays" element={<Holidays />} />

        <Route
          path="regularization"
          element={
            <ModulePlaceholder
              title="Regularization"
              subtitle="Review attendance corrections, late punch adjustments, and approval logs."
              highlights={[
                "Approve punch correction requests",
                "Track exception handling",
                "Audit historical attendance changes",
              ]}
              quickStats={[
                { label: "Pending Requests", value: "7" },
                { label: "Approved Today", value: "4" },
                { label: "Rejected", value: "1" },
              ]}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
