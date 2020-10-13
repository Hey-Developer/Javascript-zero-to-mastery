/* 
$ JavaScript HTML DOM Events-->
  HTML DOM allows JavaScript to react to HTML events:
  The action to which JS can respond are called Event.
  
  Events are a part of the Document Object Model (DOM) Level 3 and every HTML element contains a set of events which can trigger JavaScript Code.
  
  > A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
  > Examples of HTML events:
    ~ When a user clicks the mouse
    ~ When a web page has loaded
    ~ When an image has been loaded
    ~ When the mouse moves over an element
    ~ When an input field is changed
    ~ When an HTML form is submitted
    ~ When a user strokes a key

  # Event Handler:
    Event Handling is the mechanism that controls the event and decides what should happen if an event occurs.
    This mechanism have the code which is known as event handler that is executed when an event occurs.
    An event handler is JS code associated with a particular part of the document and a particular event.
    A handler is executed if and when the given event occurs at the part of the document to which it associated.
    > onclick="JS_CODE" //? THIS JS_CODE is called Event Handler.

  # IN HTML  there are some events:
    > onchange	  An HTML element has been changed
    > onclick	    The user clicks an HTML element
    > onmouseover	The user moves the mouse over an HTML element
    > onmouseout	The user moves the mouse away from an HTML element
    > onkeydown	  The user pushes a keyboard key
    > onload	    The browser has finished loading the page
    
  # Event Binding with html attributes:(Inline event handlers)
    These bindings are element attributes, such as onclick and onchange, which can be set equal tp JS that is to be executed when the given event occurs at that object.
    > EX- <button onclick="alert('Button clicked')"> Click ME </button>
*/
// A function which is called when button is clicked!!!
var buttonClicked = () => {
    alert("Welcome user:");
};

/* 
# Event Binding with JavaScript:
  When we use this approach we can add or remove handlers dynamically as well as it improves the separation between the structure of document and its logic and presentation:
  > EX-<button id="myBtn">Click ME!</button>

  IN JS-->
  var btn=document.getElementById('myBtn');
  btn.onclick=function() { alert("Button Clicked !!")}
  > here u can see both html and JS are separated not mixing up.
*/

var btn = document.getElementById("myBtn");
btn.onclick = function() {
    alert("Hello World-__-");
};

/* 
>Also u can use normal function and then call it onclick:
  function display() {
      alert("I LOVE YOU SHRADDHA");
  } 
  btn.onclick = display;

*/

// # OverWrite event handler-->
function display1() {
    alert("Hello CNU ");
}

function display2() {
    alert("Hello Mrs.Shraddha");
}
btn.onclick = display1;
btn.onclick = display2;
// > Now when u click the button display2 function will call because it overwrite the previous mentioned function: