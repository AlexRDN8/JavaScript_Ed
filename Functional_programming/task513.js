/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/
function once(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args)
        }
    }
}
function sum (a,b){
    return a + b
}
const test = once(sum);

console.log(test(5,7))
console.log(test(5,5))
console.log(test(7,9))

// функция вроде правильно выполняется, но проверку н проходит.
// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect
// logOnce("bar") // -> no effect
// logOnce("bar") // -> no effect
