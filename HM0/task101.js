/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/


const f1 = word => word.length;

const f2 = word => {
    // ...
    return word.length;
}

const f3 = function(word) {
    // ...
    return word.length;
}

function f4(word) {
    // ...
    return word.length;
}


function findShortestWord(str){
    const words = str.split(" ");
    const lengths = words.map(word => word.length);

    // length === [5, 8, 1, 9, 2];
    // Math.min(5, 8, 1, 9, 2);
    return Math.min(...lengths); // spread syntax

    // let shortest = lengths[0];
    // for (const length of lengths){
    //     if (length < shortest){
    //         shortest = length;
    //     }
    // } 
    // return shortest;
}
console.log(findShortestWord("String will never be empty"));
console.log(findShortestWord("qwertyu fghgggg"));