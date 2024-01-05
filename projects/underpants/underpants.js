// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};     // creating an object where methods will be added later


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // before using typeof, filter out non-object object types
    if (Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    }  else if (value === undefined){
        return "undefined";
    } else {    // return type using typeof operator 
        return typeof value;
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){
    // output array
    let output = [];
    // if array is not array, return {}
    if (!Array.isArray(array)){
        return [];
    } else if (num === undefined || typeof num !== "number"){   // number is not given or not a number
        return array[0];
    } else if (num > array.length){
        return array;
    } else {    // return first num items from array in new array
        for (let i = 0; i < num; i++){
            output.push(array[i]);
        }
    }
    return output;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
    // output array
    let output = [];
    // if array is not array, return []
    if (!Array.isArray(array)){
        return [];
    } else if (num === undefined || typeof num !== "number"){   // number is not given or not a number
        return array[array.length - 1];
    } else if (num > array.length){
        return array;
    } else {    // return last num items from array in new array
        for (let i = array.length - 1; i >= array.length - num; i--){
            output.unshift(array[i]);
        }
    }
    return output;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    // loop through array
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    // if value is not in array, return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    // use array method includes in ternary format
    return array.includes(value) ? true : false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    // if collection is an array
    if (Array.isArray(collection)){
        // call func for each element with args: element, index, collection
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {    // if collection is an object
        // call func for each property with args: value, key, collection
        for (let key in collection){
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){  
    // output array for unique values
    let output = [];

    // loop through the input array
    for (let i = 0; i < array.length; i++){
        // if output does not contain array[i], push to output
        if (_.indexOf(output, array[i]) === -1){
            output.push(array[i]);
        }
        // if output already contains array[i], do nothing
    }

    // return output array
    return output;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test){
    // output array
    let output = [];

    // call test function for each element, passing element, index, array
    for (let i = 0; i < array.length; i++){
        if (test(array[i], i, array)){
            output.push(array[i]);
        }
        // if filter false, do nothing
        // if filter returns non-boolean, do nothing

    }

    // return output array
    return output;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, test){
    // output array
    let output = [];

    // call test function for each element in array with args: element, index, array
    for (let i = 0; i < array.length; i++){
        // if callback resolves to false
        if (!test(array[i], i, array)){
            // add element to output array
            output.push(array[i]);
        }
    }

    // return output array
    return output;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test){
    // storage variable for array of arrays output
    let output = [];

    // use filter() and reject() return values (arrays)
    let truthy = _.filter(array, test);
    let falsy = _.reject(array, test);

    // push inner arrays to output
    output.push(truthy, falsy);

    // return output, array of arrays
    return output;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    // make storage array for output
    let output = [];

    // if array
    if (Array.isArray(collection)){
        // call func for each element with args element, index, array
        for (let i = 0; i < collection.length; i++){
            output.push(func(collection[i], i, collection));
        }
    } else {  // if object
        // call func for each property with args value, key, object
        for (let key in collection){
            output.push(func(collection[key], key, collection));
        }
    }

    // return storage array
    return output;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    // output storage
    let output = [];

    output = _.map(array, function(element){
        return element[prop];
    });

    // return output
    return output;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    // if function is not given, return false
    if (func === undefined){
        if (Array.isArray(collection)){
            // for every element, check truthyness
            for (let i = 0; i < collection.length; i++){
                if (!collection[i]){
                    return false;
                }
            }
        } else {  // if collection is an object
            // for every property, check truthyness
            for (let key in collection){
                if (!collection[key]){
                    return false;
                }
            }
        }

        // return true if every element is truthy
        return true;
    }

    // if collection is an array
    if (Array.isArray(collection)){
        // for every element, call func with parameters
        for (let i = 0; i < collection.length; i++){
            // if callback returns false, return false
            if (!func(collection[i], i, collection)){
                return false;
            }
        }
    } else {  // if collection is an object
        // for every property, call func with parameters
        for (let key in collection){
            // if callback returns false, return false
            if (!func(collection[key], key, collection)){
                return false;
            }
        }
    }

    // return true if none of the above triggered false
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, test){
    // if function is not given
    if (test === undefined){
        if (Array.isArray(collection)){
            // for every element, check truthyness
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
        } else {  // if collection is an object
            // for every property, check truthyness
            for (let key in collection){
                if (collection[key]){
                    return true;
                }
            }
        }

        // return false if every element is falsey
        return false;
    }

    // if collection is an array
    if (Array.isArray(collection)){
        // for every element, call test with parameters
        for (let i = 0; i < collection.length; i++){
            // if callback returns true, return true
            if (test(collection[i], i, collection)){
                return true;
            }
        }
    } else {  // if collection is an object
        // for every property, call test with parameters
        for (let key in collection){
            // if callback returns true, return true
            if (test(collection[key], key, collection)){
                return true;
            }
        }
    }

    // return false if none of the above triggered true
    return false;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    // let seed = <whatever given>
    // initialize previous result with seed
    let prev = seed;
    let start = 0;

    // if no seed is given, use first element in collection as seed
    if (seed === undefined){
        prev = array[0];
        start = 1;
    }

    // for every element in colleciton
    for (let i = start; i < array.length; i++){
        // invoke callback function
        prev = func(prev, array[i], i);
    }


    // return final return value of callback function
    return prev;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
