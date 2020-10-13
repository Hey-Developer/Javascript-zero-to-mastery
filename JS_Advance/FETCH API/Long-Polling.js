/* 
$ Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or Server Side Events. 
  Being very easy to implement, it’s also good enough in a lot of cases.

>> Regular Polling: 
   The simplest way to get new information from the server is periodic polling. That is, regular requests to the server: “Hello, I’m here, do you have any information for me?”. For example, once in 10 seconds.
   
   In response, the server first takes a notice to itself that the client is online, and second – sends a packet of messages it got till that moment.
   
   That works, but there are downsides:
   -> Messages are passed with a delay up to 10 seconds (between requests).
   -> Even if there are no messages, the server is bombed with requests every 10 seconds, even if the user switched somewhere else or is asleep. That’s quite a load to handle, speaking performance-wise.

>> Long polling:
   So-called “long polling” is a much better way to poll the server.
   
   It’s also very easy to implement, and delivers messages without delays.

   The flow..
   -> A request is sent to the server.
   -> The server doesn’t close the connection until it has a message to send.
   -> When a message appears – the server responds to the request with it.
   -> The browser makes a new request immediately.

   * The situation when the browser sent a request and has a pending connection with the server, is standard for this method. Only when a message is delivered, the connection is reestablished.
   * If the connection is lost, because of, say, a network error, the browser immediately sends a new request.
   
*/
//>> A sketch of client-side subscribe function that makes long requests:
async function subscribe() {
    let response = await fetch("/subscribe");

    if (response.status == 502) {
        // Status 502 is a connection timeout error,
        // may happen when the connection was pending for too long,
        // and the remote server or a proxy closed it
        // let's reconnect
        await subscribe();
    } else if (response.status != 200) {
        // An error - let's show it
        showMessage(response.statusText);
        // Reconnect in one second
        await new Promise(resolve => setTimeout(resolve, 1000));
        await subscribe();
    } else {
        // Get and show the message
        let message = await response.text();
        showMessage(message);
        // Call subscribe() again to get the next message
        await subscribe();
    }
}

subscribe();
// As you can see, subscribe function makes a fetch, then waits for the response, handles it and calls itself again.

/* 
* Server should be ok with many pending connections
  -> The server architecture must be able to work with many pending connections.

  -> Certain server architectures run a process per connect. For many connections there will be as many processes, and each process takes a lot of memory. So many connections just consume it all.

  -> That’s often the case for backends written in PHP, Ruby languages, but technically isn’t a language, but rather implementation issue. Most modern language allow to implement a proper backend, but some of them make it easier than the other.

  -> Backends written using Node.js usually don’t have such problems.

*/

// $$ Demo: a chat:
/* 
-- Index.html
<!DOCTYPE html>
<script src="browser.js"></script>

All visitors of this page will see messages of each other.

<form name="publish">
  <input type="text" name="message" />
  <input type="submit" value="Send" />
</form>

<div id="subscribe">
</div>

<script>
  new PublishForm(document.forms.publish, 'publish');
  // random url parameter to avoid any caching issues
  new SubscribePane(document.getElementById('subscribe'), 'subscribe?random=' + Math.random());
</script>

*/
//-- Browser.js
// Sending messages, a simple POST
function PublishForm(form, url) {
    function sendMessage(message) {
        fetch(url, {
            method: "POST",
            body: message,
        });
    }

    form.onsubmit = function() {
        let message = form.message.value;
        if (message) {
            form.message.value = "";
            sendMessage(message);
        }
        return false;
    };
}

// Receiving messages with long polling
function SubscribePane(elem, url) {
    function showMessage(message) {
        let messageElem = document.createElement("div");
        messageElem.append(message);
        elem.append(messageElem);
    }

    async function subscribe() {
        let response = await fetch(url);

        if (response.status == 502) {
            // Connection timeout
            // happens when the connection was pending for too long
            // let's reconnect
            await subscribe();
        } else if (response.status != 200) {
            // Show Error
            showMessage(response.statusText);
            // Reconnect in one second
            await new Promise(resolve => setTimeout(resolve, 1000));
            await subscribe();
        } else {
            // Got message
            let message = await response.text();
            showMessage(message);
            await subscribe();
        }
    }

    subscribe();
}

// -- Server.js
let http = require("http");
let url = require("url");
let querystring = require("querystring");
let static = require("node-static");

let fileServer = new static.Server(".");

let subscribers = Object.create(null);

function onSubscribe(req, res) {
    let id = Math.random();

    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, must-revalidate");

    subscribers[id] = res;

    req.on("close", function() {
        delete subscribers[id];
    });
}

function publish(message) {
    for (let id in subscribers) {
        let res = subscribers[id];
        res.end(message);
    }

    subscribers = Object.create(null);
}

function accept(req, res) {
    let urlParsed = url.parse(req.url, true);

    // new client wants messages
    if (urlParsed.pathname == "/subscribe") {
        onSubscribe(req, res);
        return;
    }

    // sending a message
    if (urlParsed.pathname == "/publish" && req.method == "POST") {
        // accept POST
        req.setEncoding("utf8");
        let message = "";
        req
            .on("data", function(chunk) {
                message += chunk;
            })
            .on("end", function() {
                publish(message); // publish it to everyone
                res.end("ok");
            });

        return;
    }

    // the rest is static
    fileServer.serve(req, res);
}

function close() {
    for (let id in subscribers) {
        let res = subscribers[id];
        res.end();
    }
}

// -----------------------------------

if (!module.parent) {
    http.createServer(accept).listen(8080);
    console.log("Server running on port 8080");
} else {
    exports.accept = accept;

    if (process.send) {
        process.on("message", msg => {
            if (msg === "shutdown") {
                close();
            }
        });
    }

    process.on("SIGINT", close);
}