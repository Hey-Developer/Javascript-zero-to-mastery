/* 
the variable this.model, this.price are public variables that is they can be access anywhere 
if u want to declare them private variables we have 3 keywords for that
and u all are familiar with those keywords.
    >let
    >var
    >const
 */

let Mobiles = function(model, color, price) {
    var model = model;
    var color = color;
    var ram = "8GB";
    var price = price;
    var show = function() {
        return this.model + ", " + this.color + ", " + this.price;
    };
};

let nokia = new Mobiles("331-0X", "Black", "rs.10,000");
// nokia.show(); //! error: nokia.show() is not a function
// here show function is not accessible because we declare it private.-_-
// then how can we access out data,
//> we can access private data using public method of the class.

let MobileShop = function(model, color, sPrice) {
    this.model = model;
    this.color = color;
    this.ram = "8GB";
    var buyPrice = "rs.15,000"; //hidden for outside world
    this.sPrice = sPrice;
    var ownerProfit = function() {
        return "Hey Owner Your Profit is: rs." + (this.sPrice - buyPrice);
    };
    this.billGenerate = function() {
        return (
            this.model + ", " + this.color + ", " + this.ram + ", " + this.sPrice
        );
    };
};
let buyer1 = new MobileShop("Note 7", "Blue", "rs.17,000");
console.log("Hey! Buyer here is ur bill: " + buyer1.billGenerate());
console.log("Visit Us Again");
/* 
Here we keep the buying price private so that user don't know about profits but how 
owner will get kn know about profit? let's try
 */