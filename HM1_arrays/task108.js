/*
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
    const newArray = [];
    for (let i = 0; i < word.length; i++) {
        if (word.split('')[i] === word.split('')[i].toUpperCase()){
            newArray.push(i);
        }
        
    }
    return newArray;   
}
console.log(capitals("CodEWaRs"));
