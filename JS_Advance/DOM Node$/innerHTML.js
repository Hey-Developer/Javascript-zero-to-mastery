/* 
                                        ! Accessing content inside the nodes.

$ innerHtml:(it provide us the inner HTML inside any element.)
  ~ It is the property of Element Node, it gets or sets the HTML or XML markup contained within the element.
  ~ Setting the value of innerHTML, let u easily replace the existing contents of an element with new content
  ~ HTML5 specifies that a <script> tag inserted with innerHTML should not execute.
  ~ it Did not return us element inside the element it only return content/text of all the elements inside the outer elements.
  * It is recommended that you should not use innerHTML when inserting plain text; instead use text content.
  ~ Did not work with text or comment node.
  > Syntax:
    document.getElementById('myH1').innerHTML

*/

var list = document.getElementById("myList");

document.write(`Inner html of ul element-->`);
document.write(list.innerHTML + "<br>");
console.log(list.innerHTML);

//> Changing Value inside the element using innerHTML
list.innerHTML = "CLoves";
console.log(list.childNodes);
// replaces all the li tags with a text="CLOVES"(text node)
// OR it replaces all the HTML inside the ul tag with a textNode with value="CLOVES"

// > We can also use html instead of string in innerHTML value:
list.innerHTML = "<li>Java</li><li>Python</li><li>Ruby</li>";
console.log(list.childNodes);

// > Delete the HTML content of a <p> element with id="demo":
document.getElementById("myPara").innerHTML = ""; // Replaces the content of <p> with an empty string

// $ Difference between innerHTML and textContent.

document.write(`Text Content of ul element-->`);
document.write(list.textContent + "<br>");
console.log(list.textContent);
// conclusion: textContent returns only text of all the elements inside a element, whereas
// innerHTML returns A String, representing the HTML content of an element or we can say it displayed the content inside the html element in more proper way.

// $ will nodeValue give me the same result ?
document.write(`nodeValue of ul element-->`);
document.write(list.nodeValue + "<br>");
console.log(list.nodeValue);

/* 
 > The nodeValue property sets or returns the node value of the specified node.
 > If the node is an element node, the nodeValue property will return null.
 > Note: If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (element.childNodes[0].nodeValue).
*/