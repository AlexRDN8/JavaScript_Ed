"use strict";
/*
Functional programming thrives from the reuse of functions. 
One core feature to extend the reuse is the concatenation of functions.

You probably know this feature from your favorite shell: ls -la | sort | head lists the top lines 
of the sorted result of ls -la

Build a function pipe to achieve this with JS. An example use could be:

var addOne = function(e) {
    return e + 1;
};

var square = function(e) {
    return e * e;
};

var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
Since a function only can return one value it is absolutely sufficient to only support functions 
that consume only one parameter. Build your pipe function in a way, that one can pipe an arbitrary number of functions.
*/


var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};
var double = function(e) {return e * 2;};

// const result1 = compose(addOne, square, double);
// result1(5); // 101

// const result2 = double.pipe(square).pipe(addOne);
// result1(5); // 101


Function.prototype.pipe = function(fn) { 
    //console.log(fn); // === square
    // console.log(this); // === addOne

    return function(arg) {
        console.log("this", this);
        return fn(this(arg));
    }.bind(this);
}

// const result3 = addOne.pipe(square);

// console.log(">>>>", result3(2)); // 9

// strict mode


// fn(1,2,3)
// fn.call(obj,1,2,3)
// fn.apply(obj,[1,2,3])

// Math.max(1,2,3);
// Math.max.apply(null, [1, 2, 3])
// Math.max(...[1, 2, 3])

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// обычный вызов как функция (строгий - не строгий режим)
// вызов как метод у объекта
// new
// call/apply
// bind
// =>

// a.fn.call(x, 1, 2)
// y.foo(5, 7);


const obj = { x: 1, hvckhtkfcvcytuo: "qwert" };

function fn(a, b, c) {
    return this.hvckhtkfcvcytuo + a + b + c;
}

Function.prototype.myCall = function(object, ...args){
    const s = Symbol(); //! почитать
    object[s] = this
    const result = object[s](...args)
    delete object[s];
    return result
}
//delete obj.hvckhtkfcvcytuo
// console.log(fn.call(obj, 20, 300, 4000));
console.log(fn.myCall(obj, 20, 300, 4000));
console.log(obj);