/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

const stringOfWords = "String will never be empty";
function findShortestWord(string){
    const array = stringOfWords.split (" ");
    let shortestWord = array[0];
    for (let item of array){
        if (item.length < shortestWord.length){
            shortestWord = item;
        }
    } 
    return shortestWord.length;
}
console.log(findShortestWord(stringOfWords));