/* 
?   A JavaScript function is a block of code designed to perform a particular task.
?   A JavaScript function is executed when "something" invokes it (calls it).

type of function-->
1.User-defined
2.Pre-defined
 */

// ? Creating a function--Syntax
/*  Function parameters are listed inside the parentheses () in the function definition.

    function name(para1,para2,para3..) {
        Block_of_code;
    }
 */

function displayName() {
    console.log("Hey! Developer");
}

//  ? Calling a function--Syntax or Function Invocation
/* 
    When an event occurs (when a user clicks a button)
    When it is invoked (called) from JavaScript code
    Automatically (self invoked)
 */
// ?Function arguments are the values received by the function when it is invoked.
// * function_Name(arguments);
displayName();

/* 
? Function Naming Rule-->
    1.You can use a-z or A-Z or _ or $ or 0-9
    2.Name cannot start with number
    3.NAme cannot bea reserved keywords
    4.Function Name is case-sensitive
 */

//  $ You can also call/invoke a function before defining it but this rule is valid for general function.

/* 
 ? Function with parameters-->
 * javascript function definitions do ot specify data types for parameters.
 * javascript function do not perform type checking on the passed arguments
 * javascript functions do not check the number of arguments received

 */

/* 
? If i do this-
function add(let a,let b){
    console.log(a+b);
}
# Ans-Wrong syntax do not work.
 */
function cloves(a, b) {
    console.log(a + b);
}

cloves("Divyan", "Shraddha");

/* 
? Function Arguments Missing-->
In this case-
    function add(a,b,c)
    {
        console.log(a+b+c);
    }
you make a function with 3 parameters but at time of invoking you do like
    add(2,3);
    that is u didn't passed the 3rd argument it this case:
    $the missing values are set to undefined.
 */
console.log("Function Arguments Missing-->");

function add(a, b, c, d) {
    // for showing that missing value is undefined:
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    // console.log(a + b + c + d); //result is NAN because here 4th argument is missing and hence set to undefined thereforce when adds result it NAN
}

add(2, 3, 4);

/* 
* Arguments Object *
let us take a example -
    function add(num1,num2){
        //Block_of_code
    }
    add(2, 3);
here we passed the arguments 2,3 to the function add this arguments get stored inside
$ a object(or we can say it as Array Object but actually it is not a array but similar to array),
this object is known as "Argument Object" ,

#Kitabi Definition-
    The argument object contains an array of arguments used when the the function is called.
    This Object contains as entry for each arguments passed to the function, the first entry index starting at 0
    the argument object is not a array.it is similar to an array, but does not have any array properties except length.
 */
console.log("* Arguments Object *");

function subtract(a, b, c) {
    console.log("Values coming by user");
    console.log(a);
    console.log(b);
    console.log(c);

    // Either
    console.log(a - b - c);
    // Or using arguments object
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log("Subtraction: " + (arguments[0] - arguments[1] - arguments[2]));
    // We can also modify the values of arguments which is send on function calling using arguments object>
    arguments[0] = 0;
    arguments[1] = 0;
    arguments[2] = 0;
    console.log("Modified values of Arguments-");
    console.log("a= " + arguments[0]);
    console.log("b= " + arguments[1]);
    console.log("c= " + arguments[2]);

    // No of arguments coming from user:
    console.log("No of Arguments send by user: " + arguments.length);

    // This properties most commonly used with loop
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    // argument.callee--> Shows all the details about function definition
}

subtract(2, 5, 6);

/* 
? Too many Arguments:
    what if we define a function with 2 parameters but
    at the time of calling the function is passed with more than 2 arguments then
    we can access those extra object using "arguments object"
*/
console.log("? Too many Arguments:s");

function addition(a, b, c) {
    if (arguments.length > 3) {
        console.log(
            "User Arguments is Increased then the function definition parameter hence: Performing addition using Argument Object"
        );

        var sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    } else {
        console.log("User Arguments is equal to function definition parameters:");
        console.log(a + b + c);
    }
}

addition(1, 2, 3, 5);

/* 
 ? Default Parameters
 in case user didn't pass any arguments then we can set a default value to the function parameters in function definition
 this is called default parameter.
 $ but if user pass the value fo the argument then it will override the default value

 syntax-
    function add(a,b,c=0)
    {
        //Block_of_code
    }
syntax-
    function add(a,b=0,c) 
    {
        //Block_of_code
    }
   
syntax-
    function add(a, b=1,c=0)
    {
        //Block_of_code
    }
    ? no problem in this code
 */
console.log(" ? Default Parameters");

function show(a, b, c = 0) {
    console.log(a);
    console.log(b);
    if (arguments[2] == 0) {
        console.log("User didn't pass the value hence default value is: " + c);
    } else console.log(c);
}

// show(10, 20, 30);
show(10, 20);

/* 
? conclusion:-
    1.If user didn't pass the value of the argument then in the function definition it will be undefined
    2.if u set a default value for a parameter:-
        2.1 if user didn't passed the value of argument default value will be used.
        2.2 if user passed the value of the argument then default value will be override by the use  value.

 */

/*
 * U can also use arrays and null as default values
 */
console.log(" * U can also use arrays and null as default values");

function show1(a, b, c = null) {
    console.log(a);
    console.log(b);
    if (arguments[2] == null) {
        console.log("User didn't pass the value hence default value is: " + c);
    } else console.log(c);
}
// show1(1, 2, 3);
show1(1, 2);

function show2(a, b, c = [10, 20, 20]) {
    console.log(a);
    console.log(b);
    if (arguments[2] == c[(10, 20, 30)]) {
        console.log("User didn't pass the value hence default values is: ");
        for (let i = 0; i < c.length; i++) {
            console.log("value " + i + ": " + c[i]);
        }
    } else console.log(c);
}
// show2(10,20,30)
show2(10, 20, 30);

console.log("Another Way to define a function");
//$ Function expression
//! Another way to define a function:
let sayHello = function(name) {
    console.log("greeting message for " + name);
    console.log("hey " + name);
};
sayHello("john");
sayHello; // #Accessing a function without () will return the function object instead of the function result.

let fullNameMaker = function(firstname, lastname) {
    console.log("Welcome to Cloves");
    console.log(`happy to have you, ${firstname} ${lastname}`);
};
fullNameMaker("john", "doe");
fullNameMaker; // #Accessing a function without () will return the function object instead of the function result.

/* 
$ Rest Parameters:(in java var args)
    the rest parameters allows us to represent an indefinite number of arguments as an array.
Syntax-1
    function add(...args){
        //Block_of_code
    }
Syntax-2
    function add(a,...args){
        //Block_of_code
    }
! Rest parameter should be the last parameter in function definition
 */
console.log("Rest ParaMeters");

function addN(...num) {
    console.log(num);
}
addN(1, 2, 3, 4, 5);

function addN1(a, ...num) {
    console.log(a);
    console.log("Rest ParaMeters Values: " + num);
}
addN1(11, 22, 33, 44, 55, 66, 77, 88, 99, 00);

// We can individually access the values of the rest parameters using indexing
function addN2(...num) {
    if (arguments.length > 2) {
        for (let i = 0; i < arguments.length; i++) {
            console.log("Displaying values: " + num[i]);
        }
    } else {
        console.log(num[0]);
        console.log(num[1]);
    }
}

addN2("Hii", "Its", "ME");

/* 
    function addN3(...num, a) {
        console.log(num);
        console.log(a);
    }
addN3(1, 2, 3, 4, 5)
! SyntaxError : Rest parameter should be the last formal parameter.
 */

/* 
* Rest Vs Arguments *
    1.Rest ParaMeters are the only that ones that haven't been given a separate name,
      while the arguments object contains all arguments passed to the function.

    2.The ArgumentsObject is not a real array ,while rest parameters are array instances,meaning methods like sort, map,foreach,or pop can be applied on it directly.
    
    3. The arguments object has addition functionality specific to itself like the callee property
 */
console.log("Rest arguments VS Arguments Object");

function restShow(a, ...args) {
    console.log("first Para: " + a);

    console.log("Rest Para: " + args);
}
restShow(1, 2, 3, 4, 5);

function argumentShow(a) {
    console.log("First Para a: " + a);

    console.log(arguments);
}
argumentShow(10, 20, 30, 40, 50);

/* 
So here in this case we learn that in case of rest parameter the value is rest of the arguments that is it does not
include previous parameter values but
in case of argumnet object in contain values of all the parameter including previous ones and extra ones.
 */

// * Function with return type-->
console.log(" * Function with return type--> ");

function adder(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}
// Either
console.log(" SUM oF N numbers: " + adder(1, 2, 3, 4, 5, 6));
//Or
let result = adder(10, 20, 30, 40, 50);
console.log(" SUM oF N numbers: " + result);

/*
$ The Function() Constructor
  As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
  Functions can also be defined with a built-in JavaScript function constructor called Function().

*/
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
console.log(x);

/* 
# Hoisting applies to variable declarations and to function declarations.
  ! Because of this, JavaScript functions can be called before they are declared:
*/
myFunction(5);

function myFunction(y) {
    return y * y;
}

/* 
$ Self-Invoking function:
  > Function expressions can be made "self-invoking".

  > A self-invoking expression is invoked (started) automatically, without being called.

  > Function expressions will execute automatically if the expression is followed by ().

  > You cannot self-invoke a function declaration.

  > You have to add parentheses around the function to indicate that it is a function expression:
*/

(function() {
    var x = "Hello!!"; // I will invoke myself
})();

// ~The function above is actually an anonymous self-invoking function (function without name).

//$ JavaScript functions can be used in expressions:

function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;