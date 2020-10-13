/* 
$ Static methods-->
  The JavaScript provides static methods that belong to the class instead of an instance of that class.
  So, an instance is not required to call the static method.
  These methods are called directly on the class itself.

# Points to remember
  ~ The static keyword is used to declare a static method.
  ~ The static method can be of any name.
  ~ Static methods are defined on the class itself, and not on the prototype.
  ~ A class can contain more than one static method.
  ~ If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
  ~ The static method can be used to create utility functions.
  ~ We can use this keyword to call a static method within another static method.
  ~ We cannot use this keyword directly to call a static method within the non-static method.
    > In such case, we can call the static method either using the class name or as the property of the constructor.
 */
class Test {
    static display() {
        return "static method is invoked";
    }
}
console.log(Test.display());

// Let's see an example to invoke more than one static method with similar names.
class Test1 {
    static display() {
        return "static method is invoked";
    }
    static display() {
        return "static method is invoked again";
    }
}
console.log(Test1.display()); //last method will call.

// Let's see an example to invoke a static method within the constructor.

class Test2 {
    constructor() {
        console.log(Test2.display());
        console.log(this.constructor.display());
    }

    static display() {
        return "static method is invoked";
    }
}
var t = new Test2();

// let's see an example to invoke a static method within the non-static method.
class Test3 {
    static display() {
        return "static method is invoked";
    }

    show() {
        // here if we use this to call it ??
        // console.log(this.display());
        // ! error this.display is not a function()

        console.log(Test.display());
    }
}
var t = new Test3();
t.show();

// Let's see an example to invoke a static method within the static method using this keyword
class Test4 {
    static display() {
        return "static method 1 is invoked";
    }

    static display2() {
        console.log(this.display());

        return "static method 2 is invoked";
    }
}

console.log(Test4.display());
console.log(Test4.display2());