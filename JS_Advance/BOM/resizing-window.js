/* 
$ resizeBy()- This method is used to resize the current window by a certain amount, relative to its current size.
  > Syntax: window.resizeBy(width,height)
    Where,
    ~ window- it is the name of the window to move or is called just window if it is the main window.
    ~ width- it is the number of width pixels, where positive numbers increase the window and negative numbers decrease .
    ~ height- it is the number of height pixels, where positive numbers increase the window and negative numbers decrease height wise.


 $ resizeTo()- This method is used to method resizes a window to the specified width and height.
   > Syntax: resizeTo(width,height);
     Where,
    ~ window- it is the name of the window to move or is called just window if it is the main window.
    ~ width- it is the number of outerWidth pixels, where positive numbers increase the window and negative numbers decrease .
    ~ height- it is the number of outerHeight pixels, where positive numbers increase the window and negative numbers decrease height wise.
*/
let win;

function newWin() {
    win = window.open(
        "https://www.youtube.com",
        "_blank",
        "height=200",
        "width=200"
    );
}

function resizeWin() {
    win.resizeBy(200, 200);
    win.focus();
}

document.getElementById("newWin").addEventListener("click", newWin);
document.getElementById("resize").addEventListener("click", resizeWin);