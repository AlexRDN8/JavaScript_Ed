console.log(group([1,2,3,2,4,1,5,1,6]));
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }

console.log(group([1,2,3,2,4,1,5,1,6], val => val % 3));
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }

console.log(group(
  ["Петя", "Вася", "Ваня", "Аня", "Вика", "Артем"],
  name => name[0],
))

// {
//   "П": ["Петя"],
//   "В": ["Вася", "Ваня", "Вика"],
//   "А": ["Аня", "Артем"],
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group

// let key;
// if(cb === undefined){
//     key = element 
// }else{
//     key = cb(element)
// }

function group(arr, cb = elem => elem) {
    const obj = {};
    for (const element of arr) {
        // const key = cb === undefined ? element : cb(element)
        const key = cb(element)

        // obj[key] ??= [];
        // obj[key].push(element);
        obj[key] ??= 0;
        obj[key]++;
    }
    return obj;
}
"d".repeat()
"d".toLowerCase()
"d".concat