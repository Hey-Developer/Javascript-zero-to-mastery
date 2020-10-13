/* 
$ textContent-->
  The textContent property represents the text content of a nod and its descendent.
  In other words, the textContent property sets or returns the text content of the specified node, and all its descendants.

  > Setting this property on a node removes all its children and replaces them with a single text node with the given value.

  > To grab all the text and CDATA data for the whole document, one could use document.documentElement.textContent:

  > textContent returns null if the node is a document, a DOCTYPE or a notation.

  > If the code is a CDATA section, comment processing instructions, or a text node, textContent returns the text inside the node.

  > For the other node types, textContent returns the concatenation of the textContent of every child node, excluding comments and processing instructions. this is an empty string if the node has no children.

*/

var p = document.getElementById("myP");
console.log(p.textContent);

//-- Manipulation:
p.textContent = "RadheRadhe";
// HTML treat as a normal text in textContent: to write html inside a element we use innerHTML
p.textContent = "<h1>RadheRadhe</h1>";

console.log(p.innerHTML);

// -- Manipulation using innerHTML:
p.innerHTML = "<h2>RadheKrishna</h2>";

// --Difference between innerText and textContent-->
console.log(p.innerText);
console.log(p.textContent);
// > innerText didn't display text with spaces:
// > textContent display text with spaces: