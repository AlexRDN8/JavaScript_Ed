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
    const pairs = arr1.map((_, i) => [arr1[i], arr2[i]]) // создание пар формата [ [arr1[0], arr2[0]] , [arr1[1], arr2[1]] , ... ] 
    const sums = pairs.map(([x, y]) => x + y);

    const sum2frequency = {};
    for (const sum of sums) {
        sum2frequency[sum] ??= 0;
        sum2frequency[sum] += 1;
    }

    const frequencies = Object.values(sum2frequency);
    const maxFrequency = Math.max(...frequencies); // посчитал количество пар в каждой группе и взял максимальное
    
    if(maxFrequency === 1){
        return [];
    }
    
    const maxFreqSumms = Object.keys(sum2frequency)
        .filter(sum => sum2frequency[sum] === maxFrequency)

    const maxSumm = Math.max(...maxFreqSumms);

    //return pairs.filter(arr => arr[0] + arr[1] === maxSumm)
    return pairs.filter(([x, y]) => x + y === maxSumm)
}
console.log(findPair([1,2,3,4,5], [9,8,0,1,0]))  // should return [[1,9],[2,8]]
// //console.log(findPair([1,2,3,4,5],[0,0,0,0,0]))
// console.log(findPair([299,1573,120,1155,1322,-188,59,95,451,1155,231,1241,147,-86,887,1477,666],[905,256,616,455,-192,1392,677,1109,753,-419,1540,-505,1463,1290,317,1030,538] ))

