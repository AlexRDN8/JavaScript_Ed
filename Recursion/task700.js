/*
Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
*/
// return the sum of all values in the tree, including the root

function sumTheTreeValues(root){ 
    if(root === null){
        return 0
    } 
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
            //55 + 10 + 0 + 0
}

//            4
//        /       \ 
//       3         7
//        \      /   \
//         2    1     8
// 


var unbalancedNode = {
    value: 11,
    left: {value: 4, left: null, right: null},
    right: {value: 5, left: null, right: {value: 8, left: null, right: null}}
};


function sumTheTreeValues(root){ // неверное решение, sum сбрасывается
    let sum = [];
    for (const key in root) {
        if(typeof root[key] === "object"){
            sumTheTreeValues(root[key])
        }else{
            if(key === "value"){
                sum.push(root[key])
            }
        }
    } 
    return sum
}


var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}}; //13
var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
console.log(sumTheTreeValues(simpleNode))
console.log(sumTheTreeValues(unbalancedNode)) //12