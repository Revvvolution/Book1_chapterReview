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


/***************************************************************************************************************************************/
/***************************************************************************************************************************************/


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



/***************************************************************************************************************************************/
/***************************************************************************************************************************************/


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



/***************************************************************************************************************************************/
/***************************************************************************************************************************************/


                                                /* Fundamentals 4 - Git Basics */

// Tested terminal commands successfully. Updated settings and followed prompts from lesson.


/***************************************************************************************************************************************/
/***************************************************************************************************************************************/


                                                /* Fundamentals 5 - LOOPS */


// basic while loop:

let ii = 1;

while(ii < 20){
    console.log("Hello, world");
    ii++; // <-------- i++ is the same thing as writing i = i + 1. We're reassigning it to be one more than itself.
}

// more practical example:

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

var i = 0;  // This counter variable can be named anything. Typically i for iterator.

while(i < moviesArray.length){          //moviesArray.length evaluates to a number, which is 5 (5 items in the array)
    console.log(moviesArray[i]);        //We log moviesArray[i] to the console. Right now, i is 0, so that's the same 
    i++;   //i increments by 1.         //thing as writing moviesArray[0]. We should see "Casablanca" logged to the console.
}

            /* **--For Loop--** */

// For Loops are much more common.
for(var counter = 0; counter < moviesArray.length; counter++){
    console.log(moviesArray[counter]);
}  

/*
1. The first expression (var counter = 0) declares our counter variable. Our loop will start counting at 0.
2. The second expression (counter < moviesArray.length) is the condition that must be true for the code block to run. In this case, the loop will keep going as long as i is less than moviesArray.length.
3. The third expression (counter++) tells the counter varaible how to increment. Each time the loop runs, 'counter' will increase by 1.
*/

            // New vocabulary:  - Loop , - Iteration , - Increment
            

/***************************************************************************************************************************************/
/***************************************************************************************************************************************/



                                               /* Fundamentals 6 - Conditionals */

//Conditionals decide whether or not pieces of code should run:

if(2+2 === 4){
    console.log("Math works!");  //<---- Expected output
} else {
    console.log("Math is broken.")
}

/* You can add as many conditions as you want with 'else if'. JavaScript will try each condition in order. As soon as on of them
evaluates to 'true', it will run that code block and skip the rest. */

// Triple equals will check to see if the type and the value are equal
"Hello" === "Hello"; //true
24 === "24"; // false because an integer does not equal a string value.

// Double equals will compare values as if they're the same type, even if they're not. This can get messy, so you should default to triple equals 
24 == "24" // true

// To check to see if things are NOT equal:
var name = "Jordan";
if(name !== "Dwayne"){
  console.log("Too bad for you!");  // <-- Expected output
}

        /* Logical Operators - checking to see if more than one condition is true */

var fullMoon = true;
var isWolf = false;

// This block of code will only run if the moon is full **--AND--** you're a wolf. Right now, this code won't run because the value of isWolf is false.

if(fullMoon && isWolf){  // '&&' = AND (both conditions must be true)
    console.log("AWOOOOOOOOOOO");
}

/*What if we want non-wolves to be able to howl at the full moon too? This block will run if you're a wolf **--OR--** if the moon is full. 
However, if both conditions are false (you're not a wolf and the moon is not full), the code will not run.
*/
if(fullMoon || isWolf){  // '||' = OR (at least one condition must be true)
    console.log("AWOOOOOOOOOOO");
}


/***************************************************************************************************************************************/
/***************************************************************************************************************************************/


