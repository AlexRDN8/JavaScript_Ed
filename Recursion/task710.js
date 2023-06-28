/*
In this Kata, you will count the number of times the first string occurs in the second.

solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ
More examples in test cases.

Good luck!
*/
function solve(a, b) {
    if (a === "") {
        return 1;
    }
    let count = 0
    for (let i = 0; i < b.length; i++) {
        if(b[i] === a[0]){
            count += solve(a.slice(1), b.slice(i))
        }
    }
    return count
}

console.log(solve("a", "abcasd")); // 2

console.log(solve("zaaz","zazaapulz"))//должно быть 4
// "az"  "azapulz"   3
// "az"  "apulz"     1
// "az"  ""          0
//                  =4