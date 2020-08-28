/* 
$ Boolean:
  A JavaScript Boolean represents one of two values: true or false.
> Primitives values:
  var primitiveTrue=true;
  var primitiveFalse=false;

> Boolean functions:
  var functionTrue= Boolean(true);
  var functionFalse= Boolean(false);
  
> Boolean constructor:
  var constructorTrue= new Boolean(true);
  var constructorFalse= new Boolean(false);
  * Do not create Boolean objects. It slows down execution speed.
  * The new keyword complicates the code. This can produce some unexpected results:
 */

// ~ In JS all comparison operator gives boolean value in return i.e either false or true:
// * Everything with a value is true:
var myname = "Cnu";
var myage = 19;
console.log("My Name: " + myname + Boolean(myname));
console.log("My age: " + myage + Boolean(myage));

// * Everything Without a "Value" is False
// if the value parameter is omitted or is 0,-0,null,false,NaN,unedefined,or the empty string(""),the object has an initial value of false:
var a;
var b = 0;
var c = -0;
var d = null;
var e = undefined;
var f = NaN;
var g = false;
var h = "";

console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));
console.log(Boolean(f));
console.log(Boolean(g));
console.log(Boolean(h));

// ~When using the == operator, equal booleans are equal:
var x = false;
var y = false;

// false==false : true
console.log("false==false-->" + (x == y));

var y = true;
console.log("false==true-->" + (x == y));

var x = true;
console.log("true==true-->" + (x == y));

// When using the === operator, equal booleans are not equal, because the === operator expects equality in both type and value.

var x = false; // type booleans
var y = new Boolean(false); // type objects

console.log(x === y); // (x === y) is false because x and y have different types

// !Objects cannot be compared:

var x = new Boolean(false);
var y = new Boolean(false);

console.log(x === y); // (x == y) is false because objects cannot be compared
console.log(x == y); // (x == y) is false because objects cannot be compared