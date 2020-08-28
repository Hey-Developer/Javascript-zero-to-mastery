/* 
# Execution Context-->
  There are two phases of execution context:
  --1> Creation Phase:
       In this phase 3 Task performed:
       > Variables Object are created:
       > Scope Chains are created:
       > behaviour of "this" variable is decided.

  --2> Execution Phase:
       In this phase:
       > Current Execution run line by line.

? Now what is this variable object:
  * A variable object is simply an object storing data related to an execution context. The data includes variables and function declarations defined in the context.
  $ it is the object created in which all the variables/fn are stored which is present in that execution context. INSIDE IT-->
    --1> For each function(Fn declarations ) a property is created in the variable object. Which is pointing to that fn.
    --2> For each variable(Variable declarations ) a property is created in the variable object. Which is then set to undefined.
    --3> Also for the arguments of the function a separate object is created known as ARGUMENTS OBJECTS.
 
    > THE line 1 and 2 are called  HOISTING in JS. Hoisting is JS mechanism where variables and function declarations are moved to top of their scope before the code execution.

*/
function foo() {
    var a = 20;

    function bar() {}
    (function qux() {});
    console.log(a); // 20
    console.log(bar); // function bar(){}
    console.log(qux); // reference error
}
foo();

/* 
In the example above, 
the variable object of the foo() function contains the declaration of variable a and function bar(). 
One thing to notice here is that while function declaration is included in the variable object, 
function expression is not as we can see in the example, 
it shows that an access to qux() function results in a reference error. 
A variable object is abstract and special, it cannot be accessed in code but it is handled by JavaScript engine.
*/