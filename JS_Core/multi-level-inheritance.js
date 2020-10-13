// Function for inheritance:
function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// Parent Class
let Car = function() {
    this.a = "Super class Property a";
    // this.name = "Class Car";
    return console.log("Super Class Car");
};

// prototype function
Car.prototype.vehicleType = function() {
    return "Vehicle type: 4 Wheeler";
};

// Child Class 1
let Skoda = function() {
    Car.call(this);
    this.b = "Subclass Property b";
    // this.name = "Class Skoda";
    return console.log("Class Skoda(Skoda isa Car):");
};

inherit(Skoda, Car);
// prototype function
Skoda.prototype.brand = function() {
    return "Brand: Skoda";
};
Skoda.prototype.startingPrice = function() {
    return "RS.5,00,000 lacs";
};

// Child class 2
let Superb = function() {
    Skoda.call(this);
    this.c = "Sub-sub class property c";
    // this.name = "Skoda model: Superb";
    return "Class Superb(Superb isa Skoda isa Car):";
};

inherit(Superb, Skoda);

// Method overriding    // prototype function
Superb.prototype.startingPrice = function() {
    return "RS.35,00,000 lacs";
};

console.log("Multi-level Inheritance:");

let obj1 = new Car();
let obj2 = new Skoda();
let obj3 = new Superb();

console.log(
    "------------------------------------------------------------------------------------------------"
);

console.log("What Car can access:");
console.log("Car:" + obj1.a);
console.log("Skoda:" + obj1.b);
console.log("Superb:" + obj1.c);
console.log(
    "------------------------------------------------------------------------------------------------"
);
console.log("What Skoda can access:");
console.log("Car:" + obj2.a);
console.log("Skoda:" + obj2.b);
console.log("Superb:" + obj2.c);
console.log(
    "------------------------------------------------------------------------------------------------"
);
console.log("What Superb can access:");
console.log("Car:" + obj3.a);
console.log("Skoda:" + obj3.b);
console.log("Superb:" + obj3.c);
console.log(
    "------------------------------------------------------------------------------------------------"
);
console.log(
    "Now as u can see superb can access all its parent class data hence: using Superb Object we call the methods of parent class"
);

console.log("obj3.vehicleType()= " + obj3.vehicleType());
console.log("obj3.brand()= " + obj3.brand());
console.log("obj3.startingPrice()= " + obj3.startingPrice());