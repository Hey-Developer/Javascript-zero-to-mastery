/* 
$ If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java.
we do method overriding when we want to change the definition of a superclass method in subclass,
Method Overriding is:
    >Different Class(Should be inherited)
    >Same Method Name
    >Same parameter

*/
/* 
Consider a scenario where Bank is a class that provides functionality to get the rate of interest.
However, the rate of interest varies according to banks.
For example, SBI, ICICI and AXIS banks could provide 8%, 7%, and 9% rate of interest.
 */
// Function for inherit
function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}
// !EMI Calculator
// Super class
let Bank = function() {};

// Prototype Members
Bank.prototype.emi = function() {
    /* 
                                                             EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
                                                             where P stands for the loan amount or principal,
                                                             R is the interest rate per month [if the interest rate per annum is 11%, then the rate of interest will be 11/(12 x 100)],
                                                             and N is the number of monthly installments.
                                                                                                     */
    var emiAmount =
        this.amount *
        this.rateOfInterest *
        ((1 + this.rateOfInterest) ** this.months /
            ((1 + this.rateOfInterest) ** this.months - 1));

    return "RS." + emiAmount + " /month";
};

Bank.prototype.getRateOfInterest = function() {
    return 0;
};

// Sub-Classes

let SBI = function(name, address, aadhar, guarantee, amount, months) {
    this.name = name;
    this.address = address;
    this.aadhar = aadhar;
    this.guarantee = guarantee;
    this.amount = amount;
    this.months = months;
    this.rateOfInterest = 0.00583333;
};

inherit(SBI, Bank);
// Method Overriding:
SBI.prototype.getRateOfInterest = function() {
    return "7%";
};

let ICICI = function(name, address, aadhar, guarantee, amount, months) {
    this.name = name;
    this.address = address;
    this.aadhar = aadhar;
    this.guarantee = guarantee;
    this.amount = amount;
    this.months = months;
    this.rateOfInterest = 0.00666667;
};

inherit(ICICI, Bank);
// Method Overriding:
ICICI.prototype.getRateOfInterest = function() {
    return "8%";
};

let AXIS = function(name, address, aadhar, guarantee, amount, months) {
    this.name = name;
    this.address = address;
    this.aadhar = aadhar;
    this.guarantee = guarantee;
    this.amount = amount;
    this.months = months;
    this.rateOfInterest = 0.0075;
};

inherit(AXIS, Bank);
// Method Overriding:
AXIS.prototype.getRateOfInterest = function() {
    return "9%";
};

var punit = new ICICI(
    "Punit Solanki",
    "Indore",
    "1227648375",
    "MY House",
    10000000,
    60
);
console.log("HEY!!" + punit.name + " Welcome-_-");
console.log(
    "Your EMI for amount RS." +
    punit.amount +
    " For " +
    punit.months +
    "months is: " +
    punit.emi() +
    " from ICICI Bank"
);
console.log("Thank you for using :)");
console.log("---------------------------------------------------------------");

var cnu = new SBI(
    "Divyansh Thakur",
    "Indore",
    "1227648375",
    "MY House",
    50000000,
    30
);
console.log("HEY!!" + cnu.name + " Welcome-_-");
console.log(
    "Your EMI for amount RS." +
    cnu.amount +
    " For " +
    cnu.months +
    "months is: " +
    cnu.emi() +
    " from SBI Bank"
);
console.log("Thank you for using :)");
console.log("---------------------------------------------------------------");

var Shraddha = new AXIS(
    "Shraddha Yadav",
    "Dewas",
    "1227648375",
    "MY House",
    1000000,
    36
);
console.log("HEY!!" + Shraddha.name + " Welcome-_-");
console.log(
    "Your EMI for amount RS." +
    Shraddha.amount +
    " For " +
    Shraddha.months +
    "months is: " +
    Shraddha.emi() +
    " from AXIS Bank"
);
console.log("Thank you for using :)");
console.log("---------------------------------------------------------------");

console.log("For Showing Method Overriding");
console.log("punit.getRateOfInterest()= " + punit.getRateOfInterest());
console.log("cnu.getRateOfInterest()= " + cnu.getRateOfInterest());
console.log("shraddha.getRateOfInterest()= " + Shraddha.getRateOfInterest());