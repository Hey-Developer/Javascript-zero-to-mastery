// ? Why use Promises...
// -- Substitute of callbacks..
/* 
Remember this callbacks.. which we used in the previous chapter..
// $ Pretend that this response is coming from server.
let students = [
    { name: "Rohan", course: "JavaScript" },
    { name: "CNU", course: "AI and ML" },
];
function enrollStudent2(newSt, callback) {
    setTimeout(function() {
        students.push(newSt);
        console.log(`Students have been enrolled..`);
        callback();
    }, 5000);
}
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
let newStudent2 = {
    name: "Shraddha",
    course: "JAVA",
};
console.log("Registration Started");
enrollStudent2(newStudent2, getStudents);
*/

// >>>>>>>>>> Now let us replace this callbacks with promises >>>>>>>>>>

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

    //? Here we made a promise..
    return new Promise((resolve, reject) => {
        console.log("Registration Started");
        setTimeout(function() {
            let requestStatus = true;
            // let requestStatus = false;
            if (requestStatus) {
                students.push(newSt);
                console.log(`Students have been enrolled..`);
                resolve();
            } else {
                reject(new Error("SomeThing went wrong..."));
            }
        }, 5000);
    });
}

// Our new DATA...
let newStudent = {
    name: "Sunny",
    course: "Python",
};

enrollStudent(newStudent)
    .then(() => {
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
    })
    .catch(err => {
        try {
            throw err;
        } catch (error) {
            console.log(error);
        }
    });