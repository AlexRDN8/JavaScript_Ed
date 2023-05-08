/*
The goal of this exercise is to convert a string to a new string where each character in the new string 
is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(word){
    // const newString = [];
    // const string = word.toLowerCase();
    // for (let i = 0; i < string.length; i++) {
    //     if(string.slice(0, i).includes(string[i]) || string.slice(i + 1).includes(string[i])){
    //         newString.push(")")
    //     }else{
    //         newString.push("(") 
    //     }
    // }
    // return newString.join("");
    const lowercased = word.toLowerCase()
    const object = {};
    for(const letter of lowercased) {
        if(object[letter] === undefined){
            object[letter] = 0;
        }
        object[letter] ++;
    }
    return lowercased
        .split("")
        .map(letter => object[letter] > 1 ? ")" : "(")
        .join("")
    //return object;
}

console.log(duplicateEncode("aababccxyaxaxa")); // { a: 6, b: 2, c: 2, x: 3, y: 1  }

// console.log(duplicateEncode("(( @"))