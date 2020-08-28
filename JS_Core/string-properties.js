console.log(`-------------------------String length------------------------`);
/* 
$ String length property:
  The length property returns the length of a string:
  it count characters and whitespace in a string.
  > Syntax: string_name.length
*/
var txt = "Good Night shraddha i love you so muchhhhhhh";
console.log(`${txt}`);
console.log(`${txt.length}`);

console.log(`-------------------------charAt() method------------------------`);
/* 
$ charAt() method:
  The JavaScript String charAt() method returns the character at the given index.
  > Syntax: string_name.charAt(index); 
*/
var str = "HELLO WORLD";
console.log(`${str.charAt(0)}`); //returns H;

console.log(
    `-------------------------charCodeAt() method------------------------`
);

/* 
$ charCodeAt() method:
  The charCodeAt() method returns the unicode of the character at a specified index in a string:
  The method returns a UTF-16 code (an integer between 0 and 65535).
  > Syntax: string_name.charCodeAt(index);
 */

var str = "HELLO WORLD";
console.log(`${str.charCodeAt(0)}`); // returns 72

console.log(
    `-------------------------toUpperCase() and toLowerCase() method------------------------`
);

/* 
$ toUpperCase() method:
  A string is converted to upper case with toUpperCase():

$ toLowerCase() method:
A string is converted to lower case with toLowerCase():
*/
var text1 = "Hello World!"; // String
console.log(text1);
var text_1 = text1.toUpperCase(); // text_1 is text1 converted to upper
console.log(text_1);

var text2 = "Hello World!"; // String
console.log(text2); //
var text_2 = text1.toLowerCase(); // text_2 is text1 converted to lower
console.log(text_2);

console.log(`-------------------------trim() method------------------------`);

/* 
$ String.trim():
  The trim() method removes whitespace from both sides of a string:
  > returns -The replace() method does not change the string it is called on. It returns a new string.
*/

var str = "       Hello World!        ";
console.log(str);
console.log(`Removing whitespaces:`);
console.log(`${str.trim()}`);
// !The trim() method is not supported in Internet Explorer 8 or lower.

console.log(
    `-------------------------replace() method------------------------`
);
/* 
$ replace() method:
  the replace() method replaces a specified value with another value in a string,
  
  > Syntax: string_name.replace(old,new)
  
  > Case sensitive:To replace case insensitive, use a regular expression with an /i flag (insensitive):
    str = "Please visit Microsoft!";
    var n = str.replace(/MICROSOFT/i, "W3Schools");

  > returns the modified string:

  >popularly used with regular expressions:like this:
    var str = "       Hello World!        ";
    alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

  ~ You can also use the replace solution above to add a trim function to the JavaScript String.prototype:
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
             return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          };
        }
    var str = "       Hello World!        ";
    alert(str.trim());
  > replace() method replaces only the first match.
    ~ To replace all matches, use a regular expression with a /g flag (global match):
    str = "Please visit Microsoft and Microsoft!";
    var n = str.replace(/Microsoft/g, "W3Schools");

 */
var str = "Hello World Hello Sir!!";
console.log(`${str.replace("World", "Mam")}`);

console.log(
    `-------------------------replace() method------------------------`
);
/* 
? Converting an string into an array:
$ split() method-->
  The split() method breaks the string up into separate string according to a delimiters passed as its first argument.
  the result is returned in an array.
  > Syntax: string_name.split(delimiter);
*/
var txt = "a,b,c,d,e"; // String
var new_txt1 = txt.split(","); // Split on commas
console.log(new_txt1);

var txt = "a b c d e"; // String
var new_txt2 = txt.split(" "); // Split on spaces //? very useful
console.log("txt without Spaces: " + new_txt2);

var txt1 = `hii&Sir&how&are&you!&hope&you&are&fine`;
var new_txt3 = txt1.split("&");
console.log(new_txt3);

//* If the separator is omitted, the returned array will contain the whole string in index [0].
//* If the separator is "", the returned array will be an array of single characters:
var txt = "Hello"; // String
txt.split(""); // Split in characters

console.log(
    `-------------------------indexOf() method------------------------`
);

/* 
$ indexOf() method:
  The indexOf() method takes a string argument and returns the index of the first string argument,
  and returns the index of the first occurrence of the argument in the string.
  > Syntax: string_name.indexOf(item,start);
  > if the argument is not found it will return -1
  > Also accept the optional second argument that specifies the index at which to start the search.
  > the indexOf() method cannot take powerful search values(regular expression)
  ~ JavaScript counts positions from zero.
  ~ 0 is the first position in a string, 1 is the second, 2 is the third ...
 */
var str = "Please locate where 'locate' occurs!";
console.log(` My string: ${str}`);

console.log(`Index of locate is ${str.indexOf("locate")}`); // return index of the first occurrence of the string.

// searching a word which is not present i the string>
console.log(`Index of Cnu :${str.indexOf("Cnu")}, not found`); // return -1

// Specifying second argument from where to start search
console.log(
    `Index of locate from index 13 is ${str.indexOf(
    "locate",
    13
  )} skip the first occurrence`
); // return index of the string. but searching will start from the specified index

// Similarly
// $ lastIndexOf() method The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(
    `Index of locate is ${str.lastIndexOf("locate")} from last occurrence`
); // return index of the last occurrence of the string.

/* 
 ~ Both methods accept a second parameter as the starting position for the search:
 > The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
 */
console.log(
    `Index of locate from index 15 is ${str.lastIndexOf(
    "locate",
    13
  )} skip the last occurrence-_-`
); // return index of the string. but searching will start from the specified index

console.log(`-------------------------search() method------------------------`);

/* 
$ search() method:
  The search() method searches a string for a specified value and returns the position of the match:
  > The search() method cannot take a second start position argument.
  > The indexOf() method cannot take powerful search values (regular expressions).

 */

var yt = `Hii guys thanks for watching`;
console.log(`My string: ${yt}`);

console.log(
    `Search thanks in the string....Ok it is available @ ${yt.search("thanks")}`
);

console.log(`-------------------------slice() method------------------------`);
/* 
$ slice() method:
  slice() extracts a part of a string and
  returns the extracted part in a new string.
  > Syntax: string_name.slice(start,end);

  > The method takes 2 parameters: 
    ~ the start position, and the end position (end not included).
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

var greet = "Hello Everyone, a very very good morning to all of u present here";
console.log(`My string: ${greet}`);

console.log(`I want copy out some part of this string into my new string  `);
console.log(`New string: slice(0,10)--> ${greet.slice(0, 10)}`);

// If start is undefined:
console.log(`New string : slice(undefined,10)-->${greet.slice(undefined, 10)}`);

// if begin is greater than the length of the sequence,
console.log(`New string : slice(16,15)-->${greet.slice(16, 15)} empty string`);

// A negative index:
console.log(`New string : slice(-10)-->${greet.slice(-10)}`);

// End is omitted:
console.log(`New string : slice(20)-->${greet.slice(20)}`);

console.log("Total length of string :" + greet.length);

// end is greater than the length of the sequence,
console.log(`New string : slice(10,67)-->${greet.slice(10, 67)}`);

// End is negative
console.log(`New string : slice(-1,-10)-->${greet.slice(-30, -10)}`);

console.log(
    `-------------------------substring() method------------------------`
);
/* 
$ substring() method:
  substring() is similar to slice().
  The difference is that substring() cannot accept negative indexes.
  > Syntax: string_name.substring(start,end)
 */

console.log(` New string : substring(10,15) ${greet.substring(10, 15)}`);

console.log(`-------------------------substr() method------------------------`);
/* 
$ substr() Method:
  substr() is similar to slice().
  The difference is that the second parameter specifies the length of the extracted part.
  > Syntax: string_name.substr(start,lengthOfString);
  substr() extracts length characters from a string, counting from the start index.

  Start:
  > If the start negative no. then it start counting from the end of the string.

  ~ If you omit the second parameter, substr() will slice out the rest of the string.
 */

var str = "Apple, Banana, Kiwi";
console.log(`My string: ${str}`);
console.log(`Extracted string: substr(7,6)--> ${str.substr(7, 6)}`);

console.log(`-------------------------substr() method------------------------`);
/* 
$ ECMAScript 5 (2009) allows property access [ ] on strings:
  var str = "HELLO WORLD";
  str[0];                   // returns H

  Property access might be a little unpredictable:
  > It does not work in Internet Explorer 7 or earlier
  > It makes strings look like arrays (but they are not)
  > If no character is found, [ ] returns undefined, while charAt() returns an empty string.
  > It is read only. str[0] = "A" gives no error (but does not work!)
 */

var str = "HELLO WORLD";
console.log(`My string: ${str}`);
console.log(`Extracting character from the string: str[0]-->${str[0]}`);
str[0] = "A"; // Gives no error, but does not work