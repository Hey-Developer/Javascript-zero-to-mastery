/* 
$ How To access  elements-->
  There are some methods in DOM through which we can access the HTML element, easily
   ? Finding  elements by id
     ~ document.getElementById("ID_NAME")  -->Get the element with specified ID
   ? Finding  elements by tag name
     ~ document.getElementsByTagName("TAG_NAME")  --> Get the element with specified tagName
   ? Finding  elements by class name
     ~ document.getElementByClassName("CLASS_NAME")  --> Get the element with specified class
   ? Finding  elements by CSS selectors
     ~ document.querySelector("CSS_SELECTOR")  --> It return the first match of the passed selector string
     // Also
     ~ document.querySelectorAll("CSS_SELECTOR")  --> It return a node list of DOM elements that match the query
   ? Finding  elements by HTML object collections
     ~ document.ObjectCollection(Form,link,anchor)

*/

// -- getElementById("ID_NAME"): returns an Element Object representing the element whose id property matches the specified string.
// IN OUR HTML PAGE- we have two p tags with diff ID  now we access that HTML elements using the document.getElementById
var myElement = document.getElementById("Intro");
document.write(myElement + "</br>");
console.log(myElement);

var myElement2 = document.getElementById("Intro2");
document.write(myElement2 + "</br>");
console.log(myElement2);

//~ If the element is found, the method will return the element as an object (in myElement)
//~ If the element is not found, myElement will contain null.