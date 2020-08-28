/* 
$ The DOM-token-list interface represents a set of space-separated tokens.
  Such a set is returned by:
  > Element.classList
  > HTMLLinkElement.relList
  > HTMLAnchorElement.relList
  > HTMLAreaElement.relList

  Its index begins with 0 as with JS array objects. DOMTokenList is always case sensitive.

  Some properties and methods of DOMTokenList:
  ~ Properties:
    > length
    > value
  ~ Methods:
    > item()
    > add()
    > remove()
    > replace()
    > contains()
    > toggle()
    > value()
    > supports()
    > forEach()
*/

/* 
$ Element.classList is a read only property which returns a live DOMTokenList collection of the class attributes of the element.
  > Syntax- var elementClasses= elementNodeReference>classList;
*/

// Getting element which contain various class Names:
var para = document.getElementById("myPara1");
var elementClass = para.classList;
console.log(elementClass);

// YOU can also use index for see particular classes;
console.log(elementClass[1]);

//-- No of classes, length property:
console.log(`No of classes in elements- ${elementClass.length}`);

//-- name of classes, value property:
console.log(`Values of classes: ${elementClass.value}`);

//-- Item() method: work similar to [] for accessing particular class name:
// starts from 0:
console.log(`class at no 2: ${elementClass.item(2)}`);

//-- add() method- add a class to a element.
elementClass.add("newClass");
// Now u will see that a new class is added to the element:
console.log(para);
// Also length of the class list will increase:
console.log(elementClass);
// You can Also add multiple classes :
elementClass.add("newClass1", "newClass2", "newClass3");
console.log(elementClass);

// -- remove() : method removes the classes from the element.
elementClass.remove("newClass", "newClass1", "newClass2", "newClass3");
console.log(elementClass);

// If i remove all the classes:
elementClass.remove("aws", "intro", "para");
console.log(elementClass); // > empty
// all class will removed all the class which u use for internal style will removed hence its corresponding style also removed:
// Only inline style will remain:
para.style.color = "black";

// * class keyword is remain their as attribute in the element and a empty string is assigned to it:

// Adding class back: for further testing:
elementClass.add("para", "intro", "aws");

// -- replace("old","new"):
elementClass.replace("aws", "intro2");
console.log(elementClass);

// -- contains(): for checking wether a  given class  is present in the element or not:
console.log(
    `Is there any className with intro: ${elementClass.contains("intro")}`
);

// -- toggle(): if a specified class is present in the element then this method removes it or if not present then it adds it:

elementClass.toggle("aws");
console.log(elementClass);

elementClass.toggle("intro2");
console.log(elementClass);