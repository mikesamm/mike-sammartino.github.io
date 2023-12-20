/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animalArr, name) {
    // Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
    // use loop to look thru array
    for ( let i = 0; i < animalArr.length; i++) {
        // if the object in animal array has a name property equal to name
        if (animalArr[i].name === name) {
            // return the animal's object
            return animalArr[i];
        } 
    }
    // if loop does not find name, return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    // If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
    // use loop to look thru array
    for ( let i = 0; i < animals.length; i++) {
        // if animal with name exists
        if (animals[i].name === name) {
            // replace the animal with a new one
            animals.splice(i, 1, replacement);
        } 
    }
    // otherwise, do nothing
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    // if an animal with the name name exists, remove it
    for (let i = 0; i < animals.length; i++) {
        // if name matches an animal name
        if (animals[i].name === name) {
            // remove it
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function to add an animal with parameters: array of animals, animal to add
function add(animals, animal) {
    //Checks that the animal Object has a `name` property with a length > 0.
    //Checks that the animal Object has a `species` property with a length > 0.
    if ((animal.hasOwnProperty('name') && animal.name.length > 0) &&
        (animal.hasOwnProperty('species') && animal.species.length > 0)) {
            //Has a **unique** name, meaning no other animals have that name.
            // use loop to verify uniqueness
            let unique = true;
            for (let i = 0; i < animals.length; i++) {
                // if animal already has the same name
                if (animals[i].name === animal.name) {
                    unique = false;
                }
            }
            
            // if unique name and new object has name and species property
            if (unique) {
                //Add this new Object to the `animals` Array, **only** if all the other conditions pass.
                animals.push(animal);
            }
        }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
