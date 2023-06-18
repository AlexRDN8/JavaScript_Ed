/*
Write a method that takes a nested hash (object in javascript) as input and returns that hash with added "depth" keys. 
So, for example, the following input:

{ a: 1, b: 2, c: { d: { e: 3 } } }
would yield the following return value:

{ a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
For Ruby, if the input is not a hash, then the function should return nil. 
For JavaScript, if the input is not an object (including an array), the function should return null.
*/


function recordDepth(tree, depth = 0) {
    if(typeof tree !== "object" || tree === null || Array.isArray(tree)){
        return null
    }
    tree.depth = depth;
    for (const key in tree) {
        recordDepth(tree[key], depth + 1)
    }
    return tree
}

const obj = {
    a: 1,
    b: {
        c: "qwer",
        arr: [7, 8, 3],
        t: null,
        x: {
            o: 123
        },
    },
    f: {
        u: {
            v: 4
        },
        y: {
            w: true,
        }
    }
};

console.log(recordDepth(obj));


obj === {
    depth: "eriugiergileri",
    a: 1,
    b: {
        depth: "eriugiergileri",
        c: "qwer",
        t: null,
        x: {
            depth: "eriugiergileri",
            o: 123,
        },
    },
    f: {
        depth: "eriugiergileri",
        u: {
            depth: "eriugiergileri",
            v: 4
        },
        y: {
            depth: "eriugiergileri",
            w: true,
        }
    }
};


console.log(recordDepth({ 
    a: 1, 
    b: 2, 
    c: { d: { e: 3 } //2
    } //1
    } //0
    )) // { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }