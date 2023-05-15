/*
In this kata, you will sort elements in an array by decreasing frequency of elements. 
If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.
*/
function solve(arr){
    const newArray = [];
    const sortedUniqueNums =Array.from(new Set(arr)).sort((a, b) => a - b);
    for (const number of sortedUniqueNums) {
        let tempArr = arr.filter(element => element === number)
        newArray.push(tempArr);
    }
    // return newArray
    //     .sort((a, b)=> b.length - a.length)
    //     .flat();
    const sortedArr = newArray.sort((a, b)=> b.length - a.length);
    return sortedArr.reduce((sum, arr)=> sum.concat(arr), [])
}
// не понимаю почему не проходит тесты на сайте, например:
//    Expected: [20, 20, 46, 46, 4, 8, 11, 17, 19, 31, 43, 49, 50], 
//  instead got:[20, 20, 46, 46, 11, 17, 19, 8, 31, 43, 4, 49, 50]
// но я получаю:[20, 20, 46, 46, 4, 8, 11, 17, 19, 31, 43, 49, 50]

console.log(solve([20, 20, 46, 46, 11, 17, 19, 8, 31, 43, 4, 49, 50])) // [3,3,3,5,5,7,7,2,9])