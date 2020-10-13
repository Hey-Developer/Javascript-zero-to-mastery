/* 
$ DYNAMIC STYLE MANIPULATION:
  ~ As we know that most direct way to modify CSS value with JS is through the style property,
  ~ That corresponding to the inline style sheet specification for a particular HTML Element,
  ~ That is used style property of DOM we can only change one property at a time  in a html element hence-->
  ~ This has performance consideration since you need to change a single property at a time. We might manipulate style rules using css class selector:
  
  > The elements class attributes is represented as className property in DOM.
  
*/
//* For adding multiple properties to a element using JS--> first a create a class in css and add all the properties in that class which you want to add:
var newId = "saveProperties";

// * Now access that element in which you want to add those multiple properties now just replace its class/id name with the new class/id name u created in CSS:
var p = document.getElementById("myPara1");
p.id = newId;

// You can see in console that now id is changes to a new id name:
console.log(p);