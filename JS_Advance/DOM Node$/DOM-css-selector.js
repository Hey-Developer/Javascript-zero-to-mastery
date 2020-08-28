// -- Element selector:
var p = document.querySelectorAll("p"); // return a Nodelist

//> All p in our DOC.
console.log(p);
//> No of p.
console.log(p.length);
//> Access by index
console.log(p[0]);
console.log(p.item(0));

// -- GroupSelector:
var divAndP = document.querySelectorAll("div", "p"); // return a NodeList containing all div and p elements of our doc.
console.log(divAndP);

// -- UniversalSelector:
var all = document.querySelectorAll("*"); // return a NodeList containing all elements of our doc.
console.log(all);

// -- Class selector or Style class:

// > Universal Style class:
var allWithClassGame = document.querySelectorAll(".game"); // return a NodeList containing all elements of our doc. whose class name is game.
console.log(allWithClassGame);

// > Element Specific Style class:
var pWithClassRed = document.querySelectorAll("p.red");
console.log(pWithClassRed);

// Those p element which have 2 classes red and black:
var pWithClassRedAndBlack = document.querySelectorAll("p.red.black");
console.log(pWithClassRedAndBlack);

// -- ID selector:
var idBook = document.querySelectorAll("#book");
console.log(idBook);

// > More Specific-->
var pWithIdBook = document.querySelectorAll("p#book");

// -- Attribute Selector:
// I want to access those p which have attribute - title.
var pWithTitle = document.querySelectorAll("p[title]");
console.log(pWithTitle);

// > More specific > attribute with value
var imgWithSpecificWidthAndHeight = document.querySelectorAll(
    "img[width='30%'][height='20%']"
);
console.log(imgWithSpecificWidthAndHeight);

// > More Specific > with an attribute value containing a specified word.
// selects all elements with a class attribute that contains a space-separated list of words, one of which is "game":
var attrClassValueGame = document.querySelectorAll("[class~='game']");
console.log(attrClassValueGame);

// > more Specific >select elements with the specified attribute starting with the specified value.
// selects all elements with a class attribute value that begins with "super":
var attrClassWithStartSuper = document.querySelectorAll("[class|='super']");
console.log(attrClassWithStartSuper);
// !Note: The value has to be a whole word, either alone, like class="super", or followed by a hyphen( - ), like class="super-game"!

// > more Specific > to select elements whose attribute value begins with a specified value.
// selects all elements with a class attribute value that begins with "game":
var attrClassBeginWithGame = document.querySelectorAll("[class^='game']");
console.log(attrClassBeginWithGame);
// !Note: The value does not have to be a whole word!

// > more Specific > to select elements whose attribute value ends with a specified value.
// The following example selects all elements with a class attribute value that ends with "super":
var attrClassWithEndSuper = document.querySelectorAll("[class$='super']");
console.log(attrClassWithEndSuper);

// > more specific >to select elements whose attribute value contains a specified value.
// selects all elements with a class attribute value that contains "ga":
var attrClassWithga = document.querySelectorAll("[class*='ga']");
console.log(attrClassWithga);

// --  Pseudo Class:
// > :first-child:
var allFirstChild = document.querySelectorAll(":first-child");
var firstLi = document.querySelectorAll("li:first-child"); // it will show first child of all the LI. in the doc.
console.log(allFirstChild);
console.log(firstLi);