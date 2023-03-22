// Function to calculate payee (tax)
function calculatePayee(grossSalary) {
    let payee = 0;
    if (grossSalary <= 24000) {
      payee = 0.1 * (grossSalary);
    } else if (grossSalary <= 32333) {
      payee = 0.25 * (grossSalary);
    } else {
      payee = 0.3 * (grossSalary);
    }
    return payee;
  }
  
  // Function to calculate NHIF deduction
  function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
      nhif = 150;
    } else if (basicSalary <= 7999) {
      nhif = 300;
    } else if (basicSalary <= 11999) {
      nhif = 400;
    } else if (basicSalary <= 14999) {
      nhif = 500;
    } else if (basicSalary <= 19999) {
      nhif = 600;
    } else if (basicSalary <= 24999) {
      nhif = 750;
    } else if (basicSalary <= 29999) {
      nhif = 850;
    } else if (basicSalary <= 34999) {
      nhif = 900;
    } else if (basicSalary <= 39999) {
      nhif = 950;
    } else if (basicSalary <= 44999){
      nhif = 1000;
    } else if (basicSalary <= 49999){
      nhif = 1100;
    } else if (basicSalary <= 59999){
      nhif = 1200;
    } else if (basicSalary <= 69999){
      nhif = 1300;
    } else if (basicSalary <= 79999){
      nhif = 1400;
    } else if (basicSalary <= 89999){
      nhif = 1500;
    } else if (basicSalary <= 99999){
      nhif = 1600;
    }
    else {
      nhif = 1700;
    }
    return nhif;
  }
  
  // Function to calculate NSSF deduction
  function calculateNSSF(basicSalary) {
    const nssf = 0.06 * basicSalary;
    return nssf;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const deductions = payee + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return netSalary;
  }
  
  