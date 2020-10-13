/* 
$ JavaScript has a number of built in function/methods that can apply to various data types.

>> call(), .apply() and .bind() are methods of functions.(Function.prototype.method)

>> In JavaScript, the thing called this, is the object that "owns" the current code.

>> Before understanding the call method we have to clear working of this..

$$ "this" : The JavaScript 'this' keyword refers to the object it belongs to.
-- It has different values depending on where it is used:
    -> In a method, this refers to the owner object.
       var person = {
         firstName: "John",
         lastName : "Doe",
         id       : 5566,
         fullName : function() {
           return this.firstName + " " + this.lastName;
         }
       };
       // this refers to the person object. The person object is the owner of the fullName method.

    -> Alone, this refers to the global object.
       var x = this;    
       // In a browser window the Global object is [object Window]:

    -> In a function, this refers to the global object.
       function myFunction() {
         return this;
       }
       // So, in a function, this refers to the Global object [object Window].

    -> In a function, in strict mode, this is undefined.
    -> In an event, this refers to the element that received the event.
    -> Methods like call(), and apply() can refer this to any object.

*/

/* 
Now We Will come to call() method: 

$ Kitabi Definition: The call() method calls a function with a given this value and arguments provided individually.

>> simple words: With call(), an object can use a method belonging to another object.
// OR
>> We can say using call() we can change the context of 'this' that means we can change the value of "this". to another reference..

>> Syntax: 
   * func.call([thisArg[, arg1, arg2, ...argN]])
     -> thisArg: The value to use as this when calling func.
     -> arg1, arg2, ...argN: Arguments for the function

     -- Return value: The result of calling the function with the specified this value and arguments.

>> call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
*/

let person = {
    fullname: function() {
        return `Hello I am : ${this.firstName} ${this.lastName}`;
    },
};

let person1 = {
    firstName: "John",
    lastName: "Doe",
};
let person2 = {
    firstName: "Shraddha",
    lastName: "Thakur",
};

// Here we are using fullname method of person object and using call() we pass the new this context to the fullname method.
// Now the object which we pass in call() will become this value for the fullname method.

console.log(person.fullname.call(person1));
//-> 'this' in fullname method will refer to person1 object which means this.firstName is equal to person1.firstName.

console.log(person.fullname.call(person2));
//-> 'this' in fullname method will refer to person2 object which means this.firstName is equal to person2.firstName

//$ Example-2:
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);