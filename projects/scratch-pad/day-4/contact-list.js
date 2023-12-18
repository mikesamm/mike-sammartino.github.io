// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return a contact object
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    // return an object that manages contacts
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // takes full name string like "Max Gaudin"
            // splits full name string into 
            var nameFull = fullName.split(' ');
            // returns the contact object if found in list -or-
            for (var i = 0; i < contacts.length; i++) {
                if (nameFull[0] === contacts[i].nameFirst && nameFull[nameFull.length - 1] === contacts[i].nameLast) {
                    return contacts[i];
                } else {
                    // returns undefined if fullName does not match any contact
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            // takes contact object to be removed from the contact list
            for (var i = 0; i < contacts.length; i++) {
                if (Object.is(contact, contacts[i])) {
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            // return a string with full names, separated by a line break
            // string to return
            var nameList = '';
            // looping through contacts array
            for (var i = 0; i < contacts.length; i++) {
                // add nameFirst and nameLast value to string, then \n
                if (contacts[i] === contacts[contacts.length - 1]) {
                    nameList += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                } else {
                    nameList += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
                }
            }
            // return the string
            return nameList;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
