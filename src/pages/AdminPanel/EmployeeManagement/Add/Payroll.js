export const calculateGrossSalary = ({
    basicSalary,
    hra,
    allowances,
    bonus,
}) => {
    return (
        Number(basicSalary || 0) +
        Number(hra || 0) +
        Number(allowances || 0) +
        Number(bonus || 0)
    );
};

export const calculateNetSalary = ({
    basicSalary,
    hra,
    allowances,
    bonus,
    deductions,
    pf,
    esi,
    professionalTax,
    incomeTax,
}) => {

    const grossSalary = calculateGrossSalary({
        basicSalary,
        hra,
        allowances,
        bonus,
    });

    const totalDeductions =
        Number(deductions || 0) +
        Number(pf || 0) +
        Number(esi || 0) +
        Number(professionalTax || 0) +
        Number(incomeTax || 0);

    return grossSalary - totalDeductions;
};