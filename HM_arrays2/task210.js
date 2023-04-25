/*
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers ( with 0-based nonnegative indexing )
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index
Random Tests Constraints:
Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms
*/

function indexEqualsValue(a) {
   //return a.findIndex((number, index) => number === index);  //медленно
   let start = 0;
   let end = a.length - 1;
   while (start <= end) {
      let indexSeparator = Math.floor((start + end) / 2);
      if (indexSeparator === a[indexSeparator]) {
         return indexSeparator;
      }
      else if (indexSeparator < a[indexSeparator]){
         end = indexSeparator - 1;
      }else{
         start = indexSeparator + 1;
      }
   }
   return -1;
}
// Через бинарный поиск работает неправильно, так как по условиям задачи должен вернуться минимальный индекс.

// function indexEqualsValue(a) {

//    for (let i = 0; i < a.length; i ++) {
//       if (a[i] === i) {
//          return i
//    }
    
//       if (a[i] > i) {
//          return -1
//       }
//   }
//   return -1
//  }
// Если через for прекращая цикл когда a[i] становится > i, то по времени выполнения почни в нормативе, но все равно медленно.

console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));


// left  = 0  0
// right = 13 6

// 1_000_000 / 2 / 2 / 2 / ... / 2 ≈ 1
// 1_000_000 ≈ 2 * 2 * 2 * ... * 2 === 2 ** ???

// 2 ** 10 === 1024 ≈ 1000
// 1_000_000 =  2 ** 20
// log₂(1_000_000) ≈ 20
// log₂(1_000_000_000) ≈ 30

//  0    1  2 3 4 5  6  7  8  9  10  11     12
// -100 -8 -1 0 4 6 12 13 15 80 100 200  50000

// 


// Не проходит проверку, так как работает медленно.  
