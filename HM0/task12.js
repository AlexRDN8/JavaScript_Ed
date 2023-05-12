/*
A perfect nber is a nber in which the sum of its divisors (excluding itself) are equal to itself.
Write a function that can verify if the given integer n is a perfect nber, 
and return True if it is, or return False if not.
Examples
n = 28 has the following divisors: 1, 2, 4, 7, 14, 28
1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect nber, so you should return True
Another example:
n = 25 has the following divisors: 1, 5, 25
1 + 5 = 6 therefore 25 is not a perfect nber, so you should return False
*/

function isPerfectnber(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        }
    }

    return sum === n;
}
console.log(isPerfectnber(28));