/* 
~ Node interface is the primary datatype for the entire Document Object Model. The node is used to represent a single HTML element in the entire document tree.
~ A node can be any type that is an attribute node, a text node or any other node. The attributes nodeName, nodeValue and attributes are included as a mechanism to get at node information without casting down to the specific derived interface.
> As we know that DOM represent the whole HTML document as object i.e it represent each element inside the the html doc as a object.
> So we can say tha A DOM is collection of document element object.
> So inside A DOM tree each Element object is known as a Node.


A node is the generic name for any type of object in the DOM hierarchy. A node could be one of the built-in DOM elements such as document or document.body, it could be an HTML tag specified in the HTML such as <input> or <p> or it could be a text node that is created by the system to hold a block of text inside another element. So, in a nutshell, a node is any DOM object.

An element is one specific type of node as there are many other types of nodes (text nodes, comment nodes, document nodes, etc...).

The DOM consists of a hierarchy of nodes where each node can have a parent, a list of child nodes and a nextSibling and previousSibling. That structure forms a tree-like hierarchy. The document node would have its list of child nodes (the head node and the body node). The body node would have its list of child nodes (the top level elements in your HTML page) and so on.

So, a nodeList is simply an array-like list of nodes.

An element is a specific type of node, one that can be directly specified in the HTML with an HTML tag and can have properties like an id or a class. can have children, etc... There are other types of nodes such as comment nodes, text nodes, etc... with different characteristics. Each node has a property .nodeType which reports what type of node it is. You can see the various types of nodes here (diagram from MDN):

You can see an ELEMENT_NODE is one particular type of node where the nodeType property has a value of 1.

So document.getElementById("test") can only return one node and it's guaranteed to be an element (a specific type of node). Because of that it just returns the element rather than a list.

Since document.getElementsByClassName("para") can return more than one object, the designers chose to return a nodeList because that's the data type they created for a list of more than one node. 
Since these can only be elements (only elements typically have a class name), it's technically a nodeList that only has nodes of type element in it and the designers could have made a differently named collection that was an elementList, 
but they chose to use just one type of collection whether it had only elements in it or not.



$ Node Object-->(hierarchy)
                                         NODE
   _______________________________________|_________________________________________________________________________________________________
   |                                      |                                           |                                                    |             
Document                               Element                                    Character Data                                        Attribute(now depreciated)
   |                                      |                                   ________|___________                                
HTML Document                        HTML Element                             |                  | 
                                          |                                  Text               Comment
        __________________________________|_______________________________________________________
        |                                 |                     |                                |   
  HtmlHeadElement                 HtmlBodyElement            HtmlTitleElement             HtmlParagraphElement                                                                               

~ My Conclusion-->
  In a DOM tree, every element is consider as node all these node are inherited by its superclass node.
  All the properties of superclass Node object can be accessible bY all its child.
  
 ~ W3C standard--> 
   According to the W3C HTML DOM standard, everything in an HTML document is a node:
    > The entire document is a document node
    > Every HTML element is an element node
    > The text inside HTML elements are text nodes
    > Every HTML attribute is an attribute node (deprecated)
    > All comments are comment nodes


-- Node Relationships: 
   The nodes in the node tree have a hierarchical relationship to each other.
   
   The terms parent, child, and sibling are used to describe the relationships.
   > In a node tree, the top node is called the root (or root node)
   > Every node has exactly one parent, except the root (which has no parent)
   > A node can have a number of children
   > Siblings (brothers or sisters) are nodes with the same parent


-- Properties of Node Object:-
   > The node object represent a single node in the document tree.
     ~ nodeName
     ~ nodeValue
     ~ nodeType
     ~ textContent
     ~ parentNode
     ~ childNodes
     ~ firstChild
     ~ lastChild
     ~ previousSibling
     ~ nextSibling

*/

// --nodeName read only property returns the name of the current node as a string-
// if u use this property with a node it will return the name of the node-
// example element.nodeName-->The value of Element.tagName
// entity.nodeName-->The entity name.
// Document.nodeName-->'#document'
// comment.nodeName-->'#comment'

// --nodeValue property returns or sets the value of the current node.
// CDATASECTION.nodeValue-->content of the data section:
// Comment.nodeValue-->content of the comment
// Document.nodeValue-->null
// Element.nodeValue-->null
// Text.nodeValue--> entire content of the text.

// --nodeType property returns the type of node.
// Element.nodeType-->3

document.write(`<br>-----------Document-----------<br>`);
document.write(`nodeName-->${document.nodeName} <br>`);
document.write(`nodeValue-->${document.nodeValue} <br>`);
document.write(`nodeType-->${document.nodeType} <br>`);
console.log(document.nodeName);
console.log(document.nodeValue);
console.log(document.nodeType);

document.write(`<hr>`);

document.write(`-----------Element-----------<br>`);
var elm = document.getElementById("myId");
document.write(`nodeName-->${elm.nodeName} <br>`);
document.write(`nodeValue-->${elm.nodeValue} <br>`);
document.write(`nodeType-->${elm.nodeType} <br>`);
console.log(elm.nodeName);
console.log(elm.nodeValue);
console.log(elm.nodeType);

document.write(`<hr>`);

document.write(`-----------Text-----------<br>`);
var txt = document.getElementById("myId");
// here we got only h1 element but we want to go inside its text hence we use firstChild property of DOM node because in our DOM tree hte h1 will be parent node and under it text and comment node will create.
document.write(`nodeName-->${txt.firstChild.nodeName} <br>`);
document.write(`nodeValue-->${txt.firstChild.nodeValue} <br>`);
document.write(`nodeType-->${txt.firstChild.nodeType} <br>`);
console.log(txt.firstChild.nodeName);
console.log(txt.firstChild.nodeValue);
console.log(txt.firstChild.nodeType);

document.write(`<hr>`);

// to access h1 another child that is comment we have to use nextSibling
document.write(`-----------Comment-----------<br>`);
var txt = document.getElementById("myId");
document.write(`nodeName-->${txt.firstChild.nextSibling.nodeName} <br>`);
document.write(`nodeValue-->${txt.firstChild.nextSibling.nodeValue} <br>`);
document.write(`nodeType-->${txt.nextSibling.nodeType} <br>`);
console.log(txt.firstChild.nextSibling.nodeName);
console.log(txt.firstChild.nextSibling.nodeValue);
console.log(txt.firstChild.nextSibling.nodeType);

document.write(`<hr>`);

// To access text or value inside a element like in p tag we want content inside it.
document.write(
    `-----------Getting/setting value inside element-----------<br>`
);
var txt = document.getElementById("myId1").firstChild.nodeValue;
document.write(`Old value of p tag-->${txt} <br>`);
document.write(`Now Value change--^<br>`);

document.getElementById("myId1").firstChild.nodeValue = "This is new Value";

document.write(`<hr>`);

// $ Node object-->Attribute Object Properties
// In the DOM tree a separate node or separate object is created for attributes present inside the elements.
// Two properties of Attribute Object--> Name and Value.
// It returns  nodeList that is collection of all the attributes present inside the element.

var para = document.getElementById("myId1"); // we reach the p tag now we want to go inside it-->
// var getParaAtt = para.attributes[0].nodeName;__so we are inside the p tag and using attributes property which is a collection of all the attri. present inside the element. we can access our required attribute using index no.

/*
  document.write(
      `1st Attribute name present inside p tag--> '${para.attributes[0].nodeName}' and its value is '${para.attributes[0].nodeValue}' <br>`
  );
  document.write(
      `2nd Attribute name present inside p tag--> '${para.attributes[1].nodeName}' and its value is '${para.attributes[1].nodeValue}'<br>`
  ); 
! nodeName and nodeValue are depreciated these are not use anymore 
~ New values are name and value.
*/
document.write(
    `1st Attribute name present inside p tag--> '${para.attributes[0].name}' and its value is '${para.attributes[0].value}' <br>`
);
document.write(
    `2nd Attribute name present inside p tag--> '${para.attributes[1].name}' and its value is '${para.attributes[1].value}'<br>`
);

// want on know how many attributes we have in a element.
var len = document.getElementById("myId1").attributes.length;
document.write(`No of attributes-->${len} <br>`);

// U can use also use for loop to iterate: as we see earlier.
document.write(`<br>All the attributes inside p tag--><br>`);

for (let i = 0; i < len; i++) {
    document.write(`${i + 1}st Attribute Name: ${para.attributes[i].name} & `);
    document.write(
        `${i + 1}nd Attribute Value: ${para.attributes[i].value} <br> `
    );
}