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
function deleteDigit(n) {
    const array = [...'' + n].map(Number) //уточнить
    const newArray = [];
    const sortingFunction = (a , b) => a - b;

    for (let i = 0; i < array.length; i++) {
        let copyOfArray = array.slice();
        copyOfArray.splice(i , 1)
        newArray.push(Number(copyOfArray.join("")))   
    }
    const sortedArray = newArray.sort(sortingFunction);
    return sortedArray.at(-1);
}
// проверочное число n = 597306, 809053.  
console.log(deleteDigit([809053]));