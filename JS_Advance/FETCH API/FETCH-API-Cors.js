/* 
$ Fetch: Cross-Origin Requests
  >> If we send a fetch request to another web-site, it will probably fail.
     For instance, let’s try fetching http://example.com:
     try {
       await fetch('http://example.com');
     } catch(err) {
       alert(err); // Failed to fetch
     }
    -> Fetch fails, as expected.
    
    -> The core concept here is origin – a domain/port/protocol triplet.
    
    -> Cross-origin requests – those sent to another domain (even a subdomain) or protocol or port – require special headers from the remote side.
    
    -> That policy is called “CORS”: Cross-Origin Resource Sharing.

  >> Why is CORS needed? A brief history
     -> CORS exists to protect the internet from evil hackers.

     -> Seriously. Let’s make a very brief historical digression.

     -> For many years a script from one site could not access the content of another site.

     -> That simple, yet powerful rule was a foundation of the internet security. E.g. an evil script from website hacker.com could not access user’s mailbox at website gmail.com. People felt safe.

     -> JavaScript also did not have any special methods to perform network requests at that time. It was a toy language to decorate a web page.

     -> But web developers demanded more power. A variety of tricks were invented to work around the limitation and make requests to other websites.

  >> Using forms: 
     -> One way to communicate with another server was to submit a <form> there. People submitted it into <iframe>, just to stay on the current page, like this:

        <!-- form target -->
        <iframe name="iframe"></iframe>
        
        <!-- a form could be dynamically generated and submited by JavaScript -->
        <form target="iframe" method="POST" action="http://another.com/…">
        ...
        </form>

     -> So, it was possible to make a GET/POST request to another site, even without networking methods, as forms can send data anywhere. But as it’s forbidden to access the content of an <iframe> from another site, it wasn’t possible to read the response.

     -> To be precise, there were actually tricks for that, they required special scripts at both the iframe and the page. So the communication with the iframe was technically possible. Right now there’s no point to go into details, let these dinosaurs rest in peace.

  >> Using scripts:
     -> Another trick was to use a script tag. A script could have any src, with any domain, like <script src="http://another.com/…">. It’s possible to execute a script from any website.

     -> If a website, e.g. another.com intended to expose data for this kind of access, then a so-called “JSONP (JSON with padding)” protocol was used.

     -- Let’s say we, at our site, need to get the data from http://another.com, such as the weather:

     -> First, in advance, we declare a global function to accept the data, e.g. gotWeather.
     function gotWeather({ temperature, humidity }) {
       alert(`temperature: ${temperature}, humidity: ${humidity}`);
     }

     -> Then we make a <script> tag with src="http://another.com/weather.json?callback=gotWeather", using the name of our function as the callback URL-parameter.
     let script = document.createElement('script');
     script.src = `http://another.com/weather.json?     callback=gotWeather`;
     document.body.append(script);

     -> The remote server another.com dynamically generates a script that calls gotWeather(...) with the data it wants us to receive.
     // The expected answer from the server looks like this:
     gotWeather({
       temperature: 25,
       humidity: 78
     });

     -> When the remote script loads and executes, gotWeather runs, and, as it’s our function, we have the data.

     -> That works, and doesn’t violate security, because both sides agreed to pass the data this way. And, when both sides agree, it’s definitely not a hack. There are still services that provide such access, as it works even for very old browsers.
     After a while, networking methods appeared in browser JavaScript.
     At first, cross-origin requests were forbidden. But as a result of long discussions, cross-origin requests were allowed, but with any new capabilities requiring an explicit allowance by the server, expressed in special headers.

  >> There are two types of cross-origin requests:
     --Simple requests.
       Simple Requests are, well, simpler to make, so let’s start with them.
       A simple request is a request that satisfies two conditions:
       -> Simple method: GET, POST or HEAD
       -> Simple headers – the only allowed custom headers are:
            Accept,
            Accept-Language,
            Content-Language,
            Content-Type with the value application/       x-www-form-urlencoded, multipart/form-data or text/plain.

     --All the others.
       -> Any other request is considered “non-simple”. For instance, a request with PUT method or with an API-Key HTTP-header does not fit the limitations.

     * The essential difference is that a “simple request” can be made with a <form> or a <script>, without any special methods.

     * So, even a very old server should be ready to accept a simple request.

     * Contrary to that, requests with non-standard headers or e.g. method DELETE can’t be created this way. For a long time JavaScript was unable to do such requests. So an old server may assume that such requests come from a privileged source, “because a webpage is unable to send them”.

     * When we try to make a non-simple request, the browser sends a special “preflight” request that asks the server – does it agree to accept such cross-origin requests, or not?

     * And, unless the server explicitly confirms that with headers, a non-simple request is not sent.

  >> CORS for simple requests
     -> If a request is cross-origin, the browser always adds Origin header to it.
     For instance, if we request https://anywhere.com/request from https://javascript.info/page, the headers will be like:

     -> As you can see, Origin header contains exactly the origin (domain/protocol/port), without a path.

     -> The server can inspect the Origin and, if it agrees to accept such a request, adds a special header Access-Control-Allow-Origin to the response. That header should contain the allowed origin (in our case https://javascript.info), or a star *. Then the response is successful, otherwise an error.

  >> For cross-origin request, by default JavaScript may only access so-called “simple” response headers:
  -> Cache-Control
  -> Content-Language
  -> Content-Type
  -> Expires
  -> Last-Modified
  -> Pragma, Accessing any other response header causes an error.

  >> To grant JavaScript access to any other response header, the server must send Access-Control-Expose-Headers header. It contains a comma-separated list of non-simple header names that should be made accessible.

  to read more-->> https://javascript.info/fetch-crossorigin





*/