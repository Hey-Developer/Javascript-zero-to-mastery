/* 
? The switch statement is used to perform different actions based on different conditions.
u will use switch case when u want to perform may test cases at a time
u can also use if else if ladder in this case but it will lead to more complex code also it will increase the execution time.
hence it is best tto use switch case in such situation
 */
/* 
#syntax
 switch(expression) {
  case x:
    code block
    break;
  case y:
    code block
    break;
  default:
    code block
}
 */
// $ The getDay() method returns the weekday as a number between 0 and 6.
//this method works in browser not im cmd
switch (new Date().getDay) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;

    default:
        console.log("Didn't get a valid input");

        break;
}

/* 
#Common Code Blocks
Sometimes you will want different switch cases to use the same code.
 */

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

// !If multiple cases matches a case value, the first case is selected.
let day = 5;
switch (day) {
    case 5:
        console.log("hello"); // it will execute--^
        break;
    case 5:
        console.log("tu ja re");
        break;

    default:
        break;
}

// You can also use string as case value:
let age = 17;
switch (true) {
    case age >= 15 && age <= 20:
        console.log("you are eligible");
        break;
    case age >= 21 && age <= 30:
        console.log("you are nnot eligible");
        break;

    default:
        console.log("INVALID");
        break;
}

/* 
Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.
 */

var x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text);

var day = "Monday";
switch (day) {
    case "monday":
    case "Monday":
        console.log(Hey!Its workday Get UP);
        break;

    default:
        break;
}