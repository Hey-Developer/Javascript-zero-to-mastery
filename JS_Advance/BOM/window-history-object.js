/* 
$ The History Object is a read only array of URL string that show where the user has been recently.
  > Syntax: window.history.property/method;
  ~ Property:
    -- length
  ~ Methods:
    -- back(): it loads the previous URL in the history list.
    -- forward(): it loads the next URL in the history list.
    -- go(): it access a particular item in the history list relative to the current position. Using a negative value moves to a history item previous to the current location, while a +ve no. moves forward in the history list.
*/
function historyLength() {
    document.getElementById("p1").innerHTML = window.history.length;
}
document.getElementById("history").addEventListener("click", historyLength);

function goBack() {
    document.getElementById("p2").innerHTML = window.history.back();
}
document.getElementById("back").addEventListener("click", goBack);

function goForward() {
    document.getElementById("p3").innerHTML = window.history.forward();
}
document.getElementById("forward").addEventListener("click", goForward);

function gooo() {
    document.getElementById("p4").innerHTML = window.history.go(-1);
}
document.getElementById("go").addEventListener("click", gooo);