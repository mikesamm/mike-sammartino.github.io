/**
 * STRING MANIPULATION
 * 
 * Strings are array-like. Strings are immutable, but reassignable. 
 * We can interact with them with operators and string methods like .slice() and .join().
 * Strings are iterable, although it may be useful to split a string into an array to then use array methods. 
 * 
 * 1. With Operators
 * 
 * 2. With String Methods
 */

/* With Operators

+, +=

*/
let secondPart = 'and this is the second part.'
let sentence = 'This is the first part,' + ' ' + secondPart;
console.log(sentence); // prints 'This is the first part, and this is the second part.'

let food = 'hot dogs';
let adj = 'scrumdiddlyumptious'
let newLiteral = `I ate some ${food} and I have to say, it was ${adj}.`
console.log(newLiteral); // prints 'I ate some hot dogs and I have to say, it was scrumdiddlyumptious.'

/* With String Methods

| Method         | Action                     
| -------------- | -------------------------- 
| .includes()    | returns true or false if argument is found in string
| .replaceAll()  | replaces all instances of a character or regular expression
| .slice()       | returns a new string, a substring from specified index range of original string         
| .split()       | returns an array populated with chars from a string, takes in a string to determine where it separates original string
| .toLowerCase() | returns new string, an all lowercase version of the original 
| .toUpperCase() | returns new string, an all uppercase version of the original

*/

let phrase = 'This is a test';

console.log(phrase.includes('test'));  // true
console.log(phrase.replaceAll('t', 'z')); // This is a zesz
console.log(phrase.slice(8, 13)); // 'a tes'
console.log(phrase.split(' ')); // ['This', 'is', 'a', 'test']
console.log(phrase.toLowerCase()); // 'this is a test'
console.log(phrase.toUpperCase()); // 'THIS IS A TEST'