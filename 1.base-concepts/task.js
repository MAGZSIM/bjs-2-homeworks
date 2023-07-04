"use strict";

function solveEquation(a, b, c) {
   let discriminant = Math.pow(b,2) - 4*a*c;
   if (discriminant < 0) {
   return [];
   } else if (discriminant === 0) {
    return [-b/(2*a)];
   } else if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)]
   }
}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   if (
       typeof percent !== "number"||
       typeof contribution !== "number"||
       typeof amount !== "number"||
       typeof countMonths !== "number"
    ) {
       return "Ошибка ввода данных";
    }
   if (percent  < 0 || percent > 100 ) {
       return " Процентная ставка должна быть в диапазоне от 0 до 100";
   }

let p,
   s,
   n,
   payment,
   result;

p = percent/100/12;

s = amount-contribution;

n = countMonths;

payment = s * (p + (p / ((Math.pow((1 + p), n) - 1))));

return result = Number((payment*n).toFixed(2));

console.log(result);
}

console.log(calculateTotalMortgage(10, 0 , 50000, 12));
console.log(calculateTotalMortgage(10, 1000 , 50000, 12));
console.log(calculateTotalMortgage(10, 0 , 20000, 24));
console.log(calculateTotalMortgage(10, 1000 , 20000, 24));
console.log(calculateTotalMortgage(10, 20000 , 20000, 24));
console.log(calculateTotalMortgage(10, 0 , 10000, 36));
console.log(calculateTotalMortgage(15, 0 , 10000, 36));