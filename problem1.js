function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }

    const saving = income - expenses;
    const incomeTax = saving * .20;
    return incomeTax;
}
console.log(calculateTax(5000, 1593));


