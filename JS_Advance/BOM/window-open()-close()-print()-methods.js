/* 
$ open() method:
  The open() method creates a new secondary browser window, similar to choosing new window from the file menu.
  It returns a window object representing to the newly created window.
  If the window could not be opened the returned value is null.
  > Syntax: window.open(URL,name,features,replace)
    All four arguments are optional.
    ~ URL- indicates the document to load into the window, if no url is specified, a new window  with about:blank is opened.
    ~ Name-Specifies the target attribute or the name of the window. The following values are supported:
       > _blank: URL is load into a new window.
       > _parent: URL loaded into the parent frame. 
       > _top: URL replaces any frame sets that may be loaded.
       > _self: URL replace the current page.
    ~ features- it is a comma delimited  string that lists the featured of the window(like toolbar,scrollbar,etc)
    ~ replaces- it indicates whether or not the URL specified should replace the window's contents.This would apply to window that was already created,Value can be true or false.
*/

// Opens a separate window when width and height are specified.
let createWindow = function() {
    window.open("https://www.youtube.com", "_bank", "height=500", "width=500");
};

// Opens a new window. from the current url.
let newWindow = () => {
    let win = window.open("", "");
    win.document.write("Welcome to new window");
};

// This will create a blankWindow without url.
let blankWindow = () => {
    window.open();
};

/* 
$ close() method:
  Once a window is open, the close() method is used to close it.
  It closed the current window or the window on which it was called.
  This method is only allowed to be called for the windows that were open by script using the window.open() method.
  It is often used together with open() method.


*/
var newWin = window.open("_bank", "height=500", "width=500");

newWin.document.write("NEW WINDOW HERE-_-");

function closeWin() {
    // Before close  window u should close document.
    newWin.document.close();
    newWin.close();
}

// $ print() method:
var printDoc = () => {
    window.print();
};
document.getElementById("btn").addEventListener("click", printDoc);