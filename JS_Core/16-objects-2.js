/* 
? Factory Function:
  when a function returns an object , we call it a factory function. it can produce object instance without new keyword or classes
We use this when our different objects but they have common properties hence we share that common properties code among all the objects
*/

var samsunng = {
    model: "Galaxy",
    ram: "8GB",
    frontCamera: "16mp",
};

// if a create another onject for another brand:
var lg = {
    model: "Lava",
    ram: "8gb",
    frontCamera: "24mp",
};
/* 
here as u can see that there is some code which is repeating in both object
some properties are common between both objects
hence to stop this code repetition we use factory function
*/

function mobile() {
    return {
        model: " ",
        ram: " ",
        frontCamera: " ",
        price: 0,
    };
}

let samsung = mobile(); // object created and get stored in a variable samsung
console.log("Samsung");
console.log(samsung); // be default zero values will display
samsung.model = "galaxy";
samsung.ram = "8GB";
samsung.frontCamera = "64Mp";
samsung.price = 30000;
console.log(samsung);

let mi = mobile(); // object created
console.log("MI MOBILE ");
console.log(mi);
mi.model = "note 7";
mi.ram = "8GB";
mi.frontCamera = "32Mp";
mi.price = 20000;
console.log(mi);

function mobile(model_no) {
    return {
        model: model_no,
        price: function() {
            return "Rs.20,000";
        },
    };
}

let apple = mobile("iphone6s");
console.log(apple.model);
console.log(apple.price());

let nokia = mobile("NokiaX");
console.log(nokia.model);
console.log(nokia.price());

/* 
? Property Attributes
    > All properties have a name. In addition they also have a value.

    > The value is one of the property's attributes.

    > Other attributes are: enumerable, configurable, and writable.

    > These attributes define how the property can be accessed (is it readable?, is it writable?)

    > In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
 */