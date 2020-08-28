/* 
Arrow Function Expression is:
    >has a shorter syntax compared to function expression
    >Arrow function is anonymous
Syntax-->
*    ()=>{Statements};
whereas function expression:
    var myFun= function show(){
        statements;
    }
 */

//Function expression:
var show = function() {
    console.log("Show");
};
show();

var show1 = () => {
    console.log("Show1");
};
show1();
/* 
~You cannot call a arrow function before its declaration
~ You can give a line break between () and => u can give a whitespace.
 */

//  Arrow Function with parameter-->
let show2 = a => {
    console.log("Show2 : " + a);
};
show2(5);
/* 
 ~If you are giving only one parameter then it is not necessary to use (),parenthesis
    You can also write above code as-->
    let show2 = a => {
        console.log("Show2" + a);
    };
    show2(5);
~But With more than one parameter (),parenthesis is required
 */

//  Arrow Function with default parameter.
let add = (a, b, c = 0) => {
    console.log(a + b + c);
};
add(1, 2);
add(1, 2, 10);

// Arrow function with Rest Parameter.
let addN = (...num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
};
console.log("Addition of N Number: " + addN(1, 2, 3, 4, 5, 6, 7));

// ~If u want to write single statement then curly braces are optional-->
let display = a => console.log("Single statement: " + a);
display(0);

let get = a => {
    return a;
};
console.log(get(10));

// ~In arrow function if u r returning something then it is not necessary to write return keyword-->
// ~ Also here when u writing only b; then don't need to use curly braces{} it will give undefined result.
// {return b}; == b;

let get1 = b => b;
console.log(get1(100));

let get2 = b => {
    b;
};
console.log(get2(100));

// ~so conclusion:  return is not necessary

let subtract = (a, b) => a - b;
console.log("Subtraction: " + subtract(100, 200));

// Normal Function Definition:
function num(a, b) {
    return a + b;
}
console.log(num(100, 100));

// Arrow function definition:
(a, b) => a + b;