// $ firstChild: returns the node's first child in the tree  or null if the node has no children.
// if the node is a Document,it returns the first node in the list of its direct children.
// It includes text nodes and comments node.

// first child of HTML element-->
var html = document.getElementById("myHtml");
document.write(`First child of HTML element is: ${html.firstChild}<br>`);
console.log(html.firstChild); // returns head element.

// first child of BODY element-->
var body = document.getElementById("myBody");
document.write(`First child of Body element is: ${body.firstChild}<br>`);
console.log(body.firstChild); // returns text node (enter)

// first child of P(myPara1)-->
var para1 = document.getElementById("myPara1");
document.write(
    `Text inside First child of P(myPara1): ${para1.firstChild}<br>`
);
console.log(para1.firstChild);
// lets update the value.
para1.firstChild.textContent = "Text inside First child of p";

// first child of h2 element-->
var h2 = document.getElementById("myH2");
document.write(`First Child of h2 is: ${h2.firstChild}<br>`); // returns text node(enter)
console.log(h2.firstChild);

// $ firstElementChild: returns the element's first child element node in the tree, or null if node has no children.
// It ignore text nodes and comments nodes or any whitespace(Enter,tab)

// first child element node of BODY element-->
document.write(`First child of Body element is: ${body.firstElementChild}<br>`);
console.log(body.firstElementChild); // returns h1

// first element child of h2-->
document.write(`First Child element node is: ${h2.firstElementChild}<br>`); // returns paragraph element
console.log(h2.firstElementChild);