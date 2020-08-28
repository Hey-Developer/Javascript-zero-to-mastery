/* 
Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.

$ Implicit try…catch:
  The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.

  ~For instance this code..
  new Promise((resolve, reject) => {
  throw new Error("Whoops!");
  }).catch(alert); // Error: Whoops!

  ~…Works exactly the same as this:
   new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
  }).catch(alert); // Error: Whoops!

  -- The "invisible try..catch" around the executor automatically catches the error and turns it into rejected promise.

  -- This happens not only in the executor function, but in its handlers as well. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler.

  Here’s an example:
  new Promise((resolve, reject) => {
  resolve("ok");
  }).then((result) => {
     throw new Error("Whoops!"); // rejects the promise
  }).catch(alert); // Error: Whoops!

  -- This happens for all errors, not just those caused by the throw statement. For example, a programming error:

  new Promise((resolve, reject) => {
  resolve("ok");
  }).then((result) => {
  blabla(); // no such function
  }).catch(alert); // ReferenceError: blabla is not defined

$ Rethrowing:
  As we already noticed, .catch at the end of the chain is similar to try..catch. We may have as many .then handlers as we want, and then use a single .catch at the end to handle errors in all of them.
 
  -- If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

  ~In the example below the .catch successfully handles the error:
  / the execution: catch -> then
  new Promise((resolve, reject) => {
  
    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    alert("The error is handled, continue normally");
  
  }).then(() => alert("Next successful handler runs"));

  ~Here the .catch block finishes normally. So the next successful .then handler is called.

  ~In the example below we see the other situation with .catch. The handler (*) catches the error and just can’t handle it (e.g. it only knows how to handle URIError), so it throws it again:
  // the execution: catch -> catch -> then
  new Promise((resolve, reject) => {
  
    throw new Error("Whoops!");
  
  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
  
      throw error; // throwing this or another error jumps   to the next catch
    }
  
  }).then(function() {
    / doesn't run here 
  }).catch(error => { // (**)
  
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal   way
  
  });

  ~ The execution jumps from the first .catch (*) to the next one (**) down the chain.

$ Unhandled rejections:
  In case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler. But there is none. So the error gets “stuck”. There’s no code to handle it.

  In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong.

  What happens when a regular error occurs and is not caught by try..catch? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.

  window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
  });
  
  new Promise(function() {
    throw new Error("Whoops!");
  }); // no catch to handle the error

  --If an error occurs, and there’s no .catch, the "unhandledrejection" handler triggers, and gets the event object with the information about the error, so we can do something.
  --Usually such errors are unrecoverable, so our best way out is to inform the user about the problem and probably report the incident to the server.

!! Error in setTimeout:
   What do you think? Will the .catch trigger? Explain your answer.
   new Promise(function(resolve, reject) {
     setTimeout(() => {
       throw new Error("Whoops!");
     }, 1000);
   }).catch(alert);

   -- The answer is: no, it won’t:
      > As said in the chapter, there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.
      > But here the error is generated not while the executor is running, but later. So the promise can’t handle it.

~ Correct code::
  new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
}).catch(alert);

 
*/