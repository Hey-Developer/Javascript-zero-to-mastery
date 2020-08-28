/* 
$ it used to provide some information to users.

  Type of dialog boxes:
  -- alert():
     This window object's method is used to display data in alert dialog box.
     alert really should be used only when you truly want to stop everything and let te user know something.
     > Syntax: window.alert() or alert()

  -- confirm()
     This window object's method is used to display a message for a user to respond to by pressing either OK button,
     to agree with the message. or CANCEL to disagree with the message.
     It returns true on OK and False on cancel.
     > Syntax: window.confirm() or confirm()

  -- prompt():
     This window object's method is used to get input from user,
     it displays a dialog box that prompts the visitor for input.
     Once the prompt function obtains input from the user, it returns that input.
     If the user press the cancel button in the dialog or close box, a value null will be returned.
     > Syntax: window.prompt(text,defaultText) or prompt(text,defaultText)
*/
function msg() {
    alert("Hello Alert Box");
}

function msg1() {
    var v = confirm("Are u sure?");
    if (v == true) {
        alert("ok");
    } else {
        alert("cancel");
    }
}

function msg2() {
    var v = prompt("Who are you?");
    alert("I am " + v);
}