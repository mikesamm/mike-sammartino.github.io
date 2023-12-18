// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // use .isArray() method of Array object to determine if value is array
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // if value is null, return false
    if (value === null) {
        return false;
    } else if (Array.isArray(value)) {
        // if value is an array, return false
        return false;
    } else if (value instanceof Date) {
        // if value is a Date, return false
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // if value is null, return false
    if (value === null) {
        return false;
    } else if (Array.isArray(value)) {
        // if value is an array, return false
        return true;
    } else if (value instanceof Date) {
        // if value is a Date, return false
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" --
 *    - "array" done 
 *    - "object" done
 *    - "undefined" --
 *    - "number" --
 *    - "boolean" --
 *    - "null" done
 *    - "function" --
 *    - "date" DONE
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //

    // if typeof is object, determine what kind of object
    if (value === null) {
        return "null";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (value instanceof Date) {
        return "date";
    } else if (typeof value === 'object') {
        return 'object';
    } else {
        // return the straight forward typeof result
        return typeof value;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
