let Mobile = function() {
    this.a = "a";
};
Mobile.prototype.x = " I am  x in Mobile.prototype :10";

let Samsung = function() {
    Mobile.call(this);
    this.b = "b";
};

let Galaxy = function() {
    Samsung.call(this);
    this.c = "c";
};

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;
// After reset
Samsung.prototype.y = "I am y in Samsung.prototype: 20";

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor = Galaxy;
Galaxy.prototype.z = "I am z in Galaxy.prototype: 30";

let m = new Mobile();
let s = new Samsung();
let g = new Galaxy();

console.log("Galaxy Object can access:");
console.log("Mobile A: " + g.a);
console.log("Samsung B: " + g.b);
console.log("Galaxy C: " + g.c);
console.log("Mobile prototype x: " + g.x);
console.log("Samsung prototype y: " + g.y);
console.log("Galaxy prototype z: " + g.z);