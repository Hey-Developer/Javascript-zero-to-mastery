/* 
* Scope determines the accessibility (visibility) of variables.
In JavaScript there are two types of scope:
   * Local scope
   * Global scope
JavaScript has function scope: Each function creates a new scope.
Scope determines the accessibility (visibility) of these variables.
Variables defined inside a function are not accessible (visible) from outside the function.

? Global Variable:  
    A variable declared outside a function, becomes GLOBAL.
    A global variable has global scope: All scripts and functions on a web page can access it. 
 */

var carName = "Volvo";

//# code here can use carName

function myFunction() {
    //# code here can also use carName
}

/* 
? Local Variable:
    Variables declared within a JavaScript function, become LOCAL to the function.
    Local variables have Function scope: They can only be accessed from within the function.
    its created and destroyed every time the function is executed
 */

//# code here can NOT use carName

function myFunction2() {
    var carName = "Volvo";

    //# code here CAN use carName
}

var gv = "I am global variable I Can Go Anywhere";

function show() {
    console.log("I am show()");
    gv1 = "U forgot to write var, Hence I Now I am Gobal ";
    var lv1 = "I am Local variable 1";
    console.log("Hey! I am inside show()" + gv);
    console.log(lv1);
    console.log(gv1);
    console.log("");
    console.log("Hey! show1() Can i access your varriable");
    // console.log(lv3); Not accessible
    console.log("NO!!!-_-");
    console.log("");
    /* 
                      if there is function inside a function the inner function can access outer function's 
                      variable but outer function cannot access inner fn variable.
                   */

    function show1() {
        var lv3 = "Hey I am Local Variable of show1()";
        console.log("I am show1() Inside show()");

        console.log("CAN i Use Local Variabl lets see");
        console.log(lv1); //Here it is accessible
        console.log(lv3);
        console.log("YEs U can!:)");
    }
    show1();
}
show();
console.log("");

// !console.log(lv); Uncaught reference error: lv is not defined
console.log("Hey! I am in the main body" + gv);
console.log("");

function display() {
    console.log("I am display()");

    var lv2 = "I am Local variable 2";
    console.log("Hey I am Inside display()" + gv);
    console.log(lv2);
    console.log(" I am function 2: CAN i Use Local Variabe l lets see");
    //! console.log(lv); Uncaught reference error: lv is not defined
    console.log("Sorry! But u can't :(");
}
display();
console.log("");

if (true) {
    console.log("Hey! I am IF block");
    console.log("Can I use Local Variable 1");
    // console.log(lv1); not accessible hahahah:)
    console.log("NO!!!!:(");
}