// $ A Simple fetch request for a JSON file.
// >>> The code will be cleaner and easier to understand if it's abstracted into functions:

function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.log("Looks like there was a problem: \n", error);
}

function validateResponse(response) {
    if (response.status == 200 || response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function readResponseAsJSON(response) {
    return response.json();
}

function fetchJSON(pathToResource) {
    fetch(pathToResource) // 1
        .then(validateResponse) // 2
        .then(readResponseAsJSON) // 3
        .then(logResult) // 4
        .catch(logError);
}

fetchJSON("TestData/localData.json");

// $Example: fetching text:

function readResponseAsText(response) {
    return response.text();
}

fetch("example.txt")
    .then(validateResponse)
    .then(readResponseAsText)
    .then(logResult)
    .catch(logError);

// $ Example: HEAD requests:
// By default fetch uses the GET method, which retrieves a specific resource, but other request HTTP methods can also be used.
// HEAD requests are just like GET requests except the body of the response is empty. You can use this kind of request when all you want the file's metadata, and you want or need the file's data to be transported.
// >>You could use a HEAD request to check the size of a resource. For example:
function checkSize(response) {
    var size = response.headers.get("content-length");
    // Do stuff based on response size
    console.log(size);
}

function headRequest(pathToResource) {
    fetch(pathToResource, {
            method: "HEAD",
        })
        .then(validateResponse)
        .then(checkSize)
        // ...
        .catch(logError);
}

headRequest("examples/words.txt");

// $ Custom headers:
// The init parameter can be used with the Headers interface to perform various actions on HTTP request and response headers, including retrieving, setting, adding, and removing them.
// The following code demonstrates how a custom Headers object can be created and used with a fetch request:
var myHeaders = new Headers({
    "Content-Type": "text/plain",
    "X-Custom-Header": "hello world",
});

fetch("/someurl", {
    headers: myHeaders,
});

// >>Here we are creating a Headers object where the Content-Type header has the value of text/plain and a custom X-Custom-Header header has the value of hello world.
// NOTE: Only some headers, like Content-Type can be modified. Others, like Content-Length and Origin are guarded, and cannot be modified (for security reasons).

// *Custom headers on cross-origin requests must be supported by the server from which the resource is requested.
// *The server in this example would need to be configured to accept the X-Custom-Header header in order for the fetch to succeed.
// *When a custom header is set, the browser performs a preflight check. This means that the browser first sends an OPTIONS request to the server to determine what HTTP methods and headers are allowed by the server.
// *If the server is configured to accept the method and headers of the original request, then it is sent. Otherwise, an error is thrown.

// $ Cross-origin requests
// Fetch (and XMLHttpRequest) follow the same-origin policy. This means that browsers restrict cross-origin HTTP requests from within scripts. A cross-origin request occurs when one domain (for example http://foo.com/) requests a resource from a separate domain (for example http://bar.com/). This code shows a simple example of a cross-origin request:

//>> The Cross Origin Resource Sharing (CORS) mechanism has enabled a standardized means of retrieving cross-origin resources. The CORS mechanism lets you specify in a request that you want to retrieve a cross-origin resource (in fetch this is enabled by default)

//>> he browser adds an Origin header to the request, and then requests the appropriate resource. The browser only returns the response if the server returns an Access-Control-Allow-Origin header specifying that the origin has permission to request the resource.

//>> In practice, servers that expect a variety of parties to request their resources (such as 3rd party APIs) set a wildcard value for the Access-Control-Allow-Origin header, allowing anyone to access that resource.

//>>  If the server you are requesting from doesn't support CORS, you should get an error in the console indicating that the cross-origin request is blocked due to the CORS Access-Control-Allow-Origin header being missing.

//>> You can use no-cors mode to request opaque resources. Opaque responses can't be accessed with JavaScript but the response can still be served or cached by a service worker. Using no-cors mode with fetch is relatively simple. To update the above example with no-cors, we pass in the init object with mode set to no-cors:

// From http://foo.com/
fetch("http://bar.com/data.json", {
    mode: "no-cors", // 'cors' by default
}).then(function(response) {
    // Do something with response
});