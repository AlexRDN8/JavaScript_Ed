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
    return str.replace(/{[a-z]+}/g, match =>{
        const key = match.slice(1, match.length - 1)
        if(obj.hasOwnProperty(key)){
            return obj[key]
        } else{
            return match
        }
    })
} 


// hasOwnProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty


//console.log(`Hello ${obj.foo} - make me a ${obj.bar}`)
console.log(format('Hello {foo} - make me a {bar}', obj))

const dict = {
    "a": "qwe",
    "bbb": "asdfg",
    "foo": "pppppppp",
};


// dict.toString()

console.log(format("hgiuw {bbb}-{constructor} {a} iuher {qwer} iuheruihq {a} uihiuth", dict));
// "hgiuw asdfg-pppppppp qwe iuher {qwer} iuheruihq qwe uihiuth"

//"".replace(/{bbb}/g, match => dict["bbb"] )