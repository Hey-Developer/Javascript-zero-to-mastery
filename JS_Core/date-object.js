/* 
$ The Date Object-->lets us work with dates:
  The JavaScript date object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.
  You can use different Date constructors to create date object. It provides methods to get and set day, month, year, hour, minute and seconds.
  
  By default, JavaScript will use the browser's time zone and display a date as a full text string:
  > Tue Apr 28 2020 13:02:45 GMT+0530 (India Standard Time)

  > it reads client machine date and time so if the client's date or time is incorrect, your script will reflect this fact.
  > Days of week and month of the year are enumerated beginning with zero
    Sunday=0,Monday=1,Tuesday=2,Wednesday=3,Thursday=4,Friday=5,Saturday=6
    Jan=0,Feb=1,Mar=2,Apr=3 and so on....
  > Day of months begins with one.
  > Time hr begins with zero to twenty three:

  ~ You can create Date Object with new Date() constructors.
  ~The date object created by programmer is static.They do not contain a ticking clock
  Syntax--> You can use 4 variant of Date constructor to create date object.
  > Date()
  > Date(milliseconds)
  > Date(dateString)
  > Date(year, month, day, hours, minutes, seconds, milliseconds)

*/
//~ Creating Date Object-->If nothing is specified in the parameters
var todaydate = new Date(); // returns current data and time.
// document.write(todaydate);
console.log(todaydate);

// ~ Creating Date Object-->using new Date(milliseconds), it created a new date object as january 1,1970,00:00:00 Universal Time(UTC)
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
// Zero time is January 01, 1970 00:00:00 UTC.

var tarikh1 = new Date(0);
console.log(tarikh1);

var tarikh2 = new Date(864000);
console.log(tarikh2);

var tarikh3 = new Date(1588059165017); // ms between 1Jan 1970 to 28 april 2020
console.log(tarikh3);

var d = new Date(100000000000); //01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
console.log(d);

var d = new Date(-100000000000); //January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
console.log(d);

var d = new Date(86400000); // One day (24 hours) is 86 400 000 milliseconds.
console.log(d);

//~ Creating Date Object--> using new Date(year, month, day, hours, minutes, seconds, milliseconds)
// It creates date object with date specified by the integer values for the year,month,day,hours,minutes,seconds, milliseconds,
// You can omit some of arguments.(min.2 argument)
// You have to enter in this order only.

var d = new Date(2018, 10, 24, 23, 33, 30, 0);
var d1 = new Date(2018, 10, 24, 23, 33, 30);
var d2 = new Date(2018, 10, 24, 23, 33);
var d3 = new Date(2018, 10, 24, 23);
var d4 = new Date(2018, 10, 24);
var d5 = new Date(2018, 10);
var d6 = new Date(2018); //You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
console.log(d);
document.write(d + "</br>");

console.log(d1);
document.write(d1 + "</br>");

console.log(d2);
document.write(d2 + "</br>");

console.log(d3);
document.write(d3 + "</br>");

console.log(d4);
document.write(d4 + "</br>");

console.log(d5);
document.write(d5 + "</br>");

console.log(d6);
document.write(d6 + "</br>");

// One and two digit years will be interpreted as 19xx:
var d = new Date(99, 11, 24); //1999
console.log(d);
document.write(d + "</br>");

var d = new Date(9, 11, 24); //1909
console.log(d);
document.write(d + "</br>");

// Note: JavaScript counts months from 0 to 11.-->January is 0. December is 11.

// ~ Creating Date Object--> Using new Date(String) , create a Date object from a date string.
var d = new Date("28 Apr 2020 ");
console.log(d);
document.write(d + "</br>");

// Date string format-->
// > ISO Date= YYYY-MM-DD. "2018-06-21"

// ISO 8601 is the international standard for date and time
var a = new Date("2020-04"); // "YYYY-MM" year and month
document.write(a + "</br>");

var b = new Date("2020"); // "YYYY", year
document.write(b + "</br>");

var c = new Date("2020-04-28T14:02:00Z");
var c = new Date("2020-04-28T14:02:00+05:30");
//"YYYY-MM-DDTHH:mm:ssZ"
// Date and time is separated  with a capital T
// UTC Time is defined with a capital Z
// if u want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM
document.write(c + "</br>");

// > Short Date= MM/DD/YYYY  "06/21/2018"
// ! in some browsers, month or days with no leading zeroes may produce an error:
// The behaviour of YYYY/MM/DD is undefined some browsers will return NAN or some guess the formats:

var d = new Date("04/28/2020");
document.write(d + "</br>");

var d = new Date("4/28/2020"); // working fine in mozilla
document.write(d + "</br>");

// > Long Date= MMM DD YYYY  "june 21 2020" or "21 June 2020"
// Month and date can be in any  order
// Month can be written in full(January) or abbreviated(Jan)
// "June,21,2019" commas are ignored and names are case insensitive

var tarikh = new Date("April 28 2020");
document.write(tarikh);

// !Independent of input format, JavaScript will (by default) output dates in full text string format:
// Like this--Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)