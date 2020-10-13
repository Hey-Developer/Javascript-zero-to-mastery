/* 
$ A callback function is a function(it can be any function AnonymousFunction or arrow function) passed into another function as argument, which is then invoked inside the outer function to complete some kind of routine or action.
  
*/

// > Ex-1:
function show() {
    console.log(`I am show function:`);
}

function geeky(callback) {
    // here callback is a function in argument-->
    callback();
}
// Here we pass a function as parameter to geeky() function
geeky(show);

//> Ex-2:
function toShow(a) {
    console.log(`Value of a is: ${a}`);
}

function assign(callback) {
    callback(100);
}
assign(toShow);

// >Ex-3:
function hey(a, callback) {
    callback(a);
}
hey(100, function(a) {
    console.log(`Hey--${a}`);
});

//> Ex-4: MOST POPULARLY USED IN FRAMEWORKS-->
function hello(callback) {
    callback("Cnu");
}
hello(a => {
    console.log(`Hello ${a}`);
});

/* 
$ Two Types of callback function-->
  --1) Synchronous: It waits for each operation to complete,after that it executes the next operation.

  --2) Asynchronous: it never waits for each operation to complete, rather it executes all operation in the first Go Only.
*/

// Synchronous-->
function show1() {
    console.log("I am Show function");
}

function show2(callback) {
    callback();
}

show2(show1);
console.log(`End--`); // This command will wait until the upper function executes.

//  Asynchronous-->
setTimeout(function show3() {
    console.log("I will show after 5 sec");
}, 5000);
console.log(`End-->`); // this command will wait not wait for upper function to execute, because the upper function will execute after 5 sec hence this code will run in first go.