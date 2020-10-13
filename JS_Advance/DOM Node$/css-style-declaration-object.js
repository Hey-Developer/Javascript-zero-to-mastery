/* 
~ The CssStyleDeclaration  object represents a collection of Css property value:pair;
~ This object is use in two API's-
  > HTMLElement.style
  > window.getComputedStyle()

  -- document.getElementById('id').style-----> this returns a CSS-Style-Declaration-Object which contain all the css properties of specified element. in property: value; format.

  There are some properties of this object(CSS-Style-Declaration-Object)
  # Properties:
    > cssText
    > length
    > parentRule

  # Methods:
    > getPropertyValue('property')
    > getPropertyPriority('property')
    > removeProperty('property')
    > setProperty('property','value',priority)
    > item(index)
*/

/* 
* inline Style Manipulation.
  ~ The most direct way to modify CSS  value with JS is through the style property that corresponding to the inline style sheet specification for a particular HTML element.
  ~ To perform a manipulation of the CSS with JS DOM interface, you would access the style object of the element.

* style property:
  ~ The style property is used to get or set the inline style of an element. 
  ~ While getting, it returns a CSSStyleDeclaration object that contains a list of all styles properties, for that element with values assigned for the attributes that are defined in the element inline style.
  ~ Style property represents only the CSS Declaration set in element inline style attributes.
    > Not those that come from style rules elsewhere, such as style rules in <head> or external stylesheets. or browser default.
  
  ~ Syntax:
    Get:
    > element.style.property

    Set:
    > element.style.property="value"

  ~ A style declaration is reset by setting it t0 null or empty string.
*/

var para = document.getElementById("myPara1");

// Getting all inline style properties and value:
console.log(para.style);

// Setting Css inline style to the element:
para.style.padding = "10px";

// Setting existing inline style property:
para.style.backgroundColor = "yellowgreen";

// We can also use setAttribute to change style:
//-- para.setAttribute("style", "font-size:90px");
// > But it will override all previous css inline style: hence not fruitful.

// ! ---Properties and Methods---

// Accessing element-->
var p2 = document.getElementById("myPara2");

// cSDO--> CSS_Style_Declaration_Object:
var csdo = p2.style;

// # cssText property--> returns or sets all text of inline style :
console.log(csdo.cssText);
// setting inline style using cssText property: but it will override all the previous inline styling:
csdo.cssText = "font-size: 30px; color:orange;";

// # length property--> it gets the no. of explicitly set style on the html element:
console.log(`No of property used in inline style: ${csdo.length}`);

// # item(index): it returns the css property name from the css Declaration object from the specified index:
// Starts from 0:
console.log(csdo.item(1));

// # getPropertyValue();
console.log(
    `Value of the color property in inline style--> ${csdo.getPropertyValue(
    "color"
  )}`
);

// # setProperty(name, value,priority);
csdo.setProperty("background-color", "yellow", "important");
console.log(csdo);

// # getPropertyPriority('name');
console.log(
    `Is background color is set to priority: ${csdo.getPropertyPriority(
    "background-color"
  )}`
);