/*
Background
Most numbers contain the digit 1; some do not. The percentage of integers below 10^7 (ten million) containing the digit 1 is already 53%! As we consider larger and larger numbers, the percentage of integers containing the digit 1 tends towards 100%.

Problem Description
In this kata, you are required to build a function that receives a positive integer argument, n, and returns the n-th positive integer containing the digit 1, the first of which is 1.

The following numbers contain the digit 1: 10, 21, 1024, 1111111.

The following numbers do not contain the digit 1: 42, 666, 2048, 234567890.

The first 10 integers containing the digit 1 are 1, 10, 11, 12, 13, 14, 15, 16, 17 and 18.

Input Constraints
Fixed test cases: 1 ≤ n ≤ 100 (one hundred)

Small test cases: 1 ≤ n ≤ 10^5 (one hundred thousand)

Medium test cases: 1 ≤ n ≤ 10^10 (ten billion)

Large test cases: 1 ≤ n ≤ 10^15 (one quadrillion)

BigInt is not required in JavaScript.


*/
function nthNumContainingOnes(n) {
    const limit = Math.pow(10,15)
    let count = 0;
    for(let i = 0; i <= limit; i++){
      if (String(i).includes("1")){
        count++;
      }
      if(n === count){
        return i;
      }
    }
}
console.log(nthNumContainingOnes(6017)) 
// Неверно - код слишком медленный.