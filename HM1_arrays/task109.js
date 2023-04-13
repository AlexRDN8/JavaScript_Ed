/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that 
will insert dashes ('-') between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
    const array = num.toString().split("").map(Number); //нагуглил
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i]);
        if (array[i] % 2 !== 0 && i + 1 < array.length && array[i + 1] % 2 !== 0) {
            newArray.push("-"); 
        }
    }
    return newArray.join("");
 }
// Math.sqrt(-1)
// typeof undefined % 2 === "number"
// NaN

 console.log(insertDash(454793)); 