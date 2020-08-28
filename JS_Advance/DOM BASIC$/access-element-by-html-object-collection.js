/* 
$ Finding HTML Elements by HTML Object Collections-->
  > returns a static node list.
  > Length property can be used.

*/
var x = document.forms["frm1"];
var text = "";
var i;
for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.write(text);

/* 
The following HTML objects (and object collections) are also accessible:

document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title
*/