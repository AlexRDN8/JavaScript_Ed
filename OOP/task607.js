/*
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. 
You must fill in the Constructor method to accept a name as string and an age as number, 
complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get info(){ // get нужно просто чтобы из функции сделать метод?
//         return `${this.name}s age is ${this.age}`
//     }
// }

function Person(name, age){
    this.name = name;
    this.age = age;
}
Object.defineProperty(Person.prototype, "info",{
    get: function (){
        return `${this.name}s age is ${this.age}`
    }
})

// Person.prototype.info = function(name, age){
//     return `${this.name}s age is ${this.age}`
// }

var john = new Person('john', 34)
console.log(john.info) // 'johns age is 34'