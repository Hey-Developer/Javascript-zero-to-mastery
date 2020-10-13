/* One of the most common engagements you'll have with promises is with web APIs that return a promise. Let's consider a hypothetical video chat application. The application has a window with a list of the user's friends, and clicking on a button next to a user starts a video call to that user.

>That button's handler calls getUserMedia() in order to get access to the user's camera and microphone.

>Since getUserMedia() has to ensure that the user has permission to use those devices and ask the user which microphone to use and which camera to use (or whether to be a voice-only call, among other possible options), it can block until not only all of those decisions are made, but also the camera and microphone have been engaged. Also, the user may not respond immediately to these permission requests. This can potentially take a long time.

>Since the call to getUserMedia() is made from the browser's main thread, the entire browser is blocked until getUserMedia() returns! Obviously, that's not an acceptable option; without promises, everything in the browser becomes unusable until the user decides what to do about the camera and microphone. 

> So instead of waiting for the user, getting the chosen devices enabled, and directly returning the MediaStream for the stream created from the selected sources, getUserMedia() returns a promise which is resolved with the MediaStream once it's available.
    
*/
function handleCallButton(evt) {
    setStatusMessage("Calling...");
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(chatStream => {
            selfViewElem.srcObject = chatStream;
            chatStream
                .getTracks()
                .forEach(track => myPeerConnection.addTrack(track, chatStream));
            setStatusMessage("Connected");
        })
        .catch(err => {
            setStatusMessage("Failed to connect");
        });
}
/* 
>This function starts by using a function called setStatusMessage() to update a status display with the message "Calling...", indicating that a call is being attempted. 

>It then calls getUserMedia(), asking for a stream that has both video and audio tracks, then once that's been obtained, sets up a video element to show the stream coming from the camera as a "self view," then takes each of the stream's tracks and adds them to the WebRTC RTCPeerConnection representing a connection to another user. After that, the status display is updated to say "Connected".

>If getUserMedia() fails, the catch block runs. This uses setStatusMessage() to update the status box to indicate that an error occurred.

$ The trouble with callbacks:
  To fully understand why promises are a good thing, it helps to think back to old-style callbacks and to appreciate why they are problematic.

  Let's talk about ordering pizza as an analogy. There are certain steps that you have to take for your order to be successful, which doesn't really make sense to try to execute out of order, or in order but before each previous step has quite finished:

  >You choose what toppings you want. This can take a while if you are indecisive, and may fail if you just can't make up your mind, or decide to get a curry instead.

  >You then place your order. This can take a while to return a pizza and may fail if the restaurant does not have the required ingredients to cook it.

  >You then collect your pizza and eat. This might fail if, say, you forgot your wallet so can't pay for the pizza!

*/

chooseToppings(function(toppings) {
    placeOrder(
        toppings,
        function(order) {
            collectOrder(
                order,
                function(pizza) {
                    eatPizza(pizza);
                },
                failureCallback
            );
        },
        failureCallback
    );
}, failureCallback);

/* 
$ Improvements with promises:
  Promises make situations like the above much easier to write, parse, and run. If we represented the above pseudo-code using asynchronous promises instead, we'd end up with something like this:
*/
chooseToppings()
    .then(function(toppings) {
        return placeOrder(toppings);
    })
    .then(function(order) {
        return collectOrder(order);
    })
    .then(function(pizza) {
        eatPizza(pizza);
    })
    .catch(failureCallback);

/* 
    This is much better — it is easier to see what is going on, we only need a single .catch() block to handle all the errors, it doesn't block the main thread (so we can keep playing video games while we wait for the pizza to be ready to collect), and each operation is guaranteed to wait for previous operations to complete before running. We're able to chain multiple asynchronous actions to occur one after another this way because each .then() block returns a new promise that resolves when the .then() block is done running. Clever, right?
*/