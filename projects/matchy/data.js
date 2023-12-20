/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declaring empty object
var animal = {};

// giving animal key value pairs
animal.species = 'cat';
animal['name'] = 'Mitten';
animal.noises = [];

// printing object to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// adding noise by bracket notation
noises[0] = 'meow';
// adding a noise to end of array
noises.push('brrr');
// adding noise to beginning of array
noises.unshift('hiss');
// adding noise to end of array with bracket notation
noises[noises.length] = 'yowl';

// logging length of noises
console.log(noises.length);
// logging last element of noises
console.log(noises[noises.length -1]);
// logging the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// assigning object noise value to array noises
animal['noises'] = noises;

// adding another noise to noises property array
animal.noises.push('purr');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

// pushing first animal to animals array
animals.push(animal);
console.log(animals);

// declaring another animal
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

// pushing duck to animals
animals.push(duck);
console.log(animals);

// two more animal objects
var chicken = {
  species: 'chicken',
  name: 'Nina',
  noises: ['cluck', 'bgock']
};

var possum = {
  species: 'opossum',
  name: 'Steve',
  noises: ['hiss', 'scurry']
};

// adding each of the above to animals array
animals.push(chicken, possum);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I will be making an array to store the list of friends. The structure of an array lends itself to the list of friends because each friend will be similar in how they're represented in data form.
var friends = [];

// function to return a random index number for an array
function getRandom(array) {
  return Math.round(Math.random() * (array.length - 1));
}

// Using a random index from this function that you just created, get a random animal and add its `name` to `friends`
friends.push(animals[getRandom(animals)]['name']);
console.log(friends);

// Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
animals[0].friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}