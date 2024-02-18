/**
 * Operators
 * 
 * Operators are used to perform operations on data and in JavaScript, there are several types of them. They range from acting on one operand (unary) to three operands (ternary), with the majority acting on two operand (binary). Depending on the operator, operands will need to be certain data types to be useful, whether they are literal values or variables.
 * 
 * 1. Assignment: = += -= /= *=
 * 2. Arithmetic: + - / * %
 * 3. Comparison: === !== == != < > =< >=
 * 4. Logical: && || !
 * 5. Unary: !, typeof, -
 * 6. Ternary / Conditional: (a ? b : c)
 */

// Assignment

/* 
These operators assign values to variables.

| Operator | Action                          | Example   | Results               |
| -------- | ------------------------------- | --------- | --------------------- |
| =        | assignment                      | num = 5   | // num is assigned 5  |
| +=       | assignment-addition combo       | num += 2  | // num is assigned 7  |
| -=       | assignment-subtraction combo    | num -= 3  | // num is assigned 4  |
| \*=      | assignment-multiplication combo | num \*= 4 | // num is assigned 16 |
| /=       | assignment-division combo       | num /= 2  | // num is assigned 8  |
| %=       | assignment-modulo combo         | num %= 2  | // num is assigned 0  |

*/

// Arithmetic

/*
These operators perform arithmetic operations on data.

| Operator | Action             | Example   | Results, let num = 5;         |
| -------- | ------------------ | --------- | ----------------------------- |
| +        | addition           | num + 6   | // resolves to 11             |
| -        | subtraction        | num - 5   | // resolves to 6              |
| *        | multiplication     | num * 8   | // resolves to 48             |
| /        | division           | num / 4   | // resolves to 12             |   
| %        | modulo (remainder) | num % 2   | // resolves to 0              |
| ++       | increment by one   | num++     | // resolves to 1              |
| --       | decrement by one   | num--     | // resolves to 0              |
| **       | exponentiation     | num ** 2  | // resolves to 1              |

 */

// Comparison

/*
These operators resolve to a boolean, comparing two pieces of data.
| Operator | Action                   | Example     | Results, let num = 5         |
| -------- | ------------------------ | ----------- | ---------------------------- |
| ===      | strictly equals          | '1' === 1   | false                        |
| \==      | loosely equals           | '1' == 1    | true                         |
| >=       | greater than or equal to | 3 >= 1      | true                         |
| <=       | less than or equal to    | 3 <= 1      | false                        |
| >        | greater than             | 3 > num     | false                        |
| <        | less than                | 3 < num     | true                         |
| !==      | not strictly equal       | num !== num | false                        |
| !=       | not loosely equal        | num != 2    | true                         | 

*/

// Logical

/*
These operators help structure the logic of statements.
| Operator | Action | Example                     | Results                                                  |
| -------- | ------ | --------------------------- | -------------------------------------------------------- |
| &&       | AND    | if (1 === 1 && 'a' === 'a') | true // the code block after this statement will execute |
| OR       | OR     | if (1 === 1 || 'a' === 'b') | true // the code block after this statement will execute |

*/

// Unary

/*
These operators act on one piece of data and return something else
| Operator | Action                           | Example               | Results, let x = true, a = 2    |
| -------- | -------------------------------- | --------------------- | ------------------------------- |
| !        | NOT                              | !x                    | false                           |
| typeof   | returns the data type of operand | typeof x              | boolean                         |
| -        | negates a number                 | -a                    | -2

*/
// Ternary

/*
a ? b : c
This operator returns certain operands if first operand evaluates to true.

Format: a ? b : c
Understand as: "if a is true, return b, or if a is false, return c"

Examples:

return 42 > 8 ? true : false  // true

---------------------------------------
let string = "Holy Cow";

string === "Holy Pig" ? "The pig is holy." : "The pig is not holy." // "The pig is not holy."  
|------- a ---------|   |----- b --------|   |------ c -----------|    |- returned c -------|

*/