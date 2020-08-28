// $  lastChild: return the last child of the node. if its parent is an element then the child node is generally an element node,a text node or a comment node.
// It returns null if there are no child elements.
// Whitespace(enter,tab) inside elements is considered as text node.

var h2 = document.getElementById("myH2");
document.write(`Last child of element h2 is: ${h2.lastChild} <br>`);
console.log(h2.lastChild);

// $ lastElementChild: return the element's last child element node, in the tree.
// or null if the node has no children element node.
// it ignore all text node, comment node or any whitespace(enter,tab,multiple spaces)

document.write(
    `last child element node of element h2 is: ${h2.lastElementChild} <br>`
);
console.log(h2.lastElementChild);

// lets do some manipulation:
// i want to change the last  element node child of h2:
h2.lastChild.textContent = "Shraddha you r my life";
h2.lastElementChild.textContent = "I miss u soo muchhh Jaanuuuuu";