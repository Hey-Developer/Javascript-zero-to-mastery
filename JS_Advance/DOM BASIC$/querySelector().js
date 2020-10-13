/* 
$ query Selector("CSS_SELECTOR") 
> Returns the first element match fo the specified CSS selector,or group of selector.
> If no matches are found, null is returned.

~ Element Selector>
  querySelector("p")
  querySelector("p,h1")

~ ID Selector>
  querySelector("#show")
  querySelector("#show,#show1")

~ Class Selector
  querySelector(".geek")
  querySelector("p.myClass")
  querySelector("p>span.myClass")

*/
// Element Selector:
var result = document.querySelector("p"); // returns first p element of the document
document.write(`${result} </br>`);
console.log(result);

// Multiple selector:
var result_1 = document.querySelector("p,h1"); // returns first matching element i.e if p come before h1 in the doc then it returned p and if h1 come before p then it returned h1
document.write(`${result_1} </br>`);
console.log(result_1);

// Id selector
var result_2 = document.querySelector("#show"); // returns first element with id "show"
document.write(`${result_2} </br>`);
console.log(result_2);

// Class Selector
var result_3 = document.querySelector(".start"); // returns first element with class "intro"
document.write(`${result_3} <br>`);
console.log(result_3);

// Descendant Selector
var result_4 = document.querySelector("div p"); // returns the first p element which comes under div
document.write(`${result_4} <br>`);
console.log(result_4);

// Child selector
var result_5 = document.querySelector("div>p"); // returns the first p element which is direct child of  div
document.write(`${result_5} <br>`);
console.log(result_5);

/* 
$ querySelectorAll("CSS_SELECTOR"):
  This methods return a static(not live) Node list representing a list of the document's element. that match the specified group of selectors:
  We can access the elements inside list using index start from 0
  We can use length property:
  if we specified a pseudo selector then it will return a empty list.

*/

var result_5 = document.querySelectorAll("p");
document.write(`${result_5} <br>`); // returns a node list  of all the p in the doc.
console.log(result_5);

// Multiple Selector
var result_6 = document.querySelectorAll("p,h1,#show,.intro");
document.write(`${result_6} <br>`); // returns a node list  of all the p,h1,element with id "Show" and the element with class "intro" in  the doc.
console.log(result_6);

// Id selector:
var result_7 = document.querySelectorAll("#show,#show1");
document.write(`${result_7} <br>`); // returns a node list  of all the element with id "show" and the element with id "show1" in the doc.
console.log(result_7);

// class selector
var result_8 = document.querySelectorAll(".intro,.start");
document.write(`${result_8} <br>`); // returns a node list  of all the element with class "intro" and the element with class "start" in the doc.
console.log(result_8);

// Attribute selector
var result_9 = document.querySelectorAll("a[target]");
document.write(`${result_9} <br>`); // returns a node list  of all the anchor elements which have target attribute.
console.log(result_9);

// -- querySelectorAll() --> More Specific
// I want only those p element with id ="out" but which comes under the the div with id show.

var getDiv = document.querySelector("div#show");
var getParaOut = getDiv.querySelectorAll("p.out");
document.write(`${getParaOut} </br>`);
console.log(getParaOut);

// Also i can do this-->
var result_10 = document.querySelectorAll("div#show > section > p.out");
document.write(`${result_10}</br>`);
console.log(result_10);

//  Length in querySelectorAll()
// I want to know all the p element in my doc
var allP = document.querySelectorAll("p");
var len = allP.length;
document.write(` No of P tags in this doc are :${len} </br>`);
console.log(` No of P tags in this doc are :${len}`);

// Display all the p elements in the doc one by one:
for (let i = 0; i < len; i++) {
    let result = document.querySelectorAll("p")[i];
    // also var result=allP[i]
    document.write(`${i + 1}st p tag in the doc: ${result} </br>`);
    console.log(result);
}