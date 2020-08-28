/* 
When u want to traverse through the object properties-->\
use for-in loop
    for(var variable_name in object_name){
        //Block of code;
    }
 */

function Mobiles(model, color, ram, price) {
    this.model = model;
    this.color = color;
    this.ram = ram;
    this.price = price;
    this.show = function() {
        return (
            this.model + " - " + this.color + " - " + this.ram + " - " + this.price
        );
    };
}

let samsung = new Mobiles("galaxy", "Black", "16GB", "RS.22,000");
console.log(samsung.show());
for (let specs in samsung) {
    console.log(samsung[specs]);
    //~ this loop run till it reaches the end of the object properties
}

/* 
> Flow of for-in-loop:
    when the loop run for the first time the variable which we use in for-in-loop:
    here the variable is specs go inside the object which is samsung here
    now it spec is replaced by key of the object and inside it values of the key get stored ,
    next we just display the spec property of object and in the first iteration spec takes the value
    of the first property of the object hence it is displayed
 */

// If u want to include  object methods while traversing in loop:
for (var spec in samsung) {
    if (typeof samsung[spec] !== "function") {
        console.log(samsung[spec]);
    } else {
        console.log("Object Method");
    }
}

// If u also want to see the properties with value then-->
for (var x in samsung) {
    console.log(x + ": " + samsung[x]);
}

// One more way to display all the properties of the object is
console.log(Object.keys(samsung));

// ! for-in loop can manipulate both instance members as well as prototype members
// !But Object.keys()- only shows the instance members