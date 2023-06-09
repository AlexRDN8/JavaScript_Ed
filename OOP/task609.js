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


Function.prototype.pipe = function(fn) { // скопировал
    console.log(fn); // === square
    //console.log(this); // === addOne
    return function(arg) {
        console.log("arg", arg);
        //console.log(this);
        return fn(this(arg));
    }
}

const result3 = addOne.pipe(square);

console.log(result3(2)); // 9

// strict mode


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// обычный вызов как функция (строгий - не строгий режим)
// вызов как метод у объекта
// new
// call/apply
// bind
// =>

// a.fn.call(x, 1, 2)
// y.foo(5, 7);
