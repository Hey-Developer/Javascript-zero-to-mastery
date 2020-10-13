/* 
$ In JS There are two types of DataTypes:
  >> Primitives (number,boolean,string)
  >> Objects(functions,object literal,array)

* One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.

* Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.
*/

// For instance:
let message = "Hello World";
let phrase = message;
// Here when we copy message into phase then it is copied by value it means here a separate memory is created of phrase in which string "Hello Worlds" is stored that means we have two variables message and phrase which points two different memory locations each locations contains a value "Hello World"
console.log(message);
console.log(phrase);

// Two proof that they both points two different memory locations-->
// if we do some changes in with phrase variable then the changes will not reflect in message variable.
phrase = "Hello Cnu";

console.log(message); //Hello World
console.log(phrase); // Hello Cnu

// $ Objects are not like that.
let user = {
    name: "John",
};
//-> Here, the object is stored somewhere in memory. And the variable user has a “reference” to it.

//-> When an object variable is copied – the reference is copied, the object is not duplicated.

let user = { name: "John" };

let admin = user; // copy the reference

// This means that here admin will not point out some different memory location instead it will pint out the same memory location as user variable is pointing..
//* Now we have two variables, each one with the reference to the same object:
console.log(user);
console.log(admin);

//* If we do some changes using admin variable the changes will reflect in the user variable value bcoz they both are pointing the same value..We can use any variable to access the object and modify its contents:

admin.name = "Cnu"; //  changed by the "admin" reference
console.log(user.name); // 'Pete', changes are seen from the "user" reference

//$ So, copying an object variable creates one more reference to the same object.
// But what if we need to duplicate an object? Create an independent copy, a clone?
// That’s also doable, but a little bit more difficult, because there’s no built-in method for that in JavaScript. Actually, that’s rarely needed. Copying by reference is good most of the time.
// But if we really want that, then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

//>> WAY ONE:
let user = {
    name: "John",
    age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

//>> WAY TWO: Also we can use the method Object.assign for that.
//-> Object.assign(dest, [src1, src2, src3...])
//-- The first argument dest is a target object.
//-- Further arguments src1, ..., srcN (can be as many as needed) are source objects.
//-- It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
//-- The call returns dest.

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

//-> If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

//-> We also can use Object.assign to replace for..in loop for simple cloning:

let user = {
    name: "John",
    age: 30,
};

let clone = Object.assign({}, user);

//$ Nested cloning
// Until now we assumed that all properties of user are primitive. But properties can be references to other objects. What to do with them?

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

alert(user.sizes.height); // 182

// Now it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, it will be copied by reference. So clone and user will share the same sizes:

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width++; // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one

//>> To fix that, we should use the cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.