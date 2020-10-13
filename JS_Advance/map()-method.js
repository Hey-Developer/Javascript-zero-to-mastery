/* 
$ Map() Method:
  The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  map calls a provided callback function once for each element in the array, in order and returns a new array from the results.
  Syntax-
  > map(callback(currentValue,index,array),thisArg)

*/

var arr = [10, 20, 30, 40, 50, 60];
var newArr = arr.map(function(value, i) {
    value++;
    return value;
});
console.log(`old array ${arr}`);
console.log(`New array ${newArr}`);