// $ Iterators >>>>
const myArray = ["Apples", "Bananas", "Oranges", "Cherry"];

// Iterator fn--> for ARRAY
function fruitsIterator(val) {
    let nextIndex = 0;
    // We Will return object-->
    return {
        next: function() {
            if (nextIndex < val.length) {
                // We Will return below object -->
                return {
                    value: val[nextIndex++],
                    done: false,
                };
            } else {
                // We Will return below object -->
                return {
                    done: true,
                };
            }
        },
    };
}

// Using An Iterator-->
const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());