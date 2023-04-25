/*
Your task is to write a function calculate, which accepts a string with a mathematical exprssion 
written in prefix Polish notation and evaluates it. This means that all operations are placed 
before their operands. For example, the expression 3 + 5 is written in Polish notation as + 3 5, 
and (3 + 5) / (2 * 2) is / + 3 5 * 2 2.

The only valid operations are +, -, * and /. The input string is guaranteed to be a valid expression.

You can use eval or alternative if available in your language, but it is in no way needed 
for an idiomatic solution.

Examples
calculate('123.456')       == 123.456
calculate('+ -5 5')        == 0
calculate('* + 2 2 3')     == 12
calculate('/ + 3 5 * 2 2') == 2
Input
A non-empty string consisting of numbers and arithmetic operators separated by spaces. 
This string is a valid arithmetic expression written in prefix polish notation.

Output
A number, result of evaluating the expression.
*/

function calculate(expression) { 
  const reverseExpression = expression // [ '2', '2', '*', '5', '3', '+', '/']
    .split(" ")
    .reverse();
  //const operators = ['+', '-', '*', '/']; 
  const stack = [];
  let result = 0;
  let temp1 = 0;
  let temp2 = 0;
  for (let i=0; i < reverseExpression.length; i++){
    if (typeof Number(reverseExpression[i]) === 'number' && !isNaN(reverseExpression[i])){ //сначала писал без !isNaN,  без !isNaN не работает.
      stack.push(Number(reverseExpression[i]))
    }else if(reverseExpression[i] === '+'){
      temp2 = stack.pop();
      temp1 = stack.pop();
      result = temp1 + temp2;
      stack.push(result);
    }else if(reverseExpression[i] === '-'){
      temp2 = stack.pop();
      temp1 = stack.pop();
      result = temp2 - temp1;
      stack.push(result);
    }else if(reverseExpression[i] === '*'){
      temp2 = stack.pop();
      temp1 = stack.pop();
      result = temp1 * temp2;
      stack.push(result);
    }else if(reverseExpression[i] === '/'){
      temp2 = stack.pop();
      temp1 = stack.pop();
      result = temp2 / temp1;
      stack.push(result);
    }
  }
  //console.log(stack);
  return stack.pop();
}
// запутался что из чего вычетать/делить  
console.log(calculate('/ + 3 5 * 2 2'))