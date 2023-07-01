/*
Comparing objects is not an easy task in JavaScript. 
The comparison operator only returns true if both variables point to the same object, 
that's why two objects with the same properties and values are different for JavaScript, like this:

var a = { name: 'Joe' };
var b = { name: 'Joe' };
a == b;  //-> false
Sometimes it's really useful to detect when two objects have the same values.

Your task is to develop the deepCompare function to test if two objects have the same properties and values. 
Remember that an object can contain other objects. The function should also be able to correctly compare simple values, 
like strings and numbers (without using type coercion, please).

To make things simpler, it will only have to deal with simple values and objects and arrays containing strings, 
booleans and numbers, without taking into account regular expressions, dates and functions.
*/

// if (o1 === o2) {
//     return true;
// }
// if (typeof o1 != "object" || o1 === null || typeof o2 != "object" || o2 === null) {
//     return false;
// }
const isObject = value => typeof value === "object" && value !== null 

function deepCompare(o1, o2) { //часть решения не мое 
    // if (!isObject(o1) && isObject(o2) || isObject(o1) && !isObject(o2)) {
    //     return false;
    // }

    // if (!isObject(o1) && !isObject(o2)) {
    //     return o1 === o2;
    // }

    if (!isObject(o1) || !isObject(o2)) {
        return o1 === o2;
    }

    // if (isObject(o1) && isObject(o2)) {
    const keys1 = Object.keys(o1); //  {  a: 1 b: 2 }
    const keys2 = Object.keys(o2); //  {  a: 1 b: 2 c: 3 }
    const keys = Array.from(new Set([...keys1, ...keys2]));

    return keys.every(key => deepCompare(o1[key], o2[key]));
    // }
};
console.log(deepCompare({name: 'Joe'}, {name: 'Joe'}))