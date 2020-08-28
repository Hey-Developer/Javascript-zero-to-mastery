var course1 = {
    courseName: "JAVASCRIPT2020",
    duration: "2-Months",
    tutor: "YouTube",
    info: function() {
        console.log(`CourseName=${courseName}
                     Duration=${duration}
                     Tutor=${tutor}`);
    },
};

//>> OLD-WAY to access object properties or methods:
console.log(course1.courseName);
console.log(course1.duration);
console.log(course1.tutor);

// >> NEW-WAY: Object Destructuring-->
var { courseName, duration, tutor, info } = course1;
// $ When Destructuring Objects, we use the keys as variables names. This is how JS knows which property of object we want to assign.
info();

//> YOU Can also assign new names to the keys while object Destructuring, So  next time when u want to access the property u can use new name.
var { courseName: cn, duration: time, tutor: t, info: i } = course1;
i();

//> The key u will write only that value will return i.e U can randomly get any properties of the object bu just specifying its key.
var { tutor } = course1;
console.log(tutor);

//* In Array the data extracted from the source by matching index or position.
//* In Object the data extracted from the source by matching key we specified.

// -- First Declaring then initalizing-->
var a, b;
({ a, b } = { a: 10, b: 20 });
console.log(a, b);
// If u declare the object destructuring variable before then u have to use parentheses() to initialize it;

// --Default Values:
var { a, b, c = 10 } = { a: 10, b: 20 };
// Our object do not have "c" hence it default value will use;
console.log(a, b, c);

var { a: x, b: y, c: z = 0 } = { a: 10, b: 20 };
console.log(x, y, z);

//# Object passing to the Function:
var course2 = {
    name: "JSON/Ajax",
    duration: "1week",
    instructor: "Traversay Media",
    progress: "0%",
};

let myCourse = ({ name, duration, instructor, progress }) => {
    // Destructuring-->
    console.log(`CourseName=${name}
    Duration=${duration}
    Tutor=${instructor}
    Progress=${progress}`);
};
myCourse(course2);

//# Object returning from a function:
let progressIncrement = course => {
    var p = 0;
    p += 10;
    course.progress = p + "%";
    return course; // object returning
};
// destructuring the return object:
var { name, duration, instructor, progress } = progressIncrement(course2);
console.log(name, duration, instructor, progress);

//# Nested object Destructuring-->
var course3 = {
    name: "Python",
    duration: "2 Months",
    instructor: "Abhi Sir",
    students: {
        st1: "Punit",
        st2: "Shivani",
        st3: "Cnu",
    },
};

var {
    name,
    students: { st1, st2, st3 },
} = course3;
console.log(`Students of course ${name}-->\n${st1}\n${st2}\n${st3}`);