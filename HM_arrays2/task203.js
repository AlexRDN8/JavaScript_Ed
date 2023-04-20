/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

// let x = 1;
// let y = x;
// y = 5;

// let x = [1];
// let y = x;
// y = [5];

// x.push(111)
// y.push(222)


function dataReverse(data) {
    const copyOfData = [...data]
    const bitesAmount = copyOfData.length / 8;  
    let newData = [];
    for (let i = 0; i < bitesAmount; i++) {
        let bite = copyOfData.splice(0, 8);
        newData.push(bite); 
    }
    // return newData
    //     .reverse()
    //     .reduce((arr, element) => arr.concat(element), [])// при проверке ошибка: Reduce of empty array with no initial value
    // return [].concat.apply([], newData) // если так, то проверку проходит.
    newData.reverse();
    const newArray = [];
    for (const element of newData) {
        newArray.push(...element);
        // for (const number of element) {
        //     newArray.push(number);
        // }
    }
    return newArray;
}

// const arr = [8,7,5];

// arr.push(...[3, 5, 1])

  const input = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
  console.log(dataReverse(input));
