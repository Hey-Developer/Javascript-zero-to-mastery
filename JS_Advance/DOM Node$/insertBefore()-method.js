// $ insertBefore() Method: is used to insert a node before the reference node as a child of a specified parent node.
// If the given child is a reference to an existing node in the doc. insertBefore() moves it from the current position to  the new position.
// > Syntax: parent_node.insertBefore(new_node, reference_node)
// appendChild() methods insert the node as a last node but with insertBefore() we can insert node anywhere by using a reference node.

// Accessing Parent node->
var ul = document.getElementById("myList");

// Creating Element Node:
var newLi = document.createElement("li");
newLi.textContent = "Backbone JS";

// Accessing Reference Node:
var refLi = document.getElementById("angular");

// Appending the new list item into UL but just before the second list item :
ul.insertBefore(newLi, refLi);
console.log(ul.children);

// ? if we don't give reference node or give a null value then in this case node will be add in the last.
var newLi2 = document.createElement("li");
newLi2.textContent = "Typed.js";
ul.insertBefore(newLi2, null);

// ~ Shorten the code:
var newLi3 = document.createElement("li");
newLi3.textContent = "D3 JS";
document
    .getElementById("myList")
    .insertBefore(newLi3, document.getElementById("jquery"));

// # insertBefore on existing element>

// Our parent_node is ul

// Getting an existing element-->
var moveLi = document.getElementById("vue");

// Getting reference node:
var refLi2 = document.getElementById("react");

ul.insertBefore(moveLi, refLi2);

// * U can also use insertBefore to append text node or comment node.
var newTxt = document.createTextNode("One of the most popular frameWork");
ul.insertBefore(newTxt, refLi2);

// ? What if u want to move a node to another palce but parent node is not equal.
// I want to move a li node of myList2 to myList1
// IN THIS CASE parent_node and reference node will be used of the target element where u want to move the node li.
ul.insertBefore(document.getElementById("python"), refLi);