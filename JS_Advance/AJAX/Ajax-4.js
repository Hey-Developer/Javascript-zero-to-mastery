// $ Fetching data from a API-->

document.getElementById("loadBtn").addEventListener("click", githubUser);

function githubUser() {
    console.log("Request Initiated..");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onprogress = function() {
        console.log(`.....Waiting`);
    };
    xhr.onload = function() {
        if (this.status === 200) {
            let users = JSON.parse(this.responseText);
            let output = "";

            users.forEach(function(user) {
                // Without template literal's
                output +=
                    '<div class="user">' +
                    '<img src="' +
                    user.avatar_url +
                    '" width="70"' +
                    'height="70">' +
                    "<ul>" +
                    "<li> Id: " +
                    user.id +
                    "</li>" +
                    "<li> UserName: " +
                    user.login +
                    "</li>" +
                    "</ul>" +
                    "</div>";
            });
            document.querySelector(".users").innerHTML = output;
            console.log(users);
        } else {
            console.error("Something went wrong!!!😈");
        }
    };

    xhr.send();
}