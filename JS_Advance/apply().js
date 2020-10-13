/* 
$ The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

>> This apply() method is totally same as call() method that is purpose of both the methods is same that is to change the context of 'this' keyword inside a method/function..

>> Syntax: 
   -> func.apply(thisArg, [ argsArray])
      
      -- thisArg: The value of this provided for the call to func.

      -- argsArray (Optional): An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function.

      -- The result of calling the function with the specified this value and arguments.

Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments

>> Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a length property, and integer ("index") properties in the range (0..length - 1). For example, you could use a NodeList, or a custom object like { 'length': 2, '0': 'eat', '1': 'bananas' }.

>> Now u guys thinking where we can use apply() if we have cell()--

*/

//$ Using apply to append an array to another.
//-> You can use push to append an element to an array. And, because push accepts a variable number of arguments, you can also push multiple elements at once.
//-> But, if you pass an array to push, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//$ Using apply and built-in functions:
//-> Clever usage of apply allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

//-> As an example, here are Math.max/Math.min, used to find out the maximum/minimum value in an array.
//-> We know that if we have to find a max no in an array then we have to loop through it..
//-> Also we have a maths method to find max between numbers.But the problem is that it didn't accept array>> then ??

//>> min/max number in an array
const numbers = [5, 6, 2, 3, 7];

//>> using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

//>> vs. simple loop based algorithm
(max = -Infinity), (min = +Infinity);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

//! But beware: by using apply this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded argument limit of 65536.

//* In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.