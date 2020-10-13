/* 
$ Async/Await-->
  There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

$ Async functions:
  Let’s start with the async keyword. It can be placed before a function, like this:
  async function f() {
    return 1;
  }
  --> in async function the value we return become a promise..
  -->The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
*/
async function demo() {
    return 1; // return a resolved promise..
}

console.log(demo()); //promise
demo().then(value => {
    console.log(`Promise resolves with value${value}`);
});

// This could be same as..
async function f() {
    return Promise.resolve(1);
}

f().then(val => {
    console.log(`Promise resolves with value${val}`);
}); // 1

/* 
~So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool.

$ Await..
  ? works only inside async functions
  >let value = await promise;

  -->The keyword await makes JavaScript wait until that promise settles and returns its result.
*/
async function demo2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 5000);
    });

    let result = await promise; // wait until the promise resolves (*)
    console.log("Promise resolved after 5 sec..");
}
demo2();
console.log("End of line..."); // this will show first because we are using asynchronous fun which do not block the code..

/* 
!Can’t use await in regular functions
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
>>We will get this error if we do not put async before a function. As said, await only works inside an async function.
*/

// ?? Where will async await help us....
// >> to get rid of Promise chaining..in http://127.0.0.1:5500/JS_Advance/Asynchronous_JS/promise-fetch().js

async function fetchUserData() {
    // Read our JSON file locally..
    let response = await fetch("userData.json");
    let user = await response.json();

    // read Github user..
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);

    let githubUser = await githubResponse.json();

    // Show the avatar..
    let html = `<div class="card mb-3 my-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${githubUser.avatar_url}" class="card-img" alt="GitHubUser" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${githubUser.login}</h5>
                            
                            <p class="card-text">
                                <small class="text-muted"><a href="${githubUser.url}">Go to the Profile</a></small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
    document.querySelector(".data").innerHTML = html;

    // Wait 3 seconds..

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    document.querySelector(".data").innerHTML = "";
    console.log("remove");

    // for Further use..
    return githubUser;
}

document.querySelector("#btn").addEventListener("click", fetchUserData);

//-->Pretty clean and easy to read, right? Much better than before.

/* 
! await won’t work in the top-level code
  People who are just starting to use await tend to forget the fact that we can’t use await in top-level code. For example, this will not work:

  // syntax error in top-level code
  let response = await fetch('/article/promise-chaining/  user.json');
  let user = await response.json();

  But we can wrap it into an anonymous async function, like this:

  (async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
  })();

*/

// --Async class methods: To declare an async class method, just prepend it with async:

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter().wait().then(alert); // 1