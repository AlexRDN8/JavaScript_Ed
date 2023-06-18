/*
Lazy evaluation is an evaluation strategy which delays the evaluation of an expression until its value is needed.

Implement the Lazy function. This function has two methods:

add(fn[, arg1, arg2, ...]): adds the fn function to the lazy chain evaluation. 
This function could receive optional arguments.
invoke(target): performs the evaluation chain over the target array.
For example:

Given these functions:

function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
  return Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}

function isNumeric(n) {
  return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Array.prototype.filter.call(args, function(value) {
    return min <= value && value <= max;
  });
}
You could use it via composition:

max.apply(null, filterRange.apply(null, [1, 3].concat(filterNumbers(1, 2, "3", 7, 6, 5))));
But this solution is not reusable.

A better approach could be to use composition with lazy invocation:

new Lazy()
      .add(filterNumbers)
      .add(filterRange, 2, 7)
      .add(max)
      .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]); //6
Step by step, this is what should happen when invoke function is called:

filterNumbers(1, 8, 6, [], "7", -1, {v: 5}, 4) // == [1, 8, 6, -1, 4]
//            ^------------------------------ from invoke
filterRange(2, 7, 1, 8, 6, -1, 4) // == [6, 4]
// from add ---^  ^------------- from previous result
max(6, 4) // == 6
//  ^--- from previous result

Result from invoke: 6
//                  ^ from last result
*/
class Lazy { // сам не смог решить
  constructor() {
    this.fnChain = [];
  }
  add(fn, ...args) {
    // this.fnChain.push({fn, args})
    // this.fnChain.push(fn.bind(null, ...args));
    this.fnChain.push((...arr) => fn(...args, ...arr));
    return this;
  }
  invoke(initialArr) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // return this.fnChain.reduce((arr, {fn, args}) => fn(...args, ...arr), initialArr); //деструктуризация- почитать
    return this.fnChain.reduce((arr, fn) => fn(...arr), initialArr); //деструктуризация- почитать
  }
}
/// Функции для проверки
function max() {
  return Math.max.apply(null, arguments);
}

function filterNumbers() {
return Array.prototype.filter.call(arguments, function(value) {
  return isNumeric(value);
});
}

function isNumeric(n) {
return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
var args = Array.prototype.slice.call(arguments, 2);
return Array.prototype.filter.call(args, function(value) {
  return min <= value && value <= max;
});
}
/// 
console.log(new Lazy()
      .add(filterNumbers) // filterNumbers(1, 8, 6, [], "7", -1, {v: 5}, 4) → [1,8,6,-1,4]
      .add(filterRange, 2, 7) // filterRange(2, 7, 1, 8, 6, -1, 4)
      .add(max)
      .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4])); //6