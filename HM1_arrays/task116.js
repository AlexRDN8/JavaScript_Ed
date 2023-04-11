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
    array = [];
    for (let i = 0; i < number; i++) {
        if (i === 0 || i === number - 1){
            array.push("-".repeat(number))
        }else{
            array.push("-" + " ".repeat(number - 2) + "-")
        }      
    }
    return array;
  }
  // тест на сайде код проходит, но если выводить array, то выводится без переноса на новую строку, а если array.join('\n'), то это уже строка.
  console.log(box(7));