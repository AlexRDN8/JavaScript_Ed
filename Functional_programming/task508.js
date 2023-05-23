/*
The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters of the string 
on successive invocations. It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/
function makeLooper(str) {
    let i = 0;
    return function (){
        if(i === str.length){
            i = 0;
        }
        let result = str[i];
        i++;
        return result;
    }
}
// работает в терминале неправильно, но тесты на codewars почему то проходит.
const abc = makeLooper("abc");
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());