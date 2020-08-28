/* 
How to check that whether a property is available in your program or not
1.using typeof operator.
 */
function Mobile(model, price) {
    this.model = model;
    this.price = price;
    this.ram = " ";
    console.log(this.model + " ," + this.price);
}

let nokia = new Mobile(3310, "rs.2500");
let iphone = new Mobile("6s+", "rs.25,000");

console.log(typeof nokia.model);

// Property check :ram
if (typeof nokia.ram !== "undefined") {
    console.log("Available");
} else console.log("Doesn't Exist");

if (typeof nokia.memory !== "undefined") {
    console.log("Available");
} else console.log("Doesn't Exist");

// 2. Using in operator
if ("ram" in nokia) {
    console.log("Available");
} else console.log("Doesn't Exist");

// 3.using method hasOwnProperty()
if (iphone.hasOwnProperty("ram")) {
    console.log("Available");
} else console.log("Doesn't exist");