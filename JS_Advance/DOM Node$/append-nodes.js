// $ appendChild(Child_node) method is use to add a node to the end of the list of children of a specified parent node.
// If the given child is reference to an existing node in the document ,appendChild() moves its current position to the new position.
// This method returns the new child node.
// Parent_Node.appendChild(CHild_node)

//> Appending existing element.
// I want to move the h1 inside div to section.
var section = document.getElementById("mySec");
var h1 = document.getElementById("myDiv").firstElementChild;
section.appendChild(h1);

//> Appending new created element.
var para = document.createElement("p"); // create Element
console.log(para);

section.appendChild(para);

// creating and appending simultaneously-->
section.appendChild(document.createElement("i"));

console.log(section.children); // you will see a paragraph is added to the section.
// Giving some content to this para.
para.textContent = "Hello, i am created' from JS";

//> Appending text node:
var targetNode = document.getElementById("target");
var newTxt = document.createTextNode("Hii i am text node created from JS");
targetNode.appendChild(newTxt);
console.log(targetNode.childNodes);

//> Appending comment node:
var comment = document.createComment("New Comment from JS");
targetNode.appendChild(comment);

//> Appending Element node and Text node and comment node simultaneously:

// creating Element node:
var newH2 = document.createElement("h2");

// Creating Text Node:
var newTxt = document.createTextNode(" HEllo CNu");

// Creating Comment node:
var newComment = document.createComment("This is a comment");

// Append Text Node to Element Node:
newH2.appendChild(newTxt);

// Appending this element node to a div in html doc:
var div = document.getElementById("myDiv");
div.appendChild(newH2);

// Appending comment node to div in html doc:
div.appendChild(newComment);

console.log(div);

// -- Document Fragment Example:

// Creating Empty Document Fragment
var df = document.createDocumentFragment();

// Creating new element h3
var h3Node = document.createElement("h3");

// Creating new Element p
var pNode = document.createElement("p");

// Setting text in  h3 and p using textContent:
h3Node.textContent = "H3 from JS";
pNode.textContent = "lorem";

console.log(h3Node);
console.log(pNode);

// Appending element to DF:
df.appendChild(h3Node);
df.appendChild(pNode);
console.log(df);

var getDiv = document.getElementById("fromJS");

// Appending DF to  div in html DOC:
getDiv.appendChild(df);

// Now DF will be empty:
console.log(df);

// $ normalize() method: removes empty Text Nodes, and joins the adjacent Text nodes so there will be no adjacent Text Nodes:
var para = document.getElementById("myPara");

var nText1 = document.createTextNode("Hii");
var nText2 = document.createTextNode("I AM");
var nText3 = document.createTextNode(" A CNU");
var nText4 = document.createTextNode("");

para.appendChild(nText1);
para.appendChild(nText2);
para.appendChild(nText3);
para.appendChild(nText4);

console.log(para.childNodes);
// here 4 text nodes are created 3 are with text and 1 is empty these creates difficulty when we want to access the text nodes inside p, we could use loop for that but this create complexities
// Hence we use normalize method: it will merge all the text nodes and removes empty text nodes:
para.normalize();
console.log(para.childNodes);