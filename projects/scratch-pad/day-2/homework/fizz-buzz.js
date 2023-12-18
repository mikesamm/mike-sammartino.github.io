// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // create counter variable
    var count = 1;
    // while loop to iterate 100 times
    while (count <= 100) {
        // if number is multiple of 3 AND 5, print FizzBuzz
        if (count % 5 === 0 && count % 3 === 0) {
            console.log('FizzBuzz');
        } else if (count % 5 === 0) {
          // else if number is multiple of 5, print Buzz
          console.log('Buzz');
        } else if (count % 3 === 0) {
          // else if number is multiple of 3, print Fizz
          console.log('Fizz');
        } else {
          // else print number
          console.log(count);
        }
         count++;
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}