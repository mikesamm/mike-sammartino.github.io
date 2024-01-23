/**
 * DATA TYPES
 * 
 * Different data have different types in JavaScript. Functionality varies among them, which means 
 * operations done on `strings` may not necessarily be compatible with `numbers`. Some data types 
 * are simple/primitive and some are complex. Complex data types contain many primitive type data.
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Function
 * 7. undefined
 * 8. null
 * 9. NaN
 * 10. Infinity and -Infinity
 * 11. Primitive vs Complex Data Types
 * 12. Copy by Value and Copy by Reference
 * 
 * 
*/


/* 1. Number

primitive/simple
typeof return value -> "number"

Numeric data type with a double-precision 64-bit floating point format, which means a number will take up 64-bits in memory. Single-precision format would only take up 32-bits, thus numbers in JavaScript have a bigger range and better precision than what a single-precision format could provide.

Can contain integers in the range of -2^1024 to 2^1024
Can contain floating point values between -2^-1024 and 2^-1024
Can contain integers SAFELY in the range of (-2^53 - 1) to (2^53 - 1), outside of this range, numbers will be inexact and only be an approximation in floating point format.

Numbers can be used in mathematical operations and for accessing elements in arrays or as loop counter variables. 

+0 (positive zero) and -0 (negative zero) exist in JavaScript, thus 0 is an alias for +0. -0 === +0. They both act almost identically, although when dividing by -0 or +0, you'll see the results of -Infinity or Infinity respectively. 

See Infinity and -Infinity below.
*/


/* 2. String

primitive/simple
typeof return value -> "string"

A string represents text, a sequence of characters. Most anything can be a string: '100', 'H', 'Hello, world', 'true', 'null'. As long as it exists between quotes (single or double are both accepted), it will be treated as a string. Strings have a length property that represents how many characters are in the string (count starting at 1), but are indexed starting at `0`. The first character in a string is also a string and can be accessed at index `0`, while the last character can be accessed at index `string.length - 1`. 

Strings are immutable, which means they cannot be mutated in place. Strings can be reassigned to new strings, however, and string methods will return new strings after acting upon the original. 
*/


/* 3. Boolean

primitive/simple
typeof return value -> "boolean"

As a logical data type, a boolean can only be either `true` or `false`. They are used in control flow operations like if/else statements and in conditional operations like comparing two values for strict equality. 
*/


/* 4. Array

Complex
typeof return value -> "object"
Array.isArray(-input-) -> returns true or false if input is an array

Arrays are ordered collections of data, storing many values in a single variable. They are indexed starting at `0`, meaning that each element in the array can be accessed or referenced with a number. 
*/


/* 5. Object

Complex
typeof return value -> "object"
*/

/* 6. Function

Complex*
typeof return value -> "function"
function instanceof Object -> true

Functions are reusable blocks of code. They can take in values and return new values. They are essentially small programs in themselves. Functions can be declared with a name, optional parameters, and optional return values. When a function is assigned to a variable, that is called a function expression.

see functions.js (path to function section)
*/


/* 7. undefined

primitive/simple
typeof return value -> "undefined"

`undefined` is a bit undefinable, so it may be best described in action. When a variable is created without an assignment, the value will be `undefined`, as well as when a function does not return or resolve to anything, it will return `undefined`. In a logical expression, it is a falsy value. 
*/


/* 8. null

primitive/simple
typeof return value -> "object"

`null` is a value that points to a non-existent or invalid address of memory. Its use can be intentional by developers, such as assigning it in a variable initialization. Like `undefined`, it has a falsy quality when used in logical expressions. 

Although `null` is a primitive value in JavaScript and effectively used as such, `typeof` returns that it is an "object". 
*/


/* 9. NaN

simple? complex? possibly neither
typeof return value -> "number"

`NaN` is short for "not a number", and perhaps the best detail of `NaN` is that it is a number (type). Close to `undefined` or `null` as a value that does not quite exist, `NaN` is returned when mathematical operations resolve to something that cannot be expressed as a number: when an imaginary number is returned, when something cannot be converted to a number, when there's a failed coercion (2 * 'bam') -> 2 * `NaN` -> `NaN`.
*/


/* 10. Infinity and -Infinity

Infinity is a built-in object, which means it's a variable in global scope

numeric value representing infinity, or a number greater than any other number, and -infinity less than any other number 

Number.POSITIVE_INFINITY - static data property, typeof return value -> "number"
Number.NEGATIVE_INFINITY - static dat a property, typeof return value -> "number"
*/


/* 11. Primitive vs Complex Data Types

Simple data types cannot be broken down into anything else. Complex data types can contain many and varying simple data types.

examples of objects and arrays
*/


/* 12. Copy by Value and Copy by Reference

#### Copy by value
when a variable that is bound to a primitive value, is referenced by another variable or function parameter, the other variable or function parameter is now bound to a *copy of* the value of the original variable.
*/

var original = 2;
var new = original;

console.log(original);  // 2
console.log(new);  // 2

// At this point, whenever one of those variables is acted upon, the other will not change. 

var original = 2;
var new = original;

original += 3
new *= 3;

console.log(original);  // 5
console.log(new);  // 6

/*
#### Copy by reference
when a variable that is bound to a complex value, is referenced by another variable or function parameter, the other variable or function parameter is now bound to a *reference to* the value of the original variable.
*/

let numbers = [1, 2, 3, 4];
let extraNumbers = numbers;

console.log(numbers);  // [1, 2, 3, 4]
console.log(extraNumbers);  // [1, 2, 3, 4]

// At this point, whenever one of those variables is acted upon, the other will change. Both variables point to the same address in memory: whatever is stored at that address will change when either variable is modified, because both variables will act upon that address in memory.

let numbers = [1, 2, 3, 4];
let extraNumbers = numbers;

extraNumbers.push(5, 6, 7, 8)

console.log(numbers);  // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(extraNumbers);  // [1, 2, 3, 4, 5, 6, 7, 8]

*/