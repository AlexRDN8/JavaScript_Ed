/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    //const letters = str.split('');
    let count = 0;
    for (const letter of str) {
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}
console.log(getCount("abracadabra"));
//vowels.includes(str[index])