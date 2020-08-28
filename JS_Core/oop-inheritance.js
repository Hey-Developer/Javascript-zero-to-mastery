/* 
$ Class Inheritance-->
    The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. 
    It provides flexibility to the child class to reuse the methods and variables of a parent class.
    > The JavaScript extends keyword is used to create a child class on the basis of a parent class. 
    > It facilitates child class to acquire all the properties and behavior of its parent class.

When to use Inheritance:
  use inheritance when u want to repeat some properties of another class in other class in this case
  we inherit the two classes one is parent and the other one child .
> Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

!It  Should maintains an IS-A relationship.

> The extends keyword can be used to subclass custom classes as well as built-in-objets(Like- Date,Array,String,Boolean,Number,Maths)

*/

// Simple Example-
class Father {
    showFMoney() {
        return "Father money";
    }
}

class Son extends Father {
    showSMoney() {
        return "His money";
    }
}

let rahul = new Son();
console.log("rahul cann access:");
console.log(rahul.showSMoney());
console.log("As well as ");
console.log(rahul.showFMoney());

// Suppose if in this example-->
class Car1 {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}

class Model1 extends Car1 {
    show() {
        return this.present();
    }
}
/* 
here in the super class we have a constructor with parameters now who id going to assign some value
in parent constructor as we are not creating any object of parent class.
so is this possible that we can initialize the value of parent constructor using the subclass object.
Yes,
    > If ur subclass dont have any constructor then by passing the value during the object cretaion
        of sub-class object this value will go the default constructor and from there using super method
        that value i transfer to the parent constructor.
        like this,
        var mycar=new Model("Ford")
 */
var mycar = new Model1("Ford");
console.log(mycar.present());

/* 
but what if our subclass also have a constructor then when we passed value to the subclass constructor 
it will go the subclass constructor and from there as we didn,t write super() method how the value is passed to the parent constructor

 */

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

var rahulnewcar = new Model("Ford", "Mustang");
console.log("Rahul's New Car: " + rahulnewcar.show());
console.log(
    "X----------X----------X----------X----------X----------X----------"
);
/* 
$ The super() method refers to the parent class.(it is used to initialize the parent constructor)
 > By calling the super() method in the constructor method,
 > we call the parent's constructor method and gets access to the parent's properties and methods.
 > In subclass if u r accessing the parent constructor then first statement u write should be super() before 'this'
 */

class Bicycle {
    constructor(gear, speed) {
        this.gear = gear;
        this.speed = speed;
    }

    applyBrakes(decrement) {
        return "Speed decreasing..." + (this.speed -= decrement);
    }

    speedUp(increment) {
        return "Speed Increasing..." + (this.speed += increment);
    }
    showDetails() {
        return "No. Of Gears: " + this.gear + ", Speed: " + this.speed;
    }
}

class MountainBikes extends Bicycle {
    constructor(gear, speed, seatheight) {
        super(gear, speed);
        this.seatheight = seatheight;
    }

    setHeight(value) {
        this.seatheight = value;
        return "Seat Height is set to: " + this.seatheight;
    }

    setDifficulty(value) {
        if (value === "Normal") {
            return "Difficulty is set to: Normal -->" + super.speedUp(50);
        } else if (value === "Easy") {
            return "Difficulty is set to: Easy -->" + super.speedUp(100);
        } else if (value === "Hard") {
            return "Difficulty is set to: Hard -->" + super.speedUp(20);
        } else {
            return "Invalid input plss give input between Range";
        }
    }

    //! Method overriding-
    showDetails() {
        return super.showDetails() + ", " + "Seat Height: " + this.seatheight;
    }
}

let cnu_new_bicycle = new MountainBikes(21, 30, 10);
console.log("Cnu new bicycle: ");
console.log(cnu_new_bicycle.showDetails());
console.log("Cnu wants to speed Up-->" + cnu_new_bicycle.speedUp(50));
console.log("Cnu wants to applyBrakes-->" + cnu_new_bicycle.applyBrakes(20));
console.log(cnu_new_bicycle.setDifficulty("Easy"));