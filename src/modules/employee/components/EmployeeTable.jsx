function EmployeeTable({ employees, onView, onEdit, onDelete }) {
  return (
    <table className="table table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Role</th>
          <th>Status</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees && employees.length > 0 ? (
          employees.map((emp) => (
            <tr key={emp.employeeid}>
              <td>{emp.employeeid}</td>
              <td>{emp.employeename}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.role}</td>
              <td>{emp.employmentStatus}</td>
              <td>{emp.workLocation}</td>

              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => onView(emp.employeeid)}
                >
                  View
                </button>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(emp.employeeid)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(emp.employeeid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center">
              No Employees Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
