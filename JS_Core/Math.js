/* 
$ The JavaScript Math object allows you to perform mathematical tasks on numbers.
  The math object holds a set of constants and methods that enable more complex mathematical operation than the basic arithmetic operators. 
  > the Math object has no constructor.
  > We can not instantiate a Math Object. //! X var calci=new Math()
  > The Math Object is static so it's properties and methods accessed directly:
*/
// * Methods of Math Object-->
var x = Math.PI; // Returns PI
var y = Math.sqrt(16); // Returns the square root of 16
console.log(x);
console.log(y);

// ~ Math.round(x) returns the value of x rounded to its nearest integer:
console.log(Math.round(4.7)); // returns 5
console.log(Math.round(4.4)); // returns 4

// ~ Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8, 2)); // returns 64

// ~ Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64)); // returns 8\

// ~ Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); // returns 4.7

// ~ Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.4)); // returns 5

// ~ Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.7)); // return 4
console.log(Math.floor(-2.1)); // return -3 (here it is rounding it off up because in negative high means low)
console.log(Math.floor(-6.65)); // return -7

// ~Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// * Angle in radians = Angle in degrees x PI / 180.

console.log(Math.sin((90 * Math.PI) / 180)); // returns 1 (the sine of 90 degrees)

// ~ Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
console.log(Math.cos((0 * Math.PI) / 180)); // returns 1 (the cos of 0 degrees)

//~ Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // returns 150

// ~Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());

// if u want random number between 1 to 6  like in a dice game
console.log(Math.ceil(6 * Math.random()));

// $ Math  Object Properties(Constants):
console.log(Math.E); // returns Euler's number
console.log(Math.PI); // returns PI
console.log(Math.SQRT2); // returns the square root of 2
console.log(Math.SQRT1_2); // returns the square root of 1/2
console.log(Math.LN2); // returns the natural logarithm of 2
console.log(Math.LN10); // returns the natural logarithm of 10
console.log(Math.LOG2E); // returns base 2 logarithm of E
console.log(Math.LOG10E); // returns base 10 logarithm of E

/* 
Math Objet Methods--

> abs(x)	                Returns the absolute value of x
> acos(x)	                Returns the arccosine of x, in radians
> acosh(x)	            Returns the hyperbolic arccosine of x
> asin(x)	                Returns the arcsine of x, in radians
> asinh(x)	            Returns the hyperbolic arcsine of x
> atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
> atan2(y, x)	            Returns the arctangent of the quotient of its arguments
> atanh(x)	            Returns the hyperbolic arctangent of x
> cbrt(x)	                Returns the cubic root of x
> ceil(x)	                Returns x, rounded upwards to the nearest integer
> cos(x)	                Returns the cosine of x (x is in radians)
> cosh(x)	                Returns the hyperbolic cosine of x
> exp(x)	                Returns the value of Ex
> floor(x)	            Returns x, rounded downwards to the nearest integer
> log(x)	                Returns the natural logarithm (base E) of x
> max(x, y, z, ..., n)	Returns the number with the highest value
> min(x, y, z, ..., n)	Returns the number with the lowest value
> pow(x, y)	            Returns the value of x to the power of y
> random()	            Returns a random number between 0 and 1
> round(x)	            Rounds x to the nearest integer
> sin(x)	                Returns the sine of x (x is in radians)
> sinh(x)	                Returns the hyperbolic sine of x
> sqrt(x)	                Returns the square root of x
> tan(x)	                Returns the tangent of an angle
> tanh(x)	                Returns the hyperbolic tangent of a number
> trunc(x)	            Returns the integer part of a number (x)
 
 */