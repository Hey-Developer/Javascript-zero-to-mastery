/* 
# There are 5 static methods in the Promise class. We’ll quickly cover their use cases here.

$ Promise.all-->
  Let’s say we want many promises to execute in parallel and wait until all of them are ready.

  For instance, download several URLs in parallel and   process the content once they are all done.
  
  That’s what Promise.all is for.
  
  The syntax is: 
  > let promise = Promise.all([...promises...]);
  Promise.all takes an array of promises (it technically can be any iterable, but is usually an array) and returns a new promise.

  > For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:
  Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); // 1,2,3 when promises are ready: each   promise contributes an array member

  ! Note:Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.
 
  *A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.
    let urls = [
      'https://api.github.com/users/iliakan',
      'https://api.github.com/users/remy',
      'https://api.github.com/users/jeresig'
    ];
    
    // map every url to the promise of the fetch
    let requests = urls.map(url => fetch(url));
    
    // Promise.all waits until all jobs are resolved
    Promise.all(requests)
      .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}  `)
      ));  
  
  # A bigger Example:
    let names = ['iliakan', 'remy', 'jeresig'];

    let requests = names.map(name => fetch(`https://api.  github.com/users/${name}`));

    Promise.all(requests)
      .then(responses => {
        // all responses are resolved successfully
        for(let response of responses) {
          alert(`${response.url}: ${response.status}`); //  shows 200 for every url
        }

        return responses;
      })
      // map array of responses into an array of response.json  () to read their content
      .then(responses => Promise.all(responses.map(r => r.json  ())))
      // all JSON answers are parsed: "users" is the array of   them
      .then(users => users.forEach(user => alert(user.name)))   ;    
  
  --If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
  Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Whoops!

  *Here the second promise rejects in two seconds. That leads to an immediate rejection of Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all.

  * If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

  *For example, if there are multiple fetch calls, like in the example above, and one fails, the others will still continue to execute, but Promise.all won’t watch them anymore. They will probably settle, but their results will be ignored.
  
  * Promise.all does nothing to cancel them, as there’s no concept of “cancellation” in promises. In another chapter we’ll cover AbortController that can help with that, but it’s not a part of the Promise API.

$ Promise.all(iterable) allows non-promise “regular” values in iterable
 Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

For instance, here the results are [1, 2, 3]:
    Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
      }),
      2,
      3
    ]).then(alert); // 1, 2, 3


$ Promise.allSettled-->
  Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed:

  Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
  >{status:"fulfilled", value:result} for successful     responses,
  >{status:"rejected", reason:error} for errors.
   let urls = [
     'https://api.github.com/users/iliakan',
     'https://api.github.com/users/remy',
     'https://no-such-url'
   ];
   
   Promise.allSettled(urls.map(url => fetch(url)))
     .then(results => { // (*)
       results.forEach((result, num) => {
         if (result.status == "fulfilled") {
           alert(`${urls[num]}: ${result.value.status}`);
         }
         if (result.status == "rejected") {
           alert(`${urls[num]}: ${result.reason}`);
         }
       });
     });

     >The results in the line (*) above will be:
     [
       {status: 'fulfilled', value: ...response...},
       {status: 'fulfilled', value: ...response...},
       {status: 'rejected', reason: ...error object...}
     ]

     *Now we can use Promise.allSettled to get the results of all given promises, even if some of them reject.


$ Promise.race:
  Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
  The syntax is:
  > let promise = Promise.race(iterable);
    Promise.race([
      new Promise((resolve, reject) => setTimeout(() =>     resolve(1), 1000)),
      new Promise((resolve, reject) => setTimeout(() => reject    (new Error("Whoops!")), 2000)),
      new Promise((resolve, reject) => setTimeout(() =>     resolve(3), 3000))
    ]).then(alert); // 1  

    *The first promise here was fastest, so it became the result. After the first settled promise “wins the race”, all further results/errors are ignored.

$ Promise.resolve/reject:
  Methods Promise.resolve and Promise.reject are rarely needed in modern code, because async/await syntax (we’ll cover it a bit later) makes them somewhat obsolete.
  
*/