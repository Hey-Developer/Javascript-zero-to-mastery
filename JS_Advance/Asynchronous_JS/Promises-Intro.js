/* 
$ JavaScript Promise..
  Imagine that you’re a top singer, and fans ask day and night for your upcoming single.

  To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

  Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the single.

  This is a real-life analogy for things we often have in programming:

  > A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.

  > A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.

  > A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”.The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

  The constructor syntax for a promise object is:
  $ et promise = new Promise(function(resolve, reject) {
     executor (the producing code, "singer")
  });

 -- The function passed to new Promise is called the    executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

 -- Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

 -- When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

 -- resolve(value) — if the job finished successfully, with result value.
 -- reject(error) — if an error occurred, error is the error object.

                new Promise(executor)
                state: "pending" 
                result: undefined
       _______________|_______________________
      |                                      |    
resolve(value)                          reject(error)
state: "fulfilled"                      state: "rejected"
result: value                           result: error

EXample---
         let promise = new Promise(function(resolve, reject) {
              the function is executed automatically when the promise is constructed
         
            after 1 second signal that the job is done with the result "done"
           setTimeout(() => resolve("Data IS Fetched"), 1000);
         });
         -- The executor is called automatically and immediately (by new Promise).

         -- The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

         -- After one second of “processing” the executor calls resolve("done") to produce the result. This changes the state of the promise object:

That was an example of a successful job completion, a “fulfilled promise”.

Example---
       let promise = new Promise(function(resolve, reject) {
          after 1 second signal that the job is finished  with an error
         setTimeout(() => reject(new Error("Whoops! Data not found")), 1000);
       });

       -- The call to reject(...) moves the promise object to "rejected" state:

*To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.

*A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.

! There can be only a single result or an error:
  ~ The executor should call only one resolve or one reject. Any state change is final.
  ~ All further calls of resolve and reject are ignored:

    let promise = new Promise(function(resolve, reject) {
      resolve("done");
    
      reject(new Error("…")); // ignored
      setTimeout(() => resolve("…")); // ignored
    });

! Reject with Error objects
  ~ In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error). The reasoning for that will soon become apparent.

! Immediately calling resolve/reject:
  ~ In practice, an executor usually does something asynchronously and calls resolve/reject after some time, but it doesn’t have to. We also can call resolve or reject immediately, like this:
  let promise = new Promise(function(resolve, reject) {
     not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });
   For instance, this might happen when we start to do a job but then see that everything has already been completed and cached.

   That’s fine. We immediately have a resolved promise.

! The state and result are internal:
  The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.
----------------------------------------------------------

$ Consumers: then, catch, finally
  A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally.

-- then, The most important, fundamental one is .then
The syntax is:
> promise.then(
  function(result){
        handle a successful result  
        },

  function(error) { 
       handle an error 
        }
   );

-- The first argument of .then is a function that runs when the promise is resolved, and receives the result.

-- The second argument of .then is a function that runs when the promise is rejected, and receives the error.

# For instance, here’s a reaction to a successfully resolved promise:

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

# And in the case of a rejection,

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1second
  );

# If we’re interested only in successful completions, then we can provide only one function argument to .then:
 let promise = new Promise(resolve => {
   setTimeout(() => resolve("done!"), 1000);
 });
 
 promise.then(alert); // shows "done!" after 1 second

# If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

-- The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
   .catch(f) is the same as promise.then(null, f)
  promise.catch(alert); // shows "Error: Whoops!" after 1 second

# Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

--The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.

--finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

 new Promise((resolve, reject) => {
    do something that takes time, and then call resolve/  reject
 })
   // runs when the promise is settled, doesn't matter    successfully or not
   .finally(() => stop loading indicator)
   .then(result => show result, err => show error)

* .finally(f) is a more convenient syntax than .then(f, f): no need to duplicate the function f.
 
! On settled promises handlers run immediately-->
  If a promise is pending, .then/catch/finally handlers wait for it. Otherwise, if a promise has already settled, they execute immediately:

  /the promise becomes resolved immediately upon creation
  let promise = new Promise(resolve => resolve("done!"));
    promise.then(alert); // done! (shows up right now)
*/

// >>>>>>>>>> Simple Example >>>>>>>>>>
// Scenario: Fetching data from the server and if it succeed display it..

const fetchData = new Promise((resolve, reject) => {
    console.log("Start Loading...");
    // Producer
    // My code to fetch the data from the server..
    // Since server will take some time hence i am using setTimeout()--

    setTimeout(() => {
        let requestStatus = true;
        // let requestStatus = false;
        // Incase some error occurred..
        if (requestStatus === true) {
            console.log(`Data Fetched Successfully..Hence Promise resolved..`);
            // Pretend that this data has been fetched from the server..
            const student = [{
                    name: "John",
                    rollNo: "23",
                },
                {
                    name: "Cnu",
                    rollNo: "13",
                },
                {
                    name: "Punit",
                    rollNo: "59",
                },
                {
                    name: "Shivani",
                    rollNo: "72",
                },
            ];
            resolve(student);
        } else {
            console.log(`Data Not Found ..Hence Promise reject..`);
            reject(new Error("Data Not Found"));
        }
    }, 3000);
});

// Now the lets bind the consumer that is what to do when promises is settled..
fetchData.then(
    result => {
        console.log("Thanq for fulfilling the request..");
        console.log(result);
    },

    error => {
        // It is necessary to handle the error otherwise our program flow will stop..
        try {
            throw error;
        } catch (e) {
            console.log(e);
        }
    }
);

// ----------For handling only Error----------
fetchData.catch(error => {
    console.log("Something went wrong...");
});

// ----------For Running mandatory code after promise settled no matter promise is resolve or reject----------
fetchData.finally(() => {
    console.log(`Stop loading....`);
});

//$ we know that the executor function inside promise object runs immediately when the promise object is  instantiated.. But in real scenarios we will click on the button and then the executor function will call so lets write promises in some different way..

// Making a function which we return Promise..
// So we can say it a dataManager who link between the server and the client..

function dataManager() {
    return new Promise((resolve, reject) => {
        // Executor or Producer
        setTimeout(() => {
            console.log("Request Initiated");
            let requestStatus = true;
            if (requestStatus) {
                console.log(`Data Fetched`);
                resolve("U request is fulfilled..HEre is your data.");
            } else {
                console.log(`Data Not found..`);
                reject("Request Not fulfilled..");
            }
        }, 8000);
    });
}
// Now dataManager dealing with the client about the response from the server..
// -- dataManger made a promise between the server and the client that after the getting response from the server i will inform u what to do..

dataManager().then(result => {
    console.log(result);
});

dataManager().catch(err => {
    console.log(err);
});

/* 
$ Promises..
  > Promises allow us to do things in the natural order. First, we run loadScript(script), and .then we write what to do with the result.
  > We can call .then on a Promise as many times as we want. Each time, we’re adding a new “fan”, a new subscribing function, to the “subscription list”. More about this in the next chapter: Promises chaining.

$ CallBacks..
  > We must have a callback function at our disposal when calling loadScript(script, callback). In other words, we must know what to do with the result before loadScript is called.
  > There can be only one callback.

*/

// --Delay with a promise
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => alert("runs after 3 seconds"));