// --getElementsByTagName("TAG_NAME"): returns a live node list meaning that it updates itself with the DOM tree automatically,so modification of DOM tree will be reflected in the returned collection.
// THE returned node list or collection of nodes can be accessed by index number starting with index 0 just like array
// getElementById() method returns the element object but this method return the a list of elements objects because here we access element using Tag name and  in a html doc there is more than one element of same tag,
// Hence it returns all the elements objects with specified TAG_NAME:
// This method accepts a string indicating the type of elements that can be retrieved, a special value "*" returns all the elements in the document.
// You can use length property  to get the no of all elements objects in the list with specified tag_name
// ! Remember 's' is there in element that is it is 'Elements'

var pInsideDiv = document.getElementsByTagName("p"); // return [object HTMLCollection]
document.write(pInsideDiv + "</br>");
console.log(pInsideDiv);

// for accessing all elements-->
var allElements = document.getElementsByTagName("*"); // return [object HTMLCollection]
document.write(allElements + "</br>");
console.log(allElements);

// For accessing elements only inside body tag-->
var bodyElements = document.body.getElementsByTagName("*");
document.write(bodyElements + "</br>");
console.log(bodyElements);

// More specific--> Search in my doc that is there any element with id =".." now in that ID search for all span tags
// Go to logo and give me all span-->
// if i do like this-->

var allSpan = document.getElementsByTagName("span");
document.write(allSpan + "</br>");
console.log(allSpan);
// This is write but it give me all span in the doc but i want to only those span which come under a div with id=logo--> for that->

/* 
WAY ONE-
  var myLogo = document.getElementById("logo");
  var spanInsideLogo = myLogo.getElementsByTagName("span");
  document.write(spanInsideLogo + "</br>");
  console.log(spanInsideLogo); 
*/

// Also u can do like this>

var logoSpan = document.getElementById("logo").getElementsByTagName("span");
document.write(logoSpan + "</br>");
console.log(logoSpan);

// Now i will access all the elements inside tag with id Intro2

var allInsideIntro = document
    .getElementById("Intro2")
    .getElementsByTagName("*");

document.write(allInsideIntro + "</br>");
console.log(allInsideIntro);
// !NOTE: Remember if u declare a block level element inside the tag="Intro2" then it will not listed above because it is a block level element and it comes in new line

// > Length property of Html Collection which is returned by getElementsByTagName("")

document.write(
    `No of element inside Div tag with id logo ${logoSpan.length} <br>`
);
console.log(`No of element inside Div tag with id logo ${logoSpan.length}`);
// also document.getElementsTagName("logo").length

// > USing loop in getElementsByTagName();
/* 
 logoSpan contains all span element inside div with id 'logo'
  # If i do like this [],using this array operator i can get the specific element inside the list or object collection
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[0]; --> returns first element inside div with id 'logo'
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[1]; --> returns second element inside div with id 'logo'
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[2]; --> returns third element inside div with id 'logo'
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[3]; --> returns fourth element inside div with id 'logo'
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[4]; --> returns five element inside div with id 'logo'
  var getSpan = document.getElementById("logo").getElementsByTagName("span")[5]; --> returns six element inside div with id 'logo'

Also we can use loop to iterate this--collection
*/
var getSpan = document.getElementById("logo").getElementsByTagName("span");
var len = getSpan.length;
for (let i = 0; i < len; i++) {
    document.write(getSpan[i] + "</br>");
    console.log(getSpan[i]);
}

document.write(` <br> using for-of loop <br> `);
console.log(`Using for of loop`);

// using for-of loop
for (value of getSpan) {
    document.write(value + "</br>");
    console.log(value);
}