/*
Write a function that takes an array of strings as an argument and returns a sorted array 
containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.
*/
let array = ["Telescopes", "Glasses", "Eyes", "Monocles"];
function sortArray(arr){
    for (let i = 0; i <arr.length; i++){
        let min = i;
        for (let j = i+1; j < arr.length; j++){ 
            if (arr[j].length < arr[min].length){
                min = j;                 
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[ i ] = temp;        
    }
    return arr;
}
console.log (sortArray(array));