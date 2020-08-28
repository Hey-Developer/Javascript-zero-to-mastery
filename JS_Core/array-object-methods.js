// * Array Methods-->

/* 
$ concat() method:
  the concat() method is used to merge two or more arrays.
  This method does not change the existing arrays,but instead returns a new array.
  > Syntax 1: new_array=old_array.concat(value1,value2,value,n)
  > Syntax 2: new_array=old_array1.concat(old_)array2,old_array_n)
*/
console.log("-------------------------concat()------------------------");
// Syntax-1
var geek = ["Rahul", "Sonam", "Sumit"];
var new_geek = geek.concat("Rohan", "Cnu"); // this will concat these two properties into the existing array and then assign that existing array into new array:

console.log(geek);
console.log(new_geek);

// Syntax-2
var geek1 = ["cnu", "shraddha", "Jaan", "Mylifeline"];
var geek2 = ["ourhouse", "marriage", "worldtour", "babygirl"];
var cloves = geek1.concat(geek2);

console.log(cloves);

// Merging more than two array
var mixed = geek2.concat(geek1, new_geek);
console.log(mixed);
// Arrange the array as per your requirements of order of values:
/* 
$ join() method-->
  The join() method joined the elements of array into single string 
  * and returns the string.
  The elements will be separated by a specified separator.
  The default separator is comma(,)
  > Syntax: array_name.join(separator) ;
 */
console.log("----------------------------join()---------------------------");

var nameList = ["Rahul", "Sonam", "Sumit", "Dhanvi", "Prachi"];
var arrayToString = nameList.join(" & ");

console.log("Array nameList:");
console.log(nameList);
console.log("nameList toString: " + arrayToString);
console.log("return typeof join(): " + typeof arrayToString);

console.log("----------------------------reverse()---------------------------");
/* 
$ reverse() method:
  the reverse() method reverses the order of the elements in the array.
  > Syntax: array_name.reverse();
*/
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Orignal array: " + num);
console.log("Reversed array: " + num.reverse());

console.log("----------------------------slice()---------------------------");
/* 
$ slice() method:
  The slice() method slices out a piece of an array into a new array.
  The slice() method returns a shallow copy of a portion of an array into a new array object,
  selected from begin to end(end not included),
  the original array will not be modified
  return a new array.
  > Syntax: array_name.slice(start,end);
  Start:
  ~ if begin is undefined, slice begin from index 0.
  ~ if begin is greater than the length of the sequence,an empty array will be returned.
  ~ a negative index can be used,indicating an offset from to end of sequence.
    - slice(-2) means extracts the last two elements from the sequence.
  
  End:
  ~ if end is omitted, slice extracts through the end of the sequence(arr.length).
  ~ if end is greater than the length of the sequence, slice extracts through to end of the sequence(arr.length).
  ~ a negative index can be used, indicating an offset from the end of the sequence.
    - slice(2,-1) means extracts the third element through the second-to-last elements in the sequence.
*/

/*
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                [0]        [1]      [2]      [3]     [4] 
                [-0]       [-1]     [-2]     [-3]    [-4]
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //from index 1 to index 2, 3 is not included: i.e fruits[1],fruits[2] will be slice out and get stored in new array:
console.log("Array Fruits:");
console.log(fruits);
console.log("NEw array citrus:slice(1,3)");
console.log(citrus);

// If begin is undefined-->
var citrus = fruits.slice(undefined, 4); // slice out last three elements
console.log("NEw array citrus:slice(undefined,4)");
console.log(citrus);

// Providing start: negative index
var citrus = fruits.slice(-4, 4); // slice start index from last:
console.log("NEw array citrus:slice(-4,4)");
console.log(citrus);

// if start is greater than the length of the sequence:
var citrus = fruits.slice(5, 4);
console.log("NEw array citrus:slice(5,4)"); //empty array
console.log(citrus);

// end is omitted:
var citrus = fruits.slice(3);
console.log("NEw array citrus:slice(3)"); //from index to fruits.length
console.log(citrus);

// if End is larger that the length of sequence:
var citrus = fruits.slice(1, 5);
console.log("NEw array citrus:slice(1,5)"); //from index [1] to fruits.length
console.log(citrus);

// if end is negative:
var citrus = fruits.slice(1, -2);
console.log("NEw array citrus:slice(1,-2)"); //from index [1] to last two elements:
console.log(citrus);

console.log(
    "----------------------------toString()---------------------------"
);
/* 
$ toString() method:
  The toString() method is used for converting and representing an array into string form. 
  It returns the string containing the specified array elements. 
  Commas separate these elements, and the string does not affect the original array.
  > Syntax: array_name.toString() // without any parameters
  ~ this method is equivalent to join() method but only difference is it doesn't accept param
  * This method invokes automatically when u print an array.
 */

console.log(fruits.toString());

console.log("----------------------------isArray()---------------------------");
/* 
$ isArray() method:
  The isArray() method is used to test whether the value passed is an array. 
  If it finds the passed value is an array, it returns True. 
  Otherwise, it returns False.
  > Syntax: Array.isArray(obj_value);  
  
  obj_value: It is the value of the object which is passed for determining whether,
  it is an array or not.
 */

console.log("Fruits[] is array or not" + Array.isArray(fruits));
console.log(Array.isArray("i am a array:"));

console.log("----------------------------splice()---------------------------");
/* 
$ splice() method:
  The slice() method changes the contents of an array by removing existing elements and/or adding new elements.
  This method changes the original array.
  > Syntax: array_name.splice(start,deleteCount,replacevalues)

  Start:(* Mandatory)
  ~ the first argument start specifies at what position to add/remove items,
  ~ use negative values to specify the position from the end of the array
  ~ it will start from this index:

  Deletcount:
  ~ The second argument deleteCount, is the number of elements to delete beginning with index start.

  replaceValues:
  ~ replaceValues are inserted in place of the deleted elements. if more than one separate it by comma
 */

var employee = [
    "Mr.Cnu",
    "Mr.Punit",
    "Mr.kishan",
    "Miss.Shivani",
    "Miss.Neha",
    "Mr.Nishant",
    "Mr.charlie",
];

console.log(employee);

//  remove elements fom the array:
// console.log(
//     "Remove all juniors developer from my company: employee.splice(3) "
// );
// employee.splice(3); // remove all the elements from index 2-->
// console.log(employee);

console.log(
    "Remove 2 juniors developer from my company: employee.splice(3,2) "
);
employee.splice(3, 2); // remove 2 elements from index 3-->
console.log(employee);

// Adding elements in the array
console.log(
    "Hey!! recruit 2 junior developer in my company: employee.splice(3,0,Mr.Anuj,Mr.Harshit) "
);
employee.splice(3, 0, "Mr.Anuj", "Mr.Harshit"); //add 2 elements from index 3-->deleteCount is 0 because we are not deleting anything
console.log(employee);

console.log(
    "Hey!! Give the post of Vice-president to my wife in my company: employee.splice(1,0,Miss.Shraddha) "
);
employee.splice(1, 0, "Miss.Shraddha"); //add 1 elements from index 1-->deleteCount is 0 because we are not deleting anything
console.log(employee);

// Removing and adding elements simultaneously:
console.log(
    "Hey!! one senior developer is not doing his job properly remove him and recruit someone on his post: employee.splice(3,1,Mr.Moin) "
);
employee.splice(3, 1, "Mr.Moin"); //add 1 elements from index 2-->deleteCount is 1 hence delete 1 element from index 2:
console.log(employee);

console.log("----------------------------indexOf()---------------------------");

/* 
$ indexOf() method:
  The JavaScript array indexOf() method is used to search the position of a particular element in a given array. 
  This method is case-sensitive.
  > Syntax:  var position=array_name.indexOf(item,start)
  ~ if the item is not found it returns -1.
  ~ The search will start at the specified position, 
    or at the beginning if no start position is specified, and end the search at the end of the array.
  ~ if the item is present more than once, the indexOf() returns the position of the first occurrence.
  
 */

var nameList = [
    "Rahul",
    "Sonam",
    "Sumit",
    "Rahul",
    "Shruti",
    "Rishabh",
    "Sonam",
];

console.log(nameList);

// Searching elements which is not present in the array
console.log(
    "Search for index of jyoti: " +
    nameList.indexOf("jyoti") +
    ", item is not present"
);

// Search start from specified index-->
// this is use when we know that our item which we are searching is found only after a certain index hence we specify the index from where to start searching, this reduces our time complexity
console.log(
    "Search for index of Shruti: " + "[" + nameList.indexOf("Shruti", 3) + "]"
);

// If we didnt specify index then it will search from 0 index to end:
console.log(
    "Search for index of Rishabh: " + "[" + nameList.indexOf("Rishabh") + "]"
);

// if the item is present more than once-->
console.log(
    "Search for index of Sonam: " + "[" + nameList.indexOf("Sonam") + "]"
);

console.log("----------------------------fill()---------------------------");
/* 
$ fill() method:
  The JavaScript array fill() method fills the elements of the given array with the specified static values. 
  This method modifies the original array. 
  > Syntax: array_name.fill(value,start,end)
  
  ~ start - It is optional. It represents the index from where the value starts filling. By default, it is 0.
  ~ end - It is optional. It represents the index where the value stops filling. By default, it is length-1.
     end specified is not included
  ~ It returns undefined, if no element satisfies the condition.
 */

console.log("Original Array: " + nameList);
console.log("lets change the value of array");
console.log("put static value Dell-->" + nameList.fill("Dell", 4));

// Filling empty array:
var shraddha = new Array(5);
console.log("Empty array Shraddha: ");
console.log(shraddha);
// filling array
shraddha.fill("I love You");
console.log("Filling shraddha-->");
console.log(shraddha);

console.log("----------------------------unshift()---------------------------");
/* 
$ unshift() method:
  The JavaScript array unshift() method adds one or more elements in the beginning of the given array, 
  and returns the length of the resulting array.
  this method changes the length of array.
  > Syntax: array_name.unshift(value1,value2,value_n);

 */
//  Adding elements in the array beginning-->
console.log(" Array  length before invoking unshift():" + shraddha.length);
console.log(shraddha);
var new_length = shraddha.unshift("Mylifeline", "myWife");
console.log(" Array length after invoking unshift(): " + new_length);
console.log(shraddha);

console.log("----------------------------push()---------------------------");
/* 
$ push() method:
  The JavaScript array push() method adds one or more elements to the end of the given array. 
  and returns the new length of array.
  This method changes the length of the original array.
  > Syntax: array_name.push(value1,value2,value...n)
 */

console.log("Orignal array with length: " + nameList.length);
console.log(nameList);
// Adding elements from the array end
var new_length = nameList.push("Sonam", "Sumit");
console.log("modified array with length: " + new_length);
console.log(nameList);

console.log("----------------------------shift()---------------------------");
/* 
$ shift() method:
  The JavaScript array shift() method removes the first element of the given array,
  and returns that removed element.
  This method changes the length of the original array. also modified the array
  > Syntax: array_name.shift()
 */

var arr = ["AngularJS", "Node.js", "JQuery"];
console.log("My Array:");
console.log(arr);

console.log("removing its first element--");
var result = arr.shift();

console.log("Removed Element: " + result);
console.log("Updated Array:");
console.log(arr);

console.log("----------------------------pop()---------------------------");
/* 
$ pop() method:
  The JavaScript array pop() method removes the last element from the given array, 
  and return that removed element. 
  This method changes the length of the original array.
  > Syntax: array_name.pop();
 */

console.log("Orignal array with length: " + nameList.length);
console.log(nameList);
// Remove elements from the array end
var element = nameList.pop();
console.log("Removed elements from the end: " + element);
console.log("modified array with length: " + nameList.length);
console.log(nameList);

/* 
$ All the methods--> of Array
> concat()	                It returns a new array object that contains two or more merged arrays.
> copywithin()	            It copies the part of the given array with its own elements and returns the modified array.
> entries()	                It creates an iterator object and a loop that iterates over each key/value pair.
> every()	                  It determines whether all the elements of an array are satisfying the provided function conditions.
> flat()	                  It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
> flatMap()	                It maps all array elements via mapping function, then flattens the result into a new array.
> fill()	                  It fills elements into an array with static values.
> from()	                  It creates a new array carrying the exact copy of another array element.
> filter()	                It returns the new array containing the elements that pass the provided function conditions.
> find()	                  It returns the value of the first element in the given array that satisfies the specified condition.
> findIndex()	              It returns the index value of the first element in the given array that satisfies the specified condition.
> forEach()	                It invokes the provided function once for each element of an array.
> includes()	              It checks whether the given array contains the specified element.
> indexOf()	                It searches the specified element in the given array and returns the index of the first match.
> isArray()	                It tests if the passed value ia an array.
> join()          	        It joins the elements of an array as a string.
> keys()          	        It creates an iterator object that contains only the keys of the array, then loops through these keys.
> lastIndexOf()   	        It searches the specified element in the given array and returns the index of the last match.
> map()           	        It calls the specified function for every array element and returns the new array
> of()            	        It creates a new array from a variable number of arguments, holding any type of argument.
> pop()	                    It removes and returns the last element of an array.
> push()          	        It adds one or more elements to the end of an array.
> reverse()       	        It reverses the elements of given array.
> reduce(function, initial)	It executes a provided function for each value from left to right and reduces the array to a single value.
> reduceRight()	            It executes a provided function for each value from right to left and reduces the array to a single value.
> some()	                  It determines if any element of the array passes the test of the implemented function.
> shift()	                  It removes and returns the first element of an array.
> slice()	                  It returns a new array containing the copy of the part of the given array.
> sort()	                  It returns the element of the given array in a sorted order.
> splice()	                It add/remove elements to/from the given array.
> toLocaleString()	        It returns a string containing all the elements of a specified array.
> toString()	              It converts the elements of a specified array into string form, without affecting the original array.
> unshift()	                It adds one or more elements in the beginning of the given array.
> values()	                It creates a new iterator object carrying values for each index in the array.
 */