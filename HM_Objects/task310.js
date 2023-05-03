/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
    const array = s.split(" ")
    const newArray = []
    for (const word of array) {
        if(!newArray.includes(word)){
            newArray.push(word)
        }
    }
    return newArray.join(" ")
}
// Через объекты и/или регулярное выражение не знаю как решить. 
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
