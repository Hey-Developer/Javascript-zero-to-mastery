//* Loops can execute a block of code a number of times.
/* 
# For loop Syntax
for (statement 1; statement 2; statement 3) {
  code block to be executed
}

* Statement 1-->
    Normally you will use statement 1 to initialize the variable used in the loop (i = 0).

    This is not always the case, JavaScript doesn't care. Statement 1 is optional.

    You can initiate many values in statement 1 (separated by comma):

* Statement 2-->
    Often statement 2 is used to evaluate the condition of the initial variable.

    This is not always the case, JavaScript doesn't care. Statement 2 is also optional.

    If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

* Statement 3-->
    Often statement 3 increments the value of the initial variable.

    This is not always the case, JavaScript doesn't care, and statement 3 is optional.

    Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

    Statement 3 can also be omitted (like when you increment your values inside the loop):
    
 */

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let i = 10; //global variable
for (; i >= 0; i--) {
    console.log(i);
}

var a = 0;
for (; a <= 5;) {
    console.log(a);
    a++;
}

// Factorial Of a number
let factorialNumber = 5;
let result = 1;

for (let i = 1; i <= factorialNumber; i++) {
    result *= i;
}
console.log(result);

// For with break
var i1 = 0;
for (;; i1++) {
    if (i1 == 3) break;
}
console.log(i1);

// ? Nested For Loops-->
/* 
    for(initialize;test condition ;increment or decrement){
        for(initialize;condition;increment or decrement)
        {
            block of statements;
        }
    }
 
 */
/* 
#Example to be run in browser
    for (let a = 1; a <= 100; a += 10) {
        for (let b = a; b <= a + 10; b++) {
            document.write(b);
        }
        document.write("<br>");
} */

//* The while loop loops through a block of code as long as a specified condition is true.
/* 
initialization;
while (condition) {
  code block to be executed
}
 */
console.log("While Loop");

let i0 = 0;
while (i0 < 5) {
    console.log(i0);
    i0++;
    console.log(i0);
}

// ? use this type when u dont know how many time loop will run but u  know the condition when to break the loop:
var i9 = 0;
while (true) {
    if (i9 == 3) {
        break;
    }

    console.log(i9);
    i9++;
}

// * Nested while loops
console.log("Nested While Loop");

var i8 = 0;
while (i8 < 5) {
    console.log("I am In Outer Loop" + i8);
    var i81 = 0;
    while (i81 < 5) {
        console.log("I am In inner loop" + i81);
        i81++;
    }
    i8++;
}

// *do-while loop-->
console.log("You can see previews of videos 5times");
var count = 0;
do {
    count++;
    console.log(count + "time");
} while (count <= 5);
console.log("oops! Buy a premium account");