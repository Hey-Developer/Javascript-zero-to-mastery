// $ previousSibling: returns the node immediately preceding the specified one in its parent's child Node List.
// Or return null if the specified node is the first in that list.
// It includes text node and comments node or any whitespace.

var h2 = document.getElementById("myH2");
document.write(
    `I want the previous child of last child of h2 element: ${h2.lastChild.previousSibling}<br>`
);
console.log(h2.lastChild.previousSibling);

// last child is text node(enter) and its previous sibling is comment node
// lets manipulate it-->
h2.lastChild.previousSibling.textContent = "new comment";

// $ previousElementSibling: returns the element node  immediately preceding the specified one in its parent's node list.
// or null if no previous sibling is element node.
// It ignore text node and comments nodes or whitespace.

document.write(
    `I want the previous child element node of last child of h2 element: ${h2.lastElementChild.previousElementSibling}<br>`
);
console.log(h2.lastElementChild.previousElementSibling);

// last  child element node is strong element and its previous element node is i element.