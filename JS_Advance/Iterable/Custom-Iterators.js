/* 
>> Through Symbol.iterator we do some modifications with the default iterator of for...of loop

>> But we have a also have a way by which we can write our own iterator function with vanilla js using Iteration_protocols.

>> SO let's get into some theory..
   -> Processing each of the items in a collection is a very common operation. JavaScript provides a number of ways of iterating over a collection, from simple for loops to map() and filter().

   -> Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

$$ Iterators:
   >> In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.
   >> Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:
      -> value: The next value in the iteration sequence.
      -> done: This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
   >> Once created, an iterator object can be iterated explicitly by repeatedly calling next().

   >> The most common iterator in JavaScript is the Array iterator, which simply returns each value in the associated array in sequence.
*/

// Here is an example which can do just that. It allows creation of a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart. Its final return value is the size of the sequence it created, tracked by the variable iterationCount.
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        },
    };
    return rangeIterator;
}

// Using the iterator then looks like this:
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]