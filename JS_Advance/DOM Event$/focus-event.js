/* 
$ focus- it fires when an element gain focus, such as selecting a form field.(NO BUBBLE)

$ blur- it fires when an element loses focus, such as moving away from a from field.(NO BUBBLE)

$ focusin-it fires just an element is about to gain focus.

$ focusout- it fires just an element loses focus and just before the blur event.
*/

var userName = document.getElementById("un");
var password = document.getElementById("pw");

function focusGain(e) {
    e.target.className = "onFocus";
}

function focusLost(e) {
    e.target.className = "on";
}

function beforeFocusGain(e) {
    e.target.style.backgroundColor = "red";
}

function beforeFocusLost(e) {
    e.target.style.backgroundColor = "yellowgreen";
}

un.addEventListener("focusin", beforeFocusGain, false);
pw.addEventListener("focusin", beforeFocusGain, false);

un.addEventListener("focus", focusGain, false);
pw.addEventListener("focus", focusGain, false);

un.addEventListener("blur", beforeFocusLost, false);
pw.addEventListener("blur", beforeFocusLost, false);

un.addEventListener("blur", focusLost, false);
pw.addEventListener("blur", focusLost, false);