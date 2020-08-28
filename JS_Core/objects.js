/* 
* In JavaScript, objects are king. If you understand objects, you understand JavaScript.
JavaScript is an object-based language. Everything is an object in JavaScript.

? A javaScript object is an entity having state and behavior (properties and method). 
    >For example: car, pen, bike, chair, glass, keyboard, monitor etc.
? JavaScript objects are containers for named values called properties or methods.
*JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

$ An object is  collection of properties and a property is an association between, a name and a value.
    a property value can be a function in this case it is known as methods.
    Methods are actions that can be performed on objects.
    An object method is an object property containing a function definition.

?There are 3 ways to create objects.

    > By object literal
    > By creating instance of Object directly (using new keyword)
    > By using an object constructor (using new keyword)

?Two Type of object:
    >User-defined.
    >Native Object.

?The name:values pairs in JavaScript objects are called properties:

?In JavaScript, almost "everything" is an object.

    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects
 */

/* 
# Creating an object using object literals:
Using an object literal, you both define and create an object in one statement.
   > object={property1:value1,property2:value2.....propertyN:valueN}  

 */

// 1.Object declaration;
var fees = {};

// 2.Object initialization
fees["rahul"] = 100; // OR //~ fees.rahul=100;
fees["rohan"] = 200; // OR //~ fees.rohan=100;
fees["sumit"] = 300; // OR //~ fees.sumit=100;
fees["total"] = function() {
    return this.rahul + this.rohan + this.sumit;
    //We use this here because this points out owner object fees i.e this this.rahul == fees.rahul.
};
/* 
* The this Keyword
    > In a method, this refers to the owner object.
    > Alone, this refers to the global object.
    > In a function, this refers to the global object.
    > In a function, in strict mode, this is undefined.
    > In an event, this refers to the element that received the event.
    > Methods like call(), and apply() can refer this to any object.
*/

/* 
 ~ if u want to access the data of your object: u can use a dot(.) operator or array[] operator
    objectName.property
    objectName["property"]

 */
console.log("Rahul fee " + fees.rahul);
console.log("Sumit fee " + fees.sumit);
console.log("Roahn fee " + fees.rohan);
console.log(" Total fee " + fees.total());

/* 
 $ All in one Go-->
    let fees = {
        rahul: 100, //properties
        sumit: 200, //properties 
        rohan: 300, // Properties
        total: function() { return 100 + 200 + 300; }//object method

    };

 */

/*
? When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
 # Creating an Object using Object instance 
 var object_name= new Object();
 NOt Usefull : MAking things complex always try to use object literals
 */

var grades = new Object();
grades.ram = "A";
grades.sita = "A+";
grades.shyam = "B";
grades.showResult = function() {
    return this.ram + " , " + this.sita + " , " + this.shyam;
};
console.log(" Grades: " + grades.showResult());

var x = new String(); // Declares x as a String object
var y = new Number(); // Declares y as a Number object
var z = new Boolean(); // Declares z as a Boolean object

// ! Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

/* 
? Objects are mutable: They are addressed by reference, not by value.
    If person is an object, the following statement will not create a copy of person:
 */

var person = {
    firstName: "cnu",
    lastName: "shraddha",
    age: 19,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
};
var x = person; // their reference are same
console.log(x.fullName());

/* 
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
 */
// ? You can also add property to an object after its created
let car = {
    color: "blue",
    brand: "VW",
    name: "polo",
    start: function() {
        console.log("Car Started");
    },
};
console.log(car);
car.colorChange = "red"; // adding the property
console.log(car);

// ? Deleting Properties og object
let employee = {
    e1: "Cnu",
    e2: "Divyansh",
    e3: "Shraddha",
    displayName: function() {
        return this.e1 + " " + this.e2 + " " + this.e3;
    },
};

console.log(employee.displayName());
delete employee.e2;
console.log(employee);
console.log(employee.displayName()); // here the value of deleted property become undefined