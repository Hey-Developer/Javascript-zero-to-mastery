/* 
Used In JS FrameWorks-
Anonymous Function allow the creation of the function which have no specified name.
    >Can be stored in a variable.
    >can be returned in a function.
    >can be pass in a function
function (){
    //Block of code;
};
 */
// ~Can be stored in a variable.
var a = function() {
    console.log("I am Anonymous");
};

var add = function(a, b) {
    console.log(a + b);
};
a();
add(2, 5);

// ~Passing String  as a arguments.
function disp(myFun) {
    return myFun;
}
console.log(disp("CLOVES"));

// ~Passing Anonymous Function  as a arguments.

function show(myFun) {
    return myFun;
}
console.log(
    show(function() {
        return "Hey! -_- ! I am Anonymous Function";
    })
);

/* 
Output-->
function(){
    return "Hey! -_- ! I am Anonymous";
}

? So this is not out desired output!! Why what the shit is happening here-
 here we call show() function with function as a argument so
 in the PARAMETER i.e function get store in the parameter myFun
*    myFun= function(){
*        return "Hey! -_- ! I am Anonymous";
*    }
 > So this is something look likes function expression;
 ok so in the show() we are returning this myFun variable but 
 * just check what we write : return myFun;
 since as we passed the function to the argument so this myFun is not a normal 
 variable it becomes a function and we know how to call a function using parenthesis();
 ! Accessing a function without () will return the function object instead of the function result.
 
 */
function show1(myFun) {
    return myFun();
}
console.log(
    show1(function() {
        return "Hey! -_- ! I am Anonymous Function";
    })
);

// >retuning a anonymous function
// !closure concept
function disp(a) {
    return function(b) {
        return a + b;
    };
}
console.log(disp(10));
/* 
output->
    function(b){
        return a+b;
    }

? Why is it so:
because we call disp() function ok
disp() function is returning a function so
indirectly that anonymous function get store in calling function disp(10):
something like this-->
    disp(10)= function(b){
        return a+b;
    }
>Now what we want - is to take out the return value from the anonymous function
>so and return statement run when function call so 
> Simply we can store the returning function in a variable just like function expression 
> and then call that variable as a function.
>And returning function is present in disp(b)
 */

var anonymousFn = disp(10); // Function Expression
console.log(anonymousFn(20));
// Running Successfully