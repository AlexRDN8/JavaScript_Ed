/*
Your goal in this kata is to implement a difference function, which subtracts one list from 
another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
const listA = [1,2,2,2,5,3,4];
const listB = [2,3];
function arrayDiff (lst1, lst2){
    let newArray = [];
    
    for (let i of lst1){
        let count = 0;
        for (let j of lst2){
            if (i == j){
                count +=1;
            }        
        }
        if (count == 0){
            newArray.push(i)
        }   
    }
    return newArray; 
}
console.log(arrayDiff(listA, listB));