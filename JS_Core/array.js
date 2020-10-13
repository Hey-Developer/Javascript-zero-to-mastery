/* 
$ JavaScript Arrays: it is collection of data items stored under a single name,
  Array provide a mechanism for declaring and accessing several data items with only one identifier,
  thereby simplifying the task of at management.
  
~ JavaScript arrays are used to store multiple values in a single variable.

If you have a list of items (a list of car names, for example), storing the cars in single variables
 could look like this:
 var car1 = "Saab";
 var car2 = "Volvo";
 var car3 = "BMW";

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
? The solution is an array!
   > An array can hold many values under a single name, and you can access the values by referring to an index number.
   > an Array is a special type object u can see it datatype by typeof operator

There are 3 ways to construct array in JavaScript
 ~ By array literal
 ~ By creating instance of Array directly (using new keyword)
 ~ By using an Array constructor (using new keyword)
 */

//$  Create array using Array literal--> var array_name = [item1, item2, ...];
/* 
> Array Declaration:
    let car=[]; // let car =[,,,,];(values are undefined) 

> Array Initialization:
    car[0]="volvo";
    car[1]="benz";
    car[2]="mustang";
    car[3]="audi";
> By default, array starts with index 0
 */
let car = ["volvo", "mustang", "benz", "audi"];
console.log(typeof car); //object

// Access all at once
console.log(car);

// Accessing by index:
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);

// Also we can assign combination of data types-->
let person = ["Name:cnu", 0926, false, 18000.1];
console.log(person);
// Want to access last value of array-->
console.log(person[person.length - 1]);

// Fokat way
let geek = [, , 56, , 89];
console.log(geek);
console.log(geek[0]); // undefined
console.log(geek[1]); // undefined
console.log(geek[2]); // 56
console.log(geek[3]); // undefined
console.log(geek[4]); // undefined
console.log(geek[5]); // 89

// $ Create array using array constructor--> var array_name=new Array()
var emp = new Array("Jai", "Vijay", "Smith");
console.log(emp);

// $ JavaScript Array directly (new keyword)-->
var engineers = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";
console.log(engineers);

// the above two way are equivalent JavaTpoint pe bas alag alag he
// var geek =new Array(5);
// ~ this will create an empty array with length 5 here 5 is not a value: Demerit of creating array using new
/* 
! Important points 
  * Using an invalid index number returns undefined
  * geek[2]==geek['2']
  * Array cannot use string as element indexes u must use numbers
  * there is no associative array in JS
    geek["fees"]=200
    If you use named indexes, JavaScript will redefine the array to a standard object.
    After that, some array methods and properties will produce incorrect results.
  * Good practice is to create array using array literals.
  * Avoid new Array()
 */

var myfriends = [];
myfriends[0] = "rahul";
myfriends[1] = "ram";
myfriends[2] = "jay";
myfriends[20] = "cnu";

console.log(myfriends);
//!Adding elements with high indexes can create undefined "holes" in an array:

//$ Modifying Element of array:
var grades = ["A", "B", "C", "D"];
console.log(grades);
// lets change-->
grades[0] = 100;
grades[1] = 90;
grades[2] = 80;
grades[3] = 70;
// Now u can see the updated value:
console.log(grades);

// $ Array is of reference type: meaning that when we copy one array to another variable it is copied by reference not by value

var buyers = ["cnu", "ram", "shyam", "sita"];
console.log(buyers);

// Now copying this array to another variable
var sellers = buyers;

/* 
#Behind the scenes
    ____________
    |          |
    | buyers   |------------> ["cnu", "ram", "shyam", "sita"]
    |__________|                ^
                                |
    ____________                |
    |          |                |
    | seller   |----------------^
    |__________| 

Both buyer and seller points out the same value hence there reference are copied not values
if u change in seller it will reflect in buyer
 */

sellers[0] = "cloves";
console.log(buyers);
console.log(sellers);

// $ Removing Array Elements--> we can remove array elements using delete operator.

delete sellers[0];
console.log(sellers);
// !Note: the element you delete will only remove by value that is its value is changes to undefined
// ! and it does not reduce length of array.

// $ Array Elements Can Be Objects: You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
let greeting = [];

//~ function in array
function greet1() {
    return "Hello";
}
greeting[0] = greet1();

greeting[1] = function greet2() {
    return "Hello World";
};

greeting[2] = function greet3() {
    return "Hiiiiiii User";
};

/* 
! Wrong Way:
greeting[3] = var obj = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
};
 */
//~ Object in array
var obj = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
    get greet() {
        return "may u have a good day";
    },
};
// for in loop
for (let x in obj) {
    console.log(x + ":" + obj[x]);
}
greeting[3] = obj;

//~ Array in array
var ar = ["a", "b", "c", "d", "e"];

greeting[4] = ar;

console.log(greeting[0]); // this will show return statement of function because here we call function in this element of array
console.log(greeting[1]); // here function object is returning bcoz we didn't call the function in the array element
console.log(greeting[2]);
console.log(greeting[3].morning);
console.log(greeting[3].greet);
console.log(greeting[4]); // return the whole array 'ar'

/* 
$ Array length property:
  The length property retrieves the index of the next available position at the end of the array:
  The length property is automatically updated as new elements are added to the array.
  Length property starts counting from 1.
  Commonly used for iterating
 */

console.log(greeting.length); //---> 4

// $ Traversing Array or iterating the array elements
var places = ["laddakh", "Coorg", "Jammu", "Indore", "Himalayas"];

for (let i = 0; i <= 4; i++) {
    console.log(places[i]);
}
console.log("Iterating loop using length-->");
// Here we know the no. of elements in our array so we just count it and write the loop count but what if we have 1000 elements in our array then-->
// We not count the each element instance we use length property of Array.
for (let index = 0; index < places.length; index++) {
    console.log(places[index]);
}

/* 
$ forEach Loop: 
  The forEach calls a provided function for each element in array,in order
  !syntax: array.forEach(function(value,index,arr))
          *> value: it is the current value of index no.(mandatory argument)
            ~Display array elements.
          > Array's index number.
            ~Display array index
          > arr:  The array object the current element belongs to.
            ~Dispaly name of the array object
 */
console.log("ForEach Loop");
places.forEach(function(value, index) {
    console.log("Name of Places: " + value + " @ index: " + index);
});

/* 
$ For of loop:
  the for...of statements creates a loop iterating over iterable objects(array or objects).
  !syntax: for(var variable of array)
 */
console.log("For...of loop");
for (let value of places) {
    console.log(value);
}

/*
> Iterating Object using for of loop:
for (var value of obj) {
    console.log(value + ":" + obj[value]);
} 
! error: obj is not iterable

for/of lets you loop over data structures that are iterable such as.
* Arrays, Strings, Maps, NodeLists, and more.
*/

/* 
$ Taking input from user in Array:
    > first step make a empty array:
      ~ let array = [];
      ~ let array=new Array();
      ~ let array=new Array(10);    // with length
 */

var entername = [];
var totalnames = prompt("Enter the no of Names: ");

// if u don't want to take no of elements from user i.e u want fixed no of inputs:
// var entername=new Array(5); fixed length=5

// Input
for (let i = 0; i < totalnames; i++) {
    entername[i] = prompt("Enter Name: ");
}
// output
/*
 entername.forEach(function(value) {
    console.log(value);
}); 
*/
entername.forEach(value => {
    console.log(value);
});

/* 
$ The Difference Between Arrays and Objects
  > In JavaScript, arrays use numbered indexes.  
  > In JavaScript, objects use named indexes.

? When to Use Arrays. When to use Objects.  > 
  > JavaScript does not support associative arrays.
    ~ You should use objects when you want the element names to be strings (text).
    ~ You should use arrays when you want the element names to be numbers.
 */