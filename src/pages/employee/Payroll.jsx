import React from "react";

const Payroll = () => {

  const payrollHistory = [
    {
      month: "January 2026",
      salary: "₹55,000",
      status: "Paid"
    },
    {
      month: "February 2026",
      salary: "₹55,000",
      status: "Paid"
    },
    {
      month: "March 2026",
      salary: "₹55,000",
      status: "Paid"
    },
    {
      month: "April 2026",
      salary: "₹60,000",
      status: "Paid"
    },
    {
      month: "May 2026",
      salary: "₹60,000",
      status: "Paid"
    },
    {
      month: "June 2026",
      salary: "₹60,000",
      status: "Pending"
    }
  ];

  const downloadPayslip = (month) => {
    alert(`Downloading Payslip for ${month}`);
  };

  return (

    <div className="container-fluid">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          Payroll & Payslips
        </h2>

        <p className="text-muted">
          View salary details and download payslips
        </p>

      </div>

      {/* Summary Cards */}

      <div className="row g-4 mb-4">

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h3 className="text-primary">
              ₹60,000
            </h3>

            <p className="mb-0">
              Current Monthly Salary
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h3 className="text-success">
              Paid
            </h3>

            <p className="mb-0">
              Current Payroll Status
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h3 className="text-warning">
              6
            </h3>

            <p className="mb-0">
              Available Payslips
            </p>

          </div>

        </div>

      </div>

      {/* Salary Increment History */}

      <div className="card border-0 shadow-sm mb-4">

        <div className="card-header bg-white">

          <h5 className="mb-0">
            Salary Increment History
          </h5>

        </div>

        <div className="card-body">

          <table className="table">

            <thead>

              <tr>

                <th>Effective Date</th>
                <th>Old Salary</th>
                <th>New Salary</th>
                <th>Increment</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>01-Apr-2026</td>
                <td>₹55,000</td>
                <td>₹60,000</td>
                <td className="text-success">
                  +₹5,000
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Payslip History */}

      <div className="card border-0 shadow-sm">

        <div className="card-header bg-white">

          <h5 className="mb-0">
            Payslip History
          </h5>

        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Month</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Payslip</th>

              </tr>

            </thead>

            <tbody>

              {payrollHistory.map((item, index) => (

                <tr key={index}>

                  <td>{item.month}</td>

                  <td>{item.salary}</td>

                  <td>

                    <span
                      className={`badge ${
                        item.status === "Paid"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        downloadPayslip(item.month)
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

export default Payroll;