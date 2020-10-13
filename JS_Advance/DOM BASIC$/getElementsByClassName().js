// -- getElementByClassName("Class_Name"): returns a live node list meaning that it updates itself with the DOM tree automatically,so modification of DOM tree will be reflected in the returned collection.
// THE returned node list or collection of nodes can be accessed by index number starting with index 0 just like array.
// Similar working as previous but here we use class_Name instead of tag_name.
// We can also pass multiple class name.For matching, all the class name should  match
// Here also you can also use length property to get no of element inside the node list.

var evenPara = document.getElementsByClassName("even");
document.write(evenPara + "<br>");
console.log(`Elements with class name "even"-->`);
console.log(evenPara);

var oddPara = document.getElementsByClassName("odd");
document.write(oddPara + "<br>");
console.log(`Elements with class name "odd"-->`);
console.log(oddPara);

// Suppose if i want only those elements with a specific class name but in body tag only
// var intro = document.getElementsByClassName("intro");--> if i do like this then all elements come inside it with class name intro i.e title tag also come coz it has also a class name intro hence>
var intro = document.body.getElementsByClassName("intro");
document.write(intro + "<br>");
console.log(`Elements with class name "intro" under body elements only-->`);
console.log(intro);

// Multiple class-->
var main = document.getElementsByClassName("main para");
document.write(main + "<br>");
console.log(`Elements with class name "main" and class name 'para'-->`);
console.log(main);

// More Specific-->accessing p tag with class even there are lots of p tag with even class name but i want to select only those p tag which come under a div tag with id="..."
// if i use this it gives me all p's with even class but i don't want all--

// var evenPara = document.getElementsByClassName("even");
// document.write(evenPara + "<br>");
// console.log(`Elements with class name "even"-->`);
// console.log(evenPara);

// var paraDiv = document.getElementById("mixPara");
// var evenParaInsideDiv = paraDiv.getElementsByClassName("even");
var evenParaInsideDiv = document
    .getElementById("mixPara")
    .getElementsByClassName("even");

document.write(evenParaInsideDiv + "<br>");
console.log(
    `Elements with class name "even" and inside div with id "mixpara"-->`
);
console.log(evenParaInsideDiv);

// length property:
var len = evenPara.length;
document.write(
    `I want to know many elements i have in my doc with class name="even"--> ${len} <br>`
);
console.log(
    `I want to know many elements i have in my doc with class name="even"--> ${len}`
);

// iterating using Loop
// If i want to access particular element of the collection/list-->
// var evenPara1=document.getElementsByClassName("even")[0].......return first element of the node list:
document.write(` Displaying all the elements with class Name even--> <br>`);
for (let i = 0; i < len; i++) {
    document.write(`${i + 1}st Element: ${evenPara[i]} <br>`);
    console.log(`Elements with class Name even are:`);
    console.log(evenPara[i]);
}
// or
var introLen = document.getElementsByClassName("intro").length;
for (let i = 0; i < introLen; i++) {
    var result = document.getElementsByClassName("intro")[i];
    document.write("Elements with class name intro" + result + "<br>");
    console.log(`Elements with class name intro`);
    console.log(result);
}