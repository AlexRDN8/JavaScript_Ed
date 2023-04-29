/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

// function checkIsIPV4(entry) {
//     var blocks = entry.split(".");
//     if(blocks.length === 4) {
//       return blocks.every(function(block) {
//         return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
//       });
//     }
//     return false;
//   }

function isValidIP(str) {
    const array = str.split(".")
    if (array.length === 4){
        return array.every(element => Number(element) >=0 && Number(element) <= 255 && element.length === String(Number(element)).length) // последнее сравнение проверяет наличие нуля в начале числа
        
    }
    return false;
}
// почему "123.456.789.0" - это false?
console.log(isValidIP("123.456.789.0"))
