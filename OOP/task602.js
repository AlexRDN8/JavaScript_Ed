/*
You are given a complex object that has many deeply nested variables. 
You don't want to go the usual if obj.property == null route. 
Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/
Object.prototype.hash = function(string) {
    let copyOfObj = this;
    const arrOfProps = string.split(".");
    for (const property of arrOfProps) {
        if(!copyOfObj.hasOwnProperty(property)){
            return undefined; 
        }
        copyOfObj = copyOfObj[property]
    }
    return copyOfObj;
}
var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
//console.log(obj.person.history.bio)
console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined