/* 
The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.


!This Is the third type by which we can create Object In JavaScript
? A constructor is a special type of function  which is used to initialize and create an object.
OR
? Object instance are created with constructor, which are basically special function that prepare new instance of an object for use
    > It is called when memory is allocated for an object. using new keyword

In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
 */
//~  This is a constructor function with Name Mobile(first letter will be capital of constructor function)
function Mobile() {
    this.model = "3310"; // this points out the new object instance. or //> The this keyword refers to the current object.
    this.price = function() {
        return this.model + " Price: " + "rs.15,000";
    };
}

// ~ this points out samsung(object)
let samsung = new Mobile(); // samsung is a object of type Mobile() here mobile is not a class but a constructor function
console.log("MOdel No: " + samsung.model);
console.log(samsung.price());

// ~ constructor with parameters.
function Employee(id, name) {
    this.id = id;
    this.name = name;
    // console.log(this.id + " , " + this.name);
    this.show = function() {
        return this.id + " , " + this.name;
    };
}

let e1 = new Employee(101, "ram");
let e2 = new Employee(102, "sita");
console.log(e1.show());
console.log(e2.show());

/* 
Before ES6, there is no concept of class so before it 
classes or categories made using this this concept: we define class in JS using custom constructor
 */
//  ~ A class Student or a Custom Constructor-->
var Student = function(rollNo, courseId, address, phoneNum) {
    this.rollNo = rollNo;
    this.courseId = courseId;
    this.address = address;
    this.phoneNum = phoneNum;
    this.grades = "A+";
    this.showAllDetails = function() {
        return (
            this.rollNo +
            ", " +
            this.courseId +
            ", " +
            this.grades +
            ", " +
            this.address +
            ", " +
            this.phoneNum
        );
    };
};

let cnu = new Student(25, "2ndyr", "Indore", 9926501556);
console.log("Cnu: " + cnu.showAllDetails());

/* 
Built-in JavaScript Constructors-->
JavaScript has built-in constructors for native objects:
 */
var x1 = new Object(); // A new Object object
var x2 = new String(); // A new String object
var x3 = new Number(); // A new Number object
var x4 = new Boolean(); // A new Boolean object
var x5 = new Array(); // A new Array object
var x6 = new RegExp(); // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date(); // A new Date object

/*
 The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
 
Use object literals {} instead of new Object().

Use string literals "" instead of new String().

Use number literals 12345 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function(). 

var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object
 */