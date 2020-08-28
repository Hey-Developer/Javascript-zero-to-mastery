/* 
$ Key-Events-->

-- keydown- it fires as a key is pressed down.

-- keypress- it fires after a key is pressed down(after keydown), it only works with printable character.

-- keyup- it fires as the key is released.


*/

const txt = document.getElementById("name");

function key(e) {
    console.log(e.type + " " + e.keyCode + " " + String.fromCharCode(e.keyCode));
}

txt.addEventListener("keydown", key, false);
txt.addEventListener("keypress", key, false);
txt.addEventListener("keyup", key, false);

const pass = document.getElementById("password");

function okd(e) {
    e.target.style.backgroundColor = "yellowgreen";
}

function oku(e) {
    e.target.style.backgroundColor = "tomato";
}

pass.addEventListener("keydown", okd, false);
pass.addEventListener("keyup", oku, false);

// $ Text-Event:
// -- textInput shows the char which you enter but only printable char, no ctrl key no backspace.

function showText(e) {
    console.log(e.type + " " + e.data);
}
document.getElementById("myName").addEventListener("textInput", showText);