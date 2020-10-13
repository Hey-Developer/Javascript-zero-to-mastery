/* 
--3. Groups and Ranges:
     Groups and ranges indicate groups and ranges of expression characters.
    
     >      x|y                  Matches either "x" or "y". For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".

    
     >      [xyz] [a-c]	        A character set. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, 
                                but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character set as a normal character. 
                                It is also possible to include a character class in a character set.

                                ~ For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "c" in "chop".

                                ~ For example, [abcd-] and [-abcd] match the "b" in "brisket", the "c" in "chop", and the "-" (hyphen) in "non-profit".

                                ~ For example, [\w-] is the same as [A-Za-z0-9_-]. They both match the "b" in "brisket", the "c" in "chop", and the "n" in "non-profit".

    
     >      [^xyz] [^a-c]        A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. 
                                 You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character set as a normal character. 
                                 
                                 ~ For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".
                                 * The ^ character may also indicate the beginning of input.
    
     >      (x)                  Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar". 

                                 A regular expression may have multiple capturing groups. 
                                 In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. 
                                 This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. 
                                 Matches are accessed using the index of the the result's elements ([1], ..., [n]) 
                                 or from the predefined RegExp object's properties ($1, ..., $9).

                                 Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).

                                 String.match() won't return groups if the /.../g flag is set. However, you can still use String.matchAll() to get all matches.

    
     >      \n                   Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, /apple(,)\sorange\1/ matches "apple, orange," in "apple, orange, cherry, peach".

    
     >      (?<Name>x)           Named capturing group: Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>. The angle brackets (< and >) are required for group name.
                                 ~ For example, to extract the United States area code from a phone number, we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area.

    
     >      (?:x)	Non-capturing group: Matches "x" but does not remember the match. The matched substring cannot be recalled from the resulting array's elements ([1], ..., [n]) or from the predefined RegExp object's properties ($1, ..., $9).
*/

//? Counting vowels:
var aliceExcerpt =
    "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25

//? Using groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
let match = regexpNames.exec(personList);
do {
    console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null);

//? Using named groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
let match = regexpNames.exec(personList);
do {
    console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
} while ((match = regexpNames.exec(personList)) !== null);