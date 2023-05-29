/*
Often, we see results of gallups, like this:

Prefer red: 3.5%
Prefer green: 4.5%
Prefer yellow: 22.0%
Prefer blue: 70.0%
and you begin to wonder: how many people did they really ask? If the numbers are simple, like 20%, 40%, and 40%, you know that they asked 5 people (or 10, or 15, or more, but we are interested in the minimum number of people).

Task
Your task is, complete function gallup. Function accepts argument percentages(a floating number array of percentages). The result should be the minimum number of people(We know that this number is always less than 10000). If no valid result, return -1.

Example
For percentages = [20,40,40], The output should be 5.

gallup of 5 people may be:    1    2    2
percentages of results:      1/5  2/5  2/5
rounding to 0 decimal place: 20%  40%  40%
For percentages = [33.3,33.3,33.3], The output should be 3.

gallups of 3 people may be:     1     1      1
percentages of results:       1/3    1/3    1/3
rounding to 1 decimal place: 33.3%  33.3%  33.3%
For percentages = [33,67], The output should be 3.

gallups of 3 people may be:    1      2
percentages of results:       1/3    2/3
rounding to 0 decimal place:  33%    67%
For percentages = [100.0000], The output should be 1.

For percentages = [50,51], The output should be 200.

gallups of 200 people may be:      99             101
percentages of results:       99/200(0.495)   101/200(0.505)
rounding to 0 decimal place:       50%            51%
For percentages = [49,50], The output should be -1.

No such a number of people in the range(1,10000)

Note
All inputs are valid.

The percentages always add up to about 100% as there may be small rounding errors. Numbers are rounded when digits are removed; they are rounded upwards if the first removed digit is 5 or more. Thus, 4.472 is rounded to 4.47, 4.5, or 4, depending on how many digits we want.

In each testcase, all the numbers are having the same precision.

In order to avoid timeout, be aware of the code's performance ;-)

I'm not sure that my results are 100% correct. If some issue was found, please give me a feedback. Thanks ;-)

Happy Coding ^_^
*/
function gallup(percentages){
    let result = -1; 
    for(let i = 1; i< 10000; i ++){
      if(Math.round(percentages.reduce((summ, percent) => summ + (i / 100 * percent), 0)) === i && percentages.every(percent => Math.abs((i / 100 * percent) - Math.round(i / 100 * percent)) < 0.01 )){
        return i
      }  
    }
    return result
}
console.log(gallup([49,51])) //2731 //35
//const a = [20,40,40]

//console.log(a.every(num => 100 / num > 5))