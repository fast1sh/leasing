const initialFeeCalculate = (initialPercent, cost) => parseFloat(initialPercent) * parseFloat(cost);

const sumCalculate = (initialFee, term, monthlyPayment) => parseFloat(initialFee) + parseFloat(term) * parseFloat(monthlyPayment);

const monthlyPaymentCalculate = (cost, initialFee, interestRate, term) => {
    return (parseFloat(cost) - parseFloat(initialFee)) * ((interestRate * Math.pow((1 + interestRate), parseFloat(term))) / (Math.pow((1 + interestRate), parseFloat(term)) - 1));
};

export { initialFeeCalculate, sumCalculate, monthlyPaymentCalculate };