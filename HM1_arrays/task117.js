/*
A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. 1
Given a sorted array of distinct integers, write a method to find a magic index, 
if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2
*/


function findMagic(arr){ // return the magic index
    return arr.findIndex((item, index) => item === index);
}
console.log(findMagic([-20,-10,2,10,20]));