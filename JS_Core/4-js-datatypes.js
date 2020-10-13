/* there are many variables in JS 
    String
    Number
    Boolean
    Array
    Object
    Null
    Undefined-->An empty value has nothing to do with undefined.
    RegularExpression
*/
//!  Undefined is never equal to zero -
var x = "CNU";
console.log(x);
console.log(typeof x);

var x1 = 2609;
console.log(x1);
console.log(typeof x1);

var x2 = -26.09;
console.log(x2);
console.log(typeof x2);

var x3 = true;
console.log(x3);
console.log(typeof x3);

var x4 = ["html", "css", "jS"];
console.log(x4[0]);
console.log(typeof x4);

var x5 = {
    name: "cloves",
    country: "india",
};
console.log(x5);
console.log(typeof x5);

// ?Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 123e5; // 12300000
var z = 123e-5; // 0.00123

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
car = undefined; // Value is undefined, type is undefined
console.log(car);
console.log(typeof car);

/* Empty Values-->
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.
 */
var car = ""; // The value is "", the typeof is "string"
console.log(car);
console.log(typeof car);

/* 
 Null
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object.
  */

// ?You can empty an object by setting it to null:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person);
person = null; // Now value is null, but type is still an object
console.log(person);

//?You can also empty an object by setting it to undefined:
var person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person1);
person1 = undefined; // Now both value and type is undefined
console.log(person1);

// !undefined and null are equal in value but different in type:
var ud = undefined;
var nl = null;
console.log(typeof ud); // undefined
console.log(typeof nl); // object

console.log(nl === ud); //false
console.log(nl == ud); //true