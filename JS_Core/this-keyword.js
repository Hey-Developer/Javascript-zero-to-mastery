/* 
$ What the hell is 'this'?
?-The JavaScript this keyword refers to the object it belongs to.

    It has different values depending on where it is used:
    > In a method, this refers to the owner object.
    > Alone, this refers to the global object.
    > In a function, this refers to the global object.
    > In a function, in strict mode, this is undefined.
    > In an event, this refers to the element that received the event.
    > Methods like call(), and apply() can refer this to any object.

 */

//  'this' in a method-->
let person = {
    first_name: "John",
    last_name: "Doe",
    // method
    full_name: function() {
        return this.first_name + " " + this.last_name;
    },
    /* 
                                                    In an object method, this refers to the "owner" of the method.i.e this===person
                                                    so this.first_name=== person.first_name
                                                */
};

// 'this' alone
var x = this;
/* 
When used alone, the owner is the Global object, so this refers to the Global object.
In a browser window the Global object is [object Window]:
OR-->
> In strict mode, when used alone, this also refers to the Global object [object Window]:
"use strict";
var x = this;
 */

// 'this' in a function:In a JavaScript function, the owner of the function is the default binding for this.
let print = function() {
    return this; // point the global object[object Window]
};

var a = 10; // now the global object is change to a hence this will refer to a
print();

/* 
> 'this' in a function in strict mode:
    JavaScript strict mode does not allow default binding.
    So, when used in a function, in strict mode, this is undefined.
"use strict";
function myFunction() {
  return this;
}
 */

//  'this' in Event Handlers:In HTML event handlers, this refers to the HTML element that received the event:
/* 
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button> 
*/

//> Object Method Binding:
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function() {
        return this;
    },
};
// In these examples, this is the person object (The person object is the "owner" of the function):

//> Explicit Function Binding:
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
};
var person2 = {
    firstName: "John",
    lastName: "Doe",
};
person1.fullName.call(person2); // Will return "John Doe"
//~ In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:
// * call site decide the behaviour 'this'

// !Problem with Object  binding

var student = {
    name: "Cnu",
    sayName: function() {
        console.log(student.sayName());
    },
};

// now if call this method sayName in some another variable???
var greetStudent = student.sayName(); //undefined
// Because here we lost its default method binding for this keyword so whats the solution.
/* 
? way One: student.sayName({name:"test"})
here function is called and the context of this is change
? Way two: bind()
 */
var greetStudent = student.sayName.bind({ name }); //undefined