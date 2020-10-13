/* 
$ HTML-DOM Mapping:
  Many Objects/Nodes properties are simply direct mapping to attributes of the HTML element.
  In  other words there is a mapping directly between HTML syntax and The DOM.
  Ex-
  ~ <p id="myId" title="hello"> lorem </p>

    Above title can be accessed in DOM by:
    > document.getElementById('myId').title

    P tag's title attribute s mapped to DOM property title,
    hence in the above example that is te reason we can access title in DOM that way.

#    HTML Attributes------------<mapping>-----------Dom Nodes Properties.

-- Aspects of HTML-DOM mapping --
> The Mapping is direct if the attribute is a single non-reserved word(In Js for ex, class )
  > So an element's 'title' attribute is accessed directly via corresponding DOM property 'title' because title is a single word and also it is not a reserved word hence there is direct mapping.
  #   HTML attributes:------------------------------as it is in------------------------------DOM NODES Properties:
           |                                                                                         |                  
(value,id,src,disable,title,href,type)                                               Element.(value,id,src,disable,title,href,type)

> The mapping will change case as camelCase if the attribute has two words:
  > Ex tabindex attribute will be represented as tabIndex in the DOM.

> If the html attribute name is reserved under JS, the value will be modified to work.
  > Ex. class attribute will be represented as className in DOM
  > for attribute will be represented as htmlFor in DOM

> There are also some exception:
  > char attribute will be represented as ch in DOM.

> For others and custom attributes we have tp use getAttribute() and setAttributes() methods because they may not have direct mapping.


$ CSS-DOM Mapping:
  We can modify the css properties with the help of BYDefault mapping between the CSS property and DOM Objects/Nodes properties.

-- Aspects of HTML DOM mapping --
> CSS properties which have single word, so their mapping is direct.
  > EX- color in CSS will be represented as color in DOM.

> Hyphened CSS properties are represented as single word with camelCase in the DOM.
  > EX- background-color in CSS will be represented backgroundColor in DOM.

> Css properties value with vendor prefix:
  > EX -webkit-box-shadow in CSS will be represented webkitBoxShadow in DOM.

> There are some reserved word which can be the exception:
  > float in CSS will be represented as cssFloat in DOM.
   




*/