/* 
# Exception Handling:
  An exception signifies the presence of an abnormal condition which requires special operable techniques. 
  In programming terms, an exception is the anomalous code that breaks the normal flow of the code. 
  Such exceptions require specialized programming constructs for its execution.

  In programming, exception handling is a process or method used for handling the abnormal statements in the code and executing them. 
  It also enables to handle the flow control of the code/program. 
  For handling the code, various handlers are used that process the exception and execute the code.
  For example, the Division of a non-zero value with zero will result into infinity always, and it is an exception. 
  Thus, with the help of exception handling, it can be executed and handled.


  $ Advantage of EH--> 
    > if u have 1000 line of code now suppose some exception or error comes at lin 500 then the code after that 500 line will not execute
    > Hence if we know that there are certain chances of exception coming at the line 500 then we handle that exception so that,
    > out remaining 500 lines will execute without any interruption.


  $ Types of Errors:
    --1) Syntax errors, also called parsing errors, occur at compile time in traditional programming languages and at interpret time in JavaScript.
         EX- the following line causes a syntax error because it is missing a closing parenthesis. 
             {
                document.write("Hii");
                window.print(;
              }
        * When a syntax error occurs in JavaScript, only the code contained within the same thread as the syntax error is affected and the rest of the code in other threads gets executed assuming nothing in them depends on the code containing the error.

    --2) Runtime errors, also called exceptions, occur during execution (after compilation/interpretation).
         EX- the following line causes a runtime error because here the syntax is correct, but at runtime, it is trying to call a method that does not exist.
             window.printme();
         * Exceptions also affect the thread in which they occur, allowing other JavaScript threads to continue normal execution.

    --3) Logic errors can be the most difficult type of errors to track down. These errors are not the result of a syntax or runtime error. Instead, they occur when you make a mistake in the logic that drives your script and you do not get the result you expected.
         You cannot catch those errors, because it depends on your business requirement what type of logic you want to put in your program.


  $ Error Object:()
    When a runtime error occurs, it creates and throws an Error object. Such an object can be used as a base for the user-defined exceptions too. An error object has two properties:
    > name: This is an object property that sets or returns an error name.
    > message: This property returns an error message in the string form.

     Runtime errors result in new Error objects being created and thrown.
    * Although Error is a generic constructor, there are following standard built-in error types or error constructors beside it:

    -- EvalError: It creates an instance for the error that occurred in the eval(), which is a global function used for evaluating the js string code.

    -- InternalError: It creates an instance when the js engine throws an internal error.

    -- RangeError: It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.

    -- ReferenceError: It creates an instance for the error that occurs when an invalid reference is de-referenced.

    -- SyntaxError: An instance is created for the syntax error that may occur while parsing the eval().

    -- TypeError: When a variable is not a valid type, an instance is created for such an error.

    -- URIError: An instance is created for the error that occurs when invalid parameters are passed in encodeURI() or decodeURI().


  $ Exception Handling Statements:

    -- The try statement lets you test a block of code for errors.
    
    -- The catch statement lets you handle the error.
    
    -- The throw statement lets you create custom errors.
    
    -- The finally statement lets you execute code, after try and catch, regardless of the result.

    try {
         Block of code to try
        }
    catch(err) {
         Block of code to handle errors
        }


  $ Some Points:
    > Code before the exception will run,
    > But code after the exception will not run, if the exception is not handled.
    >  catch {} statement executes only after the execution of the try {} statement, or we can say catch {} block executes only when try{} block will have some exception:
    > One try {} block can have multiple catch{} block
    > try {} block must be written with catch {} or finally {} block.
    > There should be no statement between try {} block and catch {} block or finally {} block.

*/

// Example-1:  we have written alert as adddlert to deliberately produce an error:
try {
    adddlert("Welcome guest!");
} catch (err) {
    document.write(err.message + "<br>");
}

/* 
-- throw statement:
   When an error occurs, JavaScript will normally stop and generate an error message.
   The technical term for this is: JavaScript will throw an exception (throw an error).

   ~ The throw statement allows you to create a custom error.
      > Technically you can throw an exception (throw an error).
      > The exception can be a JavaScript String, a Number, a Boolean or an Object:

      throw "Too big";    // throw a text
      throw 500;          // throw a number
   * Note: Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.
-- try…catch…throw syntax
   try{  
        throw exception; // user can define their own exception  
      }  
   catch(error) {  
             expression;
     }  // code for handling exception
*/

try {
    //? Here Error is a generic constructor: there are seven other core constructor in JS: here we can also use them;

    throw new Error("This is the throw keyword"); //user-defined throw statement.

    //? Also throw new ReferenceError("Cannot be referenced");
} catch (e) {
    document.write(e.message); // This will generate an error message
}

// Input Validation Example
// This example examines input. If the value is wrong, an exception (err) is thrown.

function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        message.innerHTML = "Input is " + err;
    }
}

/* 
-- The finally Statement:
   Finally is an must block of statements which is executed after the execution of try and catch statements. 
   Finally block does not hold for the exception to be thrown. Any exception is thrown or not, finally block code, if present, will definitely execute. 
   It does not care for the output too.

   try {
        Block of code to try
    }
    catch(err) {
        Block of code to handle errors
    }
    finally {
        Block of code to be executed regardless of the try / catch result
    }

*/
try {
    var a = 2;
    if (a == 2) document.write("ok");
} catch (Error) {
    document.write("Error found" + e.message);
} finally {
    document.write("Value of a is 2 ");
}

/* 
-- The onerror() Method:
   The onerror event handler was the first feature to facilitate error handling in JavaScript. 
   The error event is fired on the window object whenever an exception occurs on the page.

-- The onerror event handler provides three pieces of information to identify the exact nature of the error −
   > Error message − The same message that the browser would display for the given error

   > URL − The file in which the error occurred

   > Line number− The line number in the given URL that caused the error

*/

// Exception Source: Calling a function which is not defined. from button

// Exception Handler:
window.onerror = function() {
    alert("An error occurred.");
};

//! You can use an onerror method, as shown below, to display an error message in case there is any problem in loading an image.
/* <img src="myimage.gif" onerror="alert('An error occurred loading the image.')" /> */