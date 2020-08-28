/* 
$ Iterables >>>
  Iterable objects is a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

  Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

  If an object isn’t technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it, so let’s see how to make it work.

  >> ES6 introduces a new mechanism for traversing data: iteration. Two concepts are central to iteration:
     -> An iterable is a data structure that wants to make its elements accessible to the public. It does so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators.

     -> An iterator is a pointer for traversing the elements of a data structure (think cursors in databases)

  >> The following values are iterable:
     -> Arrays
     -> Strings
     -> Maps
     -> Sets
     -> DOM data structures (work in progress)
     -> Plain objects are not iterable.(but we can iterate them by using custom iterators)

  >> The idea of iterability is as follows.
     -> Data consumers: JavaScript has language constructs that consume data. For example, for-of loops over values and the spread operator (...) inserts values into Arrays or function calls.

     -> Data sources: The data consumers could get their values from a variety of sources. For example, you may want to iterate over the elements of an Array, the key-value entries in a Map or the characters of a string.

  $ My Definition:
    * An iterable is a data structure that allows us to traverse through its data..
    * An iterator is function through which we can traverse through that iterable data Structure.
    * We can define our own iterator through which we can iterate through the data structure on our own terms..
*/
/* 
>> Lets take a easy example.. for making our own iterator..
// range object that represents an interval of numbers:
let range = {
    from: 1,
    to: 5,
};
// We want the for..of to work: like-->
// for(let num of range) ... num=1,2,3,4,5
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}
//! OUTPUT--> TypeError: range is not iterable

>> To make the range iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

>> When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.

>> Onward, for..of works only with that returned object.

>> When for..of wants the next value, it calls next() on that object.

>> The result of next() must have the form {done: Boolean, value: any}, where done=true means that the iteration is finished, otherwise value is the next value.
*/
let range = {
    from: 1,
    to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        },
    };
};

//-> now it works! now on using for...of loop with range object internally our custom iterator will use..
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}
/* 
NOTE: Please note the core feature of iterables: separation of concerns.
  -> The range itself does not have the next() method.
  -> Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.
  * So, the iterator object is separate from the object it iterates over.
*/

// Technically, we may merge them and use range itself as the iterator to make the code simpler.
let range1 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    },
};

for (let num of range1) {
    console.log(num); // 1, then 2, 3, 4, 5
}
// -> Now range[Symbol.iterator]() returns the range object itself: it has the necessary next() method and remembers the current iteration progress in this.current. Shorter? Yes. And sometimes that’s fine too.

//$ Infinite Iterators
//--> Infinite iterators are also possible. For instance, the range becomes infinite for range.to = Infinity. Or we can make an iterable object that generates an infinite sequence of pseudorandom numbers. Also can be useful.

//--> There are no limitations on next, it can return more and more values, that’s normal.

//--> Of course, the for..of loop over such an iterable would be endless. But we can always stop it using break.

//$ String is iterable
for (let char of "test") {
    // triggers 4 times: once for each character
    console.log(char); // t, then e, then s, then t
}

// And it works correctly with surrogate pairs!

let str = "𝒳😂";
for (let char of str) {
    console.log(char); // 𝒳, and then 😂
}

//$ Calling an iterator explicitly>>
// We’ll iterate over a string in exactly the same way as for..of, but with direct calls. This code creates a string iterator and gets values from it “manually”:

let str1 = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str1[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}

/* 
$$ Iterables and array-likes:
   There are two official terms that look similar, but are very different. Please make sure you understand them well to avoid the confusion.

   -> Iterables are objects that implement the Symbol.iterator method, as described above.
   -> Array-likes are objects that have indexes and length, so they look like arrays.

   -> For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).

   -> But an iterable may be not array-like. And vice versa an array-like may be not iterable.

   And here’s the object that is array-like, but not iterable:
   let arrayLike = { // has indexes and length => array-like
     0: "Hello",
     1: "World",
     length: 2
   };
   // Error (no Symbol.iterator)
   for (let item of arrayLike) {}

   >> Solution: Array.from
      There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.
      let arrayLike = {
        0: "Hello",
        1: "World",
        length: 2
      };
      
      let arr = Array.from(arrayLike); // (*)
      alert(arr.pop()); // World (method works)
*/

// Iterable-Examples:
/* 
$ Built-in iterables: 
  String, Array, TypedArray, Map, and Set are all built-in iterables, because each of their prototype objects implements an @@iterator method.

$ User-defined iterables: You can make your own iterables like this:
  let myIterable = {};
  myIterable[Symbol.iterator] = function* () {
      yield 1;
      yield 2;
      yield 3;
  };
  console.log([...myIterable]); // [1, 2, 3]


$ Built-in APIs accepting iterables:
  There are many APIs that accept iterables. Some examples include:
   -> new Map([iterable])
   -> new WeakMap([iterable])
   -> new Set([iterable])
   -> new WeakSet([iterable])

    new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"
    
    let myObj = {};
    
    new WeakMap([
        [{}, 'a'],
        [myObj, 'b'],
        [{}, 'c']
    ]).get(myObj);             // "b"
    
    new Set([1, 2, 3]).has(3); // true
    new Set('123').has('2');   // true
    
    new WeakSet(function* () {
        yield {} 
        yield myObj 
        yield {} 
    }()).has(myObj);           // true
   
   ALSO:
   -> Promise.all(iterable)
   -> Promise.race(iterable)
   -> Array.from(iterable)
*/