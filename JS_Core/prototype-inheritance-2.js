//  Hierarchial Inheritance:
// Super Class
let Mobile = function(model, ram, price) {
    this.model = model;
    this.ram = ram;
    this.price = price;
};

// Prototype function: why--> So that tis code will not copy to every object
Mobile.prototype.getModel = function() {
    return this.model;
};
Mobile.prototype.showDetails = function() {
    return this.model + ", " + this.ram + ", " + "RS." + this.price;
};
Mobile.prototype.discount = function() {
    var salePrice = this.price - this.price * 0.1;
    return this.model + "@ RS." + salePrice;
};
// Sub-Class
let Samsung = function(model, price) {
    this.model = model;
    this.price = price;
};

// Sub-Class
let Lenovo = function(model, price) {
    this.model = model;
    this.price = price;
};

// Inheritance code
//>Syntax: child.prototype=Object.create(Parent.prototype)
Samsung.prototype = Object.create(Mobile.prototype);
//>Syntax: child.prototype.constructor=child;
Samsung.prototype.constructor = Samsung; //Reset Constructor

Lenovo.prototype = Object.create(Mobile.prototype);
Lenovo.prototype.constructor = Lenovo; //Reset Constructor

var note = new Samsung("Note 10 Pro", "RS.65,000");
console.log(note.getModel());

var k10 = new Lenovo("K10 Pro", "RS.10,000");
console.log(k10.getModel());

// $ Function for Inheritance-->
function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// Now if we create a new child
let Iphone = function(model, price) {
    this.model = model;
    this.price = price;
};
inherit(Iphone, Mobile);
var xr = new Iphone("Iphone XR", 70000);
console.log(xr.getModel());

// Class of person who buy phone:
let Buyer = function(name, phoneNumber, model, ram, price) {
    Mobile.call(this, model, ram, price);
    this.name = name;
    this.phoneNumber = phoneNumber;
};
console.log(
    "----------------------------------------------------------------------"
);

// buyer should be connected to mobile:
inherit(Buyer, Mobile);
var cnu = new Buyer("Mr.Cnu", "9926501556", "Samsung Note 11", "16GB", 79000);
console.log(
    "Hey Seller! I forgot the price at which i buy my phone can u plss show me: "
);
console.log("Ok!! NO problem here you go--");
console.log(cnu.showDetails());

console.log("Hey Buyer! here is some discount for Your Would u like to see");
console.log("Ohh-_- yess Please");
console.log(cnu.discount());
console.log("WTF!!! I buy it for RS." + cnu.price);