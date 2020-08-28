/* 
$ The Browser Object Model (BOM)
  It is also an API of browser.
  The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
  The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser.
  > Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

  -- The Window Object: 
     Like in DOM the topmost object is document through which we can access all the nodes/objects of DOM tree,
     Similarly in BOM the topmost object is window object through which you can call all the functions of window by specifying window or directly. For example:
     > window.alert("hello World");  
     ~ The window object is supported by all browsers. It represents the browser's window. or potentially frame, that a document is displayed on.
     ~ As long as a browser window is open, even if no doc. is loaded in the window, the window object is defined in the current model of the memory.
     ~ A window object is created automatically by the browser itself.
     ~ You can use a lot of properties (other objects) defined underneath the window object like document, history, screen, navigator, location, innerHeight, innerWidth,etc.
                                           
                                           window
     ________________________________________|___________________
     |              |             |          |                  |
   document       history      screen      navigator         location        

     ~ All global JavaScript objects, functions, and variables automatically become members of the window object.
     ~ Global variables are properties of the window object.
     ~ Global functions are methods of the window object.

     ~ Even the document object (of the HTML DOM) is a property of the window object:
        > window.document.getElementById("header");
        is the same as:
        > document.getElementById("header");

     ! Note: if html document contains frame or iframe, browser creates additional window objects for each frame.

 -- Difference between Outer-Height/Outer-Width and Inner-Height/Inner-Width --
    > windows.outerHeight and windows.outerWidth --> represents the height and width of whole browser size.

    > windows.innerHeight and windows.innerWidth --> represents the height and width of the browser screen on which your document is displayed.

    ! NOTE: The browser window (the browser viewport) is NOT including toolbars and scrollbars.

    For Internet Explorer 8, 7, 6, 5:
    > document.documentElement.clientHeight
    > document.documentElement.clientWidth
      or
    > document.body.clientHeight
    > document.body.clientWidth

 -- Methods of window object:
    > alert() -	            displays the alert box containing message with ok button.
    > confirm() -	        displays the confirm dialog box containing message with ok and cancel button.
    > prompt() -	        displays a dialog box to get input from the user.
    > open() -	            opens the new window.
    > close() -	            closes the current window.
    > setTimeout() -        performs action after specified time like calling function, evaluating expressions etc.
    > window.moveTo() -     move the current window
    > window.resizeTo() -   resize the current window




*/