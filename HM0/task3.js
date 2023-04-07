/*
Abbreviate a Two Word Name.
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

// const firstName = array[0];
// const lastName = array[1];

// const [firstName, lastName] = array;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function abbreviateName (fullName){
    const [firstName, lastName] = fullName.toUpperCase().split(" ");

    return `${firstName[0]}.${lastName[0]}`;
}

console.log(abbreviateName("qwer tyuio")); // "Q.T"
console.log(abbreviateName("fyf ihjui")); // "F.I"

