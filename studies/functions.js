/**
 * FUNCTIONS
 * 
 * Functions are reusable blocks of code. Like variables, they can be used in multiple places and in other expressions throughout a program. Functions are essentially small programs in themselves: they can return values and/or side effects. If a function is used in an expression, the return value of that function will be used in the enclosing expression. 
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

pet("horse", 18) // {
    // let animal = horse;
    // let num = 18;

    let action = `You have to pet the 'horse' '18' times or else it will be grumpy.`
                // the arguments are passed into the body of the function

    return action; // "You have to pet the horse 18 times or else it will be grumpy.";
// }


/* 3. Syntax for Named Functions

To declare a named function, the keyword "function" has to be used. Following "function" is a space and then the name of the function. Immediately after the name comes a set of parentheses. If the function will take arguments, parameters that represent the future arguments are then established inside the parentheses. After the parentheses comes the function body, wrapped in curly braces {}.
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

Functions can optionally take inputs and optionally return a single value. Parameters are declared in the function definition, between the parantheses. When a value is passed into a function in place of a parameter, it is considered an argument. Return values always come after the keyword `return`. Any code after the `return` statement is not executed.
*/

function pet(animal, num){  // animal and num are parameters that the function pet() accepts
    let action = `You have to pet the ${animal} ${num} times or else it will be grumpy.`
                
    return action;  // this function returns the value of the action variable. 
}

/* 6. Scope

Functions can see and modify variables in parent or global scope but not the other way around.
*/

function parent(){
    let x = 10;
    
    function child(){
      let y = 0;
      y += x
      return y;
    }
  
    return child() + 5;  // returns 15 because child() can use the value of x in its operations and then return a number
}

function parent(){
    let x = 10;
    
    function child(){
      let y = 0;
      y += x
      return y;
    }
  
    return y;  // throws a reference error because y was not defined in the parent scope
}

/* 7. Closures

A function with access to the parent scope, even after the parent function has closed (returned a value). If you create a function that returns a function, the returned function will hang onto a value from the parent function.
*/

function foodReview(food, restaurant){
    return function(adjective) {
        return `I ate ${food} at ${restaurant} and it was ${adjective}.`;
    }
}

let stellaMarisReview = foodReview('falafel', 'Stella Maris');

stellaMarisReview('delicious');  // prints to console: "I ate falafel at Stella Maris and it was delicious."