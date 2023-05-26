/*
Implement the frequency(arr, options) function.

The function takes an array and calculates the frequency of each value of the array sorted naturally.

For example:

frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']); //[["Anna", 2], ["Peter", 3], ["Rose", 1]]
frequency([1, 10, 12, 2, 1, 10, 2, 2]); //[[1, 2], [2, 3], [10, 2], [12, 1]]
Optionally, the function can take the sorting criteria. For example, to sort alphabetically:

function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}

frequency([1, 10, 12, 2, 1, 10, 2, 2], {compareTo: alphabeticalCompare}); //[[1, 2], [10, 2], [12, 1], [2, 3]]
The comparison function also receives the frequencies of each value. For example, to sort by descending frequency:

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}

frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], {compareTo: frequencyCompare}); 
//[["Peter", 3], ["Anna", 2], ["Rose", 1]]
Finally the function can receive the grouping criteria. For example:

function isEven(number) {
  return number % 2 === 0;
}

function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}

frequency([1, 2, 3, 4, 5, 6, 7], {criteria: parity}); //[["even", 3], ["odd", 4]]
Obviously you can combine both:

frequency(persons, {criteria: profession, compareTo: frequencyCompare}); 
//[["scientific", 3], ["teacher", 2], ["politician", 1]]
*/
function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}
function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}
function isEven(number) {
  return number % 2 === 0;
}
function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}
function profession(person) {
  return person.profession;
}
var persons = [
  {name: 'Peter', profession: 'teacher'},
  {name: 'Michael', profession: 'teacher'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Rose', profession: 'scientific'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Anna', profession: 'politician'}
];

function f(x, y = 5, z = 100) {
  return x + y + z;
}

f(2000, 30); // 2000 + 30 + 100
f(2000); // 2000 + 5 + 100
f(2000, 100, "x"); // "2100x"


//  = {criteria: elem => elem, compareTo: (a, b) => a - b}
function frequency(arr, options = {}) { //основная функция

  // const criteria = options.criteria ?? (elem => elem);
  const {
    criteria = elem => elem,
    compareTo = (v1, v2, f1, f2) => v1 < v2 ? -1 : 1, //
  } = options;

  const keys = arr.map(el => criteria(el))

  const object = new Map();
  for (const key of keys) {
    if(!object.has(key)){
      object.set(key, 0)
    }
    object.set(key, object.get(key) + 1)   
  }
  const myArray = Array.from(object);

  //myArray.sort((a, b) => options.compareTo(a[0], b[0], a[1], b[1]))
  // if(options.compareTo !== undefined){
  myArray.sort((a, b) => compareTo(a[0], b[0], a[1], b[1]))
  // }  
  return myArray;
}
console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']));// [["Anna", 2], ["Peter", 3], ["Rose", 1]]
console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2])); //[[1, 2], [2, 3], [10, 2], [12, 1]]
console.log(frequency([1, 2, 3, 4, 5, 6, 7], {criteria: parity})); //[["even", 3], ["odd", 4]]

console.log(frequency([1,2,3,4,5], { compareTo: (v1, v2, f1, f2) => v2 - v1 }));
// [[5, 1], [4, 1], [3, 1], [2, 1], [1, 1]]

console.log(frequency(persons, {criteria: profession, compareTo: frequencyCompare}))
//[["scientific", 3], ["teacher", 2], ["politician", 1]]

// Доделать!