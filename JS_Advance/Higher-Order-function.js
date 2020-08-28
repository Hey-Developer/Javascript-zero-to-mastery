/* 
$ A function which takes anothe function as argument or returning a function is known as Higher Order functions.
*/
const interviewQue = name => {
    if (name.toLowerCase() === "cnu") {
        return topic => {
            console.log(`Hii ${name}, What is ${topic} Explain?`);
        };
    } else if (name.toLowerCase() === "punit") {
        return topic => {
            console.log(`Hii ${name}, What is ${topic} Explain?`);
        };
    } else if (name.toLowerCase() === "shivani") {
        return topic => {
            console.log(`Hii ${name}, What is ${topic} Explain?`);
        };
    } else {
        console.log(`Sorry You r Not ShortListed`);
    }
};

interviewQue("cnu")("JS closure");
interviewQue("punit")("JS Promises");
interviewQue("shivani")("JS Async/await");

// Here interviewQue() is a Higher Order Function