// * With the HTML DOM, you can navigate the node tree using node relationships.
//$ Properties to traverse the DOM tree i.e accessing nodes of DOM tree using node properties.
/* 
-- parentNode- returns Parent Node.

-- parentElement- returns parent element node.

-- childNodes- returns collection of an element's child nodes(including Text(enter,content),comment)

-- children - returns a collection of an element's child element (do not include text and comment)

-- firstChild- returns first child node of an element(it can be text or comments)

-- firstElementChild- returns first child element node of an element. (for ex it will give us head element because its is first child element node of an element HTML)

-- lastChild- returns last child node of an element(it can be text or Comment)

-- lastElementChild- returns last child element node of an element.(for ex it here it will return body element because it is the last element node of an element HTML)

-- previousSibling- returns previous node of the same level(it can be text or comment) 

-- previousElementSibling- returns previous element node of an element

-- nextSibling-

-- nextElementSibling-
*/

// $ parentNode: read only property returns the parent node of the specified node in the DOm tree.
// for ex in a dom tree suppose there is text node and if want to parent it this text node
// then i can use this property like txt.parentNode it will return the parent node of this text node.
// can be used with node element and element node also.

// HTML element-->
var html = document.getElementById("myHtml");
document.write(`parent of html element is : ${html.parentNode} <br>`);
console.log(html.parentNode);

// Text Node-->
var txt = document.querySelector("p").firstChild;
document.write(`parent of text node is : ${txt.parentNode} <br>`); // paragraph element
console.log(txt.parentNode);

// parent of element node-->
var para = document.getElementById("myPara");
document.write(`parent of p tag is : ${myPara.parentNode} <br>`);
console.log(myPara.parentNode);

// $ parentElementNode: return the parent element of the specified element. if the parent node is not a element node then it returns null.
// Only used to find parents of element nodes.
// for ex if  i write p.parentElement then it will return me #body
// but if  i write html.parentElement then it will return me null because parent of html is document but document is not a element node.
//  Can only e used with element node.

var html = document.getElementById("myHtml");
document.write(`parent of body Element node is: ${html.parentElement} <br>`);
console.log(html.parentElement);
// null because parent of body is not a element node.

var heading1 = document.getElementById("myH1");
document.write(`parent of h1 element node is : ${heading1.parentElement}<br>`); // parent of h1 element node is body which is a element node.
console.log(heading1.parentElement);

document.write(`<hr>`);

// $ childNodes: returns a live NodeList of child nodes of the given element,
// Where the first child node is assigned index 0
// childNodes includes all child nodes including (text,comment and also element nodes)
// Whitespace inside elements is considered as text and text is considered as node(text node)
// Any whitespace will create #text node from a single space to multiple space, tabs or enter key.

// >I want all the child of body element.
var body = document.getElementById("myBody");
document.write(`All child of Body element: ${body.childNodes}<br>`);
console.log(body.childNodes);

// >No of all the child nodes inside body element including text and comment nodes.
document.write(`No of nodes in Body tag:${body.childNodes.length}<br>`);
console.log(body.childNodes.length);

// loop
// for (let i = 0; i < body.childNodes.length; i++) {
//     document.write(
//         ` Element Node inside Body Element: ${body.childNodes[i]}<br>`
//     );
// }

document.write(`<br>`);

// >Child's of h1 element
document.write(`child's of h1 element: ${myH1.childNodes}<br>`);
console.log(myH1.childNodes);

// >child's of p element
document.write(`child's of p element: ${myPara.childNodes}<br>`);
console.log(myPara.childNodes);

document.write(`<br><br>`);

// $ children: return collection of all child's element nodes of the given element,
// Where first child is assigned to index 0.
// children includes only element node (no whitespace,text node and comment node)

// >I want only those child of body element which are element node i.e ignore all text and comment nodes.
document.write(
    `All child of Body element those are element node: ${body.children}<br>`
);
console.log(body.children);

// > No of all the child's elements inside body Tag:
document.write(
    `No of elements nodes inside body tag:${body.children.length}<br>`
);
console.log(body.children.length);

// loop
// for (let i = 0; i < body.children.length; i++) {
//     document.write(` Element Node inside Body Element: ${body.children[i]}<br>`);
// }

document.write(`<br>`);

// >Element Node Child's of h1 element
document.write(`child's of h1 element: ${myH1.children}<br>`);
console.log(myH1.children);
// 0 element because there is no Element node inside the h1 element.

//> I want all the element node, child's inside myPara2:
var para2 = document.getElementById("myPara2");
document.write(
    `Child's of p tag but only element node: ${para2.children}<br><br>`
);
console.log(para2.children);

// ~ TO access Text content inside a element
var paragraph = document.getElementById("myPara");
var txt = paragraph.childNodes[2].textContent;
document.write(txt);

// let me change this value.
paragraph.childNodes[2].textContent = "Hiii i am cnu here>>";

/* 
$ DOM Root Nodes: 
  There are two special properties that allow access to the full document:
    -- document.body - The body of the document
    -- document.documentElement - The full document
*/

alert(document.body.innerHTML);
alert(document.documentElement.innerHTML);