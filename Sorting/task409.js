/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
*/
function convertHashToArray(hash){
    const myArray = Object.entries(hash);
    return myArray.sort((a,b) => a[0].localeCompare(b[0]))
}
console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'})) // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]