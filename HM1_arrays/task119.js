/*
Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
Note for Clojure:
Don't use Java Math/pow (even with bigint) because there is a loss of precision 
when the length of "title" is growing. 
Write your own function "exp [x n]".
*/

function titleToNumber(title) {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    result = 0;
    for (i = 0, j = title.length - 1; i < title.length; i ++, j --) { //нагуглил
        result += Math.pow(letters.length, j) * (letters.indexOf(title[i]) + 1);
    }
    return result;
  }
  console.log(titleToNumber('BA'));