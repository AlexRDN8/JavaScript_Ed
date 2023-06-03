/*
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.


and so on.
A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/
// function add(n){
//     let result = n;

//     function summing (addedNum){
//         result += addedNum;
//         return summing;
//     }

//     // https://learn.javascript.ru/object-toprimitive
//     summing[Symbol.toPrimitive] = () => result; // почитать про каррирование

//     return summing;
// }
function add(n){
    function summing (addedNum){
        return add(n + addedNum);
    }
    summing[Symbol.toPrimitive] = () => n;
    return summing;
}


const fn = add(1)(2)(3); // 6

console.log(+fn); // 6

console.log(+fn(10)(20)(30)); // 66
console.log(+fn(1000)(7000)); // 8006 // исправить это, должно получаться 8006, а не 8066.


// obj['toString'] 
// obj[Symbol.toPrimitive]
// console.log(add)

// console.log(">>>", add(1)(2)(3))
// console.log(add(1)(2)(3) == 6)
// console.log(add(1)(2)(3)(4)  == 10)
// console.log(add(1)(2)(3)(4)(5) == 15)


// Не решил (код неверный).
// console.log(add(1)(2)(3)(4)) // 10
// console.log(add(1)(2)(3)(4)(30)) // 40