/* 
$ DOCUMENT OBJECT MODEL-->
? The DOM is a W3C (World Wide Web Consortium) standard.

? The DOM defines a standard for accessing documents:

? "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

  > The document object model is a application programming interface(API) for HTML and XML documents.
  > With the DOM, programmers can create and build documents,navigate their structure, and add, modify or delete elements and content.
  > The DOM is an object oriented representation of the web page, which can be modify with a scripting language such as JS
  > The DOM model represents a document with a logical tree.

? The W3C DOM standard is separated into 3 different parts:
  ~ Core DOM - standard model for all document types
  ~ XML DOM - standard model for XML documents
  ~ HTML DOM - standard model for HTML documents(we will study this.)
  ~ CSS DOM

* HTML DOM-->
? The HTML DOM is a standard object model and programming interface for HTML. It defines:
  > The HTML elements as objects
  > The properties of all HTML elements
  > The methods to access all HTML elements
  > The events for all HTML elements

#In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

* When a web page is loaded, the browser creates a Document Object Model of the page.
  ~ The HTML DOM model is constructed as a tree of Objects:

? With the object model, JavaScript gets all the power it needs to create dynamic HTML:
  > JavaScript can change all the HTML elements in the page
  > JavaScript can change all the HTML attributes in the page
  > JavaScript can change all the CSS styles in the page
  > JavaScript can remove existing HTML elements and attributes
  > JavaScript can add new HTML elements and attributes
  > JavaScript can react to all existing HTML events in the page
  > JavaScript can create new HTML events in the page

? DOM levels or DOM Versions--> 
level 0
level 1
level 2
level 3
level 4 (enhanced in year 2015)
Levels of DOM:

> Level 0: Provides low-level set of interfaces.

> Level 1: DOM level 1 can be described in two parts: CORE and HTML.
  ~ CORE provides a low-level interfaces that can be used to represent any structured document.
  ~ HTML provides high-level interfaces that can be used to represent HTML document.

> Level 2 : consists of six specifications: CORE2, VIEWS, EVENTS, STYLE, TRAVERSAL and RANGE.
  ~ CORE2: extends functionality of CORE specified by DOM level 1.
  ~ VIEWS: views allows programs to dynamically access and manipulate content of document.
  ~ EVENTS: Events are scripts that is either executed by browser when user reacts to web page.
  ~ STYLE: allows programs to dynamically access and manipulate content of style sheets.
  ~ TRAVERSAL: allows programs to dynamically traverse the document.
  ~ RANGE: allows programs to dynamically identify a range of content in document.
  
> Level 3: consists of five different specifications: CORE3, LOAD and SAVE, VALIDATION, EVENTS, and XPATH.
  ~ CORE3: extends functionality of CORE specified by DOM level 2.
  ~ LOAD and SAVE: allows program to dynamically load the content of XML document into DOM document and save the DOM Document into XML document by serialization.
  ~ VALIDATION: allows program to dynamically update the content and structure of document while ensuring document remains valid.
  ~ EVENTS: extends functionality of Events specified by DOM Level 2.
  ~ XPATH: XPATH is a path language that can be used to access DOM tree.


DOM is a way to represent the webpage in the structured hierarchical way,
so that it will become easier for programmers and users to glide through the document. 
With DOM, we can easily access and manipulate tags, IDs, classes, Attributes or Elements using commands or methods provided by Document object.

?Structure of DOM:
 DOM can be thought of as Tree or Forest(more than one tree). 


? Why called as Object Model ?
  Documents are modeled using objects, and the model includes not only the structure of a document 
  but also the behavior of a document 
  and the objects of which it is composed of like tag elements with attributes in HTML.

$ Properties of DOM:
  IN a DOM to access the documents elements a Object is define which is called 'Document' 
  Through this object we can access the html elements using properties and methods of DOM:
                                                ______________
                                                |            |
                                                |    Window  |
                                                |____________|
                                                ______|_______
                                                |            |
                                                | Document   |
                                                |____________|
          _____________________________________________|___________________________________________
     _____|______                               _______|______                               ______|______
     |          |                               |            |                               |           |   
     | Link     |                               |  Form      |                               |  Anchor   |
     |__________|                               |____________|                               |___________|   

  > Window Object: Window Object is at always at top of hierarchy.
    > Document object: When HTML document is loaded into a window, it becomes a document object.
      > Form Object: It is represented by form tags.
        ~ Form Control Elements:: Form can have many control elements such as text fields, buttons, radio buttons, and checkboxes, etc.
      > Link Objects: It is represented by link tags.
      > Anchor Objects: It is represented by a href tags.

$ Methods of DOM:
  > write(“string”): writes the given string on the document.
  > getElementById(): returns the element having the given id value.
  > getElementsByName(): returns all the elements having the given name value.
  > getElementsByTagName(): returns all the elements having the given tag name.
  > getElementsByClassName(): returns all the elements having the given class name.

? What DOM is not ?
  > The Document Object Model is not a binary description where it does not define any binary source code in its interfaces.
  > The Document Object Model is not used to describe objects in XML or HTML whereas the DOM describes XML and HTML documents as objects.
  > The Document Object Model is not represented by set of data structures; it is an interface which specifies object representation.
  > The Document Object Model does not show criticality of objects in documents i.e it doesn’t have information about which object in document is appropriate to the context and which is not.
*/

/* 
? Whenever we write html code like this-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <h1>Intro Of Dom--</h1>
    <hr />
    <p>Hello <span>World</span></p>

    <ul>
        <li>
            <a href="">Cnu</a>
        </li>
        <li>
            <a href="">Cloves</a>
        </li>
    </ul>
</body>

</html>

?The Browser render this code into a Tree of the elements using the WEB Api named DOM
  or we can say DOM represent ell the elements of the html doc level-wise in the form of tree.
  > For each elements a branch is created from the root elements(<html>)
  > There will be a sub-branch if elements contain attribute,content, or other elements.
  > Every element in this document tree is called Element_Node.
  > Content/Text inside elements is called Text_Node

? DOM Node Types-->
      Constant                             Node Type               Description
  > Node.ELEMENT_NODE                         1                      All elements such as <h1> or <div>
  > Node.TEXT_NODE                            3                      The actual Text of Element or attribute ex-"HEllo" or "www.w3.org"(Inside HREF)
  > Node.PROCESSING_INSTRUCTION_NODE          7                      An instruction to a parser om aspect of the document </xml version-"1.0"?>
  > Node.COMMENT_NODE                         8                      A comment such as <!--Something-->
  > Node.DOCUMENT_NODE                        9                      A Document node
  > Node.DOCUMENT_TYPE_NODE                   10                     A doctype statement <!DOCTYPE html>
  > Node.DOCUMENT_FRAGMENT_NODE               11                     A document fragment, which represent a lightweight structure to hold a collection of Dom node for manipulating or insertion

? Node RelationShip-->
  > Parent-child relation 
    ~ <html> node is parent node and <head> and <body> are its child nodes.
  > First-Child relation
    ~ if inside a body tag first element is <h1> then <body> is the parent node and <h1> is the first child node
  > Sibling relation
    ~ <body> element contain so many element for ex a <h1> a <p> a <div> a <ul> and so on here <body> is the parent node and  all the elements inside it are <child> node but also between these child node each element is the sibling node of other element.

*/

/* 
$ The Html DOM 'document' object-->
  > The 'document' object represents your web page.
  > If you want to access any element in an HTML page, you always start with accessing the document object.


  Some Example of how can you use document object to access the elements of HTML docs.
  
  #Finding HTML Elements
  > document.getElementById(id)	              Find an element by element id
  > document.getElementsByTagName(name)	      Find elements by tag name
  > document.getElementsByClassName(name)	    Find elements by class name

  #Changing HTML Elements
  Property	                             Description
  > element.innerHTML=new html          content	Change the inner HTML of an element
  > element.attribute=new value	        Change the attribute value of an HTML element
  > element.style.property=new style	  Change the style of an HTML element
  
  Method	                                      Description
  > element.setAttribute(attribute, value)	    Change the attribute value of an HTML element

  #Adding and Deleting Elements
  Method	                                      Description
  > document.createElement(element)	        Create an HTML element
  > document.removeChild(element)	          Remove an HTML element
  > document.appendChild(element)	          Add an HTML element
  > document.replaceChild(new, old)	        Replace an HTML element
  > document.write(text)	                  Write into the HTML output stream  
  
  #Adding Events Handlers
  > document.getElementById(id).onclick=function(){code}	     Adding event handler code to an onclick event

  #Finding HTML Objects-->
  Property	Description	DOM
  > document.anchors	              Returns all <a> elements that have a name attribute	1
  > document.applets	              Returns all <applet> elements (Deprecated in HTML5)	1
  > document.baseURI	              Returns the absolute base URI of the document	3
  > document.body	                  Returns the <body> element	1
  > document.cookie	                Returns the document's cookie	1
  > document.doctype	              Returns the document's doctype	3
  > document.documentElement	      Returns the <html> element	3
  > document.documentMode	          Returns the mode used by the browser	3
  > document.documentURI	          Returns the URI of the document	3
  > document.domain	                Returns the domain name of the document server	1
  > document.domConfig	            Obsolete.Returns the DOM configuration	3
  > document.embeds	                Returns all <embed> elements	3
  > document.forms	                Returns all <form> elements	1
  > document.head	                  Returns the <head> element	3
  > document.images	                Returns all <img> elements	1
  > document.implementation	        Returns the DOM implementation	3
  > document.inputEncoding	        Returns the document's encoding (character set)	3
  > document.lastModified	          Returns the date and time the document was updated	3
  > document.links	                Returns all <area> and <a> elements that have a href attribute	1
  > document.readyState	            Returns the (loading) status of the document	3
  > document.referrer	              Returns the URI of the referrer (the linking document)	1
  > document.scripts	              Returns all <script> elements	3
  > document.strictErrorChecking	  Returns if error checking is enforced	3
  > document.title	                Returns the <title> element	1
  > document.URL	                  Returns the complete URL of the document	1

*/