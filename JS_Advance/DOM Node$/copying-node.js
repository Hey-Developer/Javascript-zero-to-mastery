/* 
$ cloneNode(boolean): 
  > This methods is used to  copy the node.It created a copy of node including all attributes and their values and returns the clone.
  > it takes a single boolean argument, indicating whether the copy should include all children of the node or just the element itself.
  > The duplicate node returned by cloneNode() is not a part of the document until it is added to another node,which  is a part of Document.
  > It has also no parent node until it is added to another node.
  > if the original node has an ID and the clone is to be placed in the same document,the id of the clone should be modified to unique.
  > Similarly, Name attributes may need to be modified also, depending on whether duplicates names are expected.

  */

var list = document.getElementById("myList");
//  When we want to clone only element itself not its child.

var cloneList = list.cloneNode(false);
// ul Node is copy with all its attribute:

console.log(cloneList.childNodes);

//  When we want to clone  element with all its child nodes;
var cloneListWithChild = list.cloneNode(true);

console.log(cloneListWithChild.childNodes);

// You can see that this cloned element is not a part of DOC:
console.log(document.body); //> Here u will not find any duplicate ul element.

// Now this cloned node is not part of the doc, lets append it.
var targetNode = document.getElementById("clone");
targetNode.appendChild(cloneListWithChild);
console.log(targetNode);