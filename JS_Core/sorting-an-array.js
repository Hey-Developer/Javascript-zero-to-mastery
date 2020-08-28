console.log("----------------------------sort()---------------------------");
/* 
$ sort() method: 
  The sort() method sorts an array alphabetically:
  > Syntax: array_name.sort();
  ~ it returns the sorted array.
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Unsorted Array:");
console.log(fruits);
console.log("Sorted Array:");
console.log(fruits.sort()); // Sorts the elements of fruits

console.log(
    "----------------------------sort(function(a,b){return a-b/b-a})---------------------------"
);

/* 
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

$ sort(function (a, b) {}) method:
  The purpose of the compare function is to define an alternative sort order.
  It returns the sorted array.
  it changes the original array:
  > compare function--> function(a, b){return a - b}

  here a and b are the two values of the array to be sorted from index 0.
  ~ When the sort() function compares two values, it sends the values to the compare function, 
     and sorts the values according to the returned (negative, zero, positive) value.
  ~ If the result is negative a is sorted before b. // negative value comes when b is greater than a
  ~ If the result is positive b is sorted before a. // positive value comes when a is greater than b
  ~ If the result is 0 no changes are done with the sort order of the two values. // both a and b are equal:
 */
var points = [40, 100, 1, 5, 25, 10];
console.log("Unsorted Array:");
console.log(points);
console.log("Sorted Array in ascending order:");
console.log(
    points.sort(function(a, b) {
        return a - b;
    })
);
console.log("Sorted Array in descending order:");
console.log(
    points.sort(function(a, b) {
        return b - a;
    })
);

// Sorting an Array in Random Order--> function(a,b){return 0.5 -Math.random()};

console.log("Sorted Array in random order:");
console.log(
    points.sort(function(a, b) {
        return 0.5 - Math.random();
    })
);

console.log(
    "----------------------------The Fisher Yates Method---------------------------"
);
/* 
The above example, array.sort(), is not accurate, it will favor some numbers over the others.

The most popular correct method, is called the 
$ Fisher Yates shuffle, and was introduced in data science as early as 1938!
 */
var points = [40, 100, 1, 5, 25, 10];
console.log(points);
for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = points[i];
    points[i] = points[j];
    points[j] = k;
}
console.log("Randomly sorted arraY:");
console.log(points);

console.log(
    "----------------------------Highest and Lowest value of Array---------------------------"
);

/* 
Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.
However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
> Sorting ascending: and the last value  of the array is highest and the first value is lowest-->
> Sorting descending: and the last value of the array is the lowest and the first value is the highest-->
 */
var points = [40, 100, 1, 5, 25, 10];
console.log("My Array");
console.log(points);
points.sort(function(a, b) {
    return a - b;
});

console.log("Highest Value: " + points[points.length - 1]); // and points[points.length-1] contains the highest value
console.log("Lowest Value: " + points[0]); // now points[0] contains the lowest value

console.log(
    "Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value."
);
// Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

console.log(
    "----------------------------Highest and Lowest value of Array Using Math.max and Math.min---------------------------"
);
/* 
$ So we we can use  Math.min and Math.max function to find the lowest and highest.
 */
//  You can use Math.max.apply to find the highest number in an array:

var myArray = [10, 09, 89, 76, 50, 34, 54, 61, 100];
console.log("My Array:");
console.log(myArray);

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log("Highest Values: " + myArrayMax(myArray));

//~ Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

// You can use Math.min.apply to find the lowest number in an array: