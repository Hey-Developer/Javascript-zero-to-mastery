/* 
$ As we know, fetch returns a promise. And JavaScript generally has no concept of “aborting” a promise. So how can we abort a fetch?

>> There’s a special built-in object for such purposes: AbortController, that can be used to abort not only fetch, but other asynchronous tasks as well.

>> The usage is pretty simple:
   --Step.1: Create a controller
     -> let controller = new AbortController();
        A controller is an extremely simple object.
     -> It has a single method abort(), and a single property signal.
     -> When abort() is called:
     -> abort event triggers on controller.signal
     -> controller.signal.aborted property becomes true.
     (Like this (without fetch yet):)
     let controller = new AbortController();
     let signal = controller.signal;
     
     // triggers when controller.abort() is called
     signal.addEventListener('abort', () => alert("abort!"));
     
     controller.abort(); // abort!
     
     alert(signal.aborted); // true

   --Step.2: pass the signal property to fetch option:
     let controller = new AbortController();
     fetch(url, {
       signal: controller.signal
     });
     -> The fetch method knows how to work with AbortController, it listens to abort on signal.

   --Step.3: to abort, call controller.abort():
     controller.abort();
     -> We’re done: fetch gets the event from signal and aborts the request.

>> When a fetch is aborted, its promise rejects with an error AbortError, so we should handle it, e.g. in try..catch:
  // abort in 1 second
  let controller = new AbortController();
  setTimeout(() => controller.abort(), 1000);
  
  try {
    let response = await fetch('/article/fetch-abort/demo/  hang', {
      signal: controller.signal
    });
  } catch(err) {
    if (err.name == 'AbortError') { // handle abort()
      alert("Aborted!");
    } else {
      throw err;
    }
  }

>> AbortController is scalable, it allows to cancel multiple fetches at once.
-> For instance, here we fetch many urls in parallel, and the controller aborts them all:
   let urls = [...]; // a list of urls to fetch in parallel
   
   let controller = new AbortController();
   
   let fetchJobs = urls.map(url => fetch(url, {
     signal: controller.signal
   }));
   
   let results = await Promise.all(fetchJobs);
   
   // if controller.abort() is called from elsewhere,
   // it aborts all fetches

>> If we have our own asynchronous jobs, different from fetch, we can use a single AbortController to stop those, together with fetches.
 -> We just need to listen to its abort event:
    let urls = [...];
    let controller = new AbortController();

    let ourJob = new Promise((resolve, reject) => { // our task
      ...
      controller.signal.addEventListener('abort', reject);
    });

    let fetchJobs = urls.map(url => fetch(url, { // fetches
      signal: controller.signal
    }));

    // Wait for fetches and our task in parallel
    let results = await Promise.all([...fetchJobs, ourJob]);

    // if controller.abort() is called from elsewhere,
    // it aborts all fetches and ourJob

* So AbortController is not only for fetch, it’s a universal object to abort asynchronous tasks, and fetch has built-in integration with it.
*/

//$ Aborting Single fetch request..

// >> Fetching Local user-->

// Controller-->
let controller1 = new AbortController();

document.getElementById("localBtn").addEventListener("click", fetchLocal);

async function fetchLocal(e) {
    try {
        let response = await fetch(
            `http://dummy.restapiexample.com/api/v1/employees`, {
                signal: controller1.signal,
            }
        );

        let result = await response.json();
        let html = "";
        result.data.forEach(user => {
            html += `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Employee Name: ${user.employee_name}</div>
                    <div class="card-body">
                       <ul>
                         <li>Employee-Id: ${user.id}</li>
                         <li>Employee-Salary: ${user.employee_salary}</li>
                         <li>Employee-Age: ${user.employee_age}</li>
                       </ul>
                    </div>
                </div>`;
        });

        document.querySelector("#data1").innerHTML = html;
    } catch (err) {
        if (err.name == "AbortError") {
            // handle abort
            document.querySelector(
                "#data1"
            ).innerHTML = `<div class="alert alert-danger" role="alert">
                              Fetch Request Aborted: ${err}
                           </div>`;
        } else {
            throw err;
        }
    }
}

// >> Aborting..
document.querySelector("#abort1Btn").addEventListener("click", e => {
    console.log("Aborted");
    controller1.abort();
});

// >> Fetching GIT user-->

// Controller-->
let controller2 = new AbortController();

document.getElementById("gitBtn").addEventListener("click", fetchGit);

async function fetchGit(e) {
    try {
        let response = await fetch(`https://api.github.com/users`, {
            signal: controller2.signal,
        });

        let result = await response.json();

        let html = "";
        result.forEach(user => {
            html += `<div class="card mb-3" style="max-width: 500px;">
                       <div class="row no-gutters">
                         <div class="col-md-4">
                             <img src="${user.avatar_url}" class="card-img" alt="GitUser" />
                         </div>
                         <div class="col-md-8">
                             <div class="card-body">
                                 <h5 class="card-title">Git-Login: ${user.login}</h5>
                                 <p class="card-text">
                                     <small class="text-muted">Go to the Profile-> <a href=${user.url}>GitProfile</a></small>
                                 </p>
                             </div>
                         </div>
                       </div>
                     </div>`;
        });

        document.querySelector("#data2").innerHTML = html;
    } catch (err) {
        if (err.name == "AbortError") {
            // handle abort
            document.querySelector(
                "#data2"
            ).innerHTML = `<div class="alert alert-danger" role="alert">
                              Fetch Request Aborted: ${err}
                           </div>`;
        } else {
            throw err;
        }
    }
}

// >> Aborting..
document.querySelector("#abort2Btn").addEventListener("click", e => {
    console.log("Aborted");
    controller2.abort();
});

// $ Aborting Two All the fetch Request Simultaneously--->

let controllerAll = new AbortController();

document.getElementById("fetchAllBtn").addEventListener("click", async e => {
    let urls = [
        "	http://dummy.restapiexample.com/api/v1/employees",
        "https://api.github.com/users",
    ];

    let requests = urls.map(url =>
        fetch(url, {
            signal: controllerAll.signal,
        })
    );

    Promise.all(requests)
        .then(responses => {
            // all responses are resolved successfully
            for (let response of responses) {
                console.log(`${response.url}: ${response.status}`); // shows 200 for every url
            }

            return responses;
        })
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(resp => {
            // resp is a array of two responses

            // Using First response>>>
            let html1 = "";
            resp[0].data.forEach(user => {
                html1 += `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Employee Name: ${user.employee_name}</div>
                    <div class="card-body">
                       <ul>
                         <li>Employee-Id: ${user.id}</li>
                         <li>Employee-Salary: ${user.employee_salary}</li>
                         <li>Employee-Age: ${user.employee_age}</li>
                       </ul>
                    </div>
                </div>`;
            });

            document.querySelector("#data1").innerHTML = html1;

            // Using Second Response..
            let html2 = "";
            resp[1].forEach(user => {
                html2 += `<div class="card mb-3" style="max-width: 500px;">
                       <div class="row no-gutters">
                         <div class="col-md-4">
                             <img src="${user.avatar_url}" class="card-img" alt="GitUser" />
                         </div>
                         <div class="col-md-8">
                             <div class="card-body">
                                 <h5 class="card-title">Git-Login: ${user.login}</h5>
                                 <p class="card-text">
                                     <small class="text-muted">Go to the Profile-> <a href=${user.url}>GitProfile</a></small>
                                 </p>
                             </div>
                         </div>
                       </div>
                     </div>`;
            });

            document.querySelector("#data2").innerHTML = html2;
        })
        .catch(err => {
            if (err.name == "AbortError") {
                // handle abort
                document.querySelector(
                    "#data1"
                ).innerHTML = `<div class="alert alert-danger" role="alert">
                              Fetch Request Aborted: ${err}
                           </div>`;
                document.querySelector(
                    "#data2"
                ).innerHTML = `<div class="alert alert-danger" role="alert">
                              Fetch Request Aborted: ${err}
                           </div>`;
            } else {
                throw err;
            }
        });
});

// >> Aborting All Request >>
document.getElementById("abortAllBtn").addEventListener("click", e => {
    console.log("Aborting all>>>");
    controller1.abort();
    controller2.abort();
    controllerAll.abort();
});