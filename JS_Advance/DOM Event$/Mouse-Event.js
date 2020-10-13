/* 
$ Mouse-Event:
  Events occur on the change of state of mouse-->

  > mousedown- it fires when mouse button is pressed down.
  > mouseup- it fires when mouse button is release.
  > click- it fires when something is click. (mousedown, mouseup, and click events fires in sequence)
  > dblclick- it fires when something is double-clicked i.e clicked twice in rapid succession.(mousedown,mouseup,,click, mousedown, mouseup, click and dblclick events fires in sequence.)
  > mouseenter- it fires when a mouse starts to hover over some elements. NO BUBBLE.
  > mouseleave- it fires when a mouse exits while hovering over some elements. NO BUBBLE.
  > mouseover- it fires when mouse is hovering over some elements.
  > mouseout- it fires when mouse is leave hovering over any elements.
  > contextmenu- it fires when mouse right button is clicked.


*/
function div1(e) {
    console.log(e.type);
}
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");

d2.addEventListener("mousedown", div1, false);
d2.addEventListener("mouseup", div1, false);
d2.addEventListener("click", div1, false);
// When u click 3 event fired up--> mousedown-mouseup-click itself.
d2.addEventListener("dblclick", div1, false);
// When u double click 7 event fired up--> mousedown-mouseup-click-mousedown-mouseup-click-dblclick itself.

// d2.addEventListener("mouseenter", div1, false);
// d2.addEventListener("mouseleave", div1, false);

d2.addEventListener("mouseover", div1, false);
d2.addEventListener("mouseout", div1, false);

d2.addEventListener("mousemove", div1, false);
d2.addEventListener("contextmenu", div1, false);

// -- events action in bubbling phase.
function div2(e) {
    console.log(e.type);
}

var d3 = document.getElementById("three");
var d4 = document.getElementById("four");

// It is in bubbling phase hence when u click on child d4 ,first its own event will fire up and then its parent event will fire up.
d3.addEventListener("click", div2, false);
d4.addEventListener("click", div2, false);

//~ In all the listed cases  two event will fire up one by one, first the child elements and second the parent element.
d3.addEventListener("mousedown", div2, false);
d4.addEventListener("mousedown", div2, false);

d3.addEventListener("mouseup", div2, false);
d4.addEventListener("mouseup", div2, false);

d3.addEventListener("mousedown", div2, false);
d4.addEventListener("mousedown", div2, false);

d3.addEventListener("dblclick", div2, false);
d4.addEventListener("dblclick", div2, false);

d3.addEventListener("mousemove", div2, false);
d4.addEventListener("mousemove", div2, false);

d3.addEventListener("contextmenu", div2, false);
d4.addEventListener("contextmenu", div2, false);

d3.addEventListener("mouseover", div2, false);
d4.addEventListener("mouseover", div2, false);

d3.addEventListener("mouseout", div2, false);
d4.addEventListener("mouseout", div2, false);

// --Except these two events which not bubble up--
d3.addEventListener("mouseenter", div2, false);
d4.addEventListener("mouseenter", div2, false);

d3.addEventListener("mouseleave", div2, false);
d4.addEventListener("mouseleave", div2, false);