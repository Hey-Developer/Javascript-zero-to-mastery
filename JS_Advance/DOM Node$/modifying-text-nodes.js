/* 
Some properties to modify Text Nodes:
# Properties-->
  ~ Data
  ~ Length

# Methods-->
  ~ appendData(string)
  ~ deleteData(start,length)
  ~ insertData(start,string)
  ~ replaceData(start,length,string)
  ~ splitText(start)
  ~ subStringData(start,length)
 */

//*  TextNode.length is used to access the length of text which indicates the number of characters it contains:

// Accessing Element Node:
var p1 = document.getElementById("myPara1");

// Getting TextNode child of element node:
var textInsideP1 = p1.firstChild;

// Length of TextNode, (no of characters):
console.log(`Length of text inside p1: ${textInsideP1.length}`);

// * TextNode.data returns the data inside a text node;

// Data of TextNode, (text inside the node:):
console.log(`Data of textNode inside p1: ${textInsideP1.data}`);
// Changing data of textNode:
textInsideP1.data = "Shraddha Loves CNU";

// * TextNode.appendData(string): is used to append the passed string to the end of the tex node and comment node;

// Accessing another element node:
var p2 = document.getElementById("myPara2");

// Appending a some data into the text node, it does not create a new text node and attach it the parent instead it add the data into the current text node:
p2.firstChild.appendData(" -__-You are my Word!");

// * deleteData(start,length): is used to delete or remove the text content from a text node and comment node. It deletes specified length of characters starting from index defined in start.

// Accessing element node:
var p3 = document.getElementById("myPara3");

// deleting data from index 0 to index 9, it does not include the end: Also it counts the spaces.
p3.firstChild.deleteData(0, 2);

// * TextNode.insertData(start,string): this method is used to insert tect content to the text node and comment node, it inserts the value in string, starting at the character index specified in start:

// Adding Data Again in the above text node:
p3.firstChild.insertData(0, "CL");

// * TextNode.replaceData(start,length,string) is used to replace text content of text node and comment node. It inserts the value in string, starting at tha char. index specified in start:

// Accessing Element:
var p4 = document.getElementById("myPara4");

// replaces data from index 0 to index 3:
p4.firstChild.replaceData(0, 4, "I  love u sooo muchh jaanu you r my life");

// * TextNode.splitText(start): this methods break the text node into two nodes at the specified start index, keeping both nodes in the tree as sibling.
// > It returns right side of the split in a nex text node and leaves the left side in original.

// Accessing element
var p5 = document.getElementById("myPara5");

// Splitting text: from index 8: It returns the right side:

var rightSide = p5.firstChild.splitText(8);

// Now if u see the element node child's  you will see two text nodes are there one contains right side of the string one contains left side of the string.
console.log(p5.childNodes);
// The right side of the string is:
console.log(rightSide);

// #BTS
/* 
~ Before-->
     h2
     |
  TextNode{Divyansh Weds Shraddha}

p5.firstChild.splitText(8);
~ After-->
                            h2
    ________________________|______________________
    |                                             |  
  TextNode{Divyansh}                        TextNode{Weds Shraddha}

*/

// * TextNode.subStringData(start,length): it returns the part of the current element's (TextNode or CommentNode) text content from the specified position with the specified length.

// Extracting a string part of length 8 char starting from index 0;
var myName = p5.firstChild.substringData(0, 8);
console.log(myName);