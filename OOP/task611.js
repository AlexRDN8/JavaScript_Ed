/*
In this kata, you must define the Array.reduce method.

I have disabled the pre-existing reduce methods.

Here's how it works:

[1,2,3].reduce( function(sum, next){return sum+next}, 0) 
// => 6

['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// => {'a':2, 'b':1}
Summary: The reduce method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome. On the first iteration, it should pass the initial value to the function, as well as the first element of the array. If no initial value is passed, skip to the first element of the array.

Ruby methods should expect a lambda.
*/

Array.prototype.reduce2 = function(process, initial) {
  let result = initial;
  let i = 0;
  if(initial === undefined){
    result = this[0]
    i = 1
  }
  for(; i < this.length; i++) {
    result = process(result, this[i], i, this)
  }
  return result;    
}

[2, 4, 6, 6, 1, 8, 52]
  .filter(x >= 5) // [6, 6, 8, 52]
  .every((x, i, arr) => x >= arr[0])


console.log([1,2,5].reduce2(function(sum, next){return sum+next}, 0)) 
console.log( ['a','y','!'].reduce2(function(x,y){return x+y}, 'y'))
