/* 
$ innerText property is focused solely on the textual content contained within an element.
  > The innerText property set or returns the textual content contained within an element.
  > This property sets or returns the text content of the specified node and all its descendants.
  > If u set the innerText property any child nodes are removed by a single text node containing the specified string.

  ~This property is similar to the textContent property, however there are some differences:
   # textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements.
   # innerText will not return the text of elements that are hidden with CSS (textContent will)


* Tip: To set or return the HTML content of an element, use the innerHTML property.
*/

var list = document.getElementById("myList");
document.write(`The inner text of the UL element--><br>`);
document.write(list.innerText);
console.log(list.innerText);

console.log(list.childNodes);

// Manipulating it:
list.innerText = "SHRADDHA I love You so MUChhh";
// list.innerText = "<span>SHRADDHA I love You so MUChh</span>";--> //-- Markups are not accepted it print it as it is.
console.log(list.childNodes);

// ! differences between innerText, innerHTML and textContent:

function getInnerText() {
    alert(document.getElementById("demo").innerText);
}

function getHTML() {
    alert(document.getElementById("demo").innerHTML);
}

function getTextContent() {
    alert(document.getElementById("demo").textContent);
}
/* 
-- Get the content of the <p> element above with the specified properties:

   > innerText returns: "This element has extra spacing and contains a span element."
   > innerHTML returns: "   This element has extra spacing     and contains <span>a span element</span>."
   > textContent returns: "   This element has extra spacing    and contains a span element."

   ~ The innerText property returns just the text, without spacing and inner element tags.
   ~ The innerHTML property returns the text, including all spacing and inner element tags.
   ~ The textContent property returns the text with spacing, but without inner element tags.
*/