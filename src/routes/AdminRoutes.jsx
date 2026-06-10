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

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Dashboard */}
        <Route index element={<AdminDashboard />} />
        <Route path="summary" element={<MonthlySummary />} />

        {/* Employee Module */}
        <Route path="employees" element={<EmployeeList />} />
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
        <Route
          path="attendance"
          element={
            <ModulePlaceholder
              title="Attendance Module"
              subtitle="Manage daily attendance, attendance summaries, and shift logs from one place."
              highlights={[
                "Track check-in and check-out times",
                "Review attendance summaries and exceptions",
                "Support shift, week-off, and holiday planning",
              ]}
              quickStats={[
                { label: "Present Today", value: "42" },
                { label: "Late Entries", value: "3" },
                { label: "Absent", value: "5" },
              ]}
            />
          }
        />
        <Route
          path="leave"
          element={
            <ModulePlaceholder
              title="Leave Management"
              subtitle="Handle leave requests, approvals, and balance summaries for all employees."
              highlights={[
                "Approve and reject leave requests",
                "Monitor leave balances and policy usage",
                "View team-wide leave trends",
              ]}
              quickStats={[
                { label: "Pending Leaves", value: "8" },
                { label: "Approved", value: "27" },
                { label: "Available Balance", value: "146" },
              ]}
            />
          }
        />
        <Route
          path="shifts"
          element={
            <ModulePlaceholder
              title="Shift Management"
              subtitle="Create shift schedules, monitor coverage, and align staffing plans."
              highlights={[
                "Assign shifts to employees",
                "Balance staffing across teams",
                "Track shift changes and penalties",
              ]}
              quickStats={[
                { label: "Active Shifts", value: "6" },
                { label: "Coverage", value: "92%" },
                { label: "Open Slots", value: "4" },
              ]}
            />
          }
        />
        <Route
          path="weekoffs"
          element={
            <ModulePlaceholder
              title="Week Off Management"
              subtitle="Plan weekly offs, employee rest days, and team availability."
              highlights={[
                "Set recurring week-off rules",
                "Review employee rest schedules",
                "Prevent staffing conflicts",
              ]}
              quickStats={[
                { label: "Week Off Requests", value: "11" },
                { label: "Approved", value: "9" },
                { label: "Open Conflicts", value: "2" },
              ]}
            />
          }
        />
        <Route
          path="holidays"
          element={
            <ModulePlaceholder
              title="Public Holidays"
              subtitle="Manage holiday calendars, regional observances, and office closure plans."
              highlights={[
                "Publish holiday calendars",
                "Track regional holiday rules",
                "Inform teams about office shutdowns",
              ]}
              quickStats={[
                { label: "Upcoming Holidays", value: "5" },
                { label: "Countries", value: "3" },
                { label: "Office Closed", value: "2" },
              ]}
            />
          }
        />
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

        <Route path="/admin/attendance/:id" element={<AttendanceHistory />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
