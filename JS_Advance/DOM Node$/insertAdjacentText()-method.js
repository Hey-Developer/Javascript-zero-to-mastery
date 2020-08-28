/* 
$ insertAdjacentText(): method inserts the specified element into a specified position.
> Syntax: targetElement.insertAdjacentText('position',text);
   Where position are:
    ~ 'beforebegin': Before the element itself.
    ~ 'afterbegin' : Just Inside the element before its first child.
    ~ 'beforeend' : Just Inside the element,after its last  child.
    ~ 'afterend' : After the element itself.
  
    (beforebegin) <h1 id='geek'> (afterbegin) Hello World (beforeend) </h1> (afterend)

> text=The text which is about to insert.
* The 'beforebegin' and 'afterend' position work only if the node is in a tree and has an element parent.

*/

var h2 = document.getElementById("myH2");
var txt = " Hello Cnu! whats_upp";

// Here also the inserted node will copy:
h2.insertAdjacentText("beforebegin", txt);
h2.insertAdjacentText("afterbegin", txt);
h2.insertAdjacentText("beforeend", txt);
h2.insertAdjacentText("afterend", txt);

console.log(document.getElementById("myHeadings").childNodes);