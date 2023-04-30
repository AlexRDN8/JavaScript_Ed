/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString (string) {
    return string.replace(/[0-9]*$/, match =>{
        if (match[0] === "0" && match.length > 1){
            let indexOfFirstNot0 = match
                .split('')
                .findIndex(elem => elem != "0")
            if (indexOfFirstNot0 === -1){ //на случай когда в match все нули, из-за чего findIndex возвращает -1 
                indexOfFirstNot0 = match.length - 1
            } 
            return match = "0".repeat(indexOfFirstNot0) + (Number(match) + 1)
        }else{
            return match = Number(match) + 1
        }
    }) 
}
//Не все тесты проходит, так как 099 должно меняться на 100, а не на 0100
console.log(incrementString("foobar099"))