/* 
$ DESTRUCTURING-->
  It is a convenient way of extracting multiple values from data stored in objects and arrays. 
  The destructuring assignment syntax is a JS expression that makes it possible to unpack values form arrays or properties from objects, into distinct variable:
*/

//# Array Destructuring-->
var arr = ["JavaScript", "SixMonths", "YouTube"];
//> To access arrays(old process);
var courseName = arr[0];
var duration = arr[1];
var source = arr[2];
console.log(`${courseName} for ${duration} from ${source}`);

//> New Way: Array Destructuring-->
var [courseName, duration, source] = arr;
// LHS of the assignment to define what values to unpack from the sourced variable.
console.log(`${courseName} for ${duration} from ${source}`);

// The value from source is assigned on the basis of index or position.
// for ex: 0 index value of the array will assign to the first position of the LHS variable.

//? EX-2: accessing random values from the array;
var [courseName, , source] = arr;
// Leave the position empty for the element which u don't want to access from array:

var arr2 = [1, 2, 3];
var a, b, c, d;
[a, b] = arr2; // destructuring array first two elements.

// > Default values:
[a, b, c, d = "10"] = arr2; // in arr2 there is no 4th element hence a default value is used ie d=10;
console.log(a, b, c, d);

//# Array Passing to a function-->

var arr3 = [10, 20, 30];
let show = ([v1, v2, v3]) => {
    console.log(v1, v2, v3);
};
show(arr3);

//? What we do if we  have n no of elements-->

let arr4 = [];
for (let index = 1; index <= 50; index++) {
    // Even numbers from 1 to 50;
    if (index % 2 == 0) {
        arr4.push(index);
    }
}

// A function to  create addition of all even numbers from 1 to 50;
let addEven = ([value1, value2, ...rest]) => {
    console.log(value1);
    console.log(value2);
    console.log(rest);

    console.log(`Sum of all even numbers-->`);
    let sum = value1 + value2;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    console.log(sum);
};
addEven(arr4);

//# Destructuring a array which is returning from a function;
var arr5 = [10, 20, 30, 40, 50, 60];
var [v1, v2, v3, v4, v5, v6] = arr5.map(function(value) {
    value++;
    return value;
});
console.log(v1, v2, v3, v4, v5, v6);

//# Nested Array Destructuring-->
var arr6 = ["JavaScript", "2 Months", "Youtube", ["Rahul", "Sonam"]];
// OLD_WAY-->
console.log(arr6[0]);
console.log(arr6[1]);
console.log(arr6[2]);
console.log(arr6[3][0]);
console.log(arr6[3][1]);

// NEW_WAY-->
var [courseName, duration, source, [st1, st2]] = arr6;
console.log(courseName, duration, source, st1, st2);