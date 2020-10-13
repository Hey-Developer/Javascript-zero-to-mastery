/* 
?Conditional-Statements-->\

*   use if to specify a block of code to be executed, if a specified condition is true.
*   Use else to specify a block of code to be executed, if the same condition is false.
*   use else if to specify a new condition to test, if the first condition is false.
*   use switch to specify many alternative blocks of code to be executed.

 */

/*  
   if (condition) {
         block of code to be executed if the condition is true
    }
 */
let hour = 16;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
}

/* if (condition) {
         block of code to be executed if the condition is true
    } 
    else {
         block of code to be executed if the condition is false
    }
 */
hour = 20;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}

//! else cannot be use without if:)

/* 
if (condition1) {
        block of code to be executed if condition1 is true
    } else if (condition2) {
        block of code to be executed if the condition1 is false and condition2 is true
    } else {
        block of code to be executed if the condition1 is false and condition2 is false
    }
 */
let time = 9;
if (time < 10) {
    greeting = "Good morning";
    console.log(greeting);
} else if (time < 20) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}

//? let's comapre three no. which is greater among them-->
let a = 90;
let b = 80;
let c = 100;
/* 
! wrong logic
if (a > b) {
    if (b > c) {
        console.log("A is Greatest");
    }
} else if (b > c) {
    console.log("B is Greatest");
} else {
    console.log("C is Greatest");
} */

/* 
# Using if-else-if...
if (a > b && a > c) {
    console.log(a + " Is GREATEST");
} else if (b > a && b > c) {
    console.log(b + " IS GREATEST");
} else {
    console.log(c + " Is GREATEST");
}
 */
// #using nested if-->
if (a > b) {
    if (a > c) {
        console.log(a + " Is GREATEST");
    } else {
        console.log(c + " Is GREATEST");
    }
} else if (b > a) {
    if (b > c) {
        console.log(b + " Is GREATEST");
    } else {
        console.log(c + " Is GREATEST");
    }
} else {
    console.log(c + " Is GREATEST");
}

let isVerified = true; //new user
let isLoggedIn = true; // existing user
let hasPaymentToken = true; //buy courses
let isGuest = true;
isLoggedIn = false; // existing user
if (isVerified || (isLoggedIn && hasPaymenttoken)) {
    console.log("Greeting message to user");
    console.log("Grant access to paid course");
} else if (isVerified || isGuest) {
    console.log("Allow Free previous");
} else {
    console.log("Please Sign-up to view videos courses");
}

// King Territory Problem
let king = "john"; //now if this king is also not here then there is no upper king and hence it will give an error that hey! there is no king defined
// Child-1
if (true) {
    // let king = "sam"; now if this king is also not here it will search for more upper king which is john so john will be print
    if (true) {
        // let king = "doe"; in this case it will search for it upper king which is here is sam so sam will print
        // #but what if i declare varibale like this
        // ?king = "ram";//bad habit
        // * so the ans is when we didn't define any variable then js will considered is as a global variable which is not useful because it is also accessible outside the scope
        console.log(king);
    }
}
//Child-2
if (true) {
    console.log("I am the Second Part " + king);
}