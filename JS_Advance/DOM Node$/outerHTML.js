/* 
$ outerHTML
  ~ The outerHTML is the HTML of an element including the element itself.
  ~ Use the outerElement When you want to completely replace an element and its contents.
  ~ Use innerHTML when you want to replace the contents of an element.
*/
var div = document.getElementById("myDiv");
var list = document.getElementById("myList");
document.write(`Outer HTML of ul element-->`);
// On browser u will see only content of ul element because browser does not show tags.
document.write(list.outerHTML);
// IN Console u will see that whole ul element shows up in string format.
console.log(list.outerHTML);

// Manipulate it-->

list.outerHTML =
    "<div><ul><li>CNU</li><li>Shraddha</li><li>CLOVES</li></ul></div>";

// list.outerHTML = "";-->// It clears whole ul element hence when u see div in console u will not see ul there because it replace by a empty text node.
console.log(div.childNodes);