/* 
$ Timing Events:
  The window object allows execution of code at specified time intervals.
  > These time intervals are called timing events.

  > The  methods to use with JavaScript are:
    -- setTimeout(function, milliseconds)
       Executes a function, after waiting a specified number of milliseconds.
       The setTimeout() method sets a timer which executes a function or specified piece of code once after the timer expires.
       The function is only executed once.
       It returns a positive integer value which identifies the timer created by the call to setTimeout(); this
       value can be passed to clearTimeout() to cancel the timeout.
       > setTimeout(function, milliseconds,para1,para2)
       > parameter of function can be passed-->
*/

function changeCSS() {
    document.getElementById("para").className = "divAfter";
    document.getElementById("main").className = "paraAfter";
}
let timeoutID1 = setTimeout(changeCSS, 2000);

// Also using arrow function:
let timeoutID2 = setTimeout(() => {
    document.getElementById("para2").style.color = "yellowgreen";
}, 5000);

/* 
-- clearTimeout(timeoutID)
   This method cancels a timeout previously established by calling setTimeout(). 
   The ID value returned by setTimeout() is used as parameter for the clearTimeout() method.
*/
function clrTimeout() {
    clearTimeout(timeoutID2);
}
document.getElementById("cancel").addEventListener("click", clrTimeout);

/* 
    -- setInterval(function, milliseconds,para1,para2)
       Same as setTimeout(), but repeats the execution of the function continuously.
       This method repeatedly calls a function executes a code snippet, with a fixed time delay between each call. 
       It returns an integer ID which uniquely identifies the interval, so u can remove it later by calling clearInterval().

    -- clearInterval()   
*/

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
var clrIntervalID = setInterval(() => {
    const rndCol =
        "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.getElementById("text").innerText += " hii-";
    document.getElementById("text").style.color = rndCol;
}, 2000);

function clrInterval() {
    clearInterval(clrIntervalID);
}
document.getElementById("cln").addEventListener("click", clrInterval);