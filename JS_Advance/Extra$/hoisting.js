/* 
Before the execution of the code on console or browser screen,
--1> We knw that our code run in a enviornment known as  execution context.
--2> When are code runs in this execution context. In this execution context it have two phases.
--3> i.e our code will run in two phases. One is creation phase and the other one is execution phase.
--4> In creation phase we knw A variable object is created in which all the variable and function declarations are stored.
--5> Remember in variable object fn declarations and variable declarations is assigned not their expression;

--7> So the point is these moving of fn and variable declarations on the top of their scope or moving in the variable object is known as Hoisting.

*/
// CAlling a fn
sum(5, 10);
// Defining a fn-->
function sum(a, b) {
    return a + b;
}
/* 
# fn Hoisting
This code seems to be like this in Browser-->
> Defining a fn--> Fn declaration move to top
function sum(a, b) {
    return a + b;
}
> CAlling a fn
sum(5, 10);
*/

//! SOME EXCEPTIONS for hoisting-->

// if i do something like this-->
console.log(add(1, 2));

//-- Here i keep the fn in parenthesis hence it is no more a fn declaration thereforce not be hoisted:
(function add(a, b) {
    return a + b;
});

// * Function Expression are not hoisted:
console.log(subtract(1, 2)); // undefined

var subtract = function(a, b) {
    return a - b;
};
//> BEcause here subtract is a variable hence it will hoisted to the top and undefined is assigned to its value;

// # Variable Hoisting-->
console.log(a); // undefined not error because due to hoisting the declaration part is moved to top of its scope; i.e before cl(a) var a is already declared on the top with value set to undefined.
var a = 10;
/* 
# CONCLUSION:
--1> Hoisting only move declarations to the top;
--2> Hoisting do not work with let and const variables;
--3> Hoisting only work with normal function declarations;
--4> Hoisting do not work with function expression;
--4> Hoisting do not work with Arrow function ;
*/

// EXERCISE-1;
console.log(`I am a ${job}`); // I am a undefined
var job = "WEB_DEV";
console.log(`I am a ${job}`); // I am a WEB_DEV

function whoAmI() {
    console.log(`I am a ${job}`); // I am a undefined
    var job = "Full Stack";
    console.log(`I am a ${job}`); // "Full Stack"
}

whoAmI();