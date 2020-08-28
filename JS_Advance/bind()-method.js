/* 
Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns the function.

$ The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

>> Syntax: 
   -> let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])
   -- thisArg: The value to be passed as the this parameter to the target function func when the bound function is called. The value is ignored if the bound function is constructed using the new operator.
    When using bind to create a function (supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object. If no arguments are provided to bind , or if the thisArg  is null or undefined, the this of the executing scope is treated as the thisArg for the new function.

    -- arg1, arg2, ...argN: (Optional): Arguments to prepend to arguments provided to the bound function when invoking func.

    -- Return value: A copy of the given function with the specified this value, and initial arguments (if provided).
     
>> In JavaScript function binding is happens using Bind() method. by this method, we can bind an object to a common function, so that the function gives different result when its need.

>> The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.

$ Why Function Binding?? ("loosing this"): 
  ? When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".
  ? If we create a method inside an object and then pass it reference to some other object and then when we call it from some outside the result of this will varry depending upon from where the method is called:
*/
// >>EX1>>(loosing 'this')
this.x = 9; // 'this' refers to global 'window' object   here in a browser
const module = {
    x: 81,
    getX: function() {
        return this.x;
    },
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope
//  * A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g., by using the method in callback-based code),Without special care, however, the original object is usually lost.
//#Solution: bind()
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81

// >>EX2>>(loosing 'this')
// When a method an object is passed to another function as a callback, the this value is lost. For example:
let person = {
    name: "John Doe",
    getName: function() {
        console.log(this.name);
    },
};

setTimeout(person.getName, 1000);

// -> o/p: undefined
// As you can see clearly form the output, the person.getName() returns undefined instead of 'John Doe'.
// ? That’s because setTimeout() received the function person.getName separately from the person object.

// ? The this inside the setTimeout() function sets to the global object in non-strict mode and undefined in the strict mode.

// $ To fix the issue, you can wrap the call to the person.getName method in an anonymous function, like this:

setTimeout(function() {
    person.getName();
}, 1000);

//Looks fine, but a slight vulnerability appears in our code structure.
//What if before setTimeout triggers (there’s one second delay!) user changes value? Then, suddenly, it will call the wrong object!

//-> // ...the value of person changes within 1 second
person = {
    getName() {
        console.log(`Hello i am User..`);
    },
};
//The next solution guarantees that such thing won’t happen.

//$ Or you can use the bind() method:
let f = person.getName.bind(person);
setTimeout(f, 1000);
/* 
In this code:
-> First, bind the person.getName method to the person object.

-> Second, pass the bound function f with this value set to the person object to the setTimeout() function.
*/

//$ Using bind() method to borrow methods from a different object

//-- Suppose you have a runner object that has the run() method:
let runner = {
    name: "Runner",
    run: function(speed) {
        console.log(this.name + " runs at " + speed + " mph.");
    },
};

//-- And the flyer object that has the fly() method:
let flyer = {
    name: "Flyer",
    fly: function(speed) {
        console.log(`${this.name} flies at ${speed} of mph`);
    },
};

//-- If you want the flyer object to be able to run, you can use the bind() method to create the run() function with the this  sets to the flyer object:
let run = runner.run.bind(flyer, 20);
run();

//-> o/p: Flyer runs at 20 mph.

//$ Example:

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    },
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value
user = {
    sayHi() {
        alert("Another user in setTimeout!");
    },
};

//$ Here we can see that arguments are passed “as is”, only this is fixed by bind:

let user = {
    firstName: "John",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    },
};

let say = user.say.bind(user);

say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)

/* 
-> Until now we have only been talking about binding this. Let’s take it a step further.

-> We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

-> It allows to bind context as this and starting arguments of the function.
*/

//For instance, we have a multiplication function mul(a, b):

function mul(a, b) {
    return a * b;
}

//Let’s use bind to create a function double on its base:

let double = mul.bind(null, 2); // fixing its first argument to 2.

console.log(double(3));
console.log(double(4));
console.log(double(5));

//-> The call to mul.bind(null, 2) creates a new function double that passes calls to mul, fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.