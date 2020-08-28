/* 
$ scrollBy():
  This method scrolls the document in the window by the given amount.
  > Syntax: window.scrollBy(x,y); or window.scrollBy(options)
  Where,
    ~ x- How many pixels to scroll by,along the x-axis(horizontal). +ve values will scroll to right.while -ve values will scroll left.
    ~ y- How many pixels to scroll by,along the y-axis(vertical). +ve values will scroll down.while -ve values will scroll up.

    ~ options- it is an object with three possible properties:
               > top, which is the same as y-coord.
               > left, which is the same as x-coord
               > behaviour, which is string containing one of smooth, instant, or auto;


*/
function scrollWin() {
    window.scrollBy(0, -100);
}
document.getElementById("btn").addEventListener("click", scrollWin);

function smoothScrollWin() {
    window.scrollBy({ top: -100, behavior: "smooth" });
}
document.getElementById("btn1").addEventListener("click", smoothScrollWin);

/* 
$ scrollTo();
  This method scrolls to a particular set of coordinates in the doc.
  
*/

function smoothScrollTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("btn2").addEventListener("click", smoothScrollTo);