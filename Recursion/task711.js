/*
    Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list

Another Kata involving nested lists here (it's still in beta - more honor points for completing :D): 
https://www.codewars.com/kata/5786f020e55533ebb7000153
*/

const arr = [
  1,
  [2, [4]],
  [2, 2, 2],
  [[[[5]]]],
  7,
  [[2, 3], [[1], 4]],
];


function SumSquares(l){
    let sum = 0
    for (const element of l) {
        if(typeof element === "number"){
            sum += element * element;
        }else{
            sum += SumSquares(element)
        }
    }
    return sum
}
console.log(SumSquares(arr))