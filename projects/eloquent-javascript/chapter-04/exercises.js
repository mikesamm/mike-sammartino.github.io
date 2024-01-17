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
// takes an array of numbers and sums all values together
function sum(array) {
  // sum storage variables
  let sum = 0;

  // iterate through array and update sum
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }

  // return sum 
  return sum;
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

  for (let i = 0; i < halfway; i++){
    // temp swap container
    let swap = array[i];
    
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = swap;
  }

  // return modified array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  // storage list (starting point)
  let list = null;

  // iterate through arr in reverse
  for (let i = arr.length - 1; i >= 0; i--){
    // make objects with props:
      // value will equal arr[i]
      // rest will equal null at arr[arr.length - 1]
    list = { value: arr[i], rest: list };
  }

  // return built list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes in a list (nested objects) and returns array of values
function listToArray(list, output=[]) {
  // base case 
  if (list.rest === null){
    output.push(list.value);
    return output;
  }

  // return output array
  output.push(list.value);

  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  // create an object chain
    // update input list with object that has a value of list
  list = { value: element, rest: list };

  // return list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  // base case 
  if (num < 0){
    return undefined;
  } else if (num === 0){
    return list.value;
  }

  // recursion
  return nth(list.rest, num - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// compare two complex pieces of data, see if they're equal
function deepEqual(x, y){
  // if values are simple and equal
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
  // if one of x or y is complex and other is simple
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  // create arrays containing the keys of each input object
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  // if the number of keys differs between objects
  if (xKeys.length !== yKeys.length){
    return false;
  }

  // iterate through arrays and compare keys and values
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      // if xKeys[i] doesn't exist in yKeys, return false -OR-
      // if values of each object at key[i] ARE NOT equal
      return false;
    }
  }

  // if all the above conditions did not trigger a false or early true return...
  return true;
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
