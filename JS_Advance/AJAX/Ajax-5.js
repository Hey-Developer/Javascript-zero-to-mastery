// $ If u want to send information to the server,
// You can use either GET method or POST method:
// But If you send with POST method, it is more secure.
/*
>>>>>>>>>> SEND DATA WITH GET..
    {
        xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
        xhttp.send();
    }
*/

/* 
>>>>>>>>>>> SEND DATA FROM POST..
    {
       xhttp.open("POST", "ajax_test.asp", true);
       xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("fname=Henry&lname=Ford");
    }
*/
//# Accessing HTML Elements...
const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

// # Adding Event Listeners...
getBtn.addEventListener("click", getRequest);
postBtn.addEventListener("click", postRequest);

// # Functions...
function postRequest() {
    console.log(" POST Request Initiated...");

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

    // Sending Data..
    // xhr.getResponseHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 3) {
            console.log("In Progress...");
        }
    };

    xhr.onload = function() {
        if (this.status === 200) {
            let serverData = JSON.parse(this.responseText);

            let html = "";
            html += `<ul>
                      <li>Employee ID: ${serverData.data.id}</li>
                      <li>Employee Name: ${serverData.data.name}</li>
                      <li>Employee Salary: ${serverData.data.salary}</li>
                      <li>Employee Age: ${serverData.data.age}</li>
                      </ul>`;
            document.querySelector(".postData").innerHTML = html;
            console.log(serverData.data); // here we are getting the data which we send to the server.
        } else {
            console.error("Something went wrong!!!");
        }
    };

    // Send Post Request..
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send('{"name":"CNU","salary":"$1234","age":"19"}');
}

function getRequest() {
    console.log(" GET Request Initiated...");

    const xhr = new XMLHttpRequest();

    // IF YOU want to send data using GET Method then it will go through URL.
    xhr.open("POST", "demo.json", true);

    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 3) {
            console.log("In Progress...");
        }
    };

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText); // here we are getting the data which we send to the server.
        } else {
            console.error("Something went wrong!!!");
        }
    };

    // Send POST Request..
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send('{"name":"CNU","salary":"$1234","age":"19"}');
    // The .send(body) method is pretty omnivore. It can send almost any body, including Blob and BufferSource objects.
}

// >>>>>>>>>> Sending formData >>>>>>>>
let formData = new FormData([form]); // creates an object, optionally fill from <form>
formData.append(name, value); // appends a field

let xhr1 = new XMLHttpRequest();
xhr1.open("POST", "/article/xmlhttprequest/post/user");
xhr1.send(formData);

xhr1.onload = () => alert(xhr.response);

/* 
$$ Upload Progress >>
   
   >> The progress event triggers only on the downloading stage.
   >> That is: if we POST something, XMLHttpRequest first uploads our data (the request body), then downloads the response.

   >> If we’re uploading something big, then we’re surely more interested in tracking the upload progress. But xhr.onprogress doesn’t help here.

   >> There’s another object, without methods, exclusively to track upload events: xhr.upload.

   >> It generates events, similar to xhr, but xhr.upload triggers them solely on uploading:

   -> loadstart – upload started.
   -> progress – triggers periodically during the upload.
   -> abort – upload aborted.
   -> error – non-HTTP error.
   -> load – upload finished successfully.
   -> timeout – upload timed out (if timeout property is set).
   -> loadend – upload finished with either success or error.

*/
//----- Here’s a real-life example: file upload with progress indication:
function upload(file) {
    let xhr = new XMLHttpRequest();

    //* track upload progress
    xhr.upload.onprogress = function(event) {
        console.log(`Uploaded ${event.loaded} of ${event.total}`);
    };

    // track completion: both successful or not
    xhr.onloadend = function() {
        if (xhr.status == 200) {
            console.log("success");
        } else {
            console.log("error " + this.status);
        }
    };

    xhr.open("POST", "/article/xmlhttprequest/post/upload");
    xhr.send(file);
}
//* We’ve already seen another event: readystatechange. Historically, it appeared long ago, before the specification settled. Nowadays, there’s no need to use it, we can replace it with newer events, but it can often be found in older scripts.
//* If we need to track uploading specifically, then we should listen to same events on xhr.upload object.

/* 
$ Cross-origin requests:
  >> XMLHttpRequest can make cross-origin requests, using the same CORS policy as fetch.
  >> Just like fetch, it doesn’t send cookies and HTTP-authorization to another origin by default. To enable them, set xhr.withCredentials to true:
     let xhr = new XMLHttpRequest();
     xhr.withCredentials = true;
     
     xhr.open('POST', 'http://anywhere.com/request');
     ...
*/