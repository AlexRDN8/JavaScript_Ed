/*
DESCRIPTION:
This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: 
square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN 
(note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/
var numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function (){
    return this.map(el => el * el)
}
Array.prototype.cube = function (){
    return this.map(el => el * el * el)
}
Array.prototype.average = function (){
    return this.sum() / this.length
}
Array.prototype.sum = function (){
    return this.reduce((sum, elem) => sum + elem, 0)
}
Array.prototype.even = function (){
    return this.filter(elem => elem % 2 === 0)
}
// Array.prototype.odd = function (){
//     return this.filter(elem => elem % 2 !== 0)
// }

Object.defineProperty(Array.prototype, "odd", { //!!
    enumerable: false,
    value: function (){
        return this.filter(elem => elem % 2 !== 0)
    },
});

Object.keys(Array.prototype).forEach(method => { //скопировал из статьи по созданию методов массива
	Object.defineProperty(Array.prototype, method, {
		enumerable: false,
	});
});

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());     // must return 15
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]