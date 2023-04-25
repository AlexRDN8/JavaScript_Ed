/*
DESCRIPTION:
Run-length encoding (RLE) is a very simple form of data compression in which runs of data 
(that is, sequences in which the same data value occurs in many consecutive data elements) 
are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs 
(or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string 
by replicating the character sx ix times and concatening all those strings. 
Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. 
It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
*/
// var runLengthEncoding = function(str){
//     const arrayOfWords = str.split(/(\s+)/); //чтобы пробел остался после разделения по пробелу
//     const finalArray = []
//     for (const array of arrayOfWords) {
//         arr = array.split("");
//         const uniqueElement = Array.from(new Set(arr));
//         for (let i = 0; i < uniqueElement.length; i++) {
//                 let lengthOfElement = arr
//                     .filter((element) => element === uniqueElement[i])
//                     .length
//                 let tempArray = [lengthOfElement, uniqueElement[i]]
//                 finalArray.push(tempArray);
//             }
//     } 
//     return finalArray;
// }
//видимо не правильно понял задание.

var runLengthEncoding = function(str){
    const arr = str.split("");
    const finalArray = [];
    let amount = 1;
    for (let i = 0; i < arr.length; i++) {    
        if(arr[i] === arr[i + 1]){
            amount += 1;
        }else{
            let tempArr = [amount, arr[i]];
            finalArray.push(tempArr);
            amount = 1;
        }       
    }
    return finalArray;

}

console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))