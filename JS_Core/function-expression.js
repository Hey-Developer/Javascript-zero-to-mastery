/* 
? Function Expression-->
    when we create a function and assign it to a variable,know as function expression.
NOTE-
>here in this case u can't call a function before its declaration
>Bcoz function expression are not hoisted unlike function declaration.

*/
var show = function() {
    console.log("Hey! its me Cnu");
};

show();

// OR

var disp = function show1() {
    console.log("Hey! its me Cnu");
};

disp();