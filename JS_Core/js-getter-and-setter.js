/* 
$ Js Getter and Setter-->
  > Getters and setters exist in most object-oriented programming languages, including JavaScript. 
  > They are code constructs that help developers access the properties of objects in a secure way.
  >  With getters, you can access (“get”) the values of properties from external code,
  >  while setters let you change (“set”) their values

~ ECMAScript 5 (2009) introduced Getter and Setters.
  > Getters and setters allow you to define Object Accessors (Computed Properties).

You can create getters and setters in three different ways:
 > with the default method syntax (getter and setter methods),
 > with the get and set keywords,
 > with the Object.defineProperty() method.

 */
const person = {
    firstName: "Cnu",
    lastName: "Singhaniya",
};
// Now if i want to display full name of the person i can do like this-
console.log(person.firstName + " " + person.lastName);
// #OR Using Template literals:
console.log(`${person.firstName} ${person.lastName}`);

/* 
But problem with this if i want this full name 100 times in my program then i have to write this code 100 times\
Solution: Lets create a function/Method in which we write this code and whenever we want full name we will call this method
lets name this method as getter
 */

person.fullName = function() {
    return this.firstName + " " + this.lastName;
};

// OR ES6 gives us the feature of write function without using function keyword-->
const person1 = {
    firstName: "Jane",
    lastName: "Doe",
    fullName() {
        return `${person1.firstName} ${person1.lastName}`;
    },
};

// Now When i required fullName i will call getter method:
console.log(person1.fullName());
// Now the problem with this method is that i don't want to call it as method ()n i want to access it directly using its name :fullName i.e as property

/* 
here we use Getters And Setters
getters=>access properties
setters=>change properties
 */

const person2 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${person2.firstName} ${person2.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

console.log(person2.fullName); //Simple syntax
person2.fullName = "cnu singhaniya";
console.log(person2.fullName);

/* 
Advantages of using Setter and Getter-->
 > It gives simpler syntax
 > It allows equal syntax for properties and methods
 > It can secure better data quality
 > It is useful for doing things behind-the-scenes
 */

/* 
 $ Object.defineProperty() method can also be used to add Getters and Setters:

  */

var obj = { counter: 0 };

// Define getters
Object.defineProperty(obj, "reset", {
    get: function() {
        console.log((this.counter = 0));
    },
});
Object.defineProperty(obj, "increment", {
    get: function() {
        console.log(++this.counter);
    },
});
Object.defineProperty(obj, "decrement", {
    get: function() {
        console.log(--this.counter);
    },
});
Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
        console.log("Now counter value is " + this.counter);
    },
});
Object.defineProperty(obj, "subtract", {
    set: function(value) {
        this.counter -= value;
        console.log("Now counter value is " + this.counter);
    },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

function Mobile(model, price) {
    var s_model = model;
    var s_price = price;
    // getter method
    this.getModel = function() {
        return s_model;
    };

    /*     get Model() {
        return s_model;
    } 
    this is not valid u can use get kW in object literals but not in constructor function
    if u want to use get and set here u need to follow prototype approach
*/
}

/* 
But lets see can we use get and set in a ES6 class
 */

class ClassName {
    constructor(init1, init2) {
        this.prop1 = init1;
        this.prop2 = init2;
    }
    get props() {
        return [this.prop1, this.prop2];
    }
    set props(val) {
        [this.prop1, this.prop2] = val;
    }
    methodInst() {
        // Instance level method.
        // Do something...
    }
    static methodStat() {
        // Class level method.
        // Do something...
    }
}

const inst = new ClassName();
inst.props = [1, 2];
inst.methodInst();
ClassName.methodStat();