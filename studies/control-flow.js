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

let num1 = 20;

if (num1 > 100){
    console.log('large number');
} else if (num1 > 50){
    console.log('medium number');
} else if (num1 > 10){
    console.log('small number');
} else if (num1 >= 0){
    console.log('tiny number');
}
// prints to console: 'small number'

/* The order of the statements is important. In the above example, if the condition (num1 > 0) came before (num1 > 10), the console would have read 'tiny number'. The condition evaluated true, but the intended effect did not happen because the first condition that evaluated as true was not the one we intended to be true. 
*/

/* else

Blocks of code in an if, else if chain will only execute if one of the conditions evalutes to true. If none of the conditions pass, then no code executes. As a catch-all statement, the code in an else block will execute if none of the other conditions evaluate to true.
*/

let num2 = -6;

if (num2 > 100){
    console.log('large number');
} else if (num2 > 50){
    console.log('medium number');
} else if (num2 > 10){
    console.log('small number');
} else if (num2 >= 0){
    console.log('tiny number');
} else {
    console.log("negative number");
}
// prints to console: 'negative number'

/* switch

Sometimes an if, else if chain of statements can get long and cumbersome. If there are multiple tests for a single expression and each test triggers different code blocks, a switch statement can be used to streamline code. Sometimes two different expressions may trigger the same statement as well, which is something a switch statement can handle. 
*/

let make = "Toyota";

switch (make){
    case "Volkswagen":
        console.log("Made in Germany");
        break;
    case "Hyundai":
    case "Kia":
        console.log("Made in South Korea");
        break;
    case "Toyota":
    case "Honda":
    case "Nissan":
        console.log("Made in Japan");
        break;
    case "Chevrolet":
    case "Ford":
        console.log("Made in USA");
        break;
    default:
        console.log("Made somewhere else")
}
// prints "Made in Japan"

/* 
In the above example, make is the expression being tested. There are many possible blocks of code that can run depending on which case is true. Some cases share the same statements, like "Hyundai" and "Kia". If the expression resolves to either of those strings, "Made in South Korea" will print to the console.

The default case at the end of the case list serves as a catch-all, similar to the else keyword. If no cases are triggered, the default case statement will execute.

The break keyword is needed to stop any following cases from evaluating or statements from executing. In the above example, if the break keyword under the "Toyota" case did not exist, the next statement under "Chevrolet" and "Ford" would execute as well. "Made in Japan" and "Made in USA" would both print to the console since the "Toyota" case was the first to evaluate to true and the first break statement after that was under the "Ford" case.
*/