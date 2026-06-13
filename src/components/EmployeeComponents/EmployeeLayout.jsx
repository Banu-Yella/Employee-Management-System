import EmployeeNavbar from "./EmployeeNavbar";
function EmployeeLayout({ children }) {
  return (
    <>
      <EmployeeNavbar />

      <div className="container-fluid mt-4">{children}</div>
    </>
  );
}

export default EmployeeLayout;
