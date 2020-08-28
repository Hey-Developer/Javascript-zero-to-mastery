/* 
 $ insertAdjacentElement() method- inserts the specified element into a given specified position.
 it returns the element that was inserted  or null of the insertion failed.
 > Syntax: target_element.insertAdjacentElement("position",element)
 Where position are:
  ~ 'beforebegin': Before the element itself.
  ~ 'afterbegin' : Just Inside the element before its first child.
  ~ 'beforeend' : Just Inside the element,after its last  child.
  ~ 'afterend' : After the element itself.

    (beforebegin) <h1 id='geek'> (afterbegin) Hello World (beforeend) </h1> (afterend)

*/

var h2 = document.getElementById("myH2");
var span = document.createElement("span");
span.textContent = "CLOVES";

// h2.insertAdjacentElement("beforebegin", span);
// h2.insertAdjacentElement("afterbegin", span);
// h2.insertAdjacentElement("beforeend", span);
h2.insertAdjacentElement("afterend", span);

console.log(document.getElementById("myHeadings").children);