/**
 * CONTROL FLOW
 * 
 * Control flow is comprised of statements that control the order in which code executes. Running all lines of code every time a program runs is ineffeicient and unecessary, control flow enables a programmer to direct which lines of code execute. To design the flow of a program, conditions are used. The fundamental keywords to implement such conditions are 'if' and 'else', and they can be configured in a few ways as follows. 
 * 
 * 1. if
 * 2. else if
 * 3. else
 * 4. switch
 */

/* 1. if

if is a reserved keyword in JavaScript and it is used to begin a block of code that will only execute conditionally. In the below example, the statement will only execute if the string variable is equal to 'banana'.
*/
var string = 'banana';

if (string === 'banana'){
    console.log('You have a banana.');
}

/* 2. else if

Sometimes there are a few conditions to be tested before a block of can execute. Conditions can be chained one after another in an 'if, else if, else if ... ' fashion. Whichever condition is passed first, the block of code associated with it will execute.
*/

let num = 20;

if (num > 100){
    console.log('large number');
} else if (num > 50){
    console.log('medium number');
} else if (num > 10){
    console.log('small number');
} else if (num >= 0){
    console.log('tiny number');
}
// prints to console: 'small number'

/* The order of the statements is important. In the above example, if the condition (num > 0) came before (num > 10), the console would have read 'tiny number'. The condition evaluated true, but the intended effect did not happen because the first condition that evaluated as true was not the one we intended to be true. 
*/

/* else

Blocks of code in an if, else if chain will only execute if one of the conditions evalutes to true. If none of the conditions pass, then no code executes. As a catch-all statement, the code in an else block will execute if none of the other conditions evaluate to true.
*/

let num = -6;

if (num > 100){
    console.log('large number');
} else if (num > 50){
    console.log('medium number');
} else if (num > 10){
    console.log('small number');
} else if (num >= 0){
    console.log('tiny number');
} else {
    console.log("negative number");
}
// prints to console: 'negative number'

/* switch

Sometimes an if, else if chain of statements can get long and cumbersome. If there are multiple tests for a single variable and each test triggers different code blocks, a switch statement can be used to streamline code. 
*/

let num = -6;

if (num > 100){
    console.log('large number');
} else if (num > 50){
    console.log('medium number');
} else if (num > 10){
    console.log('small number');
} else if (num >= 0){
    console.log('tiny number');
} else {
    console.log("negative number");
}