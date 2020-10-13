/* 
$ Bigger example: fetch-->
  In frontend programming promises are often used for network requests. So let’s see an extended example of that.

  We’ll use the fetch method to load the information about the user from the remote server. It has a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:
*/

let promise = fetch(url);
//>>This makes a network request to the url and returns a promise. The promise resolves with a response object

//>>To read the full response, we should call the method response.text(): it returns a promise that resolves when the full text is downloaded from the remote server, with that text as a result.

fetch("/article/promise-chaining/user.json")
    // .then below runs when the remote server responds
    .then(function(response) {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.text();
    })
    .then(function(text) {
        // ...and here's the content of the remote file
        alert(text); // {"name": "iliakan", "isAdmin": true}
    });

//>>The response object returned from fetch also includes the method response.json() that reads the remote data and parses it as JSON. In our case that’s even more convenient, so let’s switch to it.

// same as above, but response.json() parses the remote content as JSON
fetch("/article/promise-chaining/user.json")
    .then(response => response.json())
    .then(user => alert(user.name)); // iliakan, got user name

//--Now let’s do something with the loaded user.

//--For instance, we can make one more requests to GitHub, load the user profile and show the avatar:

// Make a request for user.json
fetch("/article/promise-chaining/user.json")
    // Load it as json
    .then(response => response.json())
    // Make a request to GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    .then(githubUser => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });

//--Look at the line (*): how can we do something after the avatar has finished showing and gets removed? For instance, we’d like to show a form for editing that user or something else. As of now, there’s no way.

//--To make the chain extendable, we need to return a promise that resolves when the avatar finishes showing.

fetch("/article/promise-chaining/user.json")
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(
        githubUser =>
        new Promise(function(resolve, reject) {
            // (*)
            let img = document.createElement("img");
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            setTimeout(() => {
                img.remove();
                resolve(githubUser); // (**)
            }, 3000);
        })
    )
    // triggers after 3 seconds
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));

//>>That is, the .then handler in line (*) now returns new Promise, that becomes settled only after the call of resolve(githubUser) in setTimeout (**). The next .then in the chain will wait for that.

// *As a good practice, an asynchronous action should always return a promise. That makes it possible to plan actions after it; even if we don’t plan to extend the chain now, we may need it later.

// --Finally, we can split the code into reusable functions:
function loadJson(url) {
    return fetch(url).then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`).then(response =>
        response.json()
    );
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Use them:
loadJson("/article/promise-chaining/user.json")
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
// ...