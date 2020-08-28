/* 
$ The Body mixin of the Fetch API represents the body of the response/request, allowing you to declare what its content type is and how it should be handled.

Body is implemented by both Request and Response. This provides these objects with an associated body (a stream), a used flag (initially unset), and a MIME type (initially the empty byte sequence).

--> Properties:
    -> Body.body Read only
       A simple getter used to expose a ReadableStream of the body contents.
    -> Body.bodyUsed Read only
       A Boolean that: indicates whether the body has been read.

--> Methods:
    ->Body(response/request).arrayBuffer(): Takes a Response stream and reads it to completion. It returns a promise that resolves with an ArrayBuffer.

    ->Body(response/request).blob(): Takes a Response stream and reads it to completion. It returns a promise that resolves with a Blob.

    ->Body(response/request).formData(): Takes a Response stream and reads it to completion. It returns a promise that resolves with a FormData object.

    ->Body(response/request).json(): Takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.

    ->Body(response/request).text(): Takes a Response stream and reads it to completion. It returns a promise that resolves with a USVString (text). The response is always decoded using UTF-8.

*/

//~ Example-->The example below uses a simple fetch call to grab an image and display it in an <img> tag. You'll notice that since we are requesting an image, we need to run Body.blob() (Response implements body) to give the response its correct MIME type.

// HTML: <img class="my-image" src="https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png">

const myImage = document.querySelector(".my-image");
fetch("https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg")
    .then(res => res.blob())
    .then(res => {
        const objectURL = URL.createObjectURL(res);
        myImage.src = objectURL;
    });

//>>>>>>>>>> Body.body >>>>>>>>>>
const image = document.getElementById("target");

// Fetch the original image
fetch("./tortoise.png")
    // Retrieve its body as ReadableStream
    .then(response => response.body)
    .then(body => {
        const reader = body.getReader();

        return new ReadableStream({
            start(controller) {
                return pump();

                function pump() {
                    return reader.read().then(({ done, value }) => {
                        // When no more data needs to be consumed, close the stream
                        if (done) {
                            controller.close();
                            return;
                        }

                        // Enqueue the next data chunk into our target stream
                        controller.enqueue(value);
                        return pump();
                    });
                }
            },
        });
    })
    .then(stream => new Response(stream))
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => console.log((image.src = url)))
    .catch(err => console.error(err));

//>>>>>>>>>> Body.bodyUsed >>>>>>>>>>
var myImage = document.querySelector(".my-image");
fetch("https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg")
    .then(function(response) {
        console.log(response.bodyUsed); //false
        var res = response.blob();
        console.log(response.bodyUsed); //true
        return res;
    })
    .then(function(response) {
        var objectURL = URL.createObjectURL(response);
        myImage.src = objectURL;
    });