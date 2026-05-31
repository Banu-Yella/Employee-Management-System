function EmployeeList() {
  const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Sarah", department: "HR" },
    { id: 3, name: "David", department: "Finance" }
  ];

  return (
    <div>
      <h1>Employee List</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;