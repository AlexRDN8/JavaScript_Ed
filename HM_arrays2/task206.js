/*
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

[1,2,...[3,4,5],6,...[7,8,9,0], ..."qwe"]

function deleteDigit(n) {
    // const array = [...'' + n].map(Number) //уточнить
    const array = n.toString().split("").map(Number) //уточнить
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const copyOfArray = [...array];
        copyOfArray.splice(i, 1)
        newArray.push(Number(copyOfArray.join("")))   
    }
    return Math.max(...newArray);
}
// проверочное число n = 597306, 809053.  
console.log(deleteDigit([809053]));