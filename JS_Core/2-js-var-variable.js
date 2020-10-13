// variables are used to store data
/* 
    ?three type of variables are there in JS:-
    *u can story any type of data in this variables-
    *var
    *let
    *const
*/
// ?In jS no data types are recquired it will automatically predict the type of data then u assign values to the variables.

//? ways to Write variable name-
/*
 *It s=is case sensitive.
 *1.You can use underscore(_)  or dollar($).
 *2.You can also use camelcase pattern for naming.
 *3.combinatin of alphabets and letters but must begin with a A-Z , a-z or _ or $
 */

//  ?Wrong way-
// ! var 99name=("Cnu"); error:invalid or unexpected token
// ! var firstName=('CNU"); eroor: invalid or unexpected token

var name = "Cnu";
var number = 9926501556;
var salary = 170000.46;
console.log("User Name=" + name);
console.log("User Number=" + number);
console.log("User Salary" + salary);
//!salary = 1.00 .000; !error unexpected token :numeric literal
salary = 12.05679;
document.write(name + "</br>");
document.write(number + "</br>");
document.write(salary + "</br>");

// ? what happen when-
var salary = "10000";
var bonus = "20";
console.log(salary + bonus);
/* Ans-You must be thinking of 10020 but sorry your r wrong here the answer will be 1000020.
    because here numbers are written inside the quotes hence they become string and string cannon add
    they concates hence two string salary and bouns just concates.
    if u want the desired output then u must do like this-
*/
var salary = 10000;
var bonus = 20;
console.log(salary + bonus);

/* 
    now the output will be as your desired output but hey wait u just write that varibale again,
    is this okay i mean it will not produce any error like multiple declaration

    ?Ans- No, this is totally okay and it will not produce any error 
   ?we can redeclare the previous Var variable again with same variable name
    ?it is just same as reassigning the value to old variale.
   ! but remember this will not haooen in case of let variables.
*/

// ? it is also valid variable declartion that is without using keyowrds var or let.
// not a good practice
first_name = "cloves";
console.log(first_name);

// Boolean values
var result1 = true;
var result2 = false;
// Single line statements-
var result1 = true,
    result2 = false;
// prints more than one value
console.log(result1, result2);

// ?what if-
/*var wifi;
console.log(wifi);
*/
//! Ans-error undefined statement
// now if i do it like this-
var wifi = "jio";
var wifi;
console.log(wifi);
/* 
ans- No problem it will run because here variable wifi is redeclare but it doesn't means
that is loose its previous value when we call wifi variable to print inside to log function it uses it previous value 
and hence we didn't face any undefined error message
*/