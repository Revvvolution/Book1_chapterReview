                                        /* Fundamentals 1 - Introduction to Variables */

console.log("Hello, world!")

// let myName = "Dwayne The Rock Johnson"; // variable assignment

// let myName; // variable declaration
// myName = "Dwayne The Rock Johnson"; // variable assignment

// We declare the variable just like we did before
// let myName = "Dwayne The Rock Johnson";

// Except this time we reassign it to hold a different value. Notice we don't have to use the let keyword for reassignments.
myName = "The Rock";

// This should log "The Rock" to the console
console.log(myName)

let totalCost;
let totalWithTax;

let costPerItem = 2.50;
let numberOfItems = 4;
let taxRate = 0.06;

totalCost = costPerItem * numberOfItems;
totalWithTax = totalCost + (taxRate * totalCost);

console.log(totalWithTax);

// concatenation(when you combine a string with abother string) or interpolation(when you combine a string with a variable or expression)
let firstName = "Dwayne";
let lastName = "Johnson";

// two ways to combine strings with the same result:

// Option A: String Concatenation with the + symbol
let fullName = firstName + " " + lastName;

// Option B: String template literals (probably easier once you get used to them) When we say you need to string interpolate,
// this is what it means.
        //fullName = '${firstName} ${lastName}';

console.log(fullName);

//New Vocab for Intro Chapter 1
// Variable
// Declare
// Assign
// String
// Boolean



                                        /* Fundamentals 2 - All About Arrays */

//individually assigned values:
const flower1 = "Tulip"
const flower2 = "Rose"
const flower3 = "Daffodil"
const flower4 = "Daisy"

//These similar items can be grouped together as an ***array***:
const flowers = [ "Tulip", "Rose", "Daffodil", "Daisy" ] //be sure to make the variable name plural for arrays' content.

//examples with plural names:
const dogs = [ "Schnauzer", "Labrador Retriever", "Bulldog", "Poodle", "Collie" ]
const studentAges = [ 24, 54, 32, 27, 29, 40, 35 ]
const professions = [ "Mechanic", "Plumber", "Musician", "Engineer" ]
const expenses = [ 71.54, 401.03, 89.59, 145.62 ]
const months = [ "April", "July", "October", "December" ]

