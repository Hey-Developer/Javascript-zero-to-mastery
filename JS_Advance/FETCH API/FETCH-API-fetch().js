/*
$$ The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. The promise resolves to the Response object representing the response to your request. The promise does not reject on HTTP errors — it only rejects on network errors. You must use then handlers to check for HTTP errors.

# There are multiple ways to send a network request and get information from the server.

# The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

# For making a request and fetching a resource, use the WindowOrWorkerGlobalScope.fetch() method. It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. This makes it available in pretty much any context you might want to fetch resources in.

# The fetch() method is a part of Browser or Web API just like setTimeout()..

$ fetch() Method:
  >> Syntax:
     *const fetchResponsePromise = fetch(resource [, init])

  >> ParaMeters:
     ~ resource –
       This defines the resource that you wish to fetch. This can either be:
       -> A USVString containing the direct URL of the resource you want to fetch. Some browsers accept the blob: and data: schemes.
       -> A Request object.

     ~ init (Optional)  –
       An object containing any custom settings that you want to apply to the request. The possible options are:
       -> method: The request method, e.g., GET, POST. Note that the Origin header is not set on Fetch requests with a method of HEAD or GET.

       -> headers: Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values. Note that some names are forbidden.

       -> body: Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object. Note that a request using the GET or HEAD method cannot have a body.

       -> mode: The mode you want to use for the request, e.g., cors, no-cors, or same-origin.

       -> credentials: The request credentials you want to use for the request: omit, same-origin, or include. To automatically send cookies for the current domain, this option must be provided. Starting with Chrome 50, this property also takes a FederatedCredential instance or a PasswordCredential instance.

       -> cache: The cache mode you want to use for the request.

       -> redirect: The redirect mode to use: follow (automatically follow redirects), error (abort with an error if a redirect occurs), or manual (handle redirects manually). In Chrome the default is follow (before Chrome 47 it defaulted to manual).

       -> referrer: A USVString specifying the referrer of the request. This can be a same-origin URL, about:client, or an empty string.

       -> referrerPolicy: Specifies the referrer policy to use for the request. May be one of no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url.

       -> integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).

       -> keepalive: The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the Navigator.sendBeacon() API.

       -> signal: An AbortSignal object instance; allows you to communicate with a fetch request and abort it if desired via an AbortController.

       NOTE: The first argument is a stringified URL, and the second is an optional argument that will contain information about your request. If you are only looking to retrieve data from an API, you do not need to use the second argument, as Javascript will automatically expect a “GET” request.

  >> Return Value:
     ~ A Promise that resolves to a Response object.

  >> Exceptions:
     ~ AbortError-
       The request was aborted due to a call to the AbortController method abort() method.
     ~ TypeError-
       The specified URL string includes user credentials. This information should instead be provided using an Authorization header.

$ Getting a response is usually a two-stage process.

  --1.First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.
      ->At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.

      ->The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

      ->We can see HTTP-status in response properties:
        >status – HTTP status code, e.g. 200.
        >ok – boolean, true if the HTTP status code is 200-299.

         let response = await fetch(url);

         if (response.ok) { // if HTTP-status is 200-299
           // get the response body (the method explained below)
           let json = await response.json();
         } else {
           alert("HTTP-Error: " + response.status);
         }

  --2.Second, to get the response body, we need to use an additional method call.
      ->Response provides multiple promise-based methods to access the body in various formats:
        > response.text() – read the response and return as text,
        > response.json() – parse the response as JSON,
        > response.formData() – return the response as FormData object (explained in the next chapter),
        > response.blob() – return the response as Blob (binary data with type),
        > response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
        > additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.

       let url = 'https://api.github.com/repos/          javascript-tutorial/en.javascript.info/commits';
       let response = await fetch(url);

       let commits = await response.json(); // read response body        and parse as JSON

       alert(commits[0].author.login);

  -- Or, the same without await, using pure promises   syntax:
       fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
         .then(response => response.json())
         .then(commits => alert(commits[0].author.login));

NOTE: The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. The promise resolves to the Response object representing the response to your request. The promise does not reject on HTTP errors — it only rejects on network errors. You must use then handlers to check for HTTP errors.

!Important:
 >We can choose only one body-reading method.
 >If we’ve already got the response with response.text(), then response.json() won’t work, as the body content has already been processed.
 let text = await response.text(); // response body consumed
 let parsed = await response.json(); // fails (already consumed)
*/

// DOM_PART>>
document.getElementById("btnAll").addEventListener("click", getData1);
document.getElementById("btnSingle").addEventListener("click", getData2);

// todo A fetch Example---> using PROMISES
//>Here I Will Fetch A json from an API
//> Also i will use promises to work with fetch..

function getData1(e) {
    console.log("Start Get Data...");
    fetch("http://dummy.restapiexample.com/api/v1/employees") // return a promise with response object
        .then(resp => resp.json()) // return a promise with parsed json data
        .then(employee => {
            let html = "";
            employee.data.forEach(user => {
                html += `<li>Employee Name:${user.employee_name}</li>`;
            });
            document.querySelector("#all>ul").innerHTML = html;
        })
        // Error Handling: if promise rejects..
        .catch(err => alert(err.message));
    console.log("Another Task..");
}

/*
Flow of Program...
>> When we click on btn .. It handler will execute..
>> First command inside handler. -->Start Get Data...
>> THen flow comes at fetch fn.. but since it is asynchronous it goes into the background and then search for any pending command to execute..
>> HEnce the last line of the handler will execute i.e.."Another Task..."
>> NOW as there is no command left in the handler it will go back to fetch.. and now check whether the request is resolved or not..
>> if request is resolved then fetch will return a resolved promise..
>> After it .then() handler will call which parse the response into json..
>> this response.json() also returns a resolved promise..
>> Hence another .then() handler executes as parsed response file as argument not this .then() handler will do its task that is to what to do with the parsed data..>>>>>

*/

// todo using async await>>>>>>>>>>>>
async function getData2(e) {
    let eName = document.getElementById("eName").value.toLowerCase();
    document.getElementById("eName").value = "";

    let response = await fetch(
        "	http://dummy.restapiexample.com/api/v1/employees"
    );
    // Error Checking...fetch("https://coronavirus.app/get-latest").then(response=> response.json()).then(data => console.log(data);)
    if (response.ok) {
        let employee = await response.json();
    } else {
        alert(`Http Error ${response.status}`);
    }

    let html = "";
    employee.data.forEach(val => {
        if (val.employee_name.toLowerCase() == eName) {
            html += `<li>Employee ID: ${val.id}</li>
                     <li>Employee Name: ${val.employee_name}</li>
                     <li>Employee Salary: ${val.employee_salary}</li>
                     <li>Employee Age: ${val.employee_age}</li>
                    `;
        }
    });
    document.querySelector("#single>ul").innerHTML = html;
}

//todo Error Handling-->
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function json(response) {
    return response.json();
}

fetch("users.json")
    .then(status)
    .then(json)
    .then(function(data) {
        console.log("Request succeeded with JSON response", data);
    })
    .catch(function(error) {
        console.log("Request failed", error);
    });

// We define the status function which checks the response.status and returns the result of Promise.resolve() or Promise.reject(), which return a resolved or rejected Promise. This is the first method called in our fetch() chain, if it resolves, we then call our json() method which again returns a Promise from the response.json() call. After this we have an object of the parsed JSON. If the parsing fails the Promise is rejected and the catch statement executes.

/*

$$ fetch()- request:
   * When we use fetch() method to fetch something we do a request to the server first. This Request contains:
   >> A url or the location of the resource to be fetched.
   >> A optional init object containing more information about the request i.e what headers ur setting, which mode u r using and body which content the data which your r sending..
   >> If we a only specify a URL and fetch then it is considered as simple GET Request in which we simply download the resource from the server..
   >> Apart from downloading resource if we want to send something to the server with GET request then also we can do it USING URL Encoding which means padding the data through the url. like this `demo_get2.asp?fname=Henry&lname=Ford`
   >> But normally if u want to send some information to the server we use POST Request which is more secure..
   >> To send a DATA you just have to use the second parameter inti object in which:
      -> Specify the Method to POST:
      -> and inside body specify your content.. SUPPORTED CONTENT ARE:(The body type can only be a Blob, BufferSource, FormData, URLSearchParams, USVString or ReadableStream type, so for adding a JSON object to the payload you need to stringify that object.)
      -> Apart from this one more thing is to set HEADERS, as u know headers act as a heading for your data that is they show the information about your data.
      -> Here the Request Headers roles comes into play..

  * Request Headers : A request header is an HTTP header that can be used in an HTTP request, and that doesn't relate to the content of the message. Request headers, like Accept, Accept-*, or If-* allow to perform conditional requests; others like Cookie, User-Agent, or Referer precise the context so that the server can tailor the answer.

  >> Not all headers appearing in a request are request headers. For example, the Content-Length appearing in a POST request is actually an entity header referring to the size of the body of the request message. However, these entity headers are often called request headers in such a context.

  >> A few request headers after a GET request:
    GET /home.html HTTP/1.1
    Key                           Value
    Host:                         developer.mozilla.org
    User-Agent:                   Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9;     rv:50.0) Gecko/20100101 Firefox/50.0
    Accept:                       text/html,application/xhtml+xml,application/xml;    q=0.9,* /*;q=0.8
    Accept-Language:              en-US,en;q=0.5
    Accept-Encoding:              gzip, deflate, br
    Referer:                      https://developer.mozilla.org/testpage.html
    Connection:                   keep-alive
    Upgrade-Insecure-Requests:    1
    If-Modified-Since:            Mon, 18 Jul 2016 02:36:04 GMT
    If-None-Match:                 "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
    Cache-Control:                max-age=0

  >> HEaders used in POST Requests:
     POST /myform.html HTTP/1.1
     Host:              developer.mozilla.org
     User-Agent:        Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
     Content-Length:    128
     Content-Type:      text/html; charset=UTF-8

     NOTE:  the Content-Length and Content-Type header in this example is not a request header like the others, but an entity header:

  >> The Most required Headers in POST Request is the Content-Type header: to set the type of data to be sent.
     -> The Content-Type entity header is used to indicate the media type of the resource.
     -> In responses, a Content-Type header tells the client what the content type of the returned content actually is
     -> In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.
     -> Content-Type: multipart/form-data; boundary=something
     -> Content-type: image/jpeg

  >> All possible values of HTTP Content-type header:
     -> TYPE	                VALUES
     -> Application	        application/EDI-X12
     ->                     application/EDIFACT
     ->                     application/javascript
     ->                     application/octet-stream
     ->                     application/ogg
     ->                     application/pdf
     ->                     application/xhtml+xml
     ->                     application/x-shockwave-flash
     ->                     application/json
     ->                     application/ld+json
     ->                     application/xml
     ->                     application/zip
     ->                     application/x-www-form-urlencoded

     -> Audio	              audio/mpeg
     ->                     audio/x-ms-wma
     ->                     audio/vnd.rn-realaudio
     ->                     audio/x-wav

     -> Image	              image/gif
     ->                     image/jpeg
     ->                     image/png
     ->                     image/tiff
     ->                     image/vnd.microsoft.icon
     ->                     image/x-icon
     ->                     image/vnd.djvu
     ->                     image/svg+xml

     -> Multipart	          multipart/mixed
     ->                     multipart/alternative
     ->                     multipart/related (using by MHTML (HTML mail).)
     ->                     multipart/form-data

     -> Text	              text/css
     ->                     text/csv
     ->                     text/html
     ->                     text/javascript (obsolete)
     ->                     text/plain
     ->                     text/xml

     -> Video	              video/mpeg
     ->                     video/mp4
     ->                     video/quicktime
     ->                     video/x-ms-wmv
     ->                     video/x-msvideo
     ->                     video/x-flv
     ->                     video/webm

     -> VND	                application/vnd.oasis.opendocument.text
     ->                     application/vnd.oasis.opendocument.spreadsheet
     ->                     application/vnd.oasis.opendocument.presentation
     ->                     application/vnd.oasis.opendocument.graphics
     ->                     application/vnd.ms-excel
     ->                     application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     ->                     application/vnd.ms-powerpoint
     ->                     application/vnd.openxmlformats-officedocument.presentationml.presentation
     ->                     application/msword
     ->                     application/vnd.openxmlformats-officedocument.wordprocessingml.document
     ->                     application/vnd.mozilla.xul+xml

  >> SO that is how a fetch request can be sent there are several other request apart from GET and POST such as-->
     -> Read/Retrieve — GET
     -> Update — PUT/PATCH, Which we will study later.

  $ To set a request header in fetch, we can use the headers option. It has an object with outgoing headers, like this:
  let response = fetch(protectedUrl, {
    headers: {
      Authentication: 'secret'
    }
  });


*/

/*
$$ fetch()-response:
   * THE Response which we get from a fetch() method.. is a Object of the RESPONSE interface of the FETCH API
   >> IS a RESOLVED Promise corresponding to the Response object..

   >> This object contains all metadata that is information about the response.like headers,status of the request.

   >> Inside this response object there are many information but the main info, which we need is in its body..

   >> Hence we take out te information from the response object  using body methods such as json(),text(),blob(),formData(),etc

   * Response headers: (Headers with additional information about the response, like its location or about the server itself (name, version, …))
   >> A response header is an HTTP header that can be used in an HTTP response and that doesn't relate to the content of the message. Response headers, like Age, Location or Server are used to give a more detailed context of the response.

   >> Not all headers appearing in a response are response headers. For example, the Content-Length header is an entity header referring to the size of the body of the response message. However, these entity requests are usually called responses headers in such a context.

   >> The response have several properties and methods, .header is one of them..

   >> The response headers are available in a Map-like headers object in response.headers.

   >> The following shows a few response headers after a GET request. Note that strictly speaking, the Content-Encoding and Content-Type headers are entity header:
      -> 200 OK
      -> Access-Control-Allow-Origin:    *
      -> Connection:                     Keep-Alive
      -> Content-Encoding:               gzip
      -> Content-Type:                   text/html; charset=utf-8
      -> Date:                           Mon, 18 Jul 2016 16:06:00 GMT
      -> Etag:                           "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
      -> Keep-Alive:                     timeout=5, max=997
      -> Last-Modified:                  Mon, 18 Jul 2016 02:36:04 GMT
      -> Server:                         Apache
      -> Set-Cookie:                     mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
      -> Transfer-Encoding:              chunked
      -> Vary:                           Cookie, Accept-Encoding
      -> X-Backend-Server:               developer2.webapp.scl3.mozilla.com
      -> X-Cache-Info:                   not cacheable; meta data too large
      -> X-kuma-revision:                1085259
      -> x-frame-options:                DENY

  >> Response Types :When we make a fetch request, the response will be given a response.type of "basic", "cors" or "opaque". These types indicate where the resource has come from and can be used to inform how you should treat the response object.
     -> response.type==basic:  When a request is made for a resource on the same origin, the response will have a basic type and there aren't any restrictions on what you can view from the response.
     -> response.type==cors: If a request is made for a resource on another origin which returns the CORs headers, then the type is cors. cors and basic responses are almost identical except that a cors response restricts the headers you can view to `Cache-Control`, `Content-Language`, `Content-Type`, `Expires`, `Last-Modified`, and `Pragma`.
     -> response.type==opaque: An opaque response is for a request made for a resource on a different origin that doesn't return CORS headers. With an opaque response we won't be able to read the data returned or view the status of the request, meaning we can't check if the request was successful or not.
     --You can define a mode for a fetch request such that only certain requests will resolve. The modes you can set are as follows:

     -> mode:{
       -- "same-origin" only succeeds for requests for assets on the same origin, all other requests will reject.
       -- "cors-with-forced-preflight" will always perform a preflight check before making the actual request.
       -- "cors" will allow requests for assets on the same-origin and other origins which return the appropriate CORs headers.
       -- "no-cors" is intended to make requests to other origins that do not have CORS headers and result in an opaque response, but as stated, this isn't possible in the window global scope at the moment.
     }
*/
// Example-->
let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
);

// get one header
alert(response.headers.get("Content-Type")); //   application/json;charset=utf-8

// iterate over all headers
for (let [key, value] of response.headers) {
    alert(`${key} = ${value}`);
}

/*
$---------------------SUMMARY---------------------------$
-- A typical fetch request consists of two await calls:
   -> let response = await fetch(url, options); // resolves with response headers
   -> let result = await response.json(); // read body as json

      Or, without await:
      fetch(url, options)
        .then(response => response.json())
        .then(result => // process result )

 -- Response properties:
    -> response.status – HTTP code of the response,
    -> response.ok – true is the status is 200-299.
    -> response.headers – Map-like object with HTTP headers.

-- Methods to get response body:
   -> response.text() – return the response as text,
   -> response.json() – parse the response as JSON object,
   -> response.formData() – return the response as FormData object (form/multipart encoding, see the next chapter),
   -> response.blob() – return the response as Blob (binary data with type),
   -> response.arrayBuffer() – return the response as ArrayBuffer (low-level binary data),

-- Fetch options so far:
   -> method – HTTP-method,
   -> headers – an object with request headers (not any header is allowed),
   -> body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams object.
*/

fetch("https://coronavirus.app/get-latest")
    .then(response => {
        response.json();
    })
    .then(data => {
        console.log(data);
    });