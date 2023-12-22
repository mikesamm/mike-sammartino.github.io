//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function should return the values from an object in an array
function objectValues(object) {
    // storage array
    let values = [];
    // loop through the object
    for (var key in object) {
        // push values to the storage array
        values.push(object[key]);
    }
    // return storage array
    return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space
// ex: "a b ponies dingle"
function keysToString(object) {
    // storage array
    let keys = [];
    // loop through object
    for (var key in object) {
        keys.push(key);
    }
    // join array into string
    let keysString = keys.join(' ');
    // return string of keys
    return keysString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space
// non-string values should not be included
function valuesToString(object) {
    // storage array
    let stringValues = [];
    // loop over object
    for (let key in object) {
        if (typeof object[key] === 'string') {
            stringValues.push(object[key]);
        }
    }
    // join stringValues into string
    let stringString = stringValues.join(' ');
    // return string of strings
    return stringString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    // convert string to an array
    let arrayWords = string.split(' ');
    // loop through array and capitalize all the words
    for (let i = 0; i < arrayWords.length; i++) {
        arrayWords[i] = arrayWords[i].slice(0, 1).toUpperCase() + arrayWords[i].slice(1);
    }
    // join arrayWords into string again
    let stringCap = arrayWords.join(' ');
    // return new capitalized string
    return stringCap;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(object) {
    let capName = object.name.slice(0, 1).toUpperCase() + object.name.slice(1);
    return 'Welcome ' + capName + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
    let capName = object.name.slice(0, 1).toUpperCase() + object.name.slice(1);
    let capSpecies = object.species.slice(0, 1).toUpperCase() + object.species.slice(1);
    return capName + ' is a ' + capSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
function maybeNoises(object) {
    if (object.hasOwnProperty('noises')) {
        if (object.noises.length === 0) {
            return "there are no noises";
        }
        return object.noises.join(' ');
    } else if (!object.hasOwnProperty('noises')) {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {
    // creating a regular expression of word input
    const s = new RegExp(word);
    // checking string for word
    let matchArray = string.match(word);
    // if matchArray is true, return true, else false
    if (matchArray) {
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
    // storage boolean
    let isFriend = false;
    // does object have friends property?
    if (object.hasOwnProperty('friends')) {
        // loop through friends array in object
        for (let i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                isFriend = true;
            }
        }
    }
    // return boolean
    return isFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
    // make storage arrays
    let allOtherPeople = [];
    let yesFriends = [];
    let nonFriends = [];
    
    // array of all people's names
    for (let i = 0; i < array.length; i++) {
      if (name !== array[i].name) {
        allOtherPeople.push(array[i].name);
      }
    }
    
    // name's friends, compared to all possible people
    for (let i = 0; i < array.length; i++) {      // accessing array of people
      // match name with correct array object
      if (name === array[i].name) {
        yesFriends = array[i].friends;
      }
    }
    
    // access allOtherPeople and establish test friend
    for (let i = 0; i < allOtherPeople.length; i++) {
      let testFriend = allOtherPeople[i];
      // test yesFriends array against all testFriends
      if (!yesFriends.includes(testFriend)) {
        // push testFriend to nonFriends if not found in yesFriends
        nonFriends.push(testFriend);
      }  
    }
    
    // return storage array
    return nonFriends;
  }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    // object has the key property
    // object needs the key property
    object[key] = value;
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
    // access each element of array and test to see if property in object
    for (let i = 0; i < array.length; i++){
        // if array[i] is property on object, remove it
        if (object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    }
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
function dedup(array) {
    // storage array
    let uniqueChars = []
    
    for (let i = 0; i < array.length; i++){
        // if array value is not in storage array
        if (!uniqueChars.includes(array[i])){
            // add to storage array
            uniqueChars.push(array[i]);
        }
    }

    // return array
    return uniqueChars;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}