/* 
$ For running JS file we need a environment that can understand js code and then execute it,

  -- So this environment in which our code is executed and is evaluated is know as Execution Context.

  -- JS Engines creates a by default environment i.e execution context before it starts executing any code, This Execution Context is know as Global Execution Context.

  -- All variable and functions that is not inside ANY function are inside this Global Execution context, A new Execution Context is created each time a function is call/executed.

  -- The Global execution context is just a simple execution context but the difference is it is default, A new Execution Context is only created when a function is execute;
     > It is associated with Global Object. Which means window object.

# Execution Stack is also known as "calling stack" is a stack with a LIFO Structure, Which is used to store all the execution context created during the execution of code.
*/
// Go in WebDev Tools--> sources--> ctrl+enter--> see call stack;
var a = "window";

function a() {
    var fa = "2nd function o/p1";
    console.log(fa);
    debugger;
    b();
    console.log("Let's see when i will be on console..");
}

function b() {
    debugger;
    console.log("2nd function o/p2");
    c();
}

function c() {
    debugger;
    console.log("3rd function o/p3");
}
debugger;
a();

/* 
# Execution Stack of the above code:
--1> First Global Execution Context is created.
     Inside it-->
     {
         var a="window";
         >only reference
         function a();
         function b()
         function c();
    } 
     ____________________________
    |                            | 
    |   Global Execution Context | 
    |____________________________|

--2> Second when a() function calls a new execution context will created;
    Inside it-->
    {
        var fa = "2nd function o/p1"
        console.log(fa);
        > b() function call pointer go to create anew execution context;
    }
     ____________________________
    |                            | 
    |   a() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|                     

    
--3> From a() when b() fn call hence a new execution context is created;
     Inside it-->
     {
          console.log("2nd function o/p2");
          > c() call pointer go to create anew execution context;
     }
     ____________________________
    |                            | 
    |   b() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   a() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|

--4> From b() when c() fn call hence a new execution context is created;
      Inside it-->
      {
          console.log("3rd function o/p3");
      }
     ____________________________
    |                            | 
    |   c() Execution Context    | 
    |____________________________|
                 | 
     ____________|_______________
    |                            | 
    |   b() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   a() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|

--5> Now when c() fn execute its work is over it will pop out from the stack and our pointer will go in the previous location from where c() was call;
//   ____________________________
//  |                            | 
//  |   c() Execution Context    | 
//  |____________________________|
//               | 
     ____________|_______________
    |                            | 
    |   b() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   a() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|

--6> Now the pointer is at b() when b() executes its work is over it will pop out from the stack and our pointer will go in the previous location from where b() was call;
//   ____________________________
//  |                            | 
//  |   c() Execution Context    | 
//  |____________________________|
//               | 
//   ____________|_______________
//  |                            | 
//  |   b() Execution Context    | 
//  |____________________________|
//               |
     ____________|_______________
    |                            | 
    |   a() Execution Context    | 
    |____________________________|
                 |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|

--7> Now the pointer is at a() It will executes it remaining code and then when the work is over it will pop out from the stack and our pointer will go in previous location from where a() was call i.e Global Execution Context.
//   ____________________________
//  |                            | 
//  |   c() Execution Context    | 
//  |____________________________|
//               | 
//   ____________|_______________
//  |                            | 
//  |   b() Execution Context    | 
//  |____________________________|
//               |
//   ____________|_______________
//  |                            | 
//  |   a() Execution Context    | 
//  |____________________________|
//               |
     ____________|_______________
    |                            | 
    |   Global Execution Context | 
    |____________________________|
*/