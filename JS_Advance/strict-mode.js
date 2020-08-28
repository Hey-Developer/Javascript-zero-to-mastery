/* 
> Being a scripting language, sometimes the JavaScript code displays the correct result even it has some errors. 
  To overcome this problem we can use the JavaScript strict mode.

$ The "use strict" directive was new in ECMAScript version 5.

$ It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

$ The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

$ With strict mode, you can not, for example, use undeclared variables.

# Declaring Strict Mode:
  ~ Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

  > Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
      "use strict";
         x = 3.14;       // This will cause an error because x is not declared
    
  > Declared inside a function, it has local scope (only the code inside the function is in strict mode):
    x = 3.14;       // This will not cause an error.
    myFunction();
    
    function myFunction() {
      "use strict";
      y = 3.14;   // This will cause an error
    }

   ! Note - The "use strict"; expression can only be placed as the first statement in a script or in a function.
*/
// --With > "use strict";
"use strict";
a = 10;
console.log(a);

// !strict-mode.js:34 Uncaught ReferenceError: a is not defined

//-- Without > "use strict";
a = 10;
console.log(a);

// ~ 10

/* 
# The "use strict"; Syntax-->
  > The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.

  > Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.

  > So "use strict"; only matters to new compilers that "understand" the meaning of it.

# Why Strict Mode?
  ~ Strict mode makes it easier to write "secure" JavaScript.

  ~ Strict mode changes previously accepted "bad syntax" into real errors.\

    > As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

    > In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

    > In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

# Not Allowed in Strict Mode: 
*/

// --1) Using a variable, without declaring it, is not allowed:

x = 3.14; // This will cause an error

// --2) Using an object, without declaring it, is not allowed:
x = { p1: 10, p2: 20 }; // This will cause an error

// --3) Deleting a variable (or object) is not allowed.
var x = 3.14;
delete x; // This will cause an error

// --4) Deleting a function is not allowed.
function x(p1, p2) {}
delete x;

// --5) Duplicating a parameter name is not allowed:
function x(p1, p1) {} // This will cause an error

// --6) Octal numeric literals are not allowed:
var x = 010; // This will cause an error

// --7) Octal escape characters are not allowed:
var x = "\010"; // This will cause an error

// --8) Writing to a read-only property is not allowed:
var obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });

obj.x = 3.14; // This will cause an error

// --9) Writing to a get-only property is not allowed:
var obj = {
    get x() {
        return 0;
    },
};

obj.x = 3.14; // This will cause an error

// --10) Deleting an undeletable property is not allowed:
delete Object.prototype; // This will cause an error

// --11) The word eval cannot be used as a variable:
var eval = 3.14; // This will cause an error

// --12) The word arguments cannot be used as a variable:
var arguments = 3.14; // This will cause an error

// --13) The with statement is not allowed:
with(Math) {
        x = cos(2);
    } // This will cause an error

// --14) For security reasons, eval() is not allowed to create variables in the scope from which it was called:
eval("var x = 2");
alert(x); // This will cause an error

// --15) The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
function myFunction() {
    alert(this); // will alert "undefined"
}
myFunction();

// --16) Future Proof!--> Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
// These are:
//>  implements
//>  interface
//>  let
//>  package
//>  private
//>  protected
//>  public
//>  static
//>  yield
var public = 1500; // This will cause an error