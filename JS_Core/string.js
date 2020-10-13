/* 
$ JS String is the built in object corresponding to the primitive string data type:
  String is a group of characters.
  string is zero or more characters written inside quotes.
  var x = "John Doe";
  > You can use single or double quotes:
    var carName1 = "Volvo XC60";  // Double quotes
    var carName2 = 'Volvo XC60';  // Single quotes
  > You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
    var answer1 = "It's alright";
    var answer2 = "He is called 'Johnny'";
    var answer3 = 'He is called "Johnny"';
    ! var answer3 = "He is called "Johnny"""; // invalid syntax
  > You can use backtick characters (``) to write strings
    var me=`cnu`;

  ~ Primitive:(String literal) {Good Practice}
    var str="Hello World"; 
    var str='Hello World';
    var str=`Hello World`;
    > typeof str--> String

  ~ Constructor:{Bad Practice}
    var str =new String("Hello World");
    var str =new String('Hello World');
    var str =new String(`Hello World`);
    > typeof str--> Object also slow execution time

*/
console.log(
    "-----------------------Displaying Strings-------------------------"
);
var str = "Hello World";
var str = "Hello World";
var str = `Hello World`;
//! console.log(Displaying String ); uncaught syntax error: missing ) after argument list
console.log("Displaying String:");
console.log(str);
console.log(typeof str);

var str = new String("Hello World");
var str = new String("Hello World");
var str = new String(`Hello World`);

console.log("Displaying String:(String Constructor)");
console.log(str);
console.log(typeof str);

// quotes inside quotes
console.log("'Hii,Hello world'");
console.log('"Hii,Hello world"');
// Matched quotes--> error
// ~ we cannot use Double Quotes inside Double Quotes and single quotes inside single quotes
// console.log(""
//     Never Quit "");
// ! error--> missing ) after argument  list

console.log("-----------------------Concat Strings-------------------------");

// Concat Strings-->
var greet = "Hello, Good";
var time = "Morning";

// Way One
console.log(greet + " " + time);
// or
console.log(greet + " Night");
// Way two-
console.log(greet, time);

var firstname = "Cnu";
var lastname = "Singhaniya";
var fullname = firstname + " " + lastname;
console.log(fullname);

// Way two-->
// $ concat() method
// > Syntax: string1.concat(string2,string..n)
var name = firstname.concat(" ", lastname);
console.log(name);

console.log("-----------------------Escape Notations-------------------------");
/* 
Because strings must be written within quotes, JavaScript will misunderstand this string:
    var x = "We are the so-called "Vikings" from the north.";
    > The string will be chopped to "We are the so-called ".
    > The solution to avoid this problem, is to use the backslash escape character.
    $ The backslash (\) escape character turns special characters into string characters:

    ~       \'	    '	    Single quote
    ~       \"   	"	    Double quote
    ~       \\   	\	    Backslash 
    ~       \b	            Backspace
    ~       \f          	Form Feed
    ~       \n             	New Line
    ~       \r          	Carriage Return
    ~       \t          	Horizontal Tabulator
    ~       \v          	Vertical Tabulator

 */
//  Double quotes inside double quotes-->
var x = 'We are the so-called "Vikings" from the north.';
console.log(x);

console.log(
    "-----------------------Strings Comparison-------------------------"
);

//$ When using the == operator, equal strings are equal:
var x = "John";
var y = new String("John");
console.log(x == y);
// (x == y) is true because x and y have equal values

// $ When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value.

var x = "John";
var y = new String("John");
console.log(x === y);
// (x === y) is false because x and y have different types (string and object)

// $ Objects cannot be compared:
var x = new String("John");
var y = new String("John");
console.log(x == y);
// (x == y) is false because x and y are different objects

var x = new String("John");
var y = new String("John");
console.log(x === y);
// (x === y) is false because x and y are different objects

console.log(
    "-----------------------Template Literals-------------------------"
);
/*
$ Template Literals:
  are string literal allowing embedded expressions.
  You can use: 
              > multi-line strings and
              > String interpolations features with them.
  ~ Template Literals are enclosed by the backtick(``) character instead of double quotes.
*/
//* Multiple line strings:
// > You cannot write multi-line strings with double quotes or single quotes
/*
    var str = "hello line 1
    world line 2 ";
    ! error: invalid or unexpected token:
to use this u can use-->
 */
//  > Backslash
var str = "hello 1\
world";
console.log(str);

//  > Backslash_n \n
console.log("Hello line1 \n Line 2 world"); // Displaying in multi line

// ~ But in Templates Literal as they are enclosed with backtick we can use multi-line strings-->
var mine = `Shraddha
you are
my world,
I love u so much..`;
console.log(mine);
// And mine will print as it is written with line breaks //? Advantage : No need to write /n:

// * String Interpolation:
// Template Literals can contain placeholders, These are indicated by dollar signs and curly braces.
// >(${expressions})

// You can pass variables in placeholders:
console.log(`${str} Good Morning`);
// You can pass expressions in placeholders:
console.log(`${140 + 3} Good Morning`);
// You can Call functions in placeholders:
let ownerName = function() {
    return "Cnu Singhaniya";
};
console.log(ownerName());
console.log(`Good Morning ${ownerName()}`);

let principal = 1000;
let noofyears = 1;
let rateofinterest = 7;

let SI = `Simple Interest is ${(principal * noofyears * rateofinterest) / 100}`;

console.log(`${SI}`);

console.log("-----------------------Tagged Template-------------------------");
/* 
$ Tagged Template:(ES6)
  Tagged Template  are the advanced version of template literal,
  Tags allow you to parse template literal with a function.
  > The First argument of a tag function contains an array of string values.
  > The remaining arguments are related to the expressions.
  > In the end, your function can return your manipulated string
  > Tagged Literal is written like a function definition, but the difference is when this literal is called. There is no parenthesis() to a literal call.
  > An array of Strings are passed as a parameter to a literal.
*/

/* 
Example to understand the tagged template:
> Situation 1 :There are 5 movie tickets each rs.200 and if you buy 5 tickets get discount rs.50 each
> Situation 2 :There are 5 movie tickets each rs.200 and if you buy less than 5 tickets get discount rs.0 each
 */
const noofticket = 5;
const disprice = 50;
var buyers = 5;
var eachprice = 200;

console.log(
    `There are ${noofticket} movie tickets each rs.${eachprice} and if you buy ${buyers} get discount of rs.${disprice} each`
);

// Tagged Literal:
function theatre(theory, ...rest) {
    return theory;
}
/*
instead of rest param u can also write each template literal expressions separately>

> function theatre(theory, ...nticket,eachprice,nbuyer,discount) {}
   But i think this is very annoying way-_-!
*/

console.log(
    // Calling tagged function without parenthesis
    theatre //tagged function
    ` There are ${noofticket} movie tickets each rs.${eachprice} and if you buy ${buyers} get discount of rs.${disprice} each`
);
// Now theatre function is call from this template literal-->
// ~ hence all the string values in this template literal will go in the theory parameter of the theatre function,
// ~ and all the expressions go in the rest parameter of the theatre function
// > The strings of the template literal will store in the from of array in tagged function parameter theory, as u can see in the console.
//* If i want to display a specific part of template literal i can access them using index of the theory array as because of tagged function literal all string values stored in theory[]

/* 
Conclusion
?  All this is to show you that how tagged template works So what we learn-->
   > tagged template is a function with parameter
   > tagged template function is call without parenthesis
   > we call this function just before the backtick of a template literal. So all the data of this template literal will go into the function as param.
   > All the string values of template literal divided into parts and get stored in first parameter of the tagged function parameter.
   > all the expressions of the template literal get stored in second parameter which is a rest parameter of the tagged function.
   > String values of  template literal stored in the form of array.
 */

//  Now we will create a tagged template with template literal for Situation 2--^
var buyers = 4;

function manipulateString(words, ...value) {
    if (value[2] < 5) {
        //if (buyers<5)
        value[3] = 0; // disprice=0;
        return `${words[0]} ${value[0]} ${words[1]} ${value[1]} ${words[2]} ${value[2]} ${words[3]} ${value[3]} ${words[4]}`;
    } else {
        return `${words[0]} ${value[0]} ${words[1]} ${value[1]} ${words[2]} ${value[2]} ${words[3]} ${value[3]} ${words[4]}`;
    }
}

console.log(
    manipulateString ` There are ${noofticket} movie tickets each rs.${eachprice} and if you buy ${buyers} get discount of rs.${disprice} each`
);