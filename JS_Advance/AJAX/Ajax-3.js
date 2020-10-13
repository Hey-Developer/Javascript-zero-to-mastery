// $ Here we will fetch a locally stored JSON file.

// DOM-Part-->
let userBtn = document.getElementById("userBtn");
let usersBtn = document.getElementById("usersBtn");

// Adding action Listeners-->
userBtn.addEventListener("click", fetchUser);
usersBtn.addEventListener("click", fetchUsers);

// Defining Handlers-->
function fetchUser() {
    console.log("U clicked on Fetch User");
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "user.json", true);

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.statusText);
    };

    xhr.onload = function() {
        if (this.status === 200) {
            let user = JSON.parse(this.responseText);
            let output = "";
            output += `<ul>
                    <li>User ID: ${user.id}</li>
                    <li>User Name: ${user.name}</li>
                    <li>User Email: ${user.email}</li>
                    </ul>`;
            document.querySelector(".user").innerHTML = output;
            console.log(user);
        } else {
            console.log("Some Error Occurred");
        }
    };

    xhr.send();
}

function fetchUsers() {
    console.log("U clicked on Fetch Users");
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "users.json", true);

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.statusText);
    };

    xhr.onload = function() {
        if (this.status === 200) {
            let users = JSON.parse(this.responseText); // return an array of objects.
            let output = "";
            users.forEach(function(user) {
                output += `<ul>
                    <li>User ID: ${user.id}</li>
                    <li>User Name: ${user.user_name}</li>
                    <li>User Email: ${user.user_salary}</li>
                    <li>User Email: ${user.user_age}</li>
                    </ul>`;
            });

            document.querySelector(".users").innerHTML = output;
            console.log(users);
        } else {
            console.log("Some Error Occurred");
        }
    };

    xhr.send();
}