/*
Give you two array arr1 and arr2. They contains some numbers. They have the same length. 
Calculate the sum of the corresponding position number, find the most pairs that has the same sum value. 
return the result by a 2D array that contains all pairs. For example:

arr1=[1,2,3,4,5]
arr2=[9,8,0,0,0]
findPair(arr1,arr2) should return [[1,9],[2,8]]
because:

1  2  3 4 5
+  +  + + +
9  8  0 0 0
|  |  | | |
10 10 3 4 5
1,9 and 2,8 have the same sum value 10
You do not need to verify the input data. arr1 and arr2 will always have the same number of elements, 
and testcase will not provide an empty array.

If all pairs has diffrent sum value, please return [].

If more than one groups of pairs has same number, choose which has the max sum value(see the last example)

You don't need sort the result, return the pairs according to the order of the index.

Examples
arr1=[1,2,3,4,5]
arr2=[0,0,0,0,0]
findPair(arr1,arr2) should return []

arr1=[1,2,3,4,5]
arr2=[5,4,3,2,1]
findPair(arr1,arr2) should return [[1,5],[2,4],[3,3],[4,2],[5,1]]

arr1=[0,1,3,4,5]
arr2=[1,0,3,2,1]
findPair(arr1,arr2) should return [[3,3],[4,2],[5,1]]

arr1=[1,2,3,4,5]
arr2=[-1,2,-3,4,-5]
findPair(arr1,arr2) should return [[1,-1],[3,-3],[5,-5]]

arr1=[1,2,3,0,5,-2]
arr2=[-1,2,-3,4,-5,6]
findPair(arr1,arr2) should return [[2,2],[0,4],[-2,6]]
*/

function findPair(arr1,arr2){
    function summ(arr){ // получение суммы массива из 2 элементов
        return arr[0] + arr[1];
    }
    const objectOfPairs = {};
    const groupOfPairs = arr1.map((num, index) => [num, arr2[index]]) // создание пар формата [ [arr1[0], arr2[0]] , [arr1[1], arr2[1]] , ... ] 
    for (const pair of groupOfPairs) {
        if (objectOfPairs[summ(pair)] === undefined){
            objectOfPairs[summ(pair)] = []
        }
        objectOfPairs[summ(pair)].push(pair) 
    }
    return Object
        .values(objectOfPairs)
        .filter(arr => arr.length === Math.max(Object.values(objectOfPairs).length))       
        //.slice(-1) // где то читал про то что ключи упорядочиваются внутри объекта особым образом - если числа, то вроде по порядку, а остальное по времени добавления
        .flat() // применил flat чтобы убрать лишнюю вложенность массива

}
//console.log(findPair([1,2,3,4,5], [9,8,0,1,0]))  // should return [[1,9],[2,8]]
console.log(findPair([299,1573,120,1155,1322,-188,59,95,451,1155,231,1241,147,-86,887,1477,666],[905,256,616,455,-192,1392,677,1109,753,-419,1540,-505,1463,1290,317,1030,538] ))
//Решено не до конца, исправить.