/* 
OOP stand for- Object Oriented Programming 
 ~it is a concept in which we deal the problems based on the real life objects.
 ~ Pillars Of OOP:
    > Classes
    > Object
    > Abstraction
    > Encapsulation
    > Inheritance
    > Polymorphism

* Classes:
In JavaScript, classes are the special type of functions.
We can define the class just like function declarations and function expressions.
The JavaScript class contains various class members within a body including methods or constructor.
The class is executed in strict mode. So, the code containing the silent error or mistake throws an error.

 */
//> Before ES6 classes were made like this-
// Class Car
let Car = function(brand) {
    //Constructor
    this.name = brand;
    this.brand = function() {
        return this.name;
    };
};
// For making prototype member -->
Car.prototype.present = function() {
    return "I have a " + this.brand;
};
// Object creation
let icon = new Car("ford");
icon.present();
/* 
    $ ES6, also known as ECMAScript2015, introduced classes.
    >A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class,
        > and the properties are assigned inside a constructor() method.
    A simple Example:
        class Car {
             constructor(brand) {
                this.carname = brand;
             }
        }   
    Here
    > The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated,
        ~  and it has to have the exact name "constructor" there csn be only one special method with name "constructor"
    > You are also free to make your own methods, the syntax should be familiar:
     */
class Car1 {
    constructor(brand) {
            // Instance member
            this.carname = brand;
        }
        // prototype member
    present1() {
        return "I have a " + this.carname;
    }
}
// Object creation
let ecosport = new Car1("ford");
console.log(ecosport.present1());

/*
?Two Ways to define a class-->
$Class Declarations
    > A class can be defined by using a class declaration.
    > A class keyword is used to declare a class with any particular name. 
    > According to JavaScript naming conventions, the name of the class always starts with an uppercase letter.
    > Unlike function declaration, the class declaration is not a part of JavaScript hoisting.
     ~ So, it is required to declare the class before invoking it.
    > A class can be declared once only. If we try to declare class more than one time, it throws an error.
 */
//Declaring class
class Employee {
    //Initializing an object
    constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        //Declaring method
    detail() {
        console.log(this.id + ", " + this.name);
    }
}
//passing object to a variable
var e1 = new Employee(101, "Martin Roy");
var e2 = new Employee(102, "Duke William");

//calling method
e1.detail();
e2.detail();

// Are you thinking hooray!! we create a class so my dear
// you r not right in JS there in such thing like class a class is only a special type of function it is not like other programming languages.
console.log(typeof Car);
console.log(typeof Car1);
console.log(typeof Employee);
// i think your myth is now clear in console.

/* 
$ Default Constructor-->
If u do not specify a constructor then by default a default constructor is:
    Class Mobile{
        show(){
            return " Prototype Member"
        }
    }
Since there is no constructor but still object will create-->
    var mi=new Mobile();
    console.log(mi.show());
this is because a default constructor method is present in the class.

$ Parameterized Constructor
Constructor with parameters is known as parameterized constructor.
    class Mobile{
        constructor(model,price,ram) {
            this.model = model;
            this.price = price;
            this.ram=ram;
        }

        showDetails(){
            return this.model+", "+this.ram+ ", "+ this.price;
        }
    }

    var iphone =new Mobile("Iphone xr","rs.65,000","8GB")
    console.log(iphone.showDetails());


*/

/* 
?Class Expressions
    >Another way to define a class is by using a class expression.
    > Here, it is not mandatory to assign the name of the class.
    > So, the class expression can be named or unnamed.
    > The class expression allows us to fetch the class name.
    > However, this will not be possible with class declaration.

?Named Class Expression Example
    > We can express the class with the particular name.
    > Here, the scope of the class name is up to the class body.
    > The class is retrieved using class.name property.
 */
//~ CLass Expression
var emp = class {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
console.log(emp.name);

// //~ Named Class Expression
var emp = class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
console.log(emp.name);
/*
document.writeln(Employee.name);  
Error occurs on console:  
! "ReferenceError: Employee is not defined  
*/

// $ Class-Hoisting
// Class declaration and class Expression are not hoisted, you first need to declare a class before its use.

/*
 var e1 = new Employeee(101, "CNU");
var e2 = new Employeee(102, "Cloves");
console.log(e1.show());
console.log(e2.show());
// Declaraing Class
class Employeee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    show() {
        return this.id + ", " + this.name;
    }
}

!reference error: Cannot access Employee Before its initialization
 */

//  $ Re-declaring Class
/* 
  A class can be declared once only. If we try to declare class more than one time, it throws an error.
#    //Declaring class  
    class Employee  
    {  
#   //Initializing an object  
        constructor(id,name)  
        {  
        this.id=id;  
        this.name=name;  
        }  
        detail()  
        {  
    document.writeln(this.id+" "+this.name+"<br>")  
        }  
    }  
#    //passing object to a variable   
    var e1=new Employee(101,"Martin Roy");  
    var e2=new Employee(102,"Duke William");  
    e1.detail(); //calling method  
    e2.detail();  
#    //Re-declaring class  
    class Employee  
    {  
    }  
!Uncaught SyntaxError: Identifier 'Employee' has already been declared.
 */