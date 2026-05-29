import React from "react";

const PayrollManagement = () => {

  const payrollData = [
    {
      id: "EMP001",
      name: "Pavan Kumar",
      department: "Embedded",
      salary: "₹65,000",
      month: "May 2026",
      status: "Paid"
    },
    {
      id: "EMP002",
      name: "Rahul Sharma",
      department: "IT",
      salary: "₹55,000",
      month: "May 2026",
      status: "Paid"
    },
    {
      id: "EMP003",
      name: "Anjali Verma",
      department: "HR",
      salary: "₹48,000",
      month: "May 2026",
      status: "Pending"
    }
  ];

  const downloadPayslip = (employee) => {

    alert(
      `Downloading Payslip for ${employee.name}`
    );

  };

  return (

    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Payroll Management
        </h2>

        <p className="text-muted">
          Manage employee salaries and payslips
        </p>

      </div>

      {/* Summary Cards */}

      <div className="row g-4 mb-4">

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-4">

            <h3 className="text-primary">
              ₹18.75L
            </h3>

            <p>Total Payroll</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-4">

            <h3 className="text-success">
              98
            </h3>

            <p>Employees Paid</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-4">

            <h3 className="text-warning">
              12
            </h3>

            <p>Pending Payments</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-4">

            <h3 className="text-danger">
              ₹1.25L
            </h3>

            <p>Deductions</p>

          </div>

        </div>

      </div>

      {/* Payroll Table */}

      <div className="card shadow-sm border-0">

        <div className="card-header bg-white">

          <h5 className="mb-0">
            Employee Payroll Records
          </h5>

        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Month</th>
                <th>Status</th>
                <th>Payslip</th>

              </tr>

            </thead>

            <tbody>

              {payrollData.map((employee) => (

                <tr key={employee.id}>

                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.month}</td>

                  <td>

                    <span
                      className={`badge ${
                        employee.status === "Paid"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        downloadPayslip(employee)
                      }
                    >
                      Download PDF
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default PayrollManagement;