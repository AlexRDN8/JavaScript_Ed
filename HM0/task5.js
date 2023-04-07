/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/
const readline = require('readline-sync');
const cardNumber = readline.question("Input card number: "); // на кириллице почему то работает некорректно

function maskify(cardNumber){
    if (cardNumber.length <= 4){
        return cardNumber;
    }

    return "#".repeat(cardNumber.length - 4) + cardNumber.slice(-4);

    // const maskedNumber = [];
    // for (let i=0; i < cardNumber.length; i++){
    //     if(i < cardNumber.length - 4){
    //         maskedNumber += "#";
    //     }
    //     else{
    //         maskedNumber += cardNumber[i];
    //     }
    // }
    // return maskedNumber;

    // 5465 4654
    // "#######" + "5616"


    // const s = cardNumber.at(-4) + cardNumber.at(-3) + cardNumber.at(-2) + cardNumber.at(-1);
    

}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

console.log(maskify("54654654"));

