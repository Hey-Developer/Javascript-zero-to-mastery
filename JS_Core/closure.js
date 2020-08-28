/* 
A closure is a function having access to the parent scope.
it preserve the data from outside.
            or
A closure is an inner function that has access to the outer function variables\

>For every closure we have three scopes:
    ~local Scope(own Scope)
    ~Outer function scope
    ~global scope
 */

let i = 10;
// Here this function behave as a closure because it can access the global variable or we can say it preserve its parent data
function show() {
    let j = 20;
    console.log(i);
    console.log(j);
}
show();

/* 
>Outer Function cannot access data of inner function.
>inner function can access:(A closure)
    ~Local Variable of Outer Function.
    ~Own Local Variable.
    ~And A global variable also.
 */

let gv = "Global Variable Outside the Outer Function";

function show1() {
    let j = "J is a local variable of Outer Function";
    console.log(gv);
    console.log(j);

    function show2() {
        // A closure
        var k = "K is a local Variable of inner function";
        console.log("A closure:");
        console.log(k);
        console.log(j);
        console.log(gv);
    }

    show2();
}
show1();

// Real-life situation:

// A counter Dilemma-->
var counterReset = function() {
    var count = 0;
    // A closure
    return () => {
        count += 1;
        return count;
    };
};

var counterStart = counterReset();
console.log(counterStart());
console.log(counterStart());
console.log(counterStart());
console.log(counterStart());
console.log(counterStart());

// * Why do we need closure?
// Ans-Because in JS we have lexical scope this means that something in above scope can automatically available in the lower scope:
let i = 1;
const f = () => {
    console.log(i);
};
f();
// Here to solve this problem I can use closure,closure help to make the variable i private that is from outside i cannot use this i but through a function i can use its value.
let f; // function declaration
// a scope
if (true) {
    let i = 1; // data is protected from the outside
    //function definition:
    f = () => {
        console.log(i);
    };
}
f();

// This is a kind of closure--^

/* 
Closure in deep--> Interview question:
? What is closure:
    > In other words, a closure gives you access to an outer function’s scope from an inner function. 
    > In JavaScript, closures are created every time a function is created, at function creation time.


    
> To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.


*/