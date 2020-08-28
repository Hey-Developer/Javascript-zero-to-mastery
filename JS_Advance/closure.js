/* 
$ Closure In JS:
  Closure in action is that is inner function can have access to the outer function variable as well as global variables

  -> A closure is the combination of a function and the lexical environment within which that function was declared.
  
  -> In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

  -> To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.

  -> The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

$ Using Closures: 
  Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. 

*/
// A simple example of Closures as well as lexical scope..
const outerFun = a => {
    let b = 10;
    const innerFun = () => {
        console.log(`The sum of the two number is: ${a + b}`);
    };
    innerFun();
};

// It is simplest example of Closure:
//-> In which we have inner function which have access to its outer fn.
//-> And also this is the example of lexical scoping which says that a function inside another fn can access to variables of the outer fn.

// Now let's get Deep into it..
let counterStart = () => {
    let count = 0;

    return () => {
        return count++;
    };
};
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// Now this is the perfect example of closure because here we are not calling the inner function we are returning it.. that means:
//>> When we call counterStart function its execution context is creared and inside that we didnt call inner function we just return it..
//>> Now after completion of its code the fn counterStart will remove from the call stack.
//-> Now the return fn which we stored in a variable is call then still it have access to the outer fn variable count no matter it is not in the call stack bcoz a closure is formed by JS compiler in which outer fn variables are stored bcoz they now that this function hve  a inner fn which will need this varibale in future.
// Hence in this way we secure the data so that no one can change it from outside...

// Another Example-->>
//$ Lexical scoping:
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();

//$ Closure:
function makeFunc() {
    var name = "Mozilla";

    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//-> Running this code has exactly the same effect as the previous example of the init() function above. What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.

//-> At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution.

//-> Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.

//** The reason is that functions in JavaScript form closures.

//-> A closure is the combination of a function and the lexical environment within which that function was declared.

//-> This environment consists of any local variables that were in-scope at the time the closure was created.

//-> In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run.

//-> The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.

//-> For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.

//$ Here's a slightly more interesting example—a makeAdder function:
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

/* 
>>> Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

>>> Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

>>> Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).



*/