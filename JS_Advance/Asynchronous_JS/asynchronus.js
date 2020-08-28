/* 
# Synchronous vs Asynchronous Programming-->
  $ Synchronous Programming-->
  > For any computation we do requires processors for our JS engine to get the job done.
  > Many requests interact with things outside the processor for ex->they may communicate over a network or requests data from storage disk.
  > The process of getting data from a memory is a lot slower process.
  > We don't want our processor to sit idle when such things are happening.
  ~ Suppose u have a code in which ur requesting some file from google server and then in next line ur again requests some file from another server, now after these line u write a dom code,
    {
        request from google server;
        request from another server;
        document.write("Hello");
    }

    Now as you know requesting something from server takes some time 
    This time depends on your internet connection and server speed.
    So let us assume that your first request take 10sec to return
    And second request take 12 sec to return,
    While the third code requires only 3ms to complete.
    But till all its above code is finished then only it will execute,

    * So this is called Synchronous Programming,
      > In which all the task perform one by one, 
      > and until one task is not finished next task will not execute,
      > So here in this case our code will execute in total 22.003 sec to execute. Because of the two request tasks our main code is block.
  
    This is worst case of our code--Because of Synchronous Programming.
    
    SO What is the solution to this problem?

  $ Asynchronous Programming-->
    In Asynchronous programming approach, we divide the work, i.e In the above example if we do it from asynchronous programming then--.
    > It didn't block the main thread of the program while waiting for other code to be run.
    > I.e here while one request is coming it says let it come i am moving on the next code.
    > it move the next code to execute and in background the previous code is running waiting for the its resources.
    > In this our wait time is reduced and also because of the waiting for the resources our main thread is also not blocked.
    > This is the profit of asynchronous programming.
    # So in asynchronous model allows multiple things to happen at the same time.






$ Knw let's see which programming approach js follows-->
  # JavaScript is Synchronous:
  > JavaScript is a single-threaded programming language which means only one thing can happen at a time. That is, the JavaScript engine can only process one statement at a time in a single thread.
  > While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread.
  > Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.
  Ex-
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    alert('You clicked me!');
  
    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
  });  
    ~ In this block, the lines are executed one after the other:
      > We grab a reference to a <button> element that is already available in the DOM.
      > We add a click event listener to it so that when the button is clicked:
      > An alert() message appears.
      > Once the alert is dismissed, we create a <p> element.
      > We then give it some text content.
      > Finally, we append the paragraph to the document body.

      * While each operation is being processed, nothing else can happen — rendering is paused. (This is called Blocking)
      * This is because as we said  JavaScript is single threaded. Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.
      > So in the example above, after you've clicked the button the paragraph won't appear until after the OK button is pressed in the alert box.

$ but wait this is not the end there are certain methods through which we can achieve Asynchronous Programming in Js-->
  # Asynchronous JavaScript-->
    As you see how worst our code will if we use js in synchronous manner,
    So there are certain things through which we manipulate JS to behave in an asynchronous way.
    The ways are-->
    --1) Async/await.
    --2) Callbacks.
    --3) promises.
*/

/* 
$ Asynchronous Callbacks-->
  The earliest and most straightforward solution to being stuck in the synchronous world is using asynchronous callbacks (think setTimeout()).
  ? Now what is this callbacks? Callbacks are function which passed as an arguments to another function..Simple 😀

  
Ex-->(callbacks)
    const networkRequest = () => {
      setTimeout(() => {
        console.log('Async Code');
      }, 2000);
    };
    console.log('Hello World');
    networkRequest();  
    console.log('The End');  
    
    > Here I have used setTimeout method to simulate the network request. Please keep in mind that the setTimeout is not a part of the JavaScript engine, it’s a part of something known as web APIs (in browsers)
    > To understand how this code is executed we have to understand a few more concepts such event loop and the callback queue (also known as task queue or the message queue).
      ~ The event loop, the web APIs and the message queue/task queue are not part of the JavaScript engine, it’s a part of browser’s JavaScript runtime environment or Nodejs JavaScript runtime environment (in case of Nodejs).
    > Now let’s get back to the above code and see how it’s executed in an asynchronous way.
      So 
      -- When the above code loads in the browser, the console.log(‘Hello World’) is pushed to the stack and popped off the stack after it’s finished.

      -- Next, a call to networkRequest() is encountered, so it’s pushed to the top of the stack.

      -- Next setTimeout() function is called, so it’s pushed to the top of the stack. The setTimeout() has two arguments: 1) callback and 2) time in milliseconds (ms).

      -- The setTimeout() method starts a timer of 2s in the web APIs environment.
         > At this point, the setTimeout() has finished and it’s popped off from the stack. After it, console.log('The End') is pushed to the stack, executed and removed from the stack after its completion.
         
         > Meanwhile, the timer has expired, now the callback is pushed to the message queue. But the callback is not immediately executed, and that’s where the event loop kicks in.
         
         > The Event Loop: The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. 
         
           > If the call stack is empty, it looks into the message queue to see if there’s any pending callback waiting to be executed.
           
             > In this case, the message queue contains one callback, and the call stack is empty at this point. So the Event loop pushes the callback to the top of the stack.
             
         > After that the console.log(‘Async Code’) is pushed to the top of the stack, executed and popped off from the stack. At this point, the callback has finished so it’s removed from the stack and the program finally finishes.

      -- Suppose if our code contains DOM Event part then-->
         document.querySelector('.btn').addEventListener('click',(event) => {
           console.log('Button Clicked');
         });     

         -- DOM Events: The Message queue also contains the callbacks from the DOM events such as click events and keyboard events. For example:
         -- In case of DOM events, the event listener sits in the web APIs environment waiting for a certain event (click event in this case) to happen, and when that event happens, then the callback function is placed in the message queue waiting to be executed.
         -- Again the event loop checks if the call stack is empty and pushes the event callback to the stack if it’s empty and the callback is executed.

*/