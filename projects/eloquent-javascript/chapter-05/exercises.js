// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// flatten an array of arrays into one single array
// i: array of arrays
// o: single arrays

// const { characterScript } = require("./helpers");

// c: use reduce() and concat()
function flatten(arr) {
  // use reduce() with concat() inside callback func
  return arr.reduce(function(accum, current){
    accum = accum.concat(current);
    return accum;
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// i: value, test function, update function, body function
// o: none
// c: use for loop in loop() body
function loop(val, test, update, body) {
  // val is intial value of i
  // test will be stop condition 
  // update will determine how counter updates
  for (let i = val; test(i); i = update(i)){
    // body executes each loop 
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// i: array and predicate function
// o: true or false if all elements pass predicate test
// c: use some() array method
function every(arr, test) {
  // base case 
  // if every element of arr passes the test
  if (arr.length === 0){
    return true;
  }

  // recursion
  // if at least one of the elments passes the test in arr
  if (arr.some(test)){
    // test the next slice of arr
    return every(arr.slice(1), test);
  } else {  // if none pass, return false
    return false;
  }

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// i: string
// o: dominnant direction: rtl, ltr, or ttb
// c: use characterScript() and countBy()
function dominantDirection(str) {
  // dominant direction output and counter
  let domDir, dirCount = 0;

  // split str into array to then use array methods
  let arr = str.split('');

  // make array of all the script objects that apply to the chars
  let charScripts = arr.map(function(char){
    return characterScript(char.codePointAt(0));
    
  }).filter((char) => char)  // filter out null objects
  console.log(charScripts);

  // use countBy to make objects out of each directions
  let dirCounts = countBy(charScripts, (char) => char.direction);
  console.log(dirCounts);

  // find largest count of writing direction, return it as dominant direction
  for (let dir of dirCounts){
    if (dir.count > dirCount){
      domDir = dir.name;
    }
  }
  return domDir;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
