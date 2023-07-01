/*
Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

For example, given an input such as this:

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}
return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and nulls — they should be left as is in the result. The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character.
*/
// function flattenMap(map,prefix = '', result = {}) {
//     for (const key in map) {
//         if (typeof map[key] === 'object' && map[key] !== null && !Array.isArray(map[key])){
//             flattenMap(map[key], prefix + key + '/', result);
//         }else{
//             result[prefix + key] = map[key];
//         } 
//     }
//     return result;
// }
// var input = {
//     'a': {
//       'b': {
//         'c': 12,
//         'd': 'Hello World'
//       },
//       'e': [1,2,3]
//     }
// };
// var output = {
//     'a/b/c': 12,
//     'a/b/d': 'Hello World',
//     'a/e': [1,2,3]
// };


const o = {
  x: 1,
  a: {
    b: {
      c: {
        e: 1,
        t: 2,
      },
    },
    o: {
      p: 9,
    },
  },
  u: {
    i: 3,
  },
  p: 123,
  k: {
    m: {
      s: 5,
      g: 9,
    },
    f: 8,
  },
}

const isObject = element => typeof element === "object";


function flattenMap(obj, path = []){
  const newObj = {};
  for (const key in obj) {
    if(!isObject(obj[key])){
      newObj[[...path, key].join("/")] = obj[key]
    } else {
      Object.assign(newObj, flattenMap(obj[key], [...path, key]))
    }
  }      
  return newObj;
}

console.log(flattenMap(o));

// const flatO = {
//   x: 1,
//   i: 3,
//   e: 1,
//   t: 2,
//   p: 9,
//   p: 123,
//   s: 5,
//   g: 9,
//   f: 8,
// };


