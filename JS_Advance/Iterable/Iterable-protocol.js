/* 
$ The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for...of construct. 

>> Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

>> In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant [Symbol.iterator]:

  -> [Symbol.iterator] : A zero-argument function that returns an object, conforming to the iterator protocol.

>> Whenever an object needs to be iterated (such as at the beginning of a for...of loop), its @@iterator method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.

>> Note that when this zero-argument function is called, it is invoked as a method on the iterable object. Therefore inside of the function, the this keyword can be used to access the properties of the iterable object, to decide what to provide during the iteration.


$$ THE Iterator Protocol: 
>> The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
c./
>> An object is an iterator when it implements a next() method with the following semantics:

  -- next()
     A zero-argument function that returns an object with at least the following two properties:

     -> done (boolean)
        ~ Has the value false if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the done property altogether.)

        ~ Has the value true if the iterator has completed its sequence. In this case, value optionally specifies the return value of the iterator.

     -> value
        Any JavaScript value returned by the iterator. Can be omitted when done is true.

  -- The next() method must always return an object with appropriate properties including done and value. If a non-object value gets returned (such as false or undefined), a TypeError ("iterator.next() returned a non-object value") will be thrown.
*/

// Examples using the iteration protocols:

// >> A String is an example of a built-in iterable object:

let someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"

// >> String's default iterator returns the string's code points one by one:

let iterator = someString[Symbol.iterator]();
console.log(iterator + ""); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// >> You can redefine the iteration behavior by supplying our own @@iterator:

// need to construct a String object explicitly to avoid auto-boxing
let someString = new String("hi");

someString[Symbol.iterator] = function() {
    return {
        // this is the iterator object, returning a single element (the string "bye")
        next: function() {
            return this._first ?
                {
                    value: "bye",
                    done: (this._first = false),
                } :
                {
                    done: true,
                };
        },
        _first: true,
    };
};

console.log([...someString]); // ["bye"]
console.log(someString + ""); // "hi"

/* 
The following ES6 language constructs make use of the Iterable:

>> Destructuring via an Array pattern
>> for-of loop
>> Array.from()
>> Spread operator (...)
>> Constructors of Maps and Sets
>> Promise.all(), Promise.race()
>> yield*

*/