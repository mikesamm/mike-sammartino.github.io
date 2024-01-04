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

/**
 * indentity: Functions takes in an input value and returns the value unchanged. 
 * @param {*} value: Function takes in any input value.
 * @returns {*} value: Function returns input vlaue unchanged.
 */
function identity(value){
    return value;
};

module.exports.each = identity;