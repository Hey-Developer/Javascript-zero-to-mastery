/* 
$$ We can use xhr.responseType property to set the response format:
   -> "" (default) – get as string,
   -> "text" – get as string,
   -> "arraybuffer" – get as ArrayBuffer (for binary data, see chapter ArrayBuffer, binary arrays),
   -> "blob" – get as Blob (for binary data, see chapter Blob),
   -> "document" – get as XML document (can use XPath and other XML methods),
   -> "json" – get as JSON (parsed automatically).
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', '/article/xmlhttprequest/example/json');
    
    xhr.responseType = 'json';
    
    xhr.send();
    
    // the response is {"message": "Hello, world!"}
    xhr.onload = function() {
      let responseObj = xhr.response;
      alert(responseObj.message); // Hello, world!
    };
NOTE: In the old scripts you may also find xhr.responseText and even xhr.responseXML properties.
      >> Nowadays, we should set the format in xhr.responseType and get xhr.response as demonstrated above.
*/

// Lets fetch some data from another server not from our local server but from real world server.
// Fake JSON data from a website.

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", fetchUser);

function fetchUser(e) {
    console.log(`u clicked FEtch USer Button:`);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://wordsapiv1.p.mashape.com/words/tree", true);
    if (xhr.readyState === 1) {
        console.log(`Request Initiated without any error`);
    }

    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        console.log(`Ready State is: ${xhr.readyState}`);
    };

    xhr.onload = function() {
        if (this.status === 200) {
            //$$Old WAY:  let serverData = JSON.parse(this.responseText);
            let serverData = xhr.response;
            // serverData is a object with two property:
            // one is status property and another is data property.
            // In data property it is array of objects which contains employees data.
            // let html = "";
            // serverData.data.forEach(element => {
            //     html += `<ul>
            //           <li>Employee Id: ${element.id}</li>
            //           <li>Employee Name: ${element.employee_name}</li>
            //           <li>Employee Salary: ${element.employee_salary}</li>
            //           <li>Employee Age: ${element.employee_age}</li>
            //           </ul>`;
            // });
            // document.querySelector(".user").innerHTML = html;
            console.log(serverData);
        } else {
            console.error("Some Error Occurred");
        }
    };

    xhr.send();

    console.log("We are Done 😀");
    // This will print on console first because we use asynchronous approach i.e our server request will not block our code.
}