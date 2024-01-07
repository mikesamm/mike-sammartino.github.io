// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");  // importing underbar library

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./mike-sammartino.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use _.filter(array, test) to return an array, test callback must return boolean
    let males = _.filter(array, function(customer){
        return customer["gender"] === 'male';
    });
    // return number of male customers
    return males.length;
};

var femaleCount = function(array){
    // I: array
    // O: number
    // C: use _.reduce(array, func, seed);
    
    // number of females
    return _.reduce(array, function(females, customer){
        // callback checks condition
        if (customer["gender"] === "female"){
            // callback increments accumulator
            females++;
        }
        // callback returns accumulator after all iterations in _.reduce() are done
        return females;
    }, 0);

};

var oldestCustomer = function(array){
    // storage for oldest found customer age, and oldest customer name
    let oldestAge = 0, oldestName = '';

    // use filter() to return the oldest customer element?
    // loop through array
    for (let i = 0; i < array.length; i++){
        if (array[i]["age"] > oldestAge){
            oldestAge = array[i]["age"];
            oldestName = array[i]["name"];
        }
    }
    // return oldest name
    return oldestName;
};

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
