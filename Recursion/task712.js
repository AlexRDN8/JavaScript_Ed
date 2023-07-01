/*
Find the greatest common divisor of two positive integers. 
The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, 
so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/
function mygcd(x,y){
    if (y === 0){
        return x
    }
    return mygcd(y, x % y)
}

// function mygcd(x,y){ // неправильно- не рекурсивно
//     let divisor = 1;
//     let min = x
//     if(y < x){
//         min = y;
//     }
//     for (let i = 2; i <= min; i++) {
//         if(x % i === 0 && y % i === 0){
//             divisor = i
//         }
//     }
//     return divisor;
// }
console.log(mygcd(30, 12)) // 6