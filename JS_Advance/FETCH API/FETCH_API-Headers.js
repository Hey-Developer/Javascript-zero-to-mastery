/* 
* HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

$ The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers. 

>> A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() 

>> In all methods of this interface, header names are matched by case-insensitive byte sequence. 

>> For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names  and forbidden response header names.

>> A Headers object also has an associated guard, which takes a value of immutable, request, request-no-cors, response, or none. This affects whether the set(), delete(), and append() methods will mutate the header

>> You can retrieve a Headers object via the Request.headers and Response.headers properties, and create a new Headers object using the Headers.Headers() constructor.

# Constructor: 
  -> Headers(): Creates a new Headers object.

# Methods:
  -> Headers.append(): Appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.

  -> Headers.delete(): Deletes a header from a Headers object.

  -> Headers.entries(): Returns an iterator allowing to go through all key/value pairs contained in this object.

  -> Headers.forEach(): Executes a provided function once for each array element.

  -> Headers.get(): Returns a ByteString sequence of all the values of a header within a Headers object with a given name.

  -> Headers.has(): Returns a boolean stating whether a Headers object contains a certain header.

  -> Headers.keys(): Returns an iterator allowing you to go through all keys of the key/value pairs contained in this object.

  -> Headers.set(): Sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.

  -> Headers.values(): Returns an iterator allowing you to go through all values of the key/value pairs contained in this object.

  NOTE: Note: To be clear, the difference between Headers.set() and Headers.append() is that if the specified header does already exist and does accept multiple values, Headers.set() will overwrite the existing value with the new one, whereas Headers.append() will append the new value onto the end of the set of values.

  NOTE: All of the Headers methods will throw a TypeError if you try to pass in a reference to a name that isn't a valid HTTP Header name. The mutation operations will throw a TypeError if the header has an immutable Guard. 

  NOTE: When Header values are iterated over, they are automatically sorted in lexicographical order, and values from duplicate header names are combined.
*/

// ---Examples--------------------------------
var myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'

// The same can be achieved by passing an array of arrays or an object literal to the constructor:

var myHeaders = new Headers({
    "Content-Type": "text/xml",
});

// or, using an array of arrays:
myHeaders = new Headers([
    ["Content-Type", "text/xml"]
]);

myHeaders.get("Content-Type"); // should return 'text/xml'

// Want to know more about headers--> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers