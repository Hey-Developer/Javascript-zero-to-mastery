/* 
? Problem with var is that its scope is not only limited to block level its scope is accessible through the functon.
* so from ES6 new keywords are introdued let and const 
* these two varibale create block level scope 
example--
*/
function start() {
    var cnu = "cnu";
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}
console.log(cnu); //! undefined

start();

/* now here the output will be
    0
    1
    2
    3
    4
    5(this prints outside the loop)
    here we use var as a result it is fucntion scoped elemnt thereforce
    it can be accessible in the whole function 
    but we need a variable who's scope is limited to the block i.e
    here the block is for loop so we want that there should be a variable i which cannont 
    be accessed outside the for loop; 
    
 */

//  todo -solution is let keyword-->
/*
 * here if we use the i variable outside the for loop
 * it will show error because we use let and let is block:scoped variable.
 * it is not accessible outside the block in which its used.
 */
function start1() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log(i);
}

start1();
/* 
output:
    0
    1
    2
    3
    4
    !error:ReferenceError: i is not define
 */

/* 
? problem2: when u create global variable using var 
  the varible will get attached to the window object of the documnet
  which result in complexities i.e
  when u will use 3rd party liabraries or frameworks there will be a complexion if ur variable name matches
  with the variable name of the liabraries and frameworks
  on the other side 
  let variables do nto get attach to the window object hence they are
  seprated from all the complexities.
 */

var color =
    "red"; /* if u go to the console and type window.color u will see output red */
let color1 =
    "blue"; /* but here if u write window.color1 u will see undefined output because let variables do not get attached to the window object */