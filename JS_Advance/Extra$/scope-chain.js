/* 
  > IN JS if u want to create a scope other than global scope It can only be created by fn's or by {} braces.
    Now what is this scope?
    ~ Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.
    ~ There are three types of scope in JavaScript — 1) Global Scope, 2) Function Scope, and, 3) Block Scope.

      --1> Global Scope:Any variable that’s not inside any function or block (a pair of curly braces), is inside the global scope. The variables in global scope can be accessed from anywhere in the program.
            var greeting = 'Hello World!';
            function greet() {
              console.log(greeting);
            }
           ? Prints 'Hello World!'
            greet();
      --2> Local Scope or Function Scope: Variables declared inside a function is inside the local scope. They can only be accessed from within that function, that means they can’t be accessed from the outside code. For example:
            function greet() {
              var greeting = 'Hello World!';
              console.log(greeting);
            }
            ? Prints 'Hello World!'
            greet();
            ! Uncaught ReferenceError: greeting is not defined
            console.log(greeting);

      --3> Block Scope: ES6 introduced let and const variables, unlike var variables, they can be scoped to the nearest pair of curly braces. That means, they can’t be accessed from outside that pair of curly braces. For example:
            {
              let greeting = 'Hello World!'; 
              var lang = 'English';
              console.log(greeting); // Prints 'Hello World!'
            }
            ? Prints 'English'
            console.log(lang);
            ! Uncaught ReferenceError: greeting is not defined
            console.log(greeting);

            ? We can see that var variables can be used outside the block, that is, var variables are not block scoped.

        -- Nested Scope: Just like functions in JavaScript, a scope can be nested inside another scope.
            var name = 'Peter';
            function greet() {
              var greeting = 'Hello';
              {
                let lang = 'English';
                console.log(`${lang}: ${greeting} ${name}`);
              }
            }
            greet();   
            
            ? Here we have 3 scopes nested within each other. First, the block scope (created due to the let variable) is nested inside the local or function scope which is in turn nested inside the global scope.

        -- Lexical Scope: Lexical Scope (also known as Static Scope) literally means that scope is determined at the lexing time (generally referred to as compiling) rather than at runtime. For example:
            let number = 42;
            function printNumber() {
              console.log(number);
            }
            function log() {
              let number = 54;
              printNumber();
            }
            // Prints 42
            log();

            ? Here the console.log(number) will always print 42 no matter from where the function printNumber() is called. This is different from languages with the dynamic scope where the console.log(number) will print different value depending on from where the function printNumber() is called.

# What is Scope Chain?
  ~ A scope chain is a series of scopes or variable objects, determining what variables and functions to which a certain execution context has access.
  ~ The scope chain is used to resolve the value of variables names in JS.
  {
    > When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope.
      > If it could not find the variable, it will look into the outer scope,
        > and will continue to do so until it finds the variable or reaches global scope.
          > If it’s still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.

            let foo = 'foo';
            let number = 'number';
            let baz='bx';
            function bar() {
              let baz = 'baz';
              ? Prints 'baz'
              console.log(baz);
              ? Prints 'foo'
              console.log(foo);
              number = 42;
              console.log(number);  // Prints 42
            }
            bar();

            -- When the function bar() is executed, the JavaScript engine looks for the baz variable and finds it in the current scope. HEnce it will not search it in upper scope:
            -- Next, it looks for foo variable in the current scope and it can’t find it there, so it looks for the variable in outer scope and finds it there (i.e global scope).
            -- After that, we assign 42 to the number variable, so the JavaScript engine looks for the number variable in the current scope and after that in the outer scope.
               > If the script is not in strict mode, the engine will create a new variable named number and assign 42 to it or return an error (if not in strict mode).
            -- So when a variable is used the engine will traverse the scope chain until it finds the variable.
 }
 ? How Does Scope and Scope Chain Work? 
   $ What is a Lexical Environment?
     ! AB ye kya he yrr-_-! Don't worry it is just another name of execution context, 😀😂
      A lexical environment is a structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object and array object] or primitive value).
      Simply put, a lexical environment is a place where variables and references to the objects are stored.
      * Note — Don’t confuse lexical scope with the lexical environment, lexical scope is a scope that is determined at compile time and a lexical environment is a place where variables are stored during the program execution.
      IN A Execution Context or Lexical Environment:
      We have our variables, function reference and a reference to the outer scope:
      i.e a lexical Environment look like this-->
        lexicalEnvironment = {
          a: 25,
          obj: <ref. to the object>
          outer: <outer lexical environemt>
        }     
     This reference to the outer scope create a scope chain,
     Through which js engine search for the variable values..

   $ Now let see How does JavaScript Engine Perform Variable Lookups?
     Example:
     let greeting = 'Hello';
     function greet() {
       let name = 'Peter';
       console.log(`${greeting} ${name}`);
     }
     greet();
     {
       let greeting = 'Hello World!'
       console.log(greeting);
     }
     
     -- When the above script loads, a global Execution context/lexical environment is created, which contains variables and functions defined inside the global scope,like this:
        globalLexicalEnvironment = {
          greeting: 'Hello'
          greet: <ref. to greet function>
          outer: <null>
        }   
        ? Here outer lexical environment is set to null because there is no outer scope after global scope.

     -- After that, a call to the greet() function is encountered. So a new Execution context/lexical environment is created for the greet() function,like this:
        functionLexicalEnvironment = {
          name: 'Peter'
          outer: <globalLexicalEnvironment>
        }
        ? Here outer lexical environment is set to globalLexicalEnvironment because its outer scope is the global scope.
        > After that, the JavaScript engine executes the console.log(`${greeting} ${name}`) statement.
        > The JavaScript engine tries to find the greeting and name variables inside the function’s lexical environment or the current execution context.
        > It finds the name variable inside the current lexical environment but it won’t be able to find the greeting variable inside the current lexical environment.
        > So it looks inside the outer lexical environment (defined by the outer property i.e global lexical environment) and finds the greeting variable.

     -- Next, the JavaScript engine executes at the code inside the block. So it creates a new lexical environment for that block. For example:
        blockLexicalEnvironment = {
          greeting: 'Hello World',
          outer: <globalLexicalEnvironment>
        }
        ? Next, the console.log(greeting) statement is executed, the JavaScript engine finds the variable in the current lexical environment and uses that variable. So it does not look inside the outer lexical environment (global lexical environment) for the variable.

     -- Conclusion: So when a variable is used in a program, the JavaScript engine will try to find the variable in the current lexical environment and if it could not find the variable there, it looks inside the outer lexical environment to find the variable. So that’s how the JavaScript engine performs variable lookups.

# What is Lexical Scoping?
  Hey! Do not confuse with these new term it is just related to the lexical scope,😅
  We knw that Lexical scope are the scopes created at compile time, so
  THere is behaviour between these Lexical scopes,i.e
  If u created two lexical scopes inside each other i.e nested scopes, 
  $ Then there is a study or a concept which says that a inner scope can access the outer scope, but the vice versa is not true, That's all this is called lexical scoping.
  From this definition we can also a conclude a new definition as we know that in js a function creates a new scope, so if
  A fn is inside a function i.e two scopes inside each other then we can say that the inner function can access outer function scope but the vice-versa is not true;
*/

var a = "HEllo user";

function greet() {
    var b = "How are You!";
    greet2();

    function greet2(args) {
        var c = "Good Evening😀";
        console.log(a + b + c);
        bye();
    }
}

function bye() {
    var d = "We are unable to process request..🤐";
    console.log(a + b + c + d);
}

greet();

/* 
? IN THIS EXAMPLE-->
-- When this scripts load, JS Engine creates a environment to run this script.
-- But before the execution of this script, a default environment is created--> Global Execution Context;
-- In this Global Execution Context--> All the global variables and global functions reference get stored; like this;
   globalExecutionContext={
       var a: undefined // variable hoisting.
       a:"Hello user"
       greet:<fn reference>
       bye:<fn reference>

       outer:<null>// reference to the outer scope but there is no outer scope hence null;
   }

-- Next when pointers comes at the function call greet() a new execution context is created-->
   greetFunctionExecutionContext={
       var b:undefined
       b:"How are you!"
       greet2:<fn reference>

       outer:<globalScopeReference>
   }

-- Next when pointers come at the function call greet2() a new execution context is created-->
   greet2FunctionExecutionContext={
       var c:undefined
       c:"Good Evening😀"

       outer:<ParentFnScopeReference, globalScopeReference>// bcoz of lexical scoping concept;

   }  
   ? In execution phase of this execution context--> console.log(a+b+c)
     First it will search "a" variable in the current scope, not found then using scope chain move to its outer scope, not found then using scope chain move to its further outer scope which is global scope here it found hence it will use the value of a;
     Second it will search "b" variable in the current scope , not found then using scope chain move to its outer scope here it found hence it will use the value of b.
     Then it will search "c" variable in the current scope, found hence it will use the value of c.

-- Next when pointers come at the function call bye(); a new execution context is created-->
   byeFunctionExecutionContext={
       var d:undefined,
       d:"We are unable to process request..🤐",

       outer:<globalScopeReference>
   }
   ? In execution phase of this execution context--> console.log(a+b+c+d);
     First it will search "a" variable in the current scope, not found then using scope chain move to its outer scope, which is global scope here found the a varibale hence use its value;
     Then it will search "b" variable in the current scope, not found then using scope chain move to its outer scope, which is global scope here also not found and as there is no outer scope for this execution context in its scope chain it will not search anymore and throw an error: //! variable b is not defined.
     Hence the execution stops....!

!!!! NOTE: One Outer function cannot access the scope of another outer function.
     

*/