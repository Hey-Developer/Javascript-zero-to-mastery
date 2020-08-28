/* 
$ Automatically Invoking Function
? Immediately Invoked Function Expression(IIFE)
    >Its a JS function that runs as soon as it defined.
    >Self-Executing Anonymous Function 
    >Contains two major part:
        ~The First is anonymous function with lexical scope enclosed with grouping operator().
        ~The Second part is creating the immediately executing function expression()
    (function() {console.log("HII");})();
    Advantage og IIFE-->
        >Avoid creating global variable and functions
        >as it does not define variable and function globally so there will be no name conflicts
        >Scope is limited to that particular function
 */

(function() {
    console.log("Hii I am anonymous");
})();

(function() {
    var a = 10; // Cannot used outside this function
    console.log(a);
})();
// console.log(a); //! Uncaught reference error: a is not defined

(function(a, b) {
    console.log(a + b);
})(10, 80);

console.log(
    (function(a, b) {
        return a + b;
    })(10, 10)
);