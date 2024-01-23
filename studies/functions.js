/**
 * FUNCTIONS
 * 
 * 1. Defining and Invoking
 * 2. Parameters and Arguments
 * 3. Syntax for Named Functions
 * 4. Assigning a Function to a Variable
 * 5. How do we specify inputs and outputs?
 * 6. Scope
 * 7. Closures
 * 
 */

/* 1. Defining and Invoking

Defining a function entails naming it, including parameters if any, and building the body of it. Functions can optionally return a value.
*/

function pet(animal, num){
    let action = `You have to pet the ${animal} ${num} times or else it will be grumpy.`

    return action;
}

/*
Invoking (or calling) a function includes using its name and a set of parentheses immediately after the name. If the function has parameters, arguments are passed in by being included between the parentheses.
*/

pet("cat", 10);  // returns: "You have to pet the cat 10 times or else it will be grumpy."

console.log(pet("cat", 10));  // prints to console: "You have to pet the cat 10 times or else it will be grumpy."

/* 2. Parameters and Arguments

Functions can optionally have parameters as well as optionally accept arguments. Parameters and arguments both occupy the space between the parentheses that immediately follow a function name, but parameters are the placeholders in the function definition while arguments are passed into the function when it is called.

When arguments are passed into a function, it is essentially like initializing the parameters' values.
*/

// Elaborating on the above example

function pet(animal, num){  // animal and num are parameters that the function pet() accepts
    let action = `You have to pet the ${animal} ${num} times or else it will be grumpy.`
                // the parameters are used in the body of the function
    return action;
}

pet("horse", 18);
// when the pet() function is called with these parameters, the function executes as follows:

pet("horse", 18) {
    // let animal = horse;
    // let num = 18;

    let action = `You have to pet the 'horse' '18' times or else it will be grumpy.`
                // the arguments are passed into the body of the function

    return action; // "You have to pet the horse 18 times or else it will be grumpy.";
}


/* 3. Syntax for Named Functions

To declare a named function, the keyword "function" has to be used. 
Following "function" is a space and then the name of the function. 
Immediately after the name comes a set of parentheses. If the function will take arguments, parameters that represent the future arguments are then established inside the parentheses.
After the parentheses comes the function body, wrapped in curly braces {}.
*/

// keyword
function pet(animal, num){
//      name  parameters

// ---------------------------------------------------------------
// this is the function body, starting and ending with curly braces
// ---------------------------------------------------------------

}

/* 4. Assigning a Function to a Variable

When a function is assigned to a variable, it is considered a "function expression". The variable will bind to the result of the function. Think of it like any other expression to the right of an assignment operator: it will resolve before the value is assigned to the variable.

Unlike function definitions, function expressions are not hoisted, meaning they cannot be used until the variable assignment executes in the code.
*/

console.log(morningPets());  // throws a Reference Error since the variable is not declared yet.
let morningPets = pet("cat", 7);
console.log(morningPets);  // "You have to pet the cat 7 times or else it will be grumpy."

/* 5. How do we specify inputs and outputs?

functions can optionally take inputs and optionally return a single value
*/

/* 6. Scope

functions can see and modify variables in parent or global scope but not the other way around
*/


/* 7. Closures

functions form closures around the data they house. if an object returned from the function and is held in memory somehwere (referenced), that closure stays ALIVE, and data can continue to exist in these closures
*/