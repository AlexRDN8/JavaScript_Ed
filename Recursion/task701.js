/*
Object depth
Write a JavaScript function that returns the depth of an object. 
This function takes one argument that can be any data-type.

The depth of an object, say obj, is how many nested objects obj contains.

Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.

For example :

var obj = {a: 1, b: {c: 2}};
has a depth of 2 because it is a non-empty object containing another non-empty object.

While :

var emptyObj = {};
has a depth of 0 because it is empty.

And :

var obj = {a: 1, b: 2, c: 3};
has a depth of 1.

Arrays should always return a depth of 0.

Be careful about null.
*/

function depth(obj) {
    if(obj === null){
        return 0;
    }
    if(typeof obj !== "object" || Array.isArray(obj) || Object.keys(obj).length === 0 || obj === null){
        return 0; 
    }
    const arrOfDepth = [];
    for (const key in obj) {
        arrOfDepth.push(depth(obj[key]))
    }
    const maxDepth = Math.max(...arrOfDepth)
    const resultDepth = maxDepth + 1;
    return resultDepth;
}

const obj = {
    a: 1,   // 0
    f: {    // 3
        c: 2,
        x: {
            i: {
                a: 3,
                b: 6,
            },
            o: {
                p: 7,
            },
        },
    },
    b: {   // 2
        c: 2,
        e: {
            a: 1
        }
    },
    d: {   // 4
        c: 2,
        p: {
            r: {
                t: {
                    w: 7
                }
            }
        },
        l: {
            k: {
                y:8
            }
        }
    }
}

console.log(depth(obj));

// console.log(depth({a: 1, f: {c: 2}, b: {c: 2, e: {a: 1}}, d: {c: 2}})) //3
// console.log(depth({a: 1, b: {c: 2}}))
// console.log(depth({a: 1}))
// console.log(depth([1,2]))
// console.log(depth({}))
// console.log(depth(null))

