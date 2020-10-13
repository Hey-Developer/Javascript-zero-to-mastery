// Number methods help you work with numbers.
console.log(`-------------------------toString()-------------------------`);
/* 
$ toString() 
  The toString() method returns a number as a string.
  Also All number methods can be used on any type of numbers (literals, variables, or expressions):
*/

var a = 10;
console.log(`Typeof a:${typeof a} , Now converting it into a string`);
console.log(`Now Typeof a:${typeof a.toString()}`);

var myNumber = 32;
console.log(`My Number : ${myNumber}`);
console.log("Decimal-->" + myNumber.toString(10)); // returns 32
console.log("32 base-(Duotrigesimal)->" + myNumber.toString(32)); // returns 10
console.log("HexaDecimal-->" + myNumber.toString(16)); // returns 20
console.log("octal-->" + myNumber.toString(8)); // returns 40
console.log("Binary-->" + myNumber.toString(2)); // returns 100000

console.log(
    `-------------------------toExponential()-------------------------`
);
/* 
$ toExponential():
  toExponential() returns a string, with a number rounded and written using exponential notation.
  > A parameter defines the number of characters behind the decimal point:(how many numbers should be displayed after decimal point)
  ~ If it is omitted it will take as many digits as required.
*/
var x = 58974.9875643;
console.log(x.toExponential(2)); // returns 58974.98e+5
console.log(x.toExponential(4)); // returns 58974.9875e+3
console.log(x.toExponential()); // returns 58974.9875643e+4

console.log(`-------------------------toFixed()-------------------------`);
/* 
$ toFixed():
  toFixed() returns a string, with the number written with a specified number of decimals:
  also round up decimals.
  if the desired number of decimals are higher than the actual number, nulls are added to create the desired length
  > Syntax: a.toFixed(y):

  ~ Where y is the number of digits after the decimal point.Default is 0
  * toFixed(2) is perfect for working with money.
 */

var a = 19.65283;
console.log(`Type Of a- ${typeof a}`);
console.log(a.toFixed()); // 20--> round off
console.log(a.toFixed(2)); // 19.64
console.log(a.toFixed(4)); // 19.6528
console.log(a.toFixed(8)); // 9.65283000 (extra 3 0's as no. of digits after decimal in our number is less than the specified number Y so it will take null(0).
console.log(`Type Of a- ${typeof a.toFixed()}`);

console.log(`-------------------------toPrecision()-------------------------`);
/* 
$ toPrecision():
  The toPrecision() method formats a number to a specified length.
  A decimal point and nulls are added(if needed), to create the specified length.
  it returns a string...
  > Syntax var_name.toPrecision(y);
  ~ Where y is the number of digits. if omitted, it returns the entire number(Without any formatting)
*/
var x = 9.656;
console.log(`Type of a-${typeof x}`);
console.log(x.toPrecision()); // returns 9.656
console.log(x.toPrecision(2)); // returns 9.7
console.log(x.toPrecision(4)); // returns 9.656
console.log(x.toPrecision(6)); // returns 9.65600 ,fills up extra 0's
console.log(x.toPrecision(10)); // returns 9.65600
console.log(`Type of a-${typeof x.toPrecision()}`);

console.log(
    `-------------------------Number.isInteger()-------------------------`
);
/* 
$ Number.isInteger():
  This method determines whether a value is integer or not.
  The method returns true if the values is of type Number and Integer,
  Otherwise return false
  range of integer--> -Infinity to + infinity
 */

console.log(`No parameter: ${Number.isInteger()}`);
console.log(`Number-->100 is Integer: ${Number.isInteger(100)}`);
console.log(`Number--> -100 is Integer: ${Number.isInteger(-100)}`);
console.log(`Number--> 100.56 is Integer: ${Number.isInteger(100.56)}`);
console.log(`Number--> 200-100 is Integer: ${Number.isInteger(200 - 100)}`);
console.log(`Number--> 0.1 is Integer: ${Number.isInteger(0.1)}`);
console.log(`Number--> "100" is Integer: ${Number.isInteger("100")}`);
console.log(`Number--> "Hello" is Integer: ${Number.isInteger("Hello")}`);

console.log(`Hey user! please enter your age to continue-->`);
var user_age = 17.1;
console.log(`U entered=${user_age}`);
if (Number.isInteger(user_age)) {
    if (user_age < 18) {
        console.log(`Sorry User u r not eligible:(`);
    } else {
        console.log(`Welcome User :)`);
    }
} else {
    console.log(
        `Invalid Input please enter the age in correct format decimal values are not allowed`
    );
}

console.log(
    `-------------------------Number.isSafeInteger()-------------------------`
);
/* 
$ Number.isSafeInteger()
  This method determines whether a values is a safe integer.
  A safe integer is an integer that can be exactly all the integers from(2^53-1) to -(2^53-1)
  This method returns true if the value is a Number and a safe integer otherwise false
 */
console.log(`Number-->100 is Safe Integer: ${Number.isSafeInteger()}`);
console.log(`Number-->100 is Safe Integer: ${Number.isSafeInteger(100)}`);
console.log(`Number--> -100 is Safe Integer: ${Number.isSafeInteger(-100)}`);
console.log(
    `Number--> 100.56 is Safe Integer: ${Number.isSafeInteger(100.56)}`
);
console.log(
    `Number--> 200-100 is Safe Integer: ${Number.isSafeInteger(200 - 100)}`
);
console.log(`Number--> 0.1 is Safe Integer: ${Number.isSafeInteger(0.1)}`);
console.log(`Number--> "100" is Safe Integer: ${Number.isSafeInteger("100")}`);
console.log(
    `Number--> "Hello" is Safe Integer: ${Number.isSafeInteger("Hello")}`
);
console.log(
    `Number--> 67676764357531785327537804513549632 is Safe Integer: ${Number.isSafeInteger(
    3478873058353858535357838358
  )}`
);

console.log(`-------------------------valueOf()-------------------------`);

//$ valueOf() returns a number as a number.
var x = 123;
console.log(x.valueOf()); // returns 123 from variable x
console.log((123).valueOf()); // returns 123 from literal 123
console.log((100 + 23).valueOf()); // returns 123 from expression 100 + 23

/* 
> In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

> The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

~ There is no reason to use it in your code.

* `All JavaScript data types have a valueOf() and a toString() method.
 */

/* 
! Converting Variables to Numbers-->

$ Global JavaScript Methods
  > JavaScript global methods can be used on all JavaScript data types.
  > These are the most relevant methods, when working with numbers:
  ~ Number()	    Returns a number, converted from its argument.
  ~ parseFloat()	Parses its argument and returns a floating point number
  ~ parseInt()  	Parses its argument and returns an integer
*/

console.log(`-------------------------Number()-------------------------`);
/* 
$ Number():
  Number() function converts the object argument to a number that represent object value
  can be used to convert JavaScript variables to numbers:
  > if Number is cannot be covert to legal number it will return NaN.
  > If the parameter is date object, it will returns the number of Milliseconds, since midnight Jan 1, 1970 UTC
*/
var a = true;
var b = false;
var c = "10";
var d = "     10";
var e = "10     ";
var f = "  10   ";
var g = "10.33";
var h = "10,22";
var i = "John";
var j = new Date("2020-04-27");

console.log(
    `Value of a is: ${a} typeof a is: ${typeof a} converting it to Number-->${Number(
    a
  )}`
);

console.log(
    `Value of b is: ${b} typeof b is: ${typeof b} converting it to Number-->${Number(
    b
  )}`
);

console.log(
    `Value of c is: "${c}" typeof a is: ${typeof c} converting it to Number-->${Number(
    c
  )}`
);

console.log(
    `Value of d is: "${d}" typeof a is: ${typeof d} converting it to Number-->${Number(
    d
  )}`
);

console.log(
    `Value of e is: "${e}" typeof a is: ${typeof e} converting it to Number-->${Number(
    e
  )}`
);

console.log(
    `Value of f is: "${f}" typeof a is: ${typeof f} converting it to Number-->${Number(
    f
  )}`
);

console.log(
    `Value of g is: "${g}" typeof a is: ${typeof g} converting it to Number-->${Number(
    g
  )}`
);

console.log(
    `Value of h is: "${h}" typeof a is: ${typeof h} converting it to Number-->${Number(
    h
  )}`
);

console.log(
    `Value of i is: "${i}" typeof a is: ${typeof i} converting it to Number-->${Number(
    i
  )}`
);

console.log(
    `Value of j is: "${j}" typeof a is: ${typeof j} converting it to Number-->${Number(
    j
  )}`
);

console.log(`-------------------------parseInt()-------------------------`);
/* 
$ parseInt():
  parseInt() parses a string and returns a whole number. 
  Spaces are allowed. Only the first number is returned:
  If the number cannot be converted, NaN (Not a Number) is returned.
  > Syntax: parseInt(string,radix)
  ~ The radix parameter is used to specify which numeral system to be used, for example
    radix of 16(hexadecimal) indicates that the number is in the string should be parsed from a hexadecimal number to a decimal number.
    > If the radix parameter is not specified:JS assumes the following:
      ~ If the string begin with "0x" the radix is 16(hexadecimal)
      ~ if the string begin with any other value, the radix is 10(decimal)

*/

console.log(
    ` Value in string: "10"| converting to number--> ${parseInt("10")}`
);
console.log(
    ` Value in string: "10.33"| converting to number--> ${parseInt("10.33")}`
);
console.log(
    ` Value in string: "   90   "| converting to number--> ${parseInt("  90  ")}`
);
console.log(
    ` Value in string: "10 20 30"| converting to number--> ${parseInt(
    "10 20 30"
  )}`
);
console.log(
    ` Value in string: "10 years"| converting to number--> ${parseInt(
    "10 years"
  )}`
);
console.log(
    ` Value in string: "years 10"| converting to number--> ${parseInt(
    "years 10"
  )}`
);
console.log(
    ` Value in string: "020"| converting to number--> ${parseInt("020")}`
);
console.log(
    ` Value in string: "0xff"| converting to number--> ${parseInt("0xff")}`
);
console.log(
    ` Value in string: "12"| radix-8 converting to number--> ${parseInt("12", 8)}`
);
console.log(
    ` Value in string: "12"| radix-16 converting to number--> ${parseInt(
    "10",
    16
  )}`
);

console.log(`-------------------------parseFloat()-------------------------`);
/* 
$ parseFloat():
  parseFloat() parses a string and returns a number. 
  Spaces are allowed. Only the first number is returned:
  Can convert a decimal string into decimal number.
  ! it work differently with radix parameter?

*/
// parseFloat() also convert a string into a number but the only difference is this it also convert float values
console.log(
    ` Value in string: "10"| converting to number--> ${parseFloat("10")}`
);
console.log(
    ` Value in string: "10.33"| converting to number--> ${parseFloat("10.33")}`
);
console.log(
    ` Value in string: "   90   "| converting to number--> ${parseFloat(
    "  90  "
  )}`
);
console.log(
    ` Value in string: "10 20 30"| converting to number--> ${parseFloat(
    "10 20 30"
  )}`
);
console.log(
    ` Value in string: "10 years"| converting to number--> ${parseFloat(
    "10 years"
  )}`
);
console.log(
    ` Value in string: "years 10"| converting to number--> ${parseFloat(
    "years 10"
  )}`
);
console.log(
    ` Value in string: "020"| converting to number--> ${parseFloat("020")}`
);
console.log(
    ` Value in string: "0xff"| converting to number--> ${parseFloat("0xff")}`
);
console.log(
    ` Value in string: "12"| radix-8 converting to number--> ${parseFloat(
    "12",
    8
  )}`
);
console.log(
    ` Value in string: "12"| radix-16 converting to number--> ${parseFloat(
    "10",
    16
  )}`
);

/* 
$ Number Object Properties:(not gloabl only availbale for Number())
  >  MAX_VALUE	        Returns the largest number possible in JavaScript
  >  MIN_VALUE	        Returns the smallest number possible in JavaScript
  >  POSITIVE_INFINITY	Represents infinity (returned on overflow)
  >  NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
  >  NaN	            Represents a "Not-a-Number" value
*/

// ~ MAX_VALUE returns the largest possible number in JavaScript.
var x = Number.MAX_VALUE;
console.log(x);

// ~ MIN_VALUE returns the lowest possible number in JavaScript.
var x = Number.MIN_VALUE;
console.log(x);

// ~ POSITIVE_INFINITY is returned on overflow:
var x = Number.POSITIVE_INFINITY;
console.log(x);
// Also
var x = 1 / 0;
console.log(x);

// ~ NEGATIVE_INFINITY is returned on overflow:
var x = Number.NEGATIVE_INFINITY;
console.log(x);
// also
var x = -1 / 0;
console.log(x);

// ~ NaN is a JavaScript reserved word indicating that a number is not a legal number.
var x = Number.NaN;
console.log(x);
// Also
var x = 100 / "Apple"; // x will be NaN (Not a Number)
console.log(x);

/* 
* Number properties belongs to the JavaScript's number object wrapper called Number.
  > These properties can only be accessed as Number.MAX_VALUE.
  > Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:
 */
var x = 6;
var y = x.MAX_VALUE; // y becomes undefined
console.log(y);