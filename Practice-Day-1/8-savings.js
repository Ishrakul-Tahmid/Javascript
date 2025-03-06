function monthlySaving(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;
    for (let i = 0; i < payments.length; i++) {
        totalIncome += payments[i] > 3000 ? payments[i] * 0.8 : payments[i];
    }

    let savings = totalIncome - livingCost;

    return savings > 0 ? savings : "earn more";
}

console.log(monthlySaving([1000, 1000, 4000], 3000)); // Output: 2200
