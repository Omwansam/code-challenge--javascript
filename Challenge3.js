const basicSalary = 10000;  
const benefits = 5000;    
const individual= calculateNetSalary(basicSalary, benefits);

function calculateNetSalary(basicSalary, benefits){
    //calulatng the gross salary
   const grossSalary =basicSalary + benefits;

    
    const nhifDeductions = 2400; // Monthly NHIF maximum deductions
    const nssfEmployeeRate = 0.06; //6% of basic salary for NSSF employer rate deductions
    const nssfEmployerRate = 0.06; //6% of basic salary for NSSF employee rate deductions
    
    //Calculate NSSF deductions
    const nssfEmployerDeductions = nssfEmployerRate * basicSalary;
    const nssfEmployeeDeductions = nssfEmployeeRate * basicSalary;

    // calculate NHIF deductions
    const nhifDeduction = Math.min(nhifDeductions, 0.02 * grossSalary);


    // Calculate taxable income 
    const taxableIncome = grossSalary - nhifDeduction - nssfEmployeeDeductions;

    // Calculate PAYE
    let paye = calculatePAYE(taxableIncome);

    // Calculate net salary
    let netSalary = grossSalary - paye - nhifDeduction - nssfEmployeeDeductions;
     

    //It returns calculated values
    return {
        grossSalary: grossSalary,
        nhifDeduction: nhifDeduction,
        nssfEmployerDeductions: nssfEmployerDeductions,
        nssfEmployeeDeductions: nssfEmployeeDeductions,
        paye: paye,
        netSalary: netSalary
    };
}

// Function to calculate PAYE 
function calculatePAYE(taxableIncome) {
    // Tax rates and limts
    const taxRates = [
        { limit: 20000, rate: 0.1 },
        { limit: 30000, rate: 0.25 },
        { limit: 40000, rate: 0.30 },
        { limit: 50000, rate: 0.35 },
        
        
    ];


    let taxPayable = 0;
    let lastThreshold = 0;

    for (let i = 0; i < taxRates.length; i++) {
        let rate = taxRates[i].rate;
        let limit = taxRates[i].limit;

        if (taxableIncome <= limit) {
            taxPayable += (taxableIncome - lastThreshold) * rate;
            break;
        } else {
            taxPayable += (limit- lastThreshold) * rate;
            lastThresholdThreshold = limit;
        }
    }

    return taxPayable;
}
// How to output the values
console.log("PAYE :", individual.paye.toFixed(2));
console.log("NSSF Employer Deductions:", individual.nssfEmployerDeductions.toFixed(2));
console.log("NSSF Employee Deductions:", individual.nssfEmployeeDeductions.toFixed(2));
console.log("Net Salary:", individual.netSalary.toFixed(2));
console.log("Gross Salary:",individual.grossSalary.toFixed(2));
console.log("NHIF Deduction:", individual.nhifDeduction.toFixed(2));