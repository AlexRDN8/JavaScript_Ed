/*
Extend the Array object with the function insert(index,value). 
This function must change the original array and insert the value at the given index in the array.

If the index is greater than the array's size, insert the value at the end.

You must return the array to be able to chain the insert function call.

You can use Array's built-in functions to help you.

The 'insert' function must not be enumerable.

Example :

[1,2,3].insert(0,42) => [42,1,2,3]
*/
Array.prototype.insert = function (index, element){
    const removed = this.splice(index,0,element)
    return this;
}
Object.keys(Array.prototype).forEach(method => {
	Object.defineProperty(Array.prototype, method, {
		enumerable: false,
	});
});

console.log([true,true,true].insert(02,false))
//console.log([1,2,3].insert(6,46)) 
