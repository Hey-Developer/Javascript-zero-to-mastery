/* 
$ replaceChild(new_child,old_child):
  > This method replace a node with new node.
  > The new Node could be an existing node in the doc. or u can create a new node.
  > It will destroy the contents of node that are replaced.
  > It returns the replaced node(old_Child)

  ~ var replacedNode=parentNode.replaceChild(newChild,oldChild);

  >new Child is the new node to replace oldChild if it already exists in the Dom, it is first removed.
  > Old child is the existing child to be replaced.
 */

// Getting parent access.
var list = document.getElementById("myList");

// Creating New Node:
var newLi = document.createElement("li");
newLi.innerText = "Hii I am cnu here";

// Getting old CHild:
var oldLi = document.getElementById("i4");

// Replacing:
// It returns old replaced child:

var replacedNode = list.replaceChild(newLi, oldLi);
console.log(`New replaced Node: `);
console.log(newLi);
console.log(`Old replaced Node: `);
console.log(replacedNode);

// replacing old child by existing child.
var span = document.getElementById("mySpan");
list.replaceChild(span, document.getElementById("i1"));

// Now u see that in ul child span is added and one of li is removed.
console.log(list.children);