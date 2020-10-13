/* 
? Hoisting is JavaScript's default behavior of moving declarations to the top.of the function
if defined in a function 
or 
? the top of the global context,if outside a function.
#Imp point to know:
    * var a; //variable declaration
    * a = 10; //variable initialization
 */

//  Now what hoisting do is
// When we write code like this-->
var a = 10;
console.log(a);
var b = 20;

// JavaScript concert this code like this in compilation phase-->
var a;
var b;
a = 10;
console.log(a);
b = 20;
// I.e it moves all the declaration part on the top:

/* 
Now What conclusion we take it out from that--
    ~A variable can be used before it has been declared:
        a=10;
        console.log(a);
        var a;
        > bcoz in compile phase this code will converted into-
            var a;
            a=10;
            console.log(a);
    ~Only variable declarations are hoisted to the top, not variable intialization
        in compilation phase
        var a;
        var b;
        a=10;
        console.log(a+","+b);
        b=20;
        > here we get the output as 10,undefined 
        > because here declaration part is moved to the top not the initialization,
        > so the value in b is undefined it will defined in thw next line.

 */

/* 
?  In case of function:
if a variable is defined inside function then by hoisting its declaration part is moved to the top of the function body start.

*/

var i = "hello";
console.log(i);

function hello() {
    console.log(i);
    var i = "bye";
    console.log(i);
}
hello();
/* 
output is:
    hello
    undefined
    bye
> Undefined bcoz js will write this code as_
var i;
i='hello';
console.log(i);
function hello(){
    ~Moved the declaration to the top.
    var i;
    ~ i is not initialized hence undefined.
    console.log(i);
    i="bye";
    ~ NOw it will print
    console.log(i);
}
 */

/* 
 ! Most Most Imp- Variables and constants declared with let or const are not hoisted!
 */
let a1 = 10;
/* 
 here it will produced error bcoz 
 here the declaration part let b1; is not hoisted hence
 that means at this point there is no b1 kind variable. therefore 
 it will show error-->
    console.log(a1 + " , " + b1);
    ! reference error:cannot access 'b1' before initialization
 */
console.log(a1);
let b1 = 20;
console.log(b1);

// ! You can also use a function before defining it.