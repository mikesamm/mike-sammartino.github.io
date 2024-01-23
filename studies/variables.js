/**
 * VARIABLES:
 * 
 * 0. Variables hold values so that a programmer can refer to, interact with, and reuse those values throughout a program. CHANGE: The values can be simple or complex data types, like numbers, strings, booleans, and objects and arrays. Values held by variables can change while the variable name stays the same. JavaScript is not a strictly written language, there is no need to declare the data type of the value assigned to the variable.
 * 
 * 1. Declaration and Assignment
 * 
 * 2. `var`, `let`, and `const`
 * 
 * 3. Hoisting
 */

// 1. Declaration

// To declare a variable, use a keyword and then the variable's name
var age;
let animal;

// To initialize a variable, declare it and then assign a value
const MAGIC_NUMBER = 42;

// Assignment 
age = 32;
animal = 'giraffe';

// Reassignment
age = 54;
animal = 'elephant';
MAGIC_NUMBER = 42;  // MAGIC_NUMBER *cannot* be reassigned because it is a const (constant).

// 2. `var`, `let`, and `const`

// The `var`, `let` and `const` keywords are all used to declare variables. 

/**
* They each have different rules so they are NOT completely interchangeable.
*
| --    | reassignable | hoisted | scoped to funcs | scoped to if/loop blocks |
| ----- | ------------ | ------- | --------------- | ------------------------ |
| var   | yes          | yes     | yes             | no                       |
| let   | yes          | no      | yes             | yes                      |
| const | no           | no      | yes             | yes                      |
*
*/

/**
* `var` has been part of the JavaScript language since its beginnings. It has some caveats when using it 
* to declare variables, so in 2015 when ES6 came out, `let` and `const` were introduced. 
*
* const is used when the value in a variable should not and will not be changed in a program, const 
* CANNOT be reassigned.
*
* var and let can both be reassigned, but behavior and rules with scope and hoisting differ between the 
* two. 
*/



// 3. Hoisting 

/**
* var can only ever be globally or function scoped.
*   - assignment is NOT hoisted
*   - declaration reserves some memory for that variable
*   - if var is used for function expression, var NAME is still the only thing hoisted.
*
* if something is declared without a keyword, it will default to the global scope, no matter where it looks like it is in scope
 */