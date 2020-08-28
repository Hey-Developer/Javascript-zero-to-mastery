/* 
IN JS Inheritance is achieved through prototypes.

here we just take a common example
    function Mobile(){
        this.a=10;
    }

    var samsung =new Mobile();
    samsung.a;
    #Behind the scenes>
       ___________________             ____________________                 _____________________        
       |     MObile()    |             | Mobile.prototype |                 |  Object.prototype |        _________           
       |                 |             |                  |                 |                   |        | NULL  |
       |      prototype--|------------>|     __proto__--- |---------------->|      __proto__----|------->|_______|
       |_________________|             |__________________|                 |___________________|
                               ____________|                                  ^
                               |                                              |
       ___________________     |                                              |
       | samsung Object  |     |                                              |
       |                 |     |                                              |
       |      __proto__--|-----^                                              |
       |_________________|                                                    |
    // New Function                                                           |
                                                                              |     
    function Person(name){                                                    |
        this.name=name;                                                       |
    }                                                                         |                          
    var ram=new Person("ram");                                                |                                  
                                                                              |                                  
       ___________________             ____________________                   |      
       |     Person()    |             | Person.prototype |                   |        
       |                 |             |                  |                   |
       |      prototype--|------------>|     __proto__--- |-------------------^
       |_________________|             |__________________|                 
                               ____________| 
                               |   
       ___________________     |   
       |    ram Object   |     |   
       |                 |     |   
       |      __proto__--|-----^   
       |_________________|          

Now we want to achieve inheritance between constructor Mobile() and Person()
such that object of person() can access data of Mobile() constructor
? Let's see how we will do that-->

Way One-
~ call the parent constructor Mobile() in the child constructor Person() like :-
    $ Mobile.call(this)

But this is not prototype inheritance-->
because if we add a property in Mobile() using prototype like this
    ~ Mobile.property.salePrice="rs.12,000";
 and we access this using Person() object ram
    ~ console.log(ram.salePrice);
so this gives us undefined
because the property we add it is in Mobile.prototype 
and we actually inherit property of Mobile() in Person()
So what we do such that when we want to use properties of Parent Prototype Object 
our Js engine will search for that property in child prototype object (Person.prototype ) as wll as in Parent prototype object (Mobile.prototype)
?ANS-
    $ Person.prototype=Object.create(Mobile.prototype) 

 */
//  Simple Example
var Mobile1 = function() {
    this.a = 10;
};
Mobile1.prototype.z = 30;
var Samsung = function() {
    Mobile1.call(this);
    this.b = 20;
};

Samsung.prototype = Object.create(Mobile1.prototype);
Samsung.prototype.constructor = Samsung;

var s = new Samsung();
console.log(s.a);
console.log(s.b);
console.log(s.z);

var Mobile = function(model, price) {
    this.model = model;
    this.price = price;
    this.ram = "8GB";

    this.show = function() {
        return this.model + ", " + this.price;
    };
};
// Now suppose a sale is going on and a new discountedPrice is included)
Mobile.prototype.discountedPrice = "RS.15,000";

var mi = new Mobile("Galaxy", "RS.18,000");
console.log(mi.discountedPrice);

var Person = function(name, buyPrice) {
    Mobile.call(this);
    this.name = name;
    this.model = mi.model;
    this.buyPrice = buyPrice;
    this.show = function() {
        return this.name + ", " + this.buyPrice;
    };
};
Person.prototype = Object.create(Mobile.prototype);
Person.prototype.constructor = Person;
var cnu = new Person("Cnu", "RS.18,500");

// Now if cnu wants to know ram of its mobile then--> include Mobile.call(this);
console.log("Cnu: Show me my mobile Model-->" + cnu.model);
console.log("Cnu: Show me my mobile Ram-->" + cnu.ram);
console.log("Cnu: Show me my mobile Ram-->" + cnu.discountedPrice);

//$ Now My Example:
function Bike(company) {
    this.company = company;
}
// Adding property to prototype object Bike.prototype
Bike.prototype.getCompany = function() {
    return this.company;
};

//Another constructor function
function Vehicle(name, price) {
    this.name = name;
    this.price = price;
}

var bike = new Bike("Honda");
//$ Another way of prototype inheritance
Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.
var vehicle = new Vehicle("Shine", 70000);
document.writeln(
    vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price
);