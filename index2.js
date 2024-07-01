const nhifRate = 0.68;
const nssfRate =  0.06;

const basicSalary = 250000
const benefits = 25000
const grossSalary = basicSalary + benefits;

const paye = basicSalary * PayeRate;
const nhif = grossSalary * nhifRate
const nssf = grossSalary * nssfRate
const totaldeductions = paye + nhif + nssf;
 
const netSalary = grossSalary - totaldeductions;

console.log("Gross Salary:", grossSalary.toFixed(2));
console.log("payee:", paye.toFixed(2));
console.log("NHIF Deductions:", nhif.toFixed(2));
console.log("NSSF Deductions:", nssf.toFixed(2));
console.log("Total Deductions:", totalDeductions.toFixed(2));
console.log("Net Salary:", netSalary.toFixed(2));





