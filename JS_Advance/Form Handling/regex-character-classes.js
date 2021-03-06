/* 
! Special Character IN regex pattern:

-- 1. Character classes or Metacharacters are characters with a special meaning:
      Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.
      Types-->      Has one of the following meanings:
        
      > .	        Matches any single character except line terminators: \n, \r, \u2028 or \u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".
                    ".y" means first letter can be anything but the second letter should be 'y'.
                    Inside a character set, the dot loses its special meaning and matches a literal dot.
                    
                    Note that the m multiline flag doesn't change the dot behavior. 
                    So to match a pattern across multiple lines, the character set [^] can be used — 
                    it will match any character including newlines.

                    ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.

      > \d	        Matches any digit (Arabic numeral). Equivalent to [0-9]. For example, /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".

      > \D	        Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]. For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".

      > \w	        Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D".

      > \W	        Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".

      > \s	        Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, " /\s\w* / " matches " bar" in "foo bar".

      > \S	        Matches a single character other than white space. Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, "/ \S\w* /" matches "foo" in "foo bar".

      > \t	        Matches a horizontal tab.
      > \r	        Matches a carriage return.
      > \n	        Matches a linefeed.
      > \v	        Matches a vertical tab.
      > \f	        Matches a form-feed.
      > [\b]	    Matches a backspace. If you're looking for the word-boundary character (\b), see Boundaries.
      > \0	        Matches a NUL character. Do not follow this with another digit.
      > \cX	        Matches a control character using caret notation, where "X" is a letter from A–Z (corresponding to codepoints U+0001–U+001F). For example, /\cM/ matches "\r" in "\r\n".

      > \xhh	    Matches the character with the code hh (two hexadecimal digits).
      > \uhhhh	    Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).
      > \u{hhhh}    (Only when the u flag is set.) Matches the character with the Unicode value U+hhhh or U+hhhhh (hexadecimal digits).
         or 
         \u{hhhhh}

      > \	        Indicates that the following character should be treated specially, or "escaped". It behaves one of two ways.
                    For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. 
                        For example, /b/ matches the character "b". By placing a backslash in front of "b", that is by using /\b/, the character becomes special to mean match a word boundary.
                    
                    For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. 
                        For example, "*" is a special character that means 0 or more occurrences of the preceding character should be matched; 
                        for example, "/ a* /" means match 0 or more "a"s. 
                        To match * literally, precede it with a backslash; for example, "/ a\* /" matches "a*".

                    To match this character literally, escape it with itself. In other words to search for \ use /\\/.

*/
// ? Looking for a series of digits:
var randomData = "015 354 8787 687351 3512 8735";
var regexpFourDigits = /\b\d{4}\b/g;
// \b indicates a boundary (i.e. do not start matching in the middle of a word)
// \d{4} indicates a digit, four times
// \b indicates another boundary (i.e. do not end matching in the middle of a word)

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']