/* 
$ removeChild(child_name):
  > The method removesChild(child_name) is used to delete/remove nodes from the tree. 
  > The removed child nde still exist in memory,but no longer part of the DOM.
  > It returns the Node Object that was removed on success and NULL on failure.

  > Syntax- parentNode.removesChild(child_name);
*/

// The element/node which we want to del. we have to get its parentNode first.
var list = document.getElementById("myList");
// removing second list item from ul.
var delNode1 = list.removeChild(document.getElementById("i2"));
console.log(delNode1);

// Deleting child nodes without using id.
var delNode2 = list.removeChild(list.children[0]);
console.log(delNode2);

// Deleting child without using parent node:
var li = document.getElementById("i4");
var delNode3 = li.parentNode.removeChild(li);
console.log(delNode3);