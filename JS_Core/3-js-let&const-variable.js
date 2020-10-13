// Hey! so now we will be see let variable-
//?  let keyword is introduces in ES6 (ES2015):
let firstName = "John";
let lastName = "Doe";
console.log(firstName + "-" + lastName);

// or
let fullName = firstName + "**" + lastName;
console.log(fullName);

// one major diffrence between let and var is--
/*
in var--this is oK
var firstName='cnu';
var fristName='cloves';

! but in let-->
let name = "cnu";
let name = "cloves";d
this will produce error,
! SyntaxError: redeclaration of let name
hence the conclusion is you cannot redeclare let variable.
? but yes you can reassign them like-
    let name='cloves';
    name='cnu';
no problem with this code.
*/

// ?now lets see const variable this is also introduces inES6
/*
 *const means constant variables that is they an only be assign once
 *you can't change their value in future
 *you can't redeclare them
 *you can't reassign them
 */

const bankAccNumber = 90135825287530;
const panNumber = "ADYY76852D";
const userId = "A117689";

/* just trying this 
? console.log(bankAccNumber + "<br>" + panNumber + "<br>" + userId + "<br>");
and the output is <br> tag will print as it is.
 */

console.log(bankAccNumber + "-" + panNumber + "-" + userId + "-");

/* 
 now if I do something like this-i.e i try to change the value of a constant variable
 *   bankAccNumber = "i changes your account number";
 *  console.log(bankAccNumber);
    ! error:invalid assignment to const `bankAccNumber'

    & what if reclare it-
   * const bankAccNumber='hey i just redeclare it';
   ! error:re declaration of const bankAccNumber
 */