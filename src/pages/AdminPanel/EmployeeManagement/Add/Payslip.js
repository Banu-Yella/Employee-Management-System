export const calculatePayslip = ({
    workingDays,
    absentDays,
    halfDays,
    payroll,
}) => {

    const lopDays =
        Number(absentDays || 0) +
        Number(halfDays || 0) * 0.5;

    const paidDays = Math.max(
        Number(workingDays || 0) - lopDays,
        0
    );

    const grossSalary =
        Number(payroll?.basicSalary || 0) +
        Number(payroll?.hra || 0) +
        Number(payroll?.allowances || 0) +
        Number(payroll?.bonus || 0);

    const perDaySalary = Number(
        (
            grossSalary /
            Number(workingDays || 1)
        ).toFixed(2)
    );

    const lopDeduction = Number(
        (
            perDaySalary * lopDays
        ).toFixed(2)
    );

    const totalDeductions =
        lopDeduction +
        Number(payroll?.deductions || 0) +
        Number(payroll?.pf || 0) +
        Number(payroll?.esi || 0) +
        Number(payroll?.professionalTax || 0) +
        Number(payroll?.incomeTax || 0);

    const netPay = Math.max(
        grossSalary - totalDeductions,
        0
    );

    return {
        paidDays,
        lopDays,
        perDaySalary,
        lopDeduction,
        totalDeductions,
        netPay,
    };
};