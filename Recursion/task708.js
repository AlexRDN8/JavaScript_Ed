/*
Determine sizeof C datatype - Beginner (No prior C knowledge required)
NOTE: Although this Kata mentions certain basic C datatypes, you should be able to complete this Kata without any prior C programming knowledge.

Background
C is a simple and minimal yet powerful programming language first formulated in Bell Labs back in 1972, making it 46 years old as of 2018. It wasn't the first high-level programming language (FORTRAN and Lisp, among a few other languages came before it) but it is generally considered the first widely portable programming language between different platforms / operating systems. This made it highly successful and popular - it was consistently ranked as the top #1 - #2 programming language over the last 10 years (with Java being the other one) and its sheer influence on an entire family of modern programming languages (C++, Java, JS, C#, PHP, etc.) is simply undeniable.

C swiftly replaced assembly code (which was highly platform-dependent) in the role of operating systems and one major feature that led to its success was its simple yet highly flexible type system. Its type system consists of the following (for the purposes of this Kata):

Primitive integer types (signed): char (1 byte in memory), short/int (2 bytes in memory), long (4 bytes in memory), long long (8 bytes in memory). Each also has a corresponding unsigned integer type which is denoted by prepending the keyword unsigned before the type and occupies the same number of bytes (e.g. unsigned int occupies 2 bytes in memory)

Floating point values: these denote the real numbers up to a certain precision. float occupies 4 bytes in memory while double occupies 8 bytes in memory. Unlike the primitive integer values, floating-point values cannot be declared unsigned. N.B. there also exists a long double which occupies either 10 or 16 bytes in memory depending on implementation but it will not be covered in this Kata.

Structures (akin to a watered down version of classes in most modern OO languages): these are denoted with the keyword struct, optionally followed by a name and a pair of curly braces {} (mandatory). Inside the pair of curly braces, the members of the given structure are defined (think of them as properties/fields in most modern OO languages). For example, a person structure might be defined as such:

struct person {
  int age;
  char gender;
  // Name of a person not defined in this structure because this involves C-strings which involves pointers, not covered in this Kata to maintain simplicity
};
The size (in bytes) of a structure is the sum of the sizes of each of its members. In the example above, since the person structure contains a single int member (2 bytes) and a single char member (1 byte), the sizeof(struct person) is 3 bytes.

N.B. If you find an online C compiler and find the size of the person structure as defined above in bytes, you will likely get an answer of 8 bytes. This is due to int occupying 4 bytes instead of 2 in that implementation and that implementation keeping the size of the structure a multiple of 4 (so it would appear) but we will not worry about such (probably implementation-defined) behavior in this Kata; for all intents and purposes, the person structure occupies exactly 3 bytes in memory.

Unions: these (programmer-defined) composite datatypes allow the same memory space to be viewed in different ways. Its declaration syntax is similar to that of declaring/defining structures, e.g.

union long_long_n_double {
  long long n;
  double x;
};
The major difference between structs and unions is that in a union, all the members occupy the same memory space which leads to 2 interesting consequences:

Changing the value of a member of a union also changes the value of all other members of the union
The size of a union is determined solely by the size of the member that occupies the most bytes in memory. In the above example, since the 2 members of long_long_n_double, namely n and x have types long long (8 bytes) and double (8 bytes) respectively, the sizeof(union long_long_n_double) is max(8, 8) = 8 bytes in memory.
There are in fact a few other composite types in C such as arrays, pointers and function pointers (and bit fields as well!) but they will not be covered in this Kata for the sake of simplicity.

Before we move on to the task at hand, let's see if you actually understood what was being explained above. Try to determine the size of the data structure below by hand (solution provided below code example):

struct {
  unsigned char c1, c2, c3; // <- IMPORTANT! **Three** unsigned chars here, **not** one
  double d1, d2; // Two doubles
  union {
    unsigned short s2, s3, s4;
    long long ll1;
    float f1, f2;
    struct {
      long l1;
      unsigned int i1;
    };
  };
  short s1;
}
Click here to reveal solution

Task
Write a sizeof() function which accepts a representation of a C datatype and returns its size in bytes as an integer. Note that this parallels the sizeof builtin construct of the C language.

A representation of a C datatype in this Kata can take one of two possible forms:

A string for primitive datatypes (integers and floating point values). For example, sizeof("char") == 1 and sizeof("unsigned long") == 4. The types tested in this Kata will be: char, short, int, long, long long and their unsigned counterparts; float and double.

An object for structures and unions. Such objects will have two properties:

A type property which is either "struct" or "union"
A members property which is an array containing representations of the members of the given composite datatype.
E.g. A struct {int n1, n2; float f; union {};} in C will have a representation of {type: "struct", members: ["int", "int", "float", {type: "union", members: []}]}

You may assume all input passed into your function is valid.
*/
const sizes = {
    "char": 1,
    "short": 2,
    "int": 2,
    "long": 4,
    "long long": 8,
    "unsigned char": 1,
    "unsigned short": 2,
    "unsigned int": 2,
    "unsigned long": 4,
    "unsigned long long": 8,
    "float": 4,
    "double": 8,
}

function sizeof(input) {
    if(typeof input === "string"){
        return sizes[input];
    }
    if(input.members.length === 0){
        return 0;
    }
    if(input.type === "struct"){
        return input.members.reduce((acc, element) => acc + sizeof(element), 0)
    }
    if(input.type === "union"){
        return Math.max(...input.members.map(element => sizeof(element))) 
    }
    return result;
}

const obj1 = {
    type: "struct",
    members: ["int", "char"]
} //3

const obj2 = {
    type: "struct",
    members: [
      "unsigned char",
      "unsigned char",
      "unsigned char",
      "double",
      "double",
      {
        type: "union",
        members: [
          "unsigned short",
          "unsigned short",
          "unsigned short",
          "long long",
          "float",
          "float",
          {
            type: "struct",
            members: ["long", "unsigned int"]
          }
        ]
      },
      "short"
    ]
  } // 29
  console.log(sizeof(obj2))
