// >>>>>>>> CALLBACK FUNCTION >>>>>>>>>>>>>>

// $ Pretend that this response is coming from server.
let students = [
    { name: "Rohan", course: "JavaScript" },
    { name: "CNU", course: "AI and ML" },
];

//$ Now we want to add new students to the database..
function enrollStudent(newSt) {
    // Assume that this function will send data to the server.
    // So to make it asynchronous we use setTimeout callback function.

    // After 3 sec this callback fn will execute in background..
    setTimeout(function() {
        students.push(newSt);
        console.log(`Students have been enrolled..`);
    }, 3000);
    // Lets say this process will take 8 sec hence we set 8000 ms in setTimeout
}

//$ Now we want  to fetch data from the web server..
function getStudents() {
    // here also we use setTimeout to pretending that some time is taking from fetching the data from the web server..
    setTimeout(function() {
        let html = "";
        students.forEach(function(st) {
            html += `<ul>
                   <li>Student Name: ${st.name}</li>
                   <li>Student Course: ${st.course}</li>
                   </ul`;
        });

        document.querySelector(".container").innerHTML = html;
        console.log(`Students have been fetched..`);
    }, 2000);
}

// So our two functions are created which insert and fetch data from the server.
// ? Why Timeout function--> to pretending that data is inserting and fetching from the server and it will take some time that time is specified in setTimeout fn.

let newStudent1 = {
    name: "Sunny",
    course: "Python",
};

// Inserting this data into the database-->
// enrollStudent(newStudent1);
// getStudents();

/* 
$ Shocked from the above output->
  > Only two names are showing.
  > Why our new students name is not Showing..????
    ?😉 Hold on i will explain.. so when we are enrolling students i.e inserting data to the server.. it talk 8 secs.
    ? and since this task is running in background it will not block further code,, therefore getStudents fn will call ..
    ? and in getStudents function we are fetching data from the server this take only 1 sec.. this is also asynchronous..
    ? So if we talk in simple words getStudents fn run before the enrollStudent() fn this means that before inserting the data to the web server we are fetching data from the server
    ? Hence it is showing the already stored data.. and not the new enrolled student..
    
    > So this seems to be bug..
    > Then what to do.. SOLn> we have to call the getStudent function only when the enrolledStudent function complete its execution..
    > But that too in asynchronous way so that our remaining code will not block during this server communication..
    > So ANS is callback.. YES using callbacks we can solve this problem..

    > HOW🙄🙄..
      ? we provide a callback in enrollStudent() function which will execute after the success status of inserting student into database..
      ? And in callback parameter we provide the getStudent function  hence now getStudent() fn will only call when the insertion of data into database is successful..
      ? and since getStudent function is calling after enrolledStudent() function it will show the latest information from the database..
      > and all this process will execute in background because of setTimeout() which is asynchronous callback function..
      > In this way our dom code will also not block..

      $ lets get roll into the code..    
*/

// enrollStudents() function with callback..

function enrollStudent2(newSt, callback) {
    setTimeout(function() {
        students.push(newSt);
        console.log(`Students have been enrolled..`);
        callback();
    }, 5000);
}

let newStudent2 = {
    name: "Shraddha",
    course: "JAVA",
};
console.log("Registration Started");
enrollStudent2(newStudent2, getStudents);
// console.log("End");

/* 
$ Conclusion..
? We used callbacks when instead of immediately returning some result like most functions, function that use callbacks take some time to produce a results..
? for ex in the above example we used callback bcoz we want that the second function should not call immediately but after the execution of first function..
? The function used as callbacks are store in message queues and when the execution stack is empty then only that callbacks run..
? usually callbacks are only used when doing I/o e.g downloading things,reading files,talking to databases.
? In above case we use callbacks bcoz here we are communicating with our  server..
*/

// >>>>>>>>>> Example2:CallBack Hell >>>>>>>>>>
// ? CALLBACK HELL is nested callbacks..
// Our task:
// Fetching Student Roll No from API (take 2sec for response)
// From that Roll No Fetch Name and Age of student from the API (take 2s for response)
// And second Fetch gender of Student from the API (take 2sec for response)

// Sample data stored on the API

const getRollNo = () => {
    // To show that response is coming after 2 sec..
    setTimeout(() => {
        console.log("Fetching Student Roll No from API...");
        let rollNo = [1, 2, 3, 4, 5];
        console.log(rollNo);

        setTimeout(
            rn => {
                const bioData = {
                    name: "CNU",
                    age: "18",
                    gender: "male",
                };
                console.log(
                    `Roll No: ${rn} Name: ${bioData.name} and Age: ${bioData.age}`
                );

                setTimeout(
                    name => {
                        console.log(`I am ${name} and my Gender is ${bioData.gender}`);
                    },
                    2000,
                    bioData.name
                );
            },
            2000,
            rollNo[4]
        );
    }, 2000);
};

getRollNo();