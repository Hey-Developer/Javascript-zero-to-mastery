/*
JavaScript is a prototype-based language that facilitates the objects to acquire properties and features from one another. Here, each object contains a prototype object.

$In JavaScript, each object contains a prototype object that acquires properties and methods from it.
    > this means that with every object there is preliminary or basic clone is presents which contains all the properties and methods.

? Prototype: A prototype is an early sample, model, or release of a product built to test a concept or process or to act as a thing to be replicated or learned from
    >In JavaScript, whenever a function is created the prototype property is added to that function automatically.
        ~ This property is a prototype object that holds a constructor functions property.
className.prototype.methodName

?What is the requirement of a prototype object?
    ~ Whenever an object is created in JavaScript, its corresponding functions are loaded into memory. So, a new copy of the function is created on each object creation.
    ~ In a prototype-based approach, all the objects share the same function. This ignores the requirement of creating a new copy of function for each object. Thus, the functions are loaded once into the memory.

Adding a property to an object: objectName.key=value;
Adding a method to an object: objectName.methodName=function(){ //block of code;}
                        #BUT
You cannot add a new property to an object constructor,
the same way you add a new property to an existing object:
also
You cannot add a new method to an object constructor,
the same way you add a new method to an existing object.
>To add a new property to a constructor, you must add it to the constructor function:
now the concept of p will help us:

$ Prototype Inheritance
*All JavaScript objects inherit properties and methods from a prototype.
    > Date objects inherit from Date.prototype
    > Array objects inherit from Array.prototype
    > The Object.prototype is on the top of the prototype inheritance chain:
    > Date objects, Array objects, and Person objects inherit from Object.prototype.
for example
let me create a constructor:
    function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
    }
> Since everything in js is object hence constructor function is also a object
> So according to the prototype-appraoch,
    ~ there must be a prototype object( or a basic clone) of object constructor function( PERSON).
    ~ Person objects inherit from Person.prototype
> SO if we want to add properties we will add it using this prototype object and as our  main constructor function is inherited from it.
    ~ Changes applied to parent(person.prototype) must be visible in child(person) 
>The JavaScript prototype property allows you to add new properties to object constructors:
*/
var Mobile = function(modelNo) {
    this.modelNo = modelNo; //*Instance Member
    var price = "RS.22,000"; //*Instance Member
    this.show = function() {
        return this.modelNo + ", Price:" + price;
    };
};

let mi = new Mobile("Note7");
let oneplus = new Mobile("OnePlus7");
/* 
I want to add ram property to both objects either i can do it in this way:
    mi.ram="16GB";
    oneplus.ram="16GB";
or
i use prototype property:
 */
Mobile.prototype.ram = "16GB"; //* Prototype Member.

console.log(mi.show() + ": " + mi.ram);
console.log(oneplus.show() + ": " + oneplus.ram);

/* 
Just Open your chrome console and u will surprised that the property u ADD doesn't
showing in Mobile class:
Why?
> Because the property we add using prototype method is added in prototype object.
> This property also known as //! Prototype Member.
> and the property in the constructor function which we define at the starting is known as
    ! Instance Member
here the prototype Chaining:
                
$                ProtoType Object(Mobile.prototype)
#                                |(inherit)
$                       Constructor Object(Mobile)
#                   ____________|____________
#                  |                        |  
$             Object(mi)             Object(oneplus)
 */

/* ? Iterating prototype and instance members */
// >Using Object.keys();

console.log(Object.keys(mi)); //Only show instance members
// For showing prototype members also use for in loop:
for (spec in mi) {
    console.log(spec);
}

/*
$ PROTOTYPE OBJECT 

IN JS Every object is associated with another object. 
that means if u create a object:
>   var a={}; // Empty object
this object should be associated with another object here that object is-
>   Object.prototype Object
i.e                                
$                                   NULL(end)
                                    |
$                           Object.prototype (Super class of all object)
>                           { Properties }
                                  |
$                                 a ---------------- a will inherit all properties of the Object.prototype
>                           { Properties }


no matter how u create object it will always associated with another object.
here 
> var b1=new Object();// Object instance
here also associated object is --> prototype property of Object which is Object.prototype. is prototype object of b1
$                NUll
                   |
$             Object.prototype{Properties}
                  |
$               b1{properties}    


> var b2 =new Array();// Object of array
$              NUll
                 |
$            Object.prototype{Properties}  
                |
$           Array.prototype{Properties}
               |
$           b2{Properties}


* JS Object-->
                                                                                  NULL
                                                                                   |
                                                                             Object.prototype
                                                                                   |
                                                                                Object()   
 __________________________________________________________________________________|_________________________________________________________________________
|                             |                    |                  |                     |                     |             |                           |
Booleans.prototype    Numbers.prototype    Strings.prototype    Dates.prototype     Maths.prototype   Regular Exp.prototype.   Arrays.prototype     Functions.prototype
|                             |                    |                  |                     |                     |             |                           |
Booleans()                Numbers()             Strings()          Dates()              Maths()              Regular Exp.()   Arrays()                Functions()
|                             |                    |                  |                     |                     |             |                           |
a1                           a2                   a3                 a4                    a5                    a6            a7                          a8
*/

//~ See In chrome console-->
console.log(Object.prototype); //? return Prototype object
var b = {};
console.log(Object.getPrototypeOf(b)); //? Returns who is the associated object with object b
console.log(Object.getPrototypeOf(Object.prototype));

/* 
When u create a function or constructor function in js
behind the scene  two object is created
        > One is Function Object Itself.
        > Second is prototype object itself
        > and inside the function object JS create a property names prototype which points out the prototype object.

EX- function Mobile(model,price){
    this.model=model;
    this.price=price;
~    prototype(created by JS engine)-->function_name.prototype
}
Now when we make an objet using this constructor function that we creating a sub-object of Moble() function object
var moto=new Mobile("G5","10,0000");
var Lg=new Mobile("Lava9","15,000")
~    Inside object JS Engine create a prototype property name as __proto__ which points out the prototype object Mobile.prototype
#Behind the scenes>
       ___________________             ____________________ 
       |     MObile()    |             | Prototype Object |
       |                 |             |                  |
       |      prototype--|------------>|                  |
       |_________________|             |__________________| 
                               ____________| 
                               |   |
#Behind the scenes             |   |
       ___________________     |   |   ____________________ 
       |     moto        |     |   |   |       Lg         |
       |                 |     |   |   |                  |
       |      __proto__--|-----^   ^---|-------__proto__  |
       |_________________|             |__________________| 

if we write lg.a then JS engine search for this property in Lg object first then if it didn't find it there 
JS engine go to the prototype objet of function and then search for property there and there if he didn't find it it will give
undefined in output. 
* Mobile.prototype===lg.__proto__ //? True
 */

var AmazonMobile = function(model, price) {
    this.model = model;
    this.price = price;
    // hidden prototype property.
    this.show = function() {
        return this.model + ", " + this.price;
    };
};
// AmazonMobile Constructor function created
// a prototype property is created
// Also AmazonMobile.prototype Prototype Object is created

let vivo = new AmazonMobile("11pro", "RS.10,000");
console.log(vivo.show());
// vivo sub-object created which is associated with AmazonMobile function object
// Also __proto__ property is created

console.log(vivo.ram);
// searching for a new property ram which we did not defined either in  AmazonMobile() function or in Prototype object
// So it will give undefined

AmazonMobile.prototype.ram = "16gb"; //Now i defined ram property in prototype object using prototype property of AmazonMobile Function
console.log(vivo.ram); //16gb output
// !NOTE: If we define ths ram property both in AmazonMobile() and AmazonMobile.prototype  with two diffrent values then when access through vivo we get the ram with property value which is in AmazonMobile()
// > Bcoz Js engine will not serach in prototype object if it is found in own fucntion object

// Now this property is in prototype object and in my sub-object i have __proto__ property through which i can access prototype object
// Lets try
console.log(vivo.__proto__.ram); // oh yess Output is 16gb ! great

// Now i will check something -_-
console.log(AmazonMobile.prototype === vivo.__proto__);
// Ohhhhh Yezzz!!! True
console.log(AmazonMobile === vivo.__proto__.constructor);
console.log(AmazonMobile === AmazonMobile.prototype.constructor);