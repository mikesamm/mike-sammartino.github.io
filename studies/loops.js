/**
 * LOOPS
 * 
 * Loops are blocks of code that repeat. When many items on an array or many properties on an object need to be accessed, loops are used. Loops can apply the same block of code over and over again to different data, all seemingly at once. There are a few different types of loops described in this document: while, for, and for-in loops. Each have their own syntax and best-suited use cases.
 * 
 * 1. while loops
 * 2. for loops
 * 3. for-in loops
 * 
 */

/* 1. while loops

While loops are handy when we don't know exactly (or abstractly) how many times the code needs to repeat. They run while a certain condition is true. 

To initialize: 
- while keyword
- condition to check every time the loop is run
- block of code (including update condition variable)

*/

// ex: a function to count up to a user given number, adding each number to an array

function countArr(num){
    let numbers = [];
    let count = 1;
    
    while (count <= num) {
        numbers[count - 1] = count;
        count++;                    // careful for infinite loops
    }
    
    console.log(numbers);
}
countArr(6);  // prints to console:  [1, 2, 3, 4, 5, 6]

/*
The steps of execution for the above while loop:
1) the condition is tested FIRST, before the statement is executed. 
    - If false, the loop does not execute. 
    - If the statement is true...
2) the code between curly braces `{}` executes.
3) returns to step 1
*/

/* for loops
For loops run for a specific number of times. The "specific number" does not necessarily mean that we know exactly how many times the loop will run, but abstractly we know the loop will run for as long as an array length, for example. The array length can change but the loop will always run only up to the array length amount of times.

To initialize: 
- an initialization statement
    - usually initializes a counting variable, can be an expression of any degree of complexity
- condition statement
    - if the statement evaluates to true, the loop continues to run. stops when it is false
- update / afterthought / final expression
    - usually updates the counting variable

*/

// ex: adding 2 to every element in an array of numbers
function add2(){
    array = [
        0,  1,  2,  3,  4,  5,
     ];
     
     for (let i = 0; i < array.length; i++) {
         array[i] += 2;
     }
     
     console.log(array);
}
add2(); // prints to console: [2, 3, 4, 5, 6, 7]

/* 
The steps of execution for the above for loop:
1) `i` is the count variable initialized to 0
2) `i < array.length` is evaluated
    - if true, the loops continues to execute
    - if false, the loop stops and the code continues beyond it
3) the statement inside the curly braces `{}` executes
4) the final expression executes, so the variable `i` is incremented by 1
5) returns back to step 2 until the condition is evaluated as false
*/

/* for-in loops
- handy for accessing keys and values in objects
- iterate through properties of an object
- to initialize:
	- need a variable representing the keys of an object
	- an object to iterate through

ex: printing to console animals of different climates

*/
function animalResidents(){
    let animalKingdom = {
        'tropical rain forest': ['jaguar', 'gorilla', 'anaconda'],
        'arctic tundra': ['mountain goat', 'caribou', 'snowy owl'],
        'temperate grasslands': ['bison', 'prairie dogs', 'coyotes']
    };
    
    for (let environment in animalKingdom) {
        console.log(environment, animalKingdom[environment]);
    }
}
animalResidents(); // prints to console:   'tropical rain forest' ['jaguar', 'gorilla', 'anaconda'],
//                                         'arctic tundra' ['mountain goat', 'caribou', 'snowy owl'],
//                                         'temperate grasslands' ['bison', 'prairie dogs', 'coyotes']

/*
The steps of execution for this for-in loop:
1) 'environment' is set as the property loop variable  <-- make less vague, better description
2) 'animalKingdom' is set as the object to iterate through
3) for every property, or every environment, the code between curly braces {} executes
4) the loop stops when there are no more properties to act upon
*/