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
 * @param {*} value: Function takes in any input value.
 * @returns {*} value: Function returns input value unchanged.
 */
function identity(value){
    return value;
};

module.exports.each = identity;

/**
 * typeOf: Function takes in an input and returns a string representing the data type of it.
 * 
 * @param {*} value: Function takes in any input value.
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
 * @param {*} value: The value being searched for in the array.
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
 * @param {*} value: The value being searched for within the array.
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
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
