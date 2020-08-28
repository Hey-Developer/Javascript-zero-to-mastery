console.log("Start of JS file..");

async function user() {
    console.log("I am inside user fn..");

    // fetching user from github api.. and using await so that next line wait until it successfully brings the response..
    const response = await fetch(`https://api.github.com/users`);

    // Response arrived..
    console.log(
        "Response has been come..Now lets grab some data from the response.."
    );

    // Getting data.. here we use await to hold the next command which is show user now since all the data will not parsed how can we show incomplete data hence await..
    const users = await response.json();

    // Completely parsed the data..
    console.log(`Successfully parsed the data..`);

    return users;
}

console.log("BEfore function call..");
let a = user();

console.log("After function call..");
console.log(a);
a.then(data => console.log(data));

console.log("Another Event is Going On..");

/* 
Order of execution-->
--1. First line of JS file will be executed: o/p--> 
  >Start of JS file..

--2. Line before function will be executed: o/p-->
  > Before function call..

--3. function call take place.. and first line of the function will be executed: o/p-->
  > I am inside user fn..

--4. Then next line will be executed which is a fetch request so a request is initiated and as aside keyword is written over there it will say i am doing this work u go and do your rest of work..

--5. Hence flow from the second line of the function shifted to the next pending work out of the function.. hence next command executed: o/p-->
  > After function call.. 
--6. Then Next line executed after it which is console.log(a) o/p-->
  > promise:{ pending}
--7. Here it shows pending bcoz it is not resolved yet.. so flow come on the next line.. which is .then handler since  promise is not resolved yet .then handler will not execute..

--8. Flow move ahead and found the command as last line..o/p-->
  > Another Event is Going On..

--9. NOw as there is not other task pending in the js file flow will back to the await code and ask whether it finished or not.. it successfully fetched the request and give response back..

--10. Flow will move ahead and execute next line inside function body which is ..o/p-->
  > Response has been come..Now lets grab some data from the response..

--11. Next the flow will go on the parsing command with a await statement hence it will wait and since their is not other task left it will wait until the parsing is completed..

--12. When the parsing is completed it take the flow to the next line..o/p-->
  >Successfully parsed the data..

--13. finally it reaches the end of the fn body and return the a resolved promise.

--14. Now as promise has been resolved .then handler will execute..o/p-->
  > {.....}// userdata
*/