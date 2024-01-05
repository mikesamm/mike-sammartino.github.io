'use strict';

// YOU KNOW WHAT TO DO //
/**
 * as we go through underpants.js, we will be adding documentation for the function created
 * 
 * copy and paste the method 
 * turn function expression into function declaration
 *  type /** and it will auto complete some things
 * name of the function: 1-3 sentence description as to what the function does
 * 
 * for any function documentation: create a general description, identify parameters, identify return values
*/
/**
 * indentity: Function takes in an input value and returns the value unchanged.
 *  
 * @param { * } value: Function takes in any input value.
 * @returns { * } value: Function returns input value unchanged.
 */
function identity(value){
    return value;
};

module.exports.each = identity;

/**
 * typeOf: Function takes in an input and returns a string representing the data type of it.
 * 
 * @param { * } value: Function takes in any input value.
 * @returns { String }: A string representing the data type of the input value.
 */
function typeOf(value){
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

module.exports.each = typeOf;

/**
 * first: Function takes in an array and returns the first given number of array elements in a new array. 
 * If the array is not an array, an empty array is returned. 
 * If the number is not a number or undefined, the first element of the array is returned.
 * If the number is greater than the length of the array, the whole array is returned.
 * 
 * @param { Array } array: The array from which the function will return elements.
 * @param { Number } num : The number of elements the function will return from the array, starting from the first element.
 * @returns { Array } output: The new array of num elements. 
 */
function first(array, num){
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

module.exports.each = first;

/**
 * last: Function takes in an array and returns the last given number of array elements in a new array. 
 * If the array is not an array, an empty array is returned. 
 * If the number is not a number or undefined, the last element of the array is returned.
 * If the number is greater than the length of the array, the whole array is returned.
 * 
 * @param { Array } array: The array from which the function will return elements.
 * @param { Number } num: The number of elements the function will return from the array, starting from the last element.
 * @returns { Array } output: The new array of num elements.
 */
function last(array, num){
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

module.exports.each = last;

/**
 * indexOf: Function takes in an array and a value. If the value exists in the array, the function returns the index of the element. If the value does not exist, -1 is returned.
 * 
 * @param { Array } array: The array being checked for the value.
 * @param { * } value: The value being searched for in the array.
 * @returns { Number } i or -1: Function returns the index of value if it is found or -1 if value is not found.
 */
function indexOf(array, value){
    // loop through array
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    // if value is not in array, return -1
    return -1;
}

module.exports.each = indexOf;

/**
 * contains: Function determines if a value exists in an array, returning a boolean that represents such.
 * 
 * @param { Array } array: The array searched by the function. 
 * @param { * } value: The value being searched for within the array.
 * @returns { Boolean }: Function returns true if value is found, false if value is not found.
 */
function contains(array, value){
    // use array method includes in ternary format
    return array.includes(value) ? true : false;
};

module.exports.each = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func){
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
module.exports.each = each;

/**
 * unique: Function takes in an array and returns an array with only the unique values from the input array. 
 * In other words, function returns the input array but with all duplicate values removed.
 * 
 * @param { Array } array: The input array that the function iterates over.
 * @returns { Array } output: Returns an array with all the unique values
 */
function unique(array){  
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

module.exports.each = unique;

/**
 * filter: Function takes in an array and returns a new array populated only by values from input array that passed the test function.
 * 
 * @param { Array } array: Function takes this array in and iterates over it. 
 * @param { Function } test: Function uses this callback to test each array element. Callback should return a boolean.
 * @returns { Array } output: Function returns array with the values that passed the test function.
 */
function filter(array, test){
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

module.exports.each = filter;

/**
 * reject: Function takes in an array and returns a new array populated only by values from input array 
 * that did not pass the test function.
 * 
 * @param { Array } array: Function uses this callback to test each array element. Callback should return a boolean.
 * @param { Function } test: 
 * @returns { Array } output: Function returns array with the values that did not pass the test function.
 */
function reject(array, test){
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

module.exports.each = reject;

/**
 * partition: Function returns an array of arrays. The nested arrays are made of elements that 
 * either pass the test function or fail it.
 * 
 * @param { Array } array: Function takes in this array and iterates over it.
 * @param { Function } test: Function uses this as a callback, should return a boolean value.
 * @returns { Array } output: Returns an array of arrays, nested arrays are based on return value from callback function.
 */
function partition(array, test){
    // storage variable for array of arrays output
    let output = [];

    // use filter() and reject() return values (arrays)
    let truthy = _.filter(array, test);
    let falsey = _.reject(array, test);

    // push inner arrays to output
    output.push(truthy, falsey);

    // return output, array of arrays
    return output;
};

module.exports.each = partition;

/**
 * map: Function take in an array or object, executes a callback function on every element or property, 
 * and returns an array with the returned values from the callback function.
 * 
 * @param { Array or Object } collection: Function takes in a collection (an array or object).
 * @param { Function } func: Function uses this callback function to act on values from the collection.
 * @returns { Array } output: Returns an array filled with return values from callback function.
 */
function map(collection, func){
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

module.exports.each = map;

/**
 * pluck: Function takes in an array of objects and property. It plucks the value of the 
 * property and adds it to an output array.
 * 
 * @param { Array } array: Function takes in this array of objects.
 * @param { * } prop: Property where the value will be plucked from.
 * @returns { Array } output: Array of plucked values from each object in array.
 */
function pluck(array, prop){
    // output storage
    let output = [];

    output = _.map(array, function(element){
        return element[prop];
    });

    // return output
    return output;
};

module.exports.each = pluck;

/**
 * every: Function takes in an array or object and a callback function. If the callback function returns true for every element,
 * function returns true; if callback function returns false even once, function returns false. If callback function is not given:
 * function will return true if all elements are truthy, or false if even one element is falsey.
 * 
 * @param { Array or Object } collection: Function takes in an array or object to iterate over.
 * @param { Function } func: Function takes in a callback function, should return boolean value.
 * @returns { Boolean }: Function returns true or false, based on conditions described above.
 */
function every(collection, func){
    // if function is not given
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

module.exports.each = every;

/**
 * every: Function takes in an array or object and a callback function. If the callback function returns false for every element,
 * function returns false; if callback function returns true even once, function returns true. If callback function is not given:
 * function will return false if all elements are falsey, or true if even one element is truthy.
 * 
 * @param { Array or Object } collection: Function takes in an array or object to iterate over.
 * @param { Function } func: Function takes in a callback function, should return boolean value.
 * @returns { Boolean }: Function returns true or false, based on conditions described above.
 */
function some(collection, test){
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