// Type conversion
console.log("Welcome to tut5");

//-- Number to string-->
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);

// --Boolean to string-->
let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

// -- Date to string-->
let date = String(new Date());
console.log(date, typeof date);

// -- Array to string-->
let arr = String([1, 2, 3, 4, 5]);
console.log(arr.length, typeof arr);
// In array length means number of elements,
// In String length means number of characters.

// --toString() Methods
let i = 75;
console.log(i.toString());

// --NumberString to Number-->
let stri = Number("3434");

// --AlphaNumericString to Number-->
stri = Number("343d4"); //NAN

// --Boolean to Number-->
stri = Number(false);

// --Array to Number-->
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(stri, typeof stri); //NAN

// * Whenever any type is not able to converted into number it returns NAN.

// --Methods to Convert-->
let number = parseInt("34.098"); // 34
let number = parseFloat("34.098"); // 34.098

// --toFixed(n) displays the number upto n decimal places.
console.log(number.toFixed(2), typeof number);

// Type coercion
let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum); // 732 here string concat did not take place bcoz we already convert string into number.