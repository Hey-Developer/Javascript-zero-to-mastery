/* 
$ Functions is a First Class Citizens:
  >> A programming language is said to have First-class fn when fn in that language are treated like any other variable.
*/

//->IN JS we can assign a function to a variable.
const heyCnu = function() {
    console.log("Hello Cnu..");
};
heyCnu();

//-> A function can be passed as a argument..
const myName = (callback, name) => {
    console.log(`Hello! ${name}`);
    callback(name);
};

const greetings = n => {
    console.log("Good AfterNoon how are You..😄😄 ${n}");
};

myName(greetings, "Cnu"); // passing function as a argumnet

//-> A function can return a function..
function a() {
    console.log("Hello i am a()");
    return function() {
        console.log("Hello i am b() retuning from a()");
    };
}

//* To call the inside fn
a()();
// OR
const c = a(); // return b() get stored in c;
c();

// IF any function follows all the above specification it is said that the function is a First Class Citizens..