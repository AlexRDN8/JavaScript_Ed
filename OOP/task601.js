/*
Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.

The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

Example:

[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}
For more examples have a look at the example test cases
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group

// A null-prototype object with properties for all groups, each assigned to an array containing the elements of the associated group.


Array.prototype.groupBy = function(fn = elem => elem) {
    // const obj = { __proto__: null };
    const obj = Object.create(null); //!!
    // obj === { __proto__: Object.prototype }
    // Object.prototype === { constructor, toString, hasOwnProperty }
    for (const element of this) {
        const key = fn(element)
        // if (!Object.hasOwn(obj, key)) {
        //   obj[key] = [];
        // }
        obj[key] ??= [];
        obj[key].push(element);
    }
    return obj;
}
Object.keys(Array.prototype).forEach(method => {
	Object.defineProperty(Array.prototype, method, {
		enumerable: false,
	});
});

//console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )) 

const x = [
  "constructor",
  "destructor",
  "destructor",
  "constructor",
  "destructor",
  "constructor",
  "destructor",
];

console.log(x.groupBy());

// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }
