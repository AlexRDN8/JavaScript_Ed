"use strict"
/*
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
*/
function box(number){
    const outer = "-".repeat(number);
    const inner = "-" + " ".repeat(number - 2) + "-";
    const array = [];
    array.push(outer);
    for (let i = 0; i < number - 2; i++) {      
      array.push(inner);
    }   
    array.push(outer);    
    return array;
  }
  
  console.log(box(7));