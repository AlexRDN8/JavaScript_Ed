/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/
function once(fn) {
    let i = 0;
    return function(arg){
        let result = i;
        i++;
        if(result === 0){
            return fn(arg)
        }
    }
}
// функция вроде правильно выполняется, но проверку н проходит.
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
logOnce("bar") // -> no effect
logOnce("bar") // -> no effect