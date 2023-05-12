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
const cc = readline.question("Input card number: "); // на кириллице почему то работает некорректно

function maskify(cc){
    if (cc.length <= 4){
        return cc;
    }
    return "#".repeat(cc.length - 4) + cc.slice(-4);
}
    // const maskedNumber = [];
    // for (let i=0; i < cc.length; i++){
    //     if(i < cc.length - 4){
    //         maskedNumber += "#";
    //     }
    //     else{
    //         maskedNumber += cc[i];
    //     }
    // }
    // return maskedNumber;

    // 5465 4654
    // "#######" + "5616"


    // const s = cc.at(-4) + cc.at(-3) + cc.at(-2) + cc.at(-1);
    

//}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

console.log(maskify("54654654"));

