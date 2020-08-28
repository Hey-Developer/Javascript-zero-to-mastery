/* 
$ Multi-Dimensional-Array
there is no specific way of using multi-dimensional-array in JS but somehow we can achieve it.
~ A 2d array : array of arrays:
  > var array_name=[[],[],[]]
? Problems when we will use multi-dimensional array-->
  _______________________________
  |  Rahul   |  Dell | Rs.70,000 |
  |__________|_______|___________|
  | Sonam    |  HP   | Rs.85,000 |
  |__________|_______|___________|
  | Sumit    |  Asus | Rs.60,000 |
  |__________|_______|___________|

?How will represent this data in the form of array
    _____0_________1_________2______
    |  Rahul   |  Dell | Rs.70,000 |
  0 |   0,0    |  0,1  |  0,2      |
    |__________|_______|___________|
    | Sonam    |  HP   | Rs.85,000 |
  1 |  1,0     |  1,1  |   1,2     |  
    |__________|_______|___________|
    | Sumit    |  Asus | Rs.60,000 |
  2 |  2,0     |  2,1  |  2,2      |
    |__________|_______|___________|

*/
// A 2d array-->
var geek = [
    ["Rahul", "Dell", "Rs.70,000"],
    ["Sonam", "HP", "Rs.85,000"],
    ["Sumit", "Asus", "Rs.60,000"],
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(geek[i][j] + ": ");
        document.write(geek[i][j] + ":");
    }
    // console.log(" "); for line change:
    document.write("<br>");
}

document.write("<hr>");

// similar way: of creating a 2d array-->
var geek1 = [
    [],
    [],
    []
];
// here inside[] --> one[] means 1row ,[][]--two row and data inside each[] is equal two no of columns
geek1[0][0] = "rahul";
geek1[0][1] = "Dell";
geek1[0][2] = "RS.70,000";
geek1[1][0] = "Sonam";
geek1[1][1] = "HP";
geek1[1][2] = "Rs.80,000";
geek1[2][0] = "Sumit";
geek1[2][1] = "Asus";
geek1[2][2] = "Rs.60,000";
console.log(geek);

// loop for display 2d array:
// i is for row
// j is for column
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(
            geek1[i][j] + " | index@ " + "[" + i + "]" + "[" + j + "]" + " --"
        );
    }

    document.write("<br>");
}

document.write("<hr>");

// $ 2D-Array
// lets create a array of 5 students and each one gives 3 test
// so 5 rows and 3 columns-->
// array students=[5] 5 students-
//  each student[0]=[physics marks,chemistry marks,maths marks]
//  each student[1]=[physics marks,chemistry marks,maths marks]
//  each student[2]=[physics marks,chemistry marks,maths marks]
//  each student[3]=[physics marks,chemistry marks,maths marks]
//  each student[4]=[physics marks,chemistry marks,maths marks]

let student = [
    [],
    [],
    [],
    [],
    []
];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        document.write("[" + i + "]" + "[" + j + "] ");
    }
    document.write("<br>");
}

// If u have lots of rows and columns then this approach of creating a empty 2d array will not work
//  because u have to write lots of array operator[] hence a more easy approach-->

document.write("<hr>");

// Empty 1D array
var students = [];
var rows = 5;
var cols = 3;

// Loop for creating a empty array
for (let i = 0; i < rows; i++) {
    students[i] = []; // Assigning an empty array in an another array to make a (array of array) i.e 2d array
    /* 
                                                        this is somewhat like this-->
                                                        students[0]=[]
                                                        students[1]=[]
                                                        students[2]=[]
                                                        students[3]=[]
                                                        students[4]=[]
                                                         */
}
// Loop to display 2d Array
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        document.write(students[i][j] + " [" + i + "]" + "[" + j + "] ");
    }
    document.write("<br>");
}

document.write("<hr>");

//$ In case of Array constructor-->
var stud = new Array(rows); //~ Empty Array of length rows=5;
var rows = 4;
var cols = 5;

//Loop to make a empty array:
for (let i = 0; i < rows; i++) {
    stud[i] = new Array(cols); //~ Creating Array inside Array using new kw. of length cols=3
    /* 
                                                stud[0]=new Array(cols);
                                                stud[1]=new Array(cols);
                                                stud[2]=new Array(cols);
                                                stud[3]=new Array(cols);
                                                stud[4]=new Array(cols);
                                                 */
}

// Loop to display 2D array:
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        document.write(stud[i][j] + " [" + i + "]" + "[" + j + "] ");
    }
    document.write("<br>");
}

var rows = 3;
var cols = 3;
// Talking input from user:
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        stud[i][j] = prompt("Please enter Values for  row:");
    }
}

document.write("<hr>");

// Again Loop to display 2D array:
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        document.write(stud[i][j] + " [" + i + "]" + "[" + j + "] ");
    }
    document.write("<br>");
}