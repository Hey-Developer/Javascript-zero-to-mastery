/* 
$ Numbers-->
  number type in JS includes both integer and floating point values.
  JS numbers are always stored as double precision floating point numbers,following the international IEEE 754 Standard.
  > This format stores numbers in 64 bits, 
  > where the number (the fraction) is stored in bits 0 to 51, 
  > the exponent in bits 52 to 62, and the sign in bit 63:
 */

//> Primitive Number
var x = 3.14; // A number with decimals
var y = 3; // A number without decimals
console.log(`${x} and ${y}`);
//~ Extra large or extra small numbers can be written with scientific (exponent) notation:
var x = 123e5; // 12300000
var y = 123e-5; // 0.00123
console.log(`${x} and ${y}`);
console.log(`type of: x is ${typeof x}, and type of: y is${typeof y}`);

//> Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000
console.log(`${x} and ${y}`);

//> The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1; // x will be 0.30000000000000004
console.log(`0.2+0.1=${x}`);

//> To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
console.log(`(0.2 * 10 + 0.1 * 10) / 10=${x}`);

// Object OF number: Number Constructor //! Bad practice use number literal always
var a = new Number(10);
var b = new Number(3.14);
var c = new Number(5e4);
var d = new Number(243e-5);

console.log(`a=${a}`);
console.log(`b=${b}`);
console.log(`c=${c}`);
console.log(`d=${d}`);
console.log(`Type of a,b,c,d is: ${typeof a}`);

// If you write numbers inside the string then  it will be a string not a number:
var x = 10;
var y = "10";
console.log(`x =${x}`);
console.log(`Type of x is ${typeof x}`);
console.log(`y = "${y}"`);
console.log(`Type of y is ${typeof y}`);

//> JavaScript uses the + operator for both addition and concatenation.
//~ Numbers are added. Strings are concatenated.

var x = "10";
var y = "20";
var z = x + y; // z will be 1020 (a string)

console.log(
    `x="${x}" ,typeof x is ${typeof x} and y="${y}", typeof y is ${typeof y} but x+y=${z}`
);

//~ If you add a string and a number, the result will be a string concatenation:

var x = "10";
var y = 20;
var z = x + y; // z will be 1020 (a string) // 10+20 ,10 is a string so that code written after it will become a string
console.log(
    `x="${x}" but typeof x is ${typeof x} and y=${y} so result is ${z}`
);

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z; // x and y are numbers hence they are add and z is string hence it concat

console.log(
    `x=${x} and y=${y} and z="${z}" but type of z is ${typeof z} so result is ${z}`
);

/* 
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.
 */

var x = "10";
var y = 20;
var z = 30;
var result = x + y + z; // x and y are numbers hence they are add and z is string hence it concat

console.log(
    `x="${x}", typeof x is ${typeof x} and y=${y} and z=${z}   so result is ${z}`
);

console.log(
    `-------------------------Numeric Strings-------------------------`
);
// $ Numeric strings-->
// Numbers stored in string automatically converted into string when any mathematical operation performs on them
// *JavaScript will try to convert strings to numbers in all numeric operations:

var a = "50";
var b = 10;
var c = 20;
var d = "30";

console.log("Result:" + b + c); // Expecting result:30 wrong //> result:1020
console.log(b + c + "-result"); // Expecting 30-result //> right

console.log(`a="${a}"
b=${b}
c=${c}
d=${d}`);

console.log(`a+b , a is string so it will concat--> ${a + b}`);

console.log(`b+c , both are numbers so it will add--> ${b + c}`);

console.log(`b-c , both are numbers so they will subtract--> ${b - c}`);

console.log(
    `a-b , a is string but we didn't use + operator
     hence it will not concat instead string will convert into number
     and subtraction take place--> ${a - b}`
);

console.log(`a + d , both are strings so it will concat--> ${a + d}`);

console.log(`a - d , both are Strings but we didn't use + so it will not concat
            convert into string and subtraction take place--> ${a - d}`);

console.log(`a-d-b-c= ${a - d - b - c}`);

var x = "100";
var y = "10";
var z = x / y; // z will be 10
console.log(z);

var x = "100";
var y = "10";
var z = x * y; // z will be 1000
console.log(z);

var x = "100";
var y = "10";
var z = x - y; // z will be 90
console.log(z);

// But this will not work:
var x = "100";
var y = "10";
var z = x + y; // z will not be 110 (It will be 10010)
console.log(z);

/* 
* Conclusion-->
  > Number + Number = Number
  > String + String= String
  > Number + String = string
  > string + number = string

  ~ Number - Number = Number
  ~ String(number) - String(number) = number
  ~ Number -string(number) =number
  ~ String(number) -Number=number
  ~ Number -string(word/char)=NaN
  ~ String(word/char) - Number= NaN
 */

console.log(`-------------------------NaN-------------------------`);
/* 
 $ NaN-"Not a Number":
   NaN is a JavaScript reserved word indicating that a number is not a legal number.
   > Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
   > Nan never compare equal to anything,even itself.
   > NaN property is similar to Number.NaN which is defined in prototype
  */

// Number/String=NaN(Illegal num.)
var x = 100 / "Apple"; // x will be NaN (Not a Number)
console.log(`100 / 'apple' = ${x}`);

// You can use the global JavaScript function isNaN() to find out if a value is a number:
var str = "Hello";
console.log(`${isNaN(str)}`); //str==NaN-->true but we saw that Nan cannot be compare to any value even not itself.

// So lets see-->
if ("Hello" == NaN) {
    console.log(`Equal`);
} else {
    console.log(`Not equal`);
}

// Here it will return not equal-->also //* NaN==NaN-->false
/* 
$ isNaN() is used to determine whether a value is an illegal number if not return true if Yes return false.
  the isNaN() method is global that is available for everyone

~ Number.NaN() is number specific method for testing Not A Number
> The global is NaN() method, converts the tested value to a number, then test it.
*/

var a = "50";
var b = 10;
var c = 20;
var d = `cnu`;
console.log(isNaN(a)); // false cause it converts "50" to 50 then check it is a legal number or not. So 50 is not NaN hence returns false
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
// true cause it try to coverts "cnu" into number but this is a word string not a numeric string hence return NaN and then isNaN() method check NaN is a illegal number.

// ~ Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
var x = NaN;
var y = 5;
var z = x + y; // z will be NaN
console.log(z);

// Or the result might be a concatenation:
var x = NaN;
var y = "5";
var z = x + y; // z will be NaN5
console.log(z);

// NaN is a number: typeof NaN returns number:
console.log(`Type Of NaN-->${typeof NaN}`);

console.log(`-------------------------Infinity-------------------------`);
/* 
$  Infinity & Negative Infinity:
   Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

 */

//> Division by 0 (zero)  generates Infinity:
var x = 2 / 0; // x will be Infinity
var y = -2 / 0; // y will be -Infinity
console.log(x);
console.log(y);

// Also
var myNumber = 2;
while (myNumber != Infinity) {
    // Execute until Infinity
    myNumber = myNumber * myNumber;
}
console.log(myNumber);

// >Infinity is a number: typeof Infinity returns number.
console.log(`Type of infinity-->${typeof Infinity}`);

/* 
* JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
  var x = 0xFF;   (it stores a hexadecimal no but when we print it convert to 10base Decimal number then display)     // x will be 255

* Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
 var x=056; (In decimal-->46)

* By default, JavaScript displays numbers as base 10 decimals.
  ~ But you can use the toString() method to output numbers from base 2 to base 36.
  ~ Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
    var myNumber = 32;
    myNumber.toString(10);  // returns 32
    myNumber.toString(32);  // returns 10
    myNumber.toString(16);  // returns 20
    myNumber.toString(8);   // returns 40
    myNumber.toString(2);   // returns 100000
*/