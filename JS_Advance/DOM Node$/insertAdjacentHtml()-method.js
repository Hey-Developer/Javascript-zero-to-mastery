/* 
 $ insertAdjacentHtml(): method is used to insert a text as HTML(parses the specified text as HTML or XML) into a specified position.
 > Syntax: element.insertAdjacentHtml('position',TEXT)
 Where position are:
  ~ 'beforebegin': Before the element itself.
  ~ 'afterbegin' : Just Inside the element before its first child.
  ~ 'beforeend' : Just Inside the element,after its last  child.
  ~ 'afterend' : After the element itself.
  
    (beforebegin) <h1 id='geek'> (afterbegin) Hello World (beforeend) </h1> (afterend)
   
 > TEXT--> The string to be parsed as HTML or XML and inserted into the tree.
 ! NOTE: It is recommended you not use insertAdjacentHtml when inserting plain text instead use node.textContent property:

*/

var h3 = document.getElementById("myH3");
var newHtml = "<span id='mySpan'> Hiii CNU </span>";

// Here copy wll create of the inserting element:
h3.insertAdjacentHTML("beforebegin", newHtml);
h3.insertAdjacentHTML("afterbegin", newHtml);
h3.insertAdjacentHTML("beforeend", newHtml);
h3.insertAdjacentHTML("afterend", newHtml);

console.log(document.getElementById("myHeadings").children);