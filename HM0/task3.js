/*
Abbreviate a Two Word Name.
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

let fullName = "patrick feeney";

function abbreviateName (){
    let array = fullName.toUpperCase().split(" ");
    let abbreviation = `${array[0][0]}.${array[1][0]}`;
    return abbreviation;
}
console.log(abbreviateName(fullName));

