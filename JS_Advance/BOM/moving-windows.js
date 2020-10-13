/* 
$ moveBy()-
  this method moves the current window by a specified amount of pixels.
  > Syntax: window.moveBy(horizontalPixels, verticalPixels);
  Where, 
  ~ window is the name of the window to move or is called just window if it is the main window.
  ~ horizontalPixels: it is the number of horizontal pixels to move the window where the positive n. move the window to the right and negative number to the left.
  ~ verticalPixels: it is the number of vertical pixels to move the window where the positive n. move the window to the down and negative number to the top.
*/
let win;

function newWin() {
    win = window.open(
        "https://www.youtube.com",
        "win",
        "height=200",
        "width=200"
    );
}

function moveWin() {
    win.moveBy(100, 200);
    win.focus();
}

document.getElementById("newWin").addEventListener("click", newWin);
document.getElementById("up").addEventListener("click", moveWin);

/* 
$ moveTo()- this methods moves the window to the specified coordinates.
 > syntax: window.moveTo(x,y);
   where 

*/