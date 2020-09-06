/*
? Arithmetic opeartors-
 *   +
 *   -
 *   *
 *   /
 *   %
 *   ++
 *   --
 *   **(Exponential) ECMA2015
 */
console.warn("Arithmetic Operators");

var x = 26;
var y = 0456; /* OCTAL NUMBER */
// console.log(y);
// console.log(x++);

// console.log(++x);
// console.log(x++ + ++x + x++ + x++);
y = --x + ++x - x-- - --x + x++;
console.log(y);
console.log(x);

x = 2;
y = 3;
console.log(x ** y); //cube of x

/* 
? Assignment Operator
*  =
*  +=
*  -=
*  *=
*  /=
*  %=
*  **=
 */
console.warn("Assignment Operators");

x = 10;
y = 10;
y += x++ - x++ - ++x; // this means that y = y + x++ - x++ - ++x
console.log(x); //13
console.log(y); //-4
y += -x;
console.log(y); //-17

//? let's swap the values of two numbers
var a = 10;
var b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

/* 
 ? Relational operators (Returntype=boolean)
  *  <
  *  >
  *  <=
  *  >=
  *  ==
  *  !=
  *  ?(ternary operator)
     variableName=(condition) ? value1:value2
     value1 is assigned when condition is true
     and value2 is assigned when condition is false
  *  ===(Equal value and same type)
  *  !==(Not equal value or not same type)
  */
console.warn("Comparison Operators");

var c = 10;
var d = "10";
var e = 10;
var f = "ten";
console.log(c === d); //value equal but type is not equal-->false
console.log(c === e); // value equal and type are also equal-->true
console.log(d === f); // value are not equal but types are equal-->false
console.log(e === f); //values are not equal and types are also not equal-->false

console.log(e !== f); //value is not equal OR type is also not equal-->true
console.log(c !== d); //value is equal OR type is not equal-->true
console.log(d !== f); //value is not equal OR type is equal-->true
console.log(c !== e); //value is  equal OR type is also equal-->false

age = 17;
var voteable = age < 18 ? "too Young" : "Old Enough";
console.log(voteable);

// todo Comparison between different DataTypes:
/* 
!Note:
*When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
*An empty string converts to 0. 
*A non-numeric string converts to NaN which is always false.
 */
console.log(2 < 12); //false
console.log(2 < "12"); //false
console.log(2 < "John"); //false
console.log(2 > "John"); //false
console.log(2 == "John"); //false

//* When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

console.log("2" < "12"); //false
console.log("2" > "12"); //true
console.log("2" == "12"); //false
console.log("2" == "2"); //false

/* 
 ? Logical Operators->
*   &&(logical and)
    true && true -->true
    true && false --> flase
    false && true--> false
    false && false--> false

*   ||(logical or)
    true || true-->true
    true || false-->true
    false || true-->true
    false || false-->false
*   !(logical not)
    !true-->false
    !false-->true
 */
console.warn("LOGICAL Operators");
var x1 = 10;
var x2 = 13;
var y1 = x1 > x2; //False
var y2 = x1 < x2; //true
console.log(y1 && y2); //false
console.log(y1 || y2); //true
console.log(!y1); //true
console.log(!y2); //false
console.log(!y1 && y2); //true

/* 
?   Bitwise Operators-->
*    << left shift operator 
*    >> right shift operator
*    >>> Zero fill right shift
*    ~ bitwise inversion (One's complement)
*    & bitwise logical AND
*    | bitwise logical OR
*    ^ Bitwise exclusive XOR
 */

/* 
 ?      javascript type operator
 *      typeof --> returns the type 0f variable
 *      instanceof --> return true if an object is an instance of an object type
*/