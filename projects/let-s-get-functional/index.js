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
        // callback returns accumulator
        return females;
    }, 0);

};

var oldestCustomer = function(array){
    // storage for oldest found customer age, and oldest customer name, and index of that element
    let oldestAge = 0, oldestName = '', oldestNameIndex;

    // use pluck() to get an array of ages
    let ages = _.pluck(array, "age");

    // loop through array
    for (let i = 0; i < ages.length; i++){
        if (ages[i] > oldestAge){
            oldestAge = ages[i];
            oldestNameIndex = i;
        }
    }
    oldestName = array[oldestNameIndex]["name"];
    
    // return oldest name
    return oldestName;
};

var youngestCustomer = function(array){
    // storage for youngest found customer age, and youngest customer name, and index of that element
    let youngestAge = 150, youngestName = '', youngestNameIndex;

    // use pluck() to get an array of ages
    let ages = _.pluck(array, "age");

    // loop through array
    for (let i = 0; i < ages.length; i++){
        if (ages[i] < youngestAge){
            youngestAge = ages[i];
            youngestNameIndex = i;
        }
    }
    youngestName = array[youngestNameIndex]["name"];
    
    // return youngest name
    return youngestName;
};

var averageBalance = function(array){
    // average storage variable
    let avg = 0;
    // pluck() the balances to an array
    let balanceStrings = _.pluck(array, "balance");

    // turn balance strings into numbers, use map()
    let balanceNums = _.map(balanceStrings, function(string){
        // replace '$' and '.' with empty char
        let preNum = string.replace(/[$,]/g, "");
        // convert string-number to number type and return
        let number = parseFloat(preNum);
        return number;
    });

    // reduce() the array into a sum
    let sumAllBalances = _.reduce(balanceNums, function(accum, current){
        accum += current;
        return accum;
    }, 0);

    // divide the sum by length of the array
    avg = sumAllBalances / array.length;
    // return average
    return avg;
};

var firstLetterCount = function(array, letter){
    // use reduce to return a number with all names beginning with letter
    return _.reduce(array, function(firstletter, customer){
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            firstletter++;
        }
        return firstletter;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    // use customer to find index
    let customerIndex;
    // loop through array and find customer name
    for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            customerIndex = i;
        }
    }
    // establish friend array path
    let friendArray = array[customerIndex].friends;

    return _.reduce(friendArray, function(firstLetters, friend){
        if (friend.name[0].toUpperCase() === letter.toUpperCase()){
            firstLetters++;
        }
        return firstLetters;
    }, 0);
};

var friendsCount = function(array, name){
    // loop through array and THEN use filter
  
    // output array
    let customerObjs = [];
  
    // loop through array
    // each customer
    for (let i = 0; i < array.length; i++){
      // use map to test friends array and THEN push customer to output array
      // each friend
      _.each(array[i].friends, function(friend){
          // if friends name is equal to name
          if(friend.name === name){
            // push the name of the customer to output array
            // console.log(array[i].name)
            customerObjs.push(array[i].name);
          } 
          return;
      });
    }
    // console.log("after loop customerObjs", customerObjs)
    return customerObjs;
  };

// Find the three most common tags among all customers' associated tags
var topThreeTags = function(array){  // customer array as input
    
    // make giant array of all of the tags
        // access the customers[i].tags property
    let allTags = [];
    for (let i = 0; i < array.length; i++){
        // loop through customer's tags
        let tagArr = array[i].tags
        for (let j = 0; j < tagArr.length; j++){
            allTags.push(tagArr[j]);
        }
    }

    // make objects for each individual tag
        // include tagName and count properties

    // order the array by count, highest count first

    // return array of the top three tags, using _.first()
};

var genderCount = function(array){

};

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
