/* 
$ So what we learn till now..
  -> we learn What is iterable..
  -> What is iterator.
  -> How to define custom iterator.
  -> Pre-Defined Iterables.
  -> How to iterate over a non-iterable. USing custom iterator.
  ? But did We Learn how to create userDefined Iterable..
    No, So lets learn..

  >> So a user defined iterable on which we can iterate using pre-defined iterator such as for...of or we can create custom iterator. and iterate over them..

  >> How?? --> Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

  >> So Using A Generator function i can create my own iterable..

  >> lets take a scenario.. to understand where are these Generators are useful:
  -> U Have to create an array which store 1B values and whenever user wants any value he can extract that value from array.
  -> But the problem is that 1B values take so many storage in the system and we only require one or two at a time.. so how to get rid of this storage problem..
  -> What if we just create the value which user want on the spot.. 
  -> This is good in this way we are not storing values we just create them on the fly whenever user needs it..

$$ Generators Functions:
   -- Syntax: function* fn_Name(){}
   -- yield: is an operator with which a generator can pause itself.. Additionally, generators can also receive input and send output via yield.
  EX>>
*/
function* genNumbers(start = 0) {
    let i = start;

    while (true) {
        yield i++;
    }
}

// >> AND the you knw this generator is itself is an iterator that is we can use next() method to iterate over the next values..
const gen = genNumbers(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/* 
>> When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator.

>> When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

>> The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

*/
//$ User-defined iterables
let myIterable = {};
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]

/* 
$$ There are four kinds of generators:

--1. Generator function declarations:
     function* genFunc() { ··· }
      const genObj = genFunc();

--2. Generator function expressions:
     const genFunc = function* () { ··· };
      const genObj = genFunc();

--3. Generator method definitions in object literals:
     const obj = {
          * generatorMethod() {
              ···
          }
      };
      const genObj = obj.generatorMethod();

--4. Generator method definitions in class definitions:
     class MyClass {
          * generatorMethod() {
              ···
          }
      }
      const myInst = new MyClass();
      const genObj = myInst.generatorMethod();

*/

function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) {
    console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it[Symbol.iterator] = function*() {
    yield 2;
    yield 1;
};

/* 
$ Advanced generators:
  Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute (or even infinite sequences, as demonstrated above).

  * The next() method also accepts a value, which can be used to modify the internal state of the generator. A value passed to next() will be received by yield .

  Note: A value passed to the first invocation of next() is always ignored.

*/
// Here is the fibonacci generator using next(x) to restart the sequence:

unction * fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        let reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2