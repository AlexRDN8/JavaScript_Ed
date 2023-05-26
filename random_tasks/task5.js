/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str){
    const reg = /[^a-zA-Z0-9]/;
    const arr = str
        .split(" ")
        .map((word) =>{
            if(reg.test(word)){
                return word
            }
            return word.slice(1).concat(word[0]).concat("ay")
        })
    return arr.join(" ");
}
console.log(pigIt('Hello world !')) //elloHay orldway !