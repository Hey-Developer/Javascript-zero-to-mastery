/* 
$ Element_Node.attributes  :
  The attribute  property returns a live collection of all attributes nodes registered to the specified node.
  It is a read only property.

  > Syntax: Element_node[index/key]
*/

var para = document.getElementById("myPara");
console.log(` all the attributes of p element:`);
console.log(para.attributes);

// Getting particular attribute using index
console.log(`attribute @ index 1:`);
console.log(para.attributes[1]);

// Getting attribute using key:
console.log(para.attributes["title"]);

/* 
$ setAttribute():
  This method is used to set value of an attribute on the specified element.
  If the attribute already exists, the value is updated.
  Otherwise a new attribute is added with the specified name and value.
  We should not use this method to set inline style as it will overwrite other css property.

  > Syntax: Element_node.setAttribute(name,value)

    For inline styling:
  > Syntax: Element_node.setAttribute("style","Css property value")


*/

// setting existing element attributes to a new value.
para.setAttribute("class", "introPara");
console.log(para);

// This is very uncommon way of doing a more easy way is:
para.className = "myGeekyShows";

// Adding a new attribute:
para.setAttribute("value", "Dom");
console.log(para);

// Setting  inline-Style: but it will override all the previous inline style of html element.
para.setAttribute("style", "color:red;");

// This is very uncommon way of doing a more easy way is: In this way your  previous inline style will not override
para.style.color = "red";

/* 
$ getAttribute():
  The getAttribute() returns the value of a specified attribute on the element.
  If the given attribute does not exist, the value returns will either be null or ""

  > Syntax: Element_node.getAttribute('attribute_name')
*/

var paraId = para.getAttribute("id");
console.log(paraId);

// This is very uncommon way of doing a more easy way is:
console.log(para.id);

/* 
$ removeAttribute():
  This method is used to remove an attribute from the specified element.

  > Syntax:- element.removeAttribute(attrName)

$ hasAttribute() methods 
  return a boolean value indicating whether the specified element has the specified attribute or not.

  > Syntax: element.hasAttribute('attrName');
  
*/

para.removeAttribute("value");

// Now u will see that value attribute is not in the html element:
console.log(para);

// To check whether a property is  present in the HTML element;

console.log(
    `Is there any Title attribute present inside p element: ${para.hasAttribute(
    "title"
  )}`
);