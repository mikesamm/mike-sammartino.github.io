////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) {
  // output array
  let output = [];

  // edge cases
  if (start === end){
    return output;
  } else if (step < 0){
    return output;
  }

  // loop from start to end
  for (let i = start; i <= end; i += step){
    output.push(i);
  }

  //return array
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// i: array
// o: new array with array elements in reverse order
// c: cannot use reverse() method
function reverseArray(array) {
  // output array
  let reversed = [];

  // loop through array
  for (let element of array){
    // unshift elements to front of array
    reversed.unshift(element);
  }

  // return new reversed array
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// i: array
// o: same array with elements in reverse order
// c: cannot use reverse() method
function reverseArrayInPlace(array) {
  // careful about overwriting memory, need to swap values
  
  // edge case
  if (array.length === 0){
    return array;
  }

  // loop through half the array
  let halfway = Math.floor(array.length / 2);

  for (let i = 0; i <= halfway; i++){
    // temp swap container
    let swap = array[i];
    
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = swap;
  }

  // return modified array
  // return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
