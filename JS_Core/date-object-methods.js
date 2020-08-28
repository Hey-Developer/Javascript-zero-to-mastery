/* 
$ Date Methods:
  When a Date object is created, a number of methods allow you to operate on it.
  Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

 */
// > When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
var d = new Date();
console.log(d);
console.log(d.toString());

/* 
$ Set Date methods-->(IMP)
  > setDate()	        Set the day as a number (1-31)
  > setFullYear()	    Set the year (optionally month and day)
  > setHours()	        Set the hour (0-23)
  > setMilliseconds()	Set the milliseconds (0-999)
  > setMinutes()	    Set the minutes (0-59)
  > setMonth()	        Set the month (0-11)
  > setSeconds()	    Set the seconds (0-59)
  > setTime()	        Set the time (milliseconds since January 1, 1970)

  Day as number , 1-31
  Month as number, 0-11
  Week Day as number, 0-6
  Hours as number, 0-23
  Minutes as number, 0-59
  Seconds as number, 0-59
  Milliseconds as number, 0-999

 */
document.write(
    `--------------------------------------------set() methods--------------------------------------------`
);
var currentDate = new Date();
document.write(` Current Date and Time: ${currentDate} <br>`);
document.write(`User wants some changes in date...Ok proceed <br> `);

currentDate.setFullYear(2020);
document.write(` Set Year, to 2020 -->${currentDate} <br>`);

// The setFullYear() method can optionally set month and day:
currentDate.setFullYear(2025, 01, 26);
document.write(
    ` Set Year,Month and Date, to 2025/02/26--> ${currentDate} <br>`
);

currentDate.setMonth(11);
document.write(` Set Month, to December--> ${currentDate} <br>`);

currentDate.setDate(31);
document.write(
    ` Set Date, to 2025/02/26--> ${currentDate} !!Hooray its New Year Eve <br>`
);

// The setDate() method can also be used to add days to a date:
// d.setDate(d.getDate() + 50);

currentDate.setHours(4);
document.write(` Set Hours, to 4am--> ${currentDate} <br>`);

currentDate.setMinutes(30);
document.write(` Set Minutes, to 30min--> ${currentDate} <br>`);

currentDate.setSeconds(30);
document.write(` Set Seconds, to 30sec--> ${currentDate} <br>`);

currentDate.setHours(4);
document.write(` Set Hours, to 4am--> ${currentDate} <br>`);

currentDate.setMilliseconds(500);
document.write(` Set Milliseconds, to 500ms--> ${currentDate} <br>`);

currentDate.setTime(86400000 * 1000); // 1000 days from 2 Jan 1970
document.write(` Set Milliseconds,from 1 Jan 1970 --> ${currentDate} <br>`);

/* 
$ Compare Dates
  Dates can easily be compared.
*/
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}

document.write(text);

document.write(
    `--------------------------------------------get() methods--------------------------------------------<br>`
);
/* 
$ Get Date Methods
  > getFullYear()	    Get the year as a four digit number (yyyy)
  > getMonth()	        Get the month as a number (0-11)
  > getDate()	        Get the day as a number (1-31)
  > getHours()	        Get the hour (0-23)
  > getMinutes()	    Get the minute (0-59)
  > getSeconds()	    Get the second (0-59)
  > getMilliseconds()	Get the millisecond (0-999)
  > getTime()	        Get the time (milliseconds since January 1, 1970)
  > getDay()	        Get the weekday as a number (0-6)
  > Date.now()	        Get the time. ECMAScript 5.
*/
var currentDate = new Date();
document.write(`Current Data And Time-->${currentDate} <br>`);

document.write(` I want all the elements od this date separately.<br>`);
document.write(`What are the hours-->${currentDate.getHours()} <br>`);
document.write(`What are the Minutes-->${currentDate.getMinutes()}<br> `);
document.write(`What are the Seconds-->${currentDate.getSeconds()} <br>`);
document.write(
    `What are the Milliseconds-->${currentDate.getMilliseconds()} <br>`
);
document.write(
    `What are the Milliseconds from 1 Jan 1970 to now-->${currentDate.getTime()}<br> `
);
document.write(`What is the Year-->${currentDate.getFullYear()}<br> `);
document.write(`What IS the Month-->${currentDate.getMonth()}<br> `);
document.write(`What is the Date-->${currentDate.getDate()}<br> `);
document.write(`What is the Week Days-->${currentDate.getDay()} <br>`);
document.write(`What is the Time-->${Date.now()} <br>`);

// In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"
//! Problem with the get Methods
// here month,weekday all start from 0, hence when we do getDays() it return 0 for sunday 1 for monday and similarly getMonths will return 0 for Jan
// This can misguide a user who don't know about this numbering.
// ? Solution--> Retrieve Month Name and Day Name--> instaed of seeing number of month and day we will display Name of month and date

var month = currentDate.getMonth();
var weekday = currentDate.getDay();
document.write(`${getMonthName(month)} <br>`);
document.write(`${getDayName(weekday)} <br>`);

function getMonthName(monthnum) {
    monthname = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return monthname[monthnum];
}

function getDayName(daynum) {
    dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayname[daynum];
}

//? When we display a date it displayed as a ull string including time zone milliseconds
//? this stuff is not useful for a user if he just want to see the date or just want to see the date
// ~ So here we will learn how to format the dates :

var tarikh = new Date();
document.write(`${formatDate(tarikh)} <br>`);

function formatDate(d) {
    var date = d.getDate();
    var month = d.getMonth();
    // month++;

    var year = d.getFullYear();

    // return `${date}/${month}/${year}`;
    return `${date} ${getMonthName(month)} ${year}`;
}

/* 
$ how to convert Date to strings:
  we have three methods to convert a date into string:
  > toString();
  > toUTCString();
  > toGMTString();

  ~ toUTCString() and toGMTString() format the string according to internet(GMT) standards, whereas toString() created string according to local time.
 */
document.write(`${tarikh.toString()} <br>`);
document.write(`${tarikh.toUTCString()} <br>`);
document.write(`${tarikh.toGMTString()} <br>`);

/* 
$ Other Date Object Methods:
  > getTimezoneOffset()	    Returns the time difference between UTC time and local time, in minutes
  > getUTCDate()	        Returns the day of the month, according to universal time (from 1-31)
  > getUTCDay()	            Returns the day of the week, according to universal time (from 0-6)
  > getUTCFullYear()	    Returns the year, according to universal time
  > getUTCHours()	        Returns the hour, according to universal time (from 0-23)
  > getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
  > getUTCMinutes()	        Returns the minutes, according to universal time (from 0-59)
  > getUTCMonth()	        Returns the month, according to universal time (from 0-11)
  > getUTCSeconds()	        Returns the seconds, according to universal time (from 0-59)

  > setUTCDate()	        Sets the day of the month of a date object, according to universal time
  > setUTCFullYear()	    Sets the year of a date object, according to universal time
  > setUTCHours()	        Sets the hour of a date object, according to universal time
  > setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
  > setUTCMinutes()	        Set the minutes of a date object, according to universal time
  > setUTCMonth()	        Sets the month of a date object, according to universal time
  > setUTCSeconds()	        Set the seconds of a date object, according to universal time

  > toDateString()	        Converts the date portion of a Date object into a readable string
  > toGMTString()	        Deprecated. Use the toUTCString() method instead
  > toISOString()	        Returns the date as a string, using the ISO standard
  > toJSON()	            Returns the date as a string, formatted as a JSON date
  > toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
  > toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
  > toLocaleString()	    Converts a Date object to a string, using locale conventions
  > toString()	            Converts a Date object to a string
  > toTimeString()	        Converts the time portion of a Date object to a string
  > toUTCString()	        Converts a Date object to a string, according to universal time
  > UTC()	                Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
  > valueOf()	            Returns the primitive value of a Date object
*/

/* 
$ Time Zones
  When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

  When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

  In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.
 */

/* 
 $ Date Input - Parsing Dates-->
   If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

   > Date.parse() returns the number of milliseconds between the date and January 1, 1970:
 */

var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.write(d);