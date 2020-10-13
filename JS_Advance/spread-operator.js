/* 
$ Spread operator:
  Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
  > Syntax: (...)
    -- When spread operator used as arguments in function parameters then it means it is array which can accept one or more arguments.
    
    -- When use with array or object it help us to iterate through the array/object and give us its values;
       for ex: you know that in JS array and object are reference type i.e
       when we do like this-->
       var a=[10,02,03];
       var b=a;
       Here a is not copied in b instead reference of a is copied to b, i.e when u do some changes in a they will also reflect in b;
       Here to avoid these we can use spread operator>
       var b=[...a]
       These will get each values of array a into b;

*/
var a = [10, 20, 30];
var b = [...a];
// These change in a will not reflect in b;
a[0] = 1;
console.log(a);
console.log(b);

var c = [1, 2, 3, 4];
var d = [...c, 5, 6, 7, 8, 9];
console.log(c);
console.log(d);

//> Concat using spread operator-->
var e = [...c, ...d];
console.log(e);

var obj1 = {
    name: "JS",
    tutor: "YT",
};

var obj2 = obj1;
obj1.tutor = "YouTube";
// These change will reflect in both the objects.
console.log(obj1);
console.log(obj2);

// Solution--> Spread operator;
var objClone = {...obj1 };
objClone.name = "PHP";
console.log(obj1);
console.log(objClone);

// Merge  Objects;
var o1 = {
    name: "CNU",
    rollNo: 25,
};
var o2 = {
    course: "MIT",
};
var student = {...o1, ...o2 };
console.log(student);