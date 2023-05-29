/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag (str) {
    if(str === "" || str.replaceAll(" ", "") === ""){
      return false
    }
    const newStr = str
      .split(" ")
      .filter(word => word !== "")
      .map(word => word[0].toUpperCase().concat(word.slice(1)))
      .join("")
    if(("#" + newStr).length > 140){
      return false
    }
    return "#" + newStr
}
// console.log(generateHashtag(" Hello there thanks for trying my Kata"))
// console.log(generateHashtag("    "))
//const string = " Hello there thanks for trying my Kata"
//console.log(string.split(" "))
const n = 15
console.log(n.toString(2))