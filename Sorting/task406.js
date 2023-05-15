/*
The goal of this Kata is to write a function that will receive an array of strings as its single argument, 
then the strings are each processed and sorted (in desending order) 
based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) 
that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, 
lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. 
We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" 
is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, 
then the strings should remain in the order in which they were found in the orginal array.
*/
// if (cond) {
//     doSmth()
// }

// cond && doSmth()

function sortStringsByVowels(strings){
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    const vovelsMaxCount = [];
    for (const word of strings) {
        let tempArray = []; 
        let count = 0;
        let maxCount = 0;
        for (const char of word) {
            vowels.includes(char) ? count++ : count = 0; //


            if(count >= maxCount){
                maxCount = count;
            }
        }
        tempArray = [word, maxCount];
        vovelsMaxCount.push(tempArray)
    }
    //console.log(vovelsMaxCount);
    return vovelsMaxCount
        .sort((a, b) => b[1] - a[1])
        .map(arr => arr [0])
}
//console.log(sortStringsByVowels(["every","bataux","is","s","waaaay","loose"])) //["waaaay","bataux","loose","every","is"]
console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"])) // ["uuu","Yuuuge!!","none"]);