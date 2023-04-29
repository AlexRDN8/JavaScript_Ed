/*
DESCRIPTION:
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/
function kebabize(str) {
    const newStr = str
        .replace(/\d+/g, '')
        .replace(/[A-Z]/g, match => "-" + match.toLowerCase())
    // if (newStr[0] === "-"){
    //     return newStr.slice(1)
    // }else{
    //     return newStr;
    // }

    // /^\d+/
    return newStr.replace(/^-/, ""); // ^ значит что регул-ое выражение работает только с первым символом

    // const newArray = [];
    // newArray.push(newStr[0]);
    // for (let i = 1; i < newStr.length; i++){
    //     if (newStr[i].toUpperCase() === newStr[i]){
    //         newArray.push("-");
    //         newArray.push(newStr[i]);
    //     }else{
    //         newArray.push(newStr[i])
    //     }   
    // }
    // return newArray
    //     .join("")
    //     .toLowerCase();
  }
console.log(kebabize("MyCamelHas3Humps"))
console.log(kebabize("myCamelHas3Humps"))