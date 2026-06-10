function EmployeeSidebar() {
  return (
    <aside className="bg-dark text-white" style={{ width: "240px", minHeight: "100vh", padding: "16px" }}>
      <h4 className="mb-4">EMS</h4>
      <ul className="nav flex-column gap-2">
        <li><a className="nav-link text-white" href="/employee">Dashboard</a></li>
        <li><a className="nav-link text-white" href="/employee">Attendance</a></li>
        <li><a className="nav-link text-white" href="/employee">Leave</a></li>
        <li><a className="nav-link text-white" href="/employee">Profile</a></li>
      </ul>
    </aside>
  );
}

export default EmployeeSidebar;
