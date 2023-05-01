/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; 
return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// write the function isAnagram
var isAnagram = function(test, original) {
    const array1 = test.toLowerCase().split("") 
    const array2 = original.toLowerCase().split("")
    const arrayOfarray1 = array1.map(char => array1.filter(element=> element === char).toString()); // преобразовал элементы в строку, чтобы можно было их потом сравнить
    const arrayOfarray2 = array2.map(char => array2.filter(element=> element === char).toString());
    // console.log(arrayOfarray1)
    // console.log(arrayOfarray2)
    return arrayOfarray1.every(array => arrayOfarray2.includes(array)) && arrayOfarray2.every(array => arrayOfarray1.includes(array))

};


console.log(isAnagram("ound", "round"))