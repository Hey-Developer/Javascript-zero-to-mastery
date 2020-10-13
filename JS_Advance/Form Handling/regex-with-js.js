/* 
$ Using regular expressions in JavaScript:
  Regular expressions are used with the RegExp methods test() and exec() and with the String methods match(), replace(), search(), and split().
  
  -- exec()	        Executes a search for a match in a string. It returns an array of information or null on a mismatch.
  
  -- test()	        Tests for a match in a string. It returns true or false.
  
  -- match()	    Returns an array containing all of the matches, including capturing groups, or null if no match is found.
  
  -- matchAll()	    Returns an iterator containing all of the matches, including capturing groups.
  
  -- search()	    Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  
  -- replace()	    Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  
  -- split()	    Uses a regular expression or a fixed string to break a string into an array of substrings.

  ? When you want to know whether a pattern is found in a string, use the test() or search() methods;
  ? for more information (but slower execution) use the exec() or match() methods
    > If you use exec() or match() and if the match succeeds, these methods return an array.
      and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. 
    > If the match fails, the exec() method returns null (which coerces to false).


*/
/* 
-- RegExp.prototype.exec()
  If the match succeeds, the exec() method returns an array (with extra properties index and input; see below) 
  and updates the lastIndex property of the regular expression object. 
  The returned array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text.
*/

let re = /quick\s(brown).+?(jumps)/gi;
let result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case

console.log(result);

console.log(result[0]); //? The full string of characters matched

console.log(result[1]); //? The parenthesized substring matches, if any.The number of possible parenthesized substrings is unlimited.
console.log(result[2]);

console.log(result.index); //? The 0-based index of the match in the string.

console.log(result.input); //? The original string that was matched against.

//>> Properties of re object:
console.log(re.lastIndex); //? The index at which to start the next match. If g is absent, this will always be 0.

console.log(re.ignoreCase); //? ndicates if the i flag was used to ignore case.-->true

console.log(re.global); //? Indicates if the g flag was used for a global match.--> true

console.log(re.multiline); //? Indicates if the m flag was used to search across multiple lines.--> false

console.log(re.source); //? The text of the pattern. here--> "quick\s(brown).+?(jumps)"

/*
 * If i have one or more matches in a string then i can use exec function multiple times to find the next match but the condition is global flag should be on.
 * Otherwise it will give same match again and again on using exec.
 */
re = / harry/gi;
// First match found:
result = re.exec("I am Harry, and harry is a coder");
console.log(result);

// Second MAtch  found:
result = re.exec("I am Harry, and harry is a coder");
console.log(result);

// Null will return because no more harry is there in string.
result = re.exec("I am Harry, and harry is a coder");
console.log(result);

//# Loop for successive matches:
let myRe = /ab*/g;
let str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
    let msg = "Found " + myArray[0] + ". ";
    msg += "Next match starts at " + myRe.lastIndex;
    console.log(msg);
}

/* 
-- RegExp.prototype.test():
   The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
   ? Use test() whenever you want to know whether a pattern is found in a string. test() returns a boolean, unlike the String.prototype.search() method (which returns the index of a match, or -1 if not found).
   As with exec() (or in combination with it), test() called multiple times on the same global regular expression instance will advance past the previous match.

*/
function testInput(re, str) {
    let midstring;
    if (re.test(str)) {
        midstring = "contains";
    } else {
        midstring = "does not contain";
    }
    console.log(`${str} ${midstring} ${re.source}`);
}

testInput(/^\d{10}$/, "9926501556");

//? Further calls to test(str) will resume searching str starting from lastIndex. The lastIndex property will continue to increase each time test() returns true.
//* As long as test() returns true, lastIndex will not reset—even when testing a different string!
//? When test() returns false, the calling regex's lastIndex property will reset to 0.

const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test("foo"); // true

// regex.lastIndex is now at 3
regex.test("foo"); // false

// regex.lastIndex is at 0
regex.test("barfoo"); // true

// regex.lastIndex is at 6
regex.test("foobar"); //false

// regex.lastIndex is at 0
// (...and so on)

/* 
-- String.prototype.match()
   The match() method retrieves the result of matching a string against a regular expression.
   > str.match(regexp)
     ~ Parameters:A regular expression object.
       If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).
       If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].

    ~ Return value: An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
      If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
      if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
  
   ~ As explained above, some results contain additional properties as described below.
     > groups
       An object of named capturing groups whose keys are the names and values are the capturing groups or undefined if no named capturing groups were defined. See Groups and Ranges for more information.
     > index
       The index of the search at which the result was found.
     > input
       A copy of the search string.

   ~ If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec().
     Other methods
     > If you need to know if a string matches a regular expression RegExp, use RegExp.test().
     > If you only want the first match found, you might want to use RegExp.exec() instead.
     > If you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() or String.prototype.matchAll() instead.
*/
const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.

// >>Using global and ignore case flags with match()
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// >> A non-RegExp object as the parameter
// When the regexp parameter is a string or a number, it is implicitly converted to a RegExp by using new RegExp(regexp).
const str1 =
    "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number"); // "number" is a string. returns ["number"] //~ In regex=new RegExp('number') or /number/
str1.match(NaN); // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity); // returns ["Infinity"]
str1.match(-Infinity); // returns ["-Infinity"]
str2.match(65); // returns ["65"]
str2.match(+65); // A number with a positive sign. returns ["65"]
str3.match(null); // returns ["null"]

/* 
-- String.prototype.matchAll()
   The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
   > str.matchAll(regexp)

     ~ Parameters: A regular expression object.
       If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).
       The RegExp object must have the /g flag, otherwise a TypeError will be thrown.

    ~ Return value: An iterator (which is not a restartable iterable).   
*/
// ~ Regexp.exec() and matchAll(): Prior to the addition of matchAll to JavaScript, it was possible to use calls to regexp.exec (and regexes with the /g flag) in a loop to obtain all the matches:
const regexp = RegExp("foo[a-z]*", "g");
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
    console.log(
        `Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`
    );
    // expected output: "Found football start=6 end=14."
    // expected output: "Found foosball start=16 end=24."
}

// ~ With matchAll available, you can avoid the while  loop and exec with g.
// by using matchAll, you get an iterator to use with the more convenient for...of, array spread, or Array.from() constructs:
const regexp = RegExp("foo[a-z]*", "g");
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
    console.log(
        `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`
    );
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]

//~ matchAll will throw an exception if the g flag is missing.
const regexp = RegExp("[a-c]", "");
const str = "abc";
str.matchAll(regexp);
// TypeError

//~ matchAll internally makes a clone of the regexp—so, unlike regexp.exec(), lastIndex does not change as the string is scanned.
const regexp = RegExp("[a-c]", "g");
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]

//~ Another compelling reason for matchAll is the improved access to capture groups.
// Capture groups are ignored when using match() with the global /g flag:
// Using matchAll, you can access capture groups easily:

let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]

/* 
-- String.prototype.search(): 
   The search() method executes a search for a match between a regular expression and this String object.
   > str.search(regexp)
     
     ~ Parameters: regexp, A regular expression object.
       If a non-RegExp object regexp is passed, it is implicitly converted to a RegExp with new RegExp(regexp).

     ~ Return value
       The index of the first match between the regular expression and the given string, or -1 if no match was found.

     ~ When you want to know whether a pattern is found, and also know its index within a string, use search(). (If you only want to know if it exists, use the similar test() method on the RegExp prototype, which returns a boolean.) 
       For more information (but slower execution) use match() (similar to the regular expression exec() method).  
*/
let str = "hey JudE";
let re = /[A-Z]/g;
let re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation

/* 
-- String.prototype.replace()
   The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
   The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
   If pattern is a string, only the first occurrence will be replaced.

   > const newStr = str.replace(regexp|substr, newSubstr|function)
     ~ Parameters
       > regexp (pattern): A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified function.
       > substr: A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
       > newSubstr (replacement): The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
       > function (replacement): A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

     ~ Return value
       > A new string, with some or all matches of a pattern replaced by a replacement.
*/
let str = "Twas the night before Xmas...";
let newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...

// >>Using global and ignore with replace()
let re = /apples/gi;
let str = "Apples are round, and apples are juicy.";
let newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.

// >>Switching words in a string
// The following script switches the words in the string. For the replacement text, the script uses capturing groups and the $1 and $2 replacement patterns.
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr); // Smith, John