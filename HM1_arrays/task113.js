/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with 
all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/


// CODEWARS → ODEWARS + С

function scrollingText(text){
  const newArray = [];
  const array = text.toUpperCase();
  for (let i = 0; i < array.length; i++) {
    const firstPart = array.slice(i);
    const lastPart = array.slice(0, i);
    const fullWord = firstPart.concat(lastPart);
    newArray.push(fullWord);
  }
  return newArray;
}

console.log(scrollingText("codewars"));