let number = /\(?\d{3}[-.)]\d{3}[-.]\d{4}/;

let email = /^[a-z0-9.]+@[a-z]+\.([a-z]{2,3})(\.[a-z]{2})?/;

let passwords = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
/* 
Suppose i have string--> "Shraddha@35%6";
my regex is ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$
in my regex the only matching part is .{8,} which means the given string should have At least 8 characters:
Then what is this-->(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])
Ans is this are the minimum requirement to match the given string with ".{8,}"
these lookAhead are created for atLeast condition:  
--1. (?=.*[a-z]): at least one small case letter that may or may not be followed by any other character(.*):
--2. (?=.*[A-Z]): at least one Upper case letter that may or may not be followed by any other characters(.*):
--3. (?=.*[0-9]): at least one digit that may or may not be followed by any other character(.*);
 Now when in my given string these condition are verified then only string matches with (.{8,})

*/