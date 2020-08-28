/* 

? Modern Way--> Now in The newest type of event mechanism is defined in the Document Object Model (DOM) Level 2 Events Specification, which provides browsers with Event listeners.
? NOW WHAT IS EVENT LISTENERS:
  A listener is an object that is notified when an event occurs.
  > A listener has two major requirements. 
    ~ First is, listener must be registered with a source to receive notifications and 
    ~ second is, it must implement methods to receive and process these notifications.

# DOM Event Model-->
  ~ The DOM 2 event model specification describes a standard way to create, capture, handle and cancel event in a tree like structure such as an XHTML document's object hierarchy.
  PHASES:
  > Capture phase.
  > Target Phase.
  > Bubbling Phase.
*/

/* 
-- addEventListener()
   This method is introduced by DOM2,used to engage an event handler in a page.
   OR to connect a event to a object.
   > Syntax: Object.addEventListener(event, handler,capturePhase)
     ~ Object is the node to which the listener is to be bound.
     ~ Event is a string indicating type of event.
     ~ Handler is the Function that Should be called when the event occurs. or it is the JS code.
     ~ capturePhase is a BOOLEAN indicating whether to use Bubbling(false) or Capture(true), if omitted There is false by default.
    
   > Why we should use addEventListener()
     ~ It allows you to bind multiple handlers to an object for the same event.
     ~ It enable you finer-grained control of the phase when the listener is activated.(capture or bubbling)
     ~ It works on any DOM Element, not just HTML elements.--> You can add event listeners to any DOM object not only HTML elements. i.e the window object.
*/
var greetBtn = document.getElementById("greetUser");
greetBtn.addEventListener("click", function() {
    alert("Good AfterNoon User:)");
});

// ? Multiple handler on same event.
var evening = function() {
    alert("Good Evening USer-_-");
};
greetBtn.addEventListener("click", evening);
// - Now it will not override first above function will be executed then second one.

/* 
-- removeEventListener()
   This method is used to remove handler, with same arguments given when event was added.
*/
greetBtn.removeEventListener("click", evening);

/* 
# DOM Event Flow/Event Propagation-->
  The DOM 2 Event Model specification describes a standard way to create,capture,handle,and cancel the event in a tree like structure such as XHTML document's hierarchy.
  THERE are 3 phases in this model..

  > Capture phase--Events propagate from top to bottom.
  > Target phase-- Events remain at target.
  > Bubbling phase-- Events propagate from bottom to top.

  ~ Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
  ~ In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
  ~ In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
    > With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter: or u can use true as last param.
*/
// --Bubbling phases: Here event propagate from child to parent that is if u have a event listener added in child of type click and u also added a event listener to parent of type click,Then when u clicked child after it performing its action it will propagate to parent and perform its click action:
document.getElementById("one").addEventListener(
    "click",
    function() {
        console.log(`1`);
    },
    false
);
document.getElementById("two").addEventListener(
    "click",
    function() {
        console.log(`2`);
    },
    false
);
document.getElementById("three").addEventListener(
    "click",
    function() {
        console.log(`3`);
    },
    false
);
document.getElementById("four").addEventListener(
    "click",
    function() {
        console.log(`4`);
    },
    false
);

// --Capture phase: Here event propagate from parent to child that is when u click on parent it will perform its action and then it will perform its descendent child click action.
// Also if child is clicked it control will go to parent click action.
document.getElementById("one").addEventListener(
    "click",
    function() {
        console.log(`1`);
    },
    true
);
document.getElementById("two").addEventListener(
    "click",
    function() {
        console.log(`2`);
    },
    true
);
document.getElementById("three").addEventListener(
    "click",
    function() {
        console.log(`3`);
    },
    true
);
document.getElementById("four").addEventListener(
    "click",
    function() {
        console.log(`4`);
    },
    true
);

/* 
!Note: The addEventListener() and removeEventListener() methods are not supported in IE 8 and earlier versions. 
!However, for these specific browser versions, you can use the attachEvent() method to attach an event handlers to the element, and the detachEvent() method to remove it:
var x = document.getElementById("myBtn");
if (x.addEventListener) {     // For all major browsers, except IE 8 and earlier
  x.addEventListener("click", myFunction);
} else if (x.attachEvent) {   // For IE 8 and earlier versions
  x.attachEvent("onclick", myFunction);
}
*/