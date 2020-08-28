/* 
$$ Here’s the full list of all possible fetch options with their default values (alternatives in comments):
   let promise = fetch(url, {
     method: "GET", // POST, PUT, DELETE, etc.
     headers: {
       // the content type header value is usually auto-set
       // depending on the request body
       "Content-Type": "text/plain;charset=UTF-8"
     },
     body: undefined // string, FormData, Blob, BufferSource, or URLSearchParams
     referrer: "about:client", // or "" to send no Referer header,
     // or an url from the current origin
     referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
     mode: "cors", // same-origin, no-cors
     credentials: "same-origin", // omit, include
     cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
     redirect: "follow", // manual, error
     integrity: "", // a hash, like "sha256-abcdef1234567890"
     keepalive: false, // true
     signal: undefined, // AbortController to abort request
     window: window // null
   });

$$ A init option:
  > Creating a Custom Headers..
     let myHeaders = new Headers();
     myHeaders.append('Content-Type', 'image/jpeg');

  > A init Option:
   const myInit = {
     // Most common used options..
     method: 'GET',
     headers: myHeaders,
     mode: 'cors',
     cache: 'default'
   };

  > Passing the init option into the fetch request..
    let response = await fetch('flower.jpg',myInit)

*/
document.querySelector("#imgBtn").onclick = async() => {
    let myImg = document.querySelector("img");

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");

    const myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };
    fetch("girl.jpg", myInit)
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error(response.status);
            }
        })
        .then(blob => {
            myImg.src = URL.createObjectURL(blob);
        })
        .catch(err => console.log(err));
};

/* 
$ POST Request..
  If we use a “POST” request, we are able to add data to an API. To post to an API, we now need to include a second argument in the original fetch request, which will be an object. The object will contain important information
  
  -- To make a POST request,
    >> method – HTTP-method, e.g. POST,
    >> body – the request body, one of:
               ~a string (e.g. JSON-encoded),
               ~FormData object, to submit the data as form/multipart,
               ~Blob/BufferSource to send binary data,
               ~URLSearchParams, to submit the data in     x-www-form-urlencoded encoding, rarely used.

*/

// DOM PART-->
document.getElementById("sendBtn").addEventListener("click", sendData);

// A post request to the server..
async function sendData() {
    let eName = document.querySelector("#eName").value;
    let eAge = document.querySelector("#eAge").value;
    let eSalary = document.querySelector("#eSalary").value;
    if (eName == "" && eAge == "" && eSalary == "") {
        alert("Please enter The Details");
    } else {
        let val = {
            name: eName,
            salary: eSalary,
            age: eAge,
        };
        let user = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(val),
        };
        let response = await fetch(
            `http://dummy.restapiexample.com/api/v1/create`,
            user
        );
        document.getElementById("eName").value = "";
        document.getElementById("eAge").value = "";
        document.getElementById("eSalary").value = "";

        let result = await response.json();

        setTimeout(() => {
            document.getElementById("op").innerText =
                "Data Successfully Sent..See the response in console..";
            console.log(result);
        }, 2000);
    }
}

// >> POST Request with url encoding..
function json(response) {
    return response.json();
}

fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: "foo=bar&lorem=ipsum",
    })
    .then(json)
    .then(function(data) {
        console.log("Request succeeded with JSON response", data);
    })
    .catch(function(error) {
        console.log("Request failed", error);
    });

// $$ Sending Credentials with a Fetch Request:
// Should you want to make a fetch request with credentials such as cookies, you should set the credentials of the request to "include".
fetch(url, {
    credentials: "include",
});