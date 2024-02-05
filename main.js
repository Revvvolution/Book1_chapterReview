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
const flowers = [ "Tulip", "Rose", "Daffodil", "Daisy" ] // be sure to make the variable name plural for arrays' content.

//examples with plural names:
const dogs = [ "Schnauzer", "Labrador Retriever", "Bulldog", "Poodle", "Collie" ]
const studentAges = [ 24, 54, 32, 27, 29, 40, 35 ]
const professions = [ "Mechanic", "Plumber", "Musician", "Engineer" ]
const expenses = [ 71.54, 401.03, 89.59, 145.62 ]
const months = [ "April", "July", "October", "December" ]

/* Using arrays, you can learn to access specific items in an array, 
how to add items to an array, and how to automate the process of targeting 
each item in the array - in sequence - and doing something with each item. */

myFavoriteColors = [ "red", "violet", "pink", "green", "white", "orange" ]
/* each number(value assignment placement) in an array is called its *index*. 
0 is red, 1 is violet, and so on until 5 for orange. Note that 0 is the first value, not 1. */

//log the color white to the console by assigning a variable and calling upon its value in the array:

const whiteColor = myFavoriteColors[4]
console.log(whiteColor);






                                                /* Fundamentals 3 - Objects */

/*
    Basic object representing my dog Angus.
    - The object itself is labeled with the variable of `dog`
    - The integer of 1 is labeled with the **key*** of `age`

    For example, the number 1 has no meaning in an application
     by itself. You have no idea what that integer represents 
     until assign it a name. On objects, those are called keys.
*/
const angus = {
        age: 1
    }
    
    // Another object representing my child Tessa
    const tessa = {
        age: 1
    }    

/*
Until you get to more advanced JavaScript, you can 
recognize an object because it follows this pattern.

-Open and closing curly braces
-Contains keys and values separated by a colon
-Key/value pairs are separated by a comma

This is an object. It represents a single food.
*/

const food = {
        type: "Hamburger",
        size: "Small",
        temperature: "Medium rare"
    }

/*
This (below) is --NOT-- an object. It doesn't represent a singular thing.
 It also has no curly braces, or key/values pairs. When using 
 an array to store these strings, they have now lost their context.
*/
// const food = ["Hamburger", "Small", "Medium rare"] // array not representing an actual thing. --Arrays-- are more like a collection of similar things.



/*
This (below) --IS-- an object. It represents a desk and itemizes the properties of it.
--Objects-- are ways to define details of a single thing. 
*/ 

const desk = {
        height: 42,
        width: 63,
        depth: 30
    }

/*
Here you define two separate objects:
*/

const whiskers = {
        species: "Cat",
        name: "Whiskers",
        age: 4,
        color: "Black"
    }
    
    const dozer = {
        species: "Dog",
        name: "Dozer",
        age: 7,
        color: "Brown"
    }

                                /*
                                Developers --NEVER-- describe two things with a single object.
                                */
                                // ***--DON'T--*** do this:
                                const theAnimals = {
                                        catName: "Jingles",
                                        catAge: 4,
                                        catColor: "Black",
                                        dogName: "Denver",
                                        dogAge: 7,
                                        dogColor: "Brown"
                                }

// Access values using **--dot notation--**:
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
} //now to output the string "Collie" and the integer 7:
console.log(`Lassie's breed is ${lassie.breed}`)
console.log(`Lassie's age is ${lassie.age}`)


// Access values using **--square bracket--** notation:
lassie["breed"] //calling upon the key

//look up a key using square
const keyToLookup = "breed"
// First, make JavaScript evaluate the variable and give us its value
console.log(keyToLookup)

/* Now that you know that keyToLookup evaluates to "breed", you can use 
the variable to lookup the value with square bracket notation. */
const lassiesBreed = lassie[keyToLookup]  // Use the value of `keyToLookup` to het the value you want
console.log(lassiesBreed)


//***Arrays As Values***/

const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"] 
    //all animals in array are assigned a single variable within the object.
}
//You can use dot notation to get that value:
const boardedAnimals = kennel.currentAnimals

for (let i = 0; i < boardedAnimals.length; i++) {
    console.log(boardedAnimals[i])
}
// To pull a single animal from the array, use the index value following dot notation:
console.log(kennel.currentAnimals[3])


