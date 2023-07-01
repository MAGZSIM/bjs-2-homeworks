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