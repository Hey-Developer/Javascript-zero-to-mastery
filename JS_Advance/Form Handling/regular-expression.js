/* 
$ Regular expressions are patterns used to match character combinations in strings. 
In JavaScript, regular expressions are also objects.
A regular expression is a sequence of characters that forms a search pattern.

? Regular Expression are used IN-->
  ~ for validation purpose.
  ~ for searching purpose.
  ~ In penetration testing.
  ~ In malware making

> Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
* ReGex Can be used in any programming language.  
* ReGex is mostly used in scraping.

$ REGEX Syntax:
  ~ /pattern/modifiers;
  ~ Regex start with a forward slash and end with a forward slash.
  ~ Between this two forward slashes we write pattern or modifiers.
  ~ You construct a regular expression in one of two ways:
    > Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
      let re = /ab+c/;
    > Or calling the constructor function of the RegExp object, as follows:
      let re = new RegExp('ab+c');
*/

// Example-
var pattern = /w3schools/i;
/* 
Example explained:
? /w3schools/i  is a regular expression.
   ~ w3schools  is a pattern (to be used in a search).
   ~ i  is a modifier (modifies the search to be case-insensitive).

$ Writing a regular expression pattern->
  A regular expression pattern is composed of simple characters, such as /abc/, 
  or a combination of simple and special characters, such as /ab*c/ 

   # Using simple patterns:
    Simple patterns are constructed of characters for which you want to find a direct match.
    ~ the pattern /abc/ matches character combinations in strings only when the exact sequence "abc" occurs (all characters together and in that order). 
      > Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." 
      > In both cases the match is with the substring "abc". There is no match in the string "Grab crab" because while it contains the substring "ab c", it does not contain the exact substring "abc".

   # Using special characters:
    When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern.
    ~ to match a single "a" followed by zero or more "b"s followed by "c", you'd use the pattern /ab*c/:
      > the * after "b" means "0 or more occurrences of the preceding item." 
      > In the string "cbbabbbbcdebc", this pattern will match the substring "abbbbc".

   # Special characters in regular expressions:   
      ~ Characters / constructs	                                                                        Corresponding article
      > \, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]	         Character classes

      > ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B	                                                 Assertions

      > (x), (?:x), x|y, [xyz], [^xyz], \Number	                                                         Groups and ranges

      > *, +, ?, x{n}, x{n,}, x{n,m}	                                                                 Quantifiers

      > \p{UnicodeProperty}, \P{UnicodeProperty}	                                                     Unicode property escapes

   # Escaping:
     ~ If you need to use any of the special characters literally (actually searching for a "*", for instance)
     ~ you must escape it by putting a backslash in front of it. 
       > For instance, to search for "a" followed by "*" followed by "b", you'd use /a\*b/ — the backslash "escapes" the "*", making it literal instead of special.

       > to search for the string "/example/" followed by one or more alphabetic characters, you'd use /\/example\/[a-z]+/i

       >  to match the string "C:\" where "C" can be any letter, you'd use /[A-Z]:\\/ — the first backslash escapes the one after it, so the expression searches for a single literal backslash.

       > If using the RegExp constructor with a string literal, remember that the backslash is an escape in string literals,
         > so to use it in the regular expression, you need to escape it at the string literal level.
         > /a\*b/ and new RegExp("a\\*b")

   # Using parentheses:
     ~ Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered. Once remembered, the substring can be recalled for other use.
*/