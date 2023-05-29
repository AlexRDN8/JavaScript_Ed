/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/
function solution(input, markers) {
    const lines = input.split("\n")
    const resultLines = [];
    for (const line of lines) {
        if(markers.every(mark => !line.includes(mark))){
            resultLines.push(line)
        }
        for (const mark of markers) {
            if(line.includes(mark)){
                resultLines.push(line.split(mark)[0])
            }
        }
    }
    return resultLines
        .map(line => line.trimEnd())
        .join("\n");
};
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result) // "apples, pears\ngrapes\nbananas" 



