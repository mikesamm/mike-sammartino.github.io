
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) { // NEEDS A PARAMETER
  // rows will be upper bound for the loop
  let hashes = '';

  // loop for rows amount of hashes
  for (let j = 1; j <= rows; j++) {
    // modify hashes with addition operator
    hashes += '#';
    console.log(hashes);
  }

}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// write a program that prints out numbers from 1 to 100,
// for numbers divisible by 3, print 'fizz' instead
// for numbers divisible by 5, print 'buzz' instead
// for numbers divisble by 3 AND 5, print 'fizzbuzz'
function fizzBuzz() {
  // create a loop that will execute 100 times
  for (let i = 1; i < 16; i++) {
    // most special case first
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// write a program that prints a string, where in the console it looks like a chessboard
function drawChessboard(size) {  // NEEDS A PARAMETER
  // storage variable for string output
  let chessBoard = '';

  /*
  for odd rows:
    it should add a ' ' on odd iterations
    it should add a '#' on even iterations
    it should add a '\n' at the end of the row
  for even rows:
    it should add a '#' on odd iterations
    it should add a ' ' on even iterations
    it should add a '\n' at the end of the row
  */
  
  // loop for each row
  for (let i = 1; i <= size; i++) {
    // if row is even
    if (i % 2 === 0) {
      let charSlot = 1;

      while (charSlot <= size) {
        if (charSlot % 2 === 0) { // if iteration is even
          chessBoard += ' ';
        } else {  // if iteration is odd
          chessBoard += '#';
        }
        charSlot++;
      }
      // add a new line char
      chessBoard += '\n';
    } else {  // if row is odd
      let charSlot = 1;

      while (charSlot <= size) {
        if (charSlot % 2 === 0) {  // if iteration is even
          chessBoard += '#';
        } else {  // if iteration is odd
          chessBoard += ' ';
        }
        charSlot++;
      }
      // add a new line char
      chessBoard += '\n';
    }
  }
  // print the entire string
  console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
