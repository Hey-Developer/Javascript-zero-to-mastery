// DOM-PART-->
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUser").addEventListener("click", getUser);
document.getElementById("getPosts").addEventListener("click", getPosts);
myForm.addEventListener("submit", addPosts);

// Handlers-->
function getText(e) {
    fetch("TestData/sample.txt")
        .then(response => {
            return response.text();
        })
        .then(result => {
            document.getElementById("output").innerHTML = result;
        })
        .catch(err => console.log(err));
}

function getUser(e) {
    // fetch("TestData/localData.json")
    .then(response => {
            return response.json();
        })
        .then(result => {
            let html = `<h2 class="mb-4">USERS</h2>`;
            result.forEach(user => {
                html += `<ul class="list-group mb-4">
                            <li class="list-group-item">ID: ${user.id}</li>
                            <li class="list-group-item">NAME: ${user.employee_name}</li>
                            <li class="list-group-item">SALARY: ${user.employee_Salary}</li>
                          </ul>`;
            });
            document.getElementById("output").innerHTML = html;
        })
        .catch(err => console.log(err));
}

function getPosts(e) {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(`Something Went Wrong..${response.statusText}`);
            }
        })
        .then(result => {
            let html = `<h2 class="mb-4">POSTS</h2>`;
            result.forEach(post => {
                html += `<div class="card card-body mb-3">
                           <h3>${post.title}</h3>
                           <p>${post.body}</p>
                         </div>`;
            });
            document.getElementById("output").innerHTML = html;
        })
        .catch(err => console.log(err));
}

function addPosts(e) {
    e.preventDefault();
    let title = myForm.title.value;
    let body = myForm.body.value;
    myForm.title.value = "";
    myForm.body.value = "";
    console.log(title);
    console.log(body);

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title: title, body: body }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(`Something Went Wrong..${response.statusText}`);
            }
        })
        .then(result => {
            console.log(result);
            document.getElementById("post").innerText =
                "Data Successfully Inserted.. See The console";
        })
        .catch(err => console.log(err));
}