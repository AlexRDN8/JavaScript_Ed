/*
Given a string and an object/array you need to return a formatted string. 
Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"
Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"
See tests for more information.
*/
var obj = { foo : 'Jack', bar : 'sandwich' };

var format = function (str, obj) {
    const array = str.split(" ");
    const newString = [];
    for (const word of array) {
        if(word === '{foo}'){
            newString.push("${obj.foo}")
        }
        else if (word === '{bar}'){
            newString.push("${obj.bar}")
        }else{
            newString.push(word)
        }        
    }
    const finalString = "`" + newString.join(" ") + "`";
    return console.log(`${finalString}`)

}
//Не верно. Не работает. 

//console.log(`Hello ${obj.foo} - make me a ${obj.bar}`)
format('Hello {foo} - make me a {bar}', obj)