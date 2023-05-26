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


let x = 0;
function f() {
    x++;
}

f();
f();
f();
f();
f();

function makeLooper(str) {
    let i = 0;
    return function (){
        const result = str[i];
        
        i++;
        if(i === str.length){
            i = 0;
        }

        return result;
    }
}

a = []

a.push(1)
a.push(2)
a.push(3)

a = []


let abc = makeLooper("abc");
console.log(abc());
console.log(abc());
abc = makeLooper("abc");
console.log(abc());
console.log(abc());
const qwerty = makeLooper("qwerty");
console.log(qwerty());
console.log(qwerty());
console.log(qwerty());

console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());