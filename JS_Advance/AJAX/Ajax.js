/* 
$ What is Ajax ?
  * AJAX stands for asynchronous Javascript and XML:
  * AJAX is not a programming language,Rather it is a set of existing technologies.
  * AJAX helps in fetching data synchronously without interfering  with the existing page.
  * No page reload/refresh.
  * Modern Websites use JSON instead of XML for data transfer.

$ Why use AJAX?
  ? AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.
  ? AJAX allows you to send only important information to the server not the entire page. So only valuable data from the client side is routed to the server side. It makes your application interactive and faster.
  * No page reload/refresh.
  * Better user experience.
  * Saves network bandwidth.
  * Very interactive.
$ AJAX Technologies:
  As describe earlier, ajax is not a technology but group of inter-related technologies. AJAX technologies includes:
  > HTML/XHTML and CSS: These technologies are used for displaying content and style. It is mainly used for presentation.
  > DOM: It is used for dynamic display and interaction with data.
  > XML or JSON: For carrying data to and from server. JSON (Javascript Object Notation) is like XML but short and faster than XML.
  > XMLHttpRequest: For asynchronous communication between client and server.
  > JavaScript: It is used to bring above technologies together.

  ~ So basically AJAX is engine is intermediator between client and server side..How?
  ~ when user wants to fetch some data from server it commands the ajax then ajax done the task asynchronously i.e it initiate that task in background and allows the client to interact with UI without blocking.
  ~ Now in background when the task finishes it notify the client.
  ~ Hence all the backend requests are handled by AJAX.
?
$ How AJAX Works?
  >1. An event occurs in a web page (the page is loaded, a button is clicked)
  >2. An XMLHttpRequest object is created by JavaScript
  >3. The XMLHttpRequest object sends a request to a web server
  >4. The server processes the request
  >5. The server sends a response back to the web page
  >6. The response is read by JavaScript
  >7. Proper action (like page update) is performed by JavaScript  

# Understanding XMLHttpRequest: The keystone of AJAX is the XMLHttpRequest object.
  XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.
  API in the form of Object.
  An object of XMLHttpRequest is used for asynchronous communication between client and server.
  It performs following operations:
  > Sends data from the client in the background
  > Receives the data from the server
  > Updates the webpage without reloading it.

-- Create an XMLHttpRequest Object: variable = new XMLHttpRequest();
   var xhr=new XMLHttpRequest();

? Access Across Domains-->
  > For security reasons, modern browsers do not allow access across domains.
  > This means that both the web page and the XML file it tries to load, must be located on the same server.

-- Old versions of Internet Explorer (5/6) use an ActiveX object instead of the XMLHttpRequest object:
   variable = new ActiveXObject("Microsoft.XMLHTTP");
   > To handle IE5 and IE6, check if the browser supports the XMLHttpRequest object, or else create an ActiveX object:
     if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
      } else {
        // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

-- XMLHttpRequest Object Methods:
   > new XMLHttpRequest()	                 Creates a new XMLHttpRequest object
   > abort()	                             Cancels the current request
   > getAllResponseHeaders()	             Returns header information
   > getResponseHeader()	                 Returns specific header information
   > open(method, url, async, user, psw)	 Specifies the request 
                                           ~ method: the request type GET or POST
                                           ~ url: the file location
                                           ~ async: true (asynchronous) or false (synchronous)
                                           ~ user: optional user name
                                           ~ psw: optional password
   > send()	                               Sends the request to the server, Used for GET requests
   > send(string)	                         Sends the request to the server, Used for POST requests
   > setRequestHeader()	                   Adds a label/value pair to the header to be sent

-- XMLHttpRequest Object Properties:
   > onReadyStateChange:  It is called whenever readyState attribute changes. It must not be used with synchronous requests.
   > readyState:	        It represents the state of the request. It ranges from 0 to 4.
                          ~ 0 UNOPENED open() is not called.

                          ~ 1 OPENED open is called but send() is not called.

                          ~ 2 HEADERS_RECEIVED send() is called, and headers and status are available.

                          ~ 3 LOADING Downloading data; responseText holds the data.

                          ~ 4 DONE The operation is completed fully.

   > responseText:	      returns response as text.
   > responseXML:	        returns response as XML
   > status:              Returns the status-number of a request
                          ~ 200: "OK"
                          ~ 403: "Forbidden"
                          ~ 404: "Not Found"
                          
   > statusText:         	Returns the status-text (e.g. "OK" or "Not Found")

-- Send a Request To a Server: 
   To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
   >> xhttp.open("GET", "ajax_info.txt", true); //?xhr.open(method, URL, [async, user, password])--> for creating request.
      This method specifies the main parameters of the request:
      -> method – HTTP-method. Usually "GET" or "POST".
      -> URL – the URL to request, a string, can be URL object.
      -> async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
      -> user, password – login and password for basic HTTP auth (if required).
   >> xhttp.send(); //? for sending request.

   ? GET or POST?
     GET is simpler and faster than POST, and can be used in most cases.
     However, always use POST requests when:
     > A cached file is not an option (update a file or database on the server).
     > Sending a large amount of data to the server (POST has no size limitations).
     > Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

   ? A simple GET request:
     xhttp.open("GET", "demo_get.asp", true);
     xhttp.send();
     > In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:
       xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
       xhttp.send();
     > If you want to send information with the GET method, add the information to the URL:
       xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
       xhttp.send();

   ? A simple POST request:
    xhttp.open("POST", "demo_post.asp", true);
    xhttp.send();
    > To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
      xhttp.open("POST", "ajax_test.asp", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("fname=Henry&lname=Ford");

   ? The url - A File On a Server: The url parameter of the open() method, is an address to a file on a server:
     xhttp.open("GET", "ajax_test.asp", true);
     > The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

   ? Asynchronous - True or False?
     Server requests should be sent asynchronously.
     The async parameter of the open() method should be set to true:
     xhttp.open("GET", "ajax_test.asp", true);

-- AJAX - Server Response:
   ? Listen to xhr events for response.
     These three events are the most widely used:
     -> onload – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.

     -> onerror – when the request couldn’t be made, e.g. network down or invalid URL.

     -> onprogress – triggers periodically while the response is being downloaded, reports how much has been downloaded.
        xhr.onload = function() {
          alert(`Loaded: ${xhr.status} ${xhr.response}`);
        };
        
        xhr.onerror = function() { // only triggers if the request couldn't be made at all
          alert(`Network Error`);
        };
        
        xhr.onprogress = function(event) { // triggers periodically
          // event.loaded - how many bytes downloaded
          // event.lengthComputable = true if the server sent Content-Length header
          // event.total - total number of bytes (if lengthComputable)
          alert(`Received ${event.loaded} of ${event.total}`);
        };

   ? The onreadystatechange Property:(track uploading Progress..)
     > The readyState property holds the status of the XMLHttpRequest.
       States-->
                ~ 0: request not initialized
                ~ 1: server connection established
                ~ 2: request received
                ~ 3: processing request (State 3 repeats every time a data packet is received over the network.)
                ~ 4: request finished and response is ready       

     > The onreadystatechange property defines a function to be executed when the readyState changes.
     > The status property and the statusText property holds the status of the XMLHttpRequest object.

     With the XMLHttpRequest object you can define a function to be executed when the request receives an answer.
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         document.getElementById("demo").innerHTML = this.responseText;
       }
     };
     xhttp.open("GET", "ajax_info.txt", true);
     xhttp.send();     
     
     * NOTE: The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.

   ? Using a Callback Function:A callback function is a function passed as a parameter to another function.
     If you have more than one AJAX task in a website, you should create one function for executing the XMLHttpRequest object, and one callback function for each AJAX task.
     The function call should contain the URL and what function to call when the response is ready.
     > 
      loadDoc("url-1", myFunction1);

      loadDoc("url-2", myFunction2);

      function loadDoc(url, cFunction) {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      }

      function myFunction1(xhttp) {
        // action goes here
      }
      function myFunction2(xhttp) {
        // action goes here
      }

   $$ Once the server has responded, we can receive the result in the following xhr properties:
   ? The responseText property returns the server response as a JavaScript string, and you can use it accordingly:
     document.getElementById("demo").innerHTML = xhttp.responseText;

   ? The responseXML Property: 
     The XMLHttpRequest object has an in-built XML parser.
     The responseXML property returns the server response as an XML DOM object.

      xmlDoc = xhttp.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("ARTIST");
      for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo").innerHTML = txt;
      xhttp.open("GET", "cd_catalog.xml", true);
      xhttp.send();

   ? The getAllResponseHeaders() method returns all header information from the server response.
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         document.getElementById("demo").innerHTML =
         this.getAllResponseHeaders();
       }
     };

   ? The getResponseHeader() method returns specific header information from the server response.
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.getResponseHeader("Last-Modified");
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
*/
/* 
* Libraries and other methods: to work with AJAX.
  > jQuery
  > Axios
  > Superagent
  > Fetch API
  > Prototype
  > Node Http

*/

//$ Now lets do some practical: With Vanilla JS. SIMPLEST EXAMPLE

// Getting our Buttons for interaction...
let fetchBtn = document.getElementById("fetchBtn");
let backupBtn = document.getElementById("backupBtn");

// Adding event Listeners...
fetchBtn.addEventListener("click", loadText);

// Creating Handling functions...
function loadText() {
    console.log("U  clicked the fetch button..");

    // Creating XMLHttpRequest object-->
    const xhr = new XMLHttpRequest();

    // Creating Http request--> or we can say open the object...
    xhr.open("GET", "cnu.txt", true);
    if (xhr.readyState == 1) {
        document.getElementById("demo").innerHTML = "Request Initiated-_-";
        console.log(`Request Initiated-_-`);
    }

    // What to do on progress...(optional); Usually for loaders.
    xhr.onprogress = () => {
        console.log(`On progress`);
    };

    // What to do on server response...(optional) old way to fetch server response
    xhr.onreadystatechange = () => {
        console.log(`Ready State is: ${xhr.readyState}`);
    };

    // What to do when response is ready..
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText);
        } else {
            console.error("Some Error Occurred!!");
        }
    };

    // Sending request...
    xhr.send();
}

// * We can also specify a timeout using the corresponding property:
xhr.timeout = 60000; // timeout in ms, 60 seconds
//>> If the request does not succeed within the given time, it gets canceled and timeout event triggers.

// $$ Aborting request
// >> We can terminate the request at any time. The call to xhr.abort() does that:
// -> xhr.abort(); // terminate the request,That triggers abort event, and xhr.status becomes 0.

/* 
$ HTTP-headers:
  XMLHttpRequest allows both to send custom headers and read headers from the response.
  There are 3 methods for HTTP-headers:
  >> setRequestHeader(name, value): Sets the request header with the given name and value.
     -> xhr.setRequestHeader('Content-Type', 'application/json');

     * Headers limitations
       -> Several headers are managed exclusively by the browser, e.g. Referer and Host. The full list is in the specification.
          -> XMLHttpRequest is not allowed to change them, for the sake of user safety and correctness of the request.

       -> Another peculiarity of XMLHttpRequest is that one can’t undo setRequestHeader.
          -> Once the header is set, it’s set. Additional calls add information to the header, don’t overwrite it.
             xhr.setRequestHeader('X-Auth', '123');
             xhr.setRequestHeader('X-Auth', '456');
             
             // the header will be:
             // X-Auth: 123, 456

  >> getResponseHeader(name): Gets the response header with the given name (except Set-Cookie and Set-Cookie2).
     -> xhr.getResponseHeader('Content-Type')

  >> getAllResponseHeaders(): Returns all response headers, except Set-Cookie and Set-Cookie2.
     Headers are returned as a single line, e.g.:
     Cache-Control: max-age=31536000
     Content-Length: 4260
     Content-Type: image/png
     Date: Sat, 08 Sep 2012 16:53:16 GMT

     -> The line break between headers is always "\r\n" (doesn’t depend on OS), so we can easily split it into individual headers. The separator between the name and the value is always a colon followed by a space ": ". That’s fixed in the specification.

     Like this (assuming that if two headers have the same name, then the latter one overwrites the former one):

     let headers = xhr
       .getAllResponseHeaders()
       .split('\r\n')
       .reduce((result, current) => {
         let [name, value] = current.split(': ');
         result[name] = value;
         return result;
       }, {});
     
     // headers['Content-Type'] = 'image/png'
*/