/* 
For most event types, handlers registered on nodes with children will also receive events that happen in the children. If a button inside a paragraph is clicked, event handlers on the paragraph will also see the click event.
But if both the paragraph and the button have a handler, the more specific handler—the one on the button—gets to go first. 
The event is said to propagate outward, from the node where it happened to that node’s parent node and on to the root of the document. 
Finally, after all handlers registered on a specific node have had their turn, handlers registered on the whole window get a chance to respond to the event.

# stopPropagation()- prevents further propagation of the current event in the capturing and bubbling phases.
  > Syntax: e.stopPropagation()

# stopImmediatePropagation()- prevents other listener of the same event from being called.
  > Syntax: e.stopImmediatePropagation()

* if I want to stop propagation between different object/elements i will use stopPropagation();
* if a want to stop propagation even between multiple handlers i will use stopImmediatePropagation();
*/

function div1(e) {
    this.style.backgroundColor = "red";
}

function div2(e) {
    this.style.backgroundColor = "blue";
    // e.stopPropagation();
    // now here we use stopPropagation()-- it only stops event of different object to occur,
    // BUT it allows to occur the event of same object and with same type.i.e multiple handlers with one object on one event.
    e.stopImmediatePropagation();
}

function div2_2(e) {
    this.style.width = "50%";
}

function div3(e) {
    this.style.backgroundColor = "purple";
    // Now when u click on 3--> event of 3 will occur but it will not propagate further. hence event of 2 and 1 will not occur.
    e.stopPropagation();
}

var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var d3 = document.getElementById("three");
// var d4 = document.getElementById("four");

d1.addEventListener("click", div1, false);

//> Adding two handler in one element: i.e onclick it will changes its color as well as changes it width
d2.addEventListener("click", div2, false);
d2.addEventListener("click", div2_2, false);

d3.addEventListener("click", div3, false);
// ~ Here we are in bubbling phase hence when we click on 3.--> event of 3 occur--> then event of 2--> then event of 1

/* 
# preventDefault()- 
  The event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, it defaults action should not be taken as it normally would be-
  > Syntax: e.preventDefault();

*/
// The default behaviour of link is to redirect it to its specified URL:
// To prevents it default action we use preventDefault().

var link = document.getElementById("myLink");
link.addEventListener(
    "click",
    e => {
        e.preventDefault();
        e.stopPropagation();
    },
    false
);

function linkDiv(e) {
    e.currentTarget.style.backgroundColor = "yellow";
}

document.getElementById("linkD").addEventListener("click", linkDiv, false);

// ? DIFF. Between preventDefault() and stopPropagation()
// IF they were same then as we stop the default action of link then also it will not propagate to parent div and changes it color but--
// Color of div is changed when we click in link that means of control of event has been propagated.
// Now to stop propagation and also to stop its default behaviour we will use both stopPropagation() and preventDefault() simultaneously.