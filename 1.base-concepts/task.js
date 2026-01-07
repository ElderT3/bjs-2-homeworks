"use strict"
function solveEquation(a, b, c) {
const d = b ** 2 - 4 * a * c;
  const result = [];

  if (d < 0) {
    return result;
  }

  if (d === 0) {
    result.push(-b / (2 * a));
    return result;
  }

  const sqrtD = Math.sqrt(d);
  result.push((-b + sqrtD) / (2 * a));
  result.push((-b - sqrtD) / (2 * a));

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (contribution >= amount) {
    return 0;
  }

  const creditBody = amount - contribution;
  const monthlyRate = percent / 100 / 12;

  const monthlyPayment =
    creditBody *
    (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));

  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}