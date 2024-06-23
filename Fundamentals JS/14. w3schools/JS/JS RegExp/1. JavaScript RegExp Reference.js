//! JavaScript RegExp Reference

//? https://www.w3schools.com/jsref/jsref_obj_regexp.asp

/**
A regular expression is a pattern of characters.
The pattern is used for searching and replacing characters in strings.
The RegExp Object is a regular expression with added Properties and Methods.

/pattern/modifier(s);

*/

let text = "Visit W3Schools";
let pattern = /w3schools/i;
let result = text.match(pattern);   // W3Schools

/*
w3schools	The pattern to search for
/w3schools/	A regular expression
/w3schools/i	A case-insensitive regular expression
*/


//! Modifiers - define how to perform the seach:

//! g Modifier -  /g    [ perform a global match (find all) ]
text = "Is this all there is?";

pattern = /is/g; 
result = text.match(pattern);   // is, is
result = pattern.exec(text);    // is
result = pattern.test(text);    // true
result = text.match(pattern);   // is, is

//? TIP: For a global, case-insensitive search, use the "i" modifier together with the g modifier.
//* A global, case-insensitive search for "is":
text = "Is this all there is?";

result = /is/gi.exec(text);     // Is
result = /is/gi.test(text);     // true
result = text.match(/is/gi);    // Is, is, is

//? TIP: You can use the global property to check if the g modifier is set.
pattern = /W3S/g;
result = pattern.global;    // true

//* Regular Expression Search Methods - a regular expression text search, can be done with different methods.
/* With a pattern as a regular expression, these are the most common methods:
        text.match(pattern)	The String method match()
        text.search(pattern)	The String method search()
        pattern.exec(text)	The RexExp method exec()
        pattern.test(text)	The RegExp method test()
   Examples:
*/

// Examples of match():
text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");      // ain
text.match(/ain/);      // ain
text.match(/ain/g);     // ain, ain, ain
text.match(/ain/gi);    // ain, AIN, ain, ain

/*
The match() method matches a string against a reg. exp. and returns  an array with the matches, if no match is found it returns null.

Note: If the search value is a string, it is converted to a regular expression.
*/


// Examples of search():
    text = "Mr. Blue has a blue house";
let position = text.search("Blue");     // 4
    position = text.search("blue");     // 15
    position = text.search(/Blue/);     // 4
    position = text.search(/blue/);     // 15
    position = text.search(/blue/i);    // 4

/*
The search() method matches a string against a regular expression and returns the index (position) of the first match. If no match is found, it returns -1. This method is case sensitive.

Note: If the search value is a string, it is converted to a regular expression.
 */


// Examples of exec():
text = "The best things in life are free";
result = /e/.exec(text);   // e

/*
The exec() method tests for a match in a string. If it finds a match, it returns a result array, otherwise it returns null.
*/

    text = "Hello world!";

// Look for "Hello"
let result1 = /Hello/.exec(text);       // Hello

// Look for "W3Schools"
let result2 = /W3Schools/.exec(text);   // null


// Examples of test():
text = "The best things in life are free"; 
pattern = /e/;
result = pattern.test(text);    // true

/*
The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
*/

// The string:
text = "Hello world!";

// Look for "Hello"
let pattern1 = /Hello/g;
result1 = pattern1.test(text);  // true

// Look for "W3Schools"
let pattern2 = /W3Schools/g;
result2 = pattern2.test(text);  // false


//! i Modifier - /i	[ perform case-insensitive matching ]
text = "Visit W3Schools";
pattern = /w3schools/i;

result = text.match(pattern);   // W3Schools
result = pattern.exec(text);    // W3Schools
result = pattern.test(text);    // true
result = text.match(pattern);   // W3Schools

//? Tip: You can use the ignoreCase property to check if the "i" modifier is set.
pattern = /W3S/i;
result = pattern.ignoreCase;    // true

/*
Regular Expression Search Methods:
    text.match(pattern)	The String method match()
    text.search(pattern)	The String method search()
    pattern.exec(text)	The RexExp method exec()
    pattern.test(text)	The RegExp method test()

    * All of these methods are shown in dept in "g" modifier!
*/

//! m Modifier - /m	[ perform multiline matching ]
text = `Is this
all there
is`

pattern = /^is/m;   // is

/*
    The "m" modifier specifies a multiline match.
    It only affects the behavior of start ^ and end $.
    ^ specifies a match at the start of a string.
    $ specifies a match at the end of a string.
    With the "m" set, ^ and $ also match at the beginning and end of each line.
*/
//? Tip: The "m" modifier is case-sensitive and not global. To perform a global, case-insensitive search, use "m" with "g" and "i".

// Example:
// A global multiline search for "is" at the beginning of each string line
text = `Is this
all there
is`

pattern = /^is/gm;
result = text.match(pattern);   // is

// A global, multiline search for "is" at the end of each string line:
// text = "Is\nthis\nhis\n?";

pattern = /is$/gm;
result = text.match(pattern);  // is, is

//? Tip: Use the multiline property to check if the m modifier is set.
// Check if the "m" modifier is set
pattern = /W3S/gi;
result = pattern.multiline;     // false

//* Regular Expression Search Methods are shown above!


//! Brackets - used to find a range of characters:
/*
    [abc]	Find any character between the brackets
    [^abc]	Find any character NOT between the brackets
    [0-9]	Find any character between the brackets (any digit)
    [^0-9]	Find any character NOT between the brackets (any non-digit)
    (x|y)	Find any of the alternatives specified
*/

//! JS RegExp Group [abc] - Find any character between the brackets
text = "Is this all there is?";
pattern = /[h]/g;
result = text.match(pattern);   // h, h

/* Description
    Brackets [abc] specifies matches for the characters inside the brackets.
    Brackets can define single characters, groups, or character spans: 

[abc]	Any of the characters a, b, or c
[A-Z]	Any character from uppercase A to uppercase Z
[a-z]	Any character from lowercase a to lowercase z
[A-z]	Any character from uppercase A to lowercase z

? Syntax:
new RegExp("[abc]", "g")
/[abc]/g

? Tip: Use the [^abc] expression to find any character NOT between the brackets.

* Example:
*/

// Do a global search for the characters "i" and "s" in a string:
text = "Do you know if this is all there is?";
pattern = /[is]/gi; 
result = text.match(pattern);   // i, i, s, i, s, i, s

// A global search for the character span from lowercase "a" to lowercase "h" in a string:
text = "Is this all there is?";
pattern = /[a-h]/g;
result = text.match(pattern);   // h, a, h, e, e 

// Do a global search for the character-span from uppercase "A" to uppercase "E":
text = "I SCREAM FOR ICE CREAM!";
pattern = /[A-E]/g;
result = text.match(pattern);   // C,E,A,C,E,C,E,A

// A global search for the character span from uppercase "A" to lowercase "e" (will search for all uppercase letters, but only lowercase letters from a to e.)
text = "I Scream For Ice Cream, is that OK?!";
pattern = /[A-e]/g;
result = text.match(pattern); // I,S,c,e,a,F,I,c,e,C,e,a,a,O,K

// A global, case-insensitive search for the character span [a-s]:
text = "I Scream For Ice Cream, is that OK?!";
pattern = /[a-s]/gi;
result = text.match(pattern);   // I,S,c,r,e,a,m,F,o,r,I,c,e,C,r,e,a,m,i,s,h,a,O,K

// A "g" and "gi" search for characters:
text = "THIS This this";
result1 = text.match(/[THIS]/g);        // T,H,I,S,T
result2 = text.match(/[THIS]/gi);       // T,H,I,S,T,h,i,s,t,h,i,s

// Reg exp. search methods already seen in "g" modifier!
 
//! [^abc]	Find any character NOT between the brackets
text = "Is this all there is?";
pattern = /[^h]/g;              // A global search for characters that are not "h"
result = text.match(pattern);   // I,s, ,t,i,s, ,a,l,l, ,t,e,r,e, ,i,s,?

/* 
* Description
Brackets [^abc] specifies matches for any character NOT between the brackets.
Brackets can define single characters, groups, or character spans:

[^abc]	Not any of the characters a, b, or c
[^A-Z]	Not any character from uppercase A to uppercase Z
[^a-z]	Not any character from lowercase a to lowercase z
[^A-z]	Not any character from uppercase A to lowercase z

* Syntax: 
new RegExp("[^xyz]", "g")
    or
/[^xyz]/g

* Tip
Use the [abc] expression to find any character BETWEEN the brackets.

* More Examples:
*/

// "g" search for characters that are NOT "i" and "s" in a string:
text = "Do you know if this is all there is?";
pattern = /[^is]/gi;
result = text.match(pattern);   // D,o, ,y,o,u, ,k,n,o,w, ,f, ,t,h, , ,a,l,l, ,t,h,e,r,e, ,?

// "g" search for the character-span NOT from lowercase "a" to lowercase "h" in a string:
text = "Is this all there is?";
pattern = /[^a-h]/g;
result = text.match(pattern);   // I,s, ,t,i,s, ,l,l, ,t,r, ,i,s,?

// "g" search for the character-span NOT from uppercase "A" to uppercase "E":
text = "I SCREAM FOR ICE CREAM!";
pattern = /[^A-E]/g;
result = text.match(pattern);   // I, ,S,R,M, ,F,O,R, ,I, ,R,M,!

// "g" search for the character-span NOT from uppercase "A" to lowercase "e":
text = "I Scream For Ice Cream, is that OK?!";
pattern = /[^A-e]/g;
result = text.match(pattern);   // ,r,m, ,o,r, , ,r,m,,, ,i,s, ,t,h,t, ,?,!

// "g", case-insensitive search for the character-span that's NOT [a-s]:
text = "I Scream For Ice Cream, is that OK?!";
pattern = /[^a-s]/gi;
result = text.match(pattern);   // , , , ,,, , ,t,t, ,?,!

//* Regular Expression Search Methods seen in "g" modifier: text.match(pattern), text.search(pattern)


//! [0-9]	Find any character between the brackets (any digit)
// "g" search for numbers 1, 2, 3 and 4 in a string:
text = "123456789";
pattern = /[1-4]/g;
result = text.match(pattern);   // 1,2,3,4

/*
* Description
The [0-9] expression is used to find any character between the brackets.
The digits inside the brackets can be any numbers or span of numbers from 0 to 9.

*Tip: 
Use the [^0-9] expression to find any character that is NOT a digit.

* Syntax:
new RegExp("[0-9]", "g")
    or
/[0-9]/g

* More Examples:
*/

// "g" search for the number "1" in a string:\
text = "12121212";
pattern = /[1]/g;
result = text.match(pattern);   // 1,1,1,1

//* Regular Expression Search Methods seen in "g" modifier: text.match(pattern), text.search(pattern)


//! [^0-9]	Find any character NOT between the brackets (any non-digit)
text = "123456789";
pattern = /[^1-4]/g;
result = text.match(pattern);   // 5,6,7,8,9

/*
* Description
The [^0-9] expression is used to find any character that is NOT a digit.
The digits inside the brackets can be any numbers or span of numbers from 0 to 9.

*Tip: 
Use the [0-9] expression to find any character between the brackets that is a digit.

* Syntax:
new RegExp("[^0-9]", "g")
    or
/[^0-9]/g

* More Examples:
*/

// "g" search for numbers that are NOT 1:
test = "12121212";
pattern = /[^1]/g;
result = text.match(pattern);   // 2,2,2,2

// "g" search for numbers that are NOT from 5 to 8:
text = "123456789";
pattern = /[^5-8]/g;
result = text.match(pattern);   // 1,2,3,4,9

//* Regular Expression Search Methods seen in "g" modifier: text.match(pattern), text.search(pattern)


//! (x|y)	Find any of the alternatives specified
// "g" search for any of the alternatives red or green:
text = "re, green, red, green, gren, gr, blue, yellow";
pattern = /(red|green)/g;
result = text.match(pattern);   // green,red,green

/*
* Description
The (x|y) expression is used to find any of the alternatives specified.
The alternatives can be of any characters

* Syntax:
new RegExp("(x|y)", "g")
    or
/(x|y)/g

* More Examples:
*/
// "g" search to find any of the specified alternatives (0|5|7):
text = "01234567890123456789";
pattern = /(0|5|7)/g;
result = text.match(pattern);   // 0,5,7,0,5,7

//* Regular Expression Search Methods seen in "g" modifier: text.match(pattern), text.search(pattern)


//! Metacharacters - characters with a special meaning:
//! .	Find a single character, except newline or line terminator
// "g" search for any character between h and t:
text = "That's hot!";
pattern = /h.t/g;
result = text.match(pattern);   // hat,hot

/*
* Description
The . metacharacter matches any character, except newline or other line terminators.

* Syntax:
new RegExp("regexp.", "g")
    or
/regexp./g                              */


//! \w	Find a word character
// "g" search for a word character:
text = "Give 100%!";
pattern = /\w/g;
result = text.match(pattern);   // G,i,v,e,1,0,0

/*
* Description
The \w metacharacter matches word characters.
A word character is a character a-z, A-Z, 0-9, including _ (underscore).

* Syntax:
new RegExp("\\w", "g")
    or
/\w/g                           */


//! \W	Find a non-word character
// "g" search for non-word characters:
text = "Give 100%!";
pattern = /\W/g;
result = text.match(pattern);   // ,%,!

/*
* Description
The \W metacharacter matches non-word characters:
A word character is a character a-z, A-Z, 0-9, including _ (underscore).

* Syntax:
new RegExp("\\W", "g")
    or
/\W/g                               */


//! \d	Find a digit
text = "Give 100%!";
pattern = /\d/g;
result = text.match(pattern);   // 1,0,0

/*
* Description
The \d metacharacter matches digits from 0 to 9.

* Syntax:
new RegExp("\\d", "g")
    or
/\d/g                               */


//! \D	Find a non-digit character
text = "Give 100%!";
pattern = /\D/g;
result = text.match(pattern);   // G,i,v,e, ,%,!

/*

 * Description
The \D metacharacter matches non-digit characters.

* Syntax:
new RegExp("\\D", "g")
    or
/\D/g                               */


//! \s	Find a whitespace character
text = "Is this all there is?";
pattern = /\s/g;
result = text.match(pattern)    // , , ,

/*
* Description
The \s metacharacter matches whitespace character.
Whitespace characters can be:
    A space character
    A tab character
    A carriage return character
    A new line character
    A vertical tab character
    A form feed character

* Syntax:
new RegExp("\\s", "g")
    or
/\s/g                                   */


//! \S	Find a non-whitespace character
text = "Is this all there is?";
pattern = /\S/g;
result = text.match(pattern)    // I,s,t,h,i,s,a,l,l,t,h,e,r,e,i,s,?

/*
* Description
The \S metacharacter matches non-whitespace characters.
Whitespace characters can be:
    A space character
    A tab character
    A carriage return character
    A new line character
    A vertical tab character
    A form feed character

* Syntax:
new RegExp("\\S", "g")
    or
/\S/g                                  */


//! \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// Search for "LO" at the beginning of a word:
text = "HELLO, LOOK AT YOU";
pattern = /\bLO/;
result = text.search(pattern);  //  7 -> the position of "LO"

/*
* Description
The \b metacharacter matches at the beginning or end of a word.
Search for the pattern LO at the beginning of a word like this:     \bLO
Search for the pattern LO at the end of a word like this:           LO\b


* Syntax:
new RegExp("\\bregexp", "g")
    or
/\bregexp/g

* More Examples:
*/

// Search for "LO" at the END of a word:
text = "HELLO, LOOK AT YOU";
pattern = /LO\b/;
result = text.search(pattern);  // 3 -> the position of "LO"


//! \B	Find a match, but not at the beginning/end of a word
// Find the first occurrence of "LO", NOT at the beginning of a word:
text = "HELLO, LOOK AT YOU!";
pattern = /\BLO/;
result = text.search(pattern);  // 3 -> the position of "LO" NOT in the beginning of a word

/*
* Description
The \B metacharacter matches NOT at the beginning/end of a word.
Search for the pattern LO, not at the beginning of a word like this:    \BLO
Search for the pattern LO, not at the end of a word like this:          LO\B

* Syntax:
new RegExp("\\Bregexp", "g")
    or
/\Bregexp/g

* More Examples:
*/
// Find the first occurrence of "LO", NOT at the END of a word:
text = "HELLO, LOOK AT YOU";
pattern = /LO\B/;
result = text.search(pattern);  // 7


//! \0	Find a NULL character
// Search for a NUL character:
text = "Visit W3Schools.\0Learn Javascript.";
pattern = /\0/;
result = text.search(pattern);  // 16

/*
* Description
The \0 metacharacter maches NUL characters.

* Syntax:
new RegExp("\\0")
    or
/\0/                                    */


//! \n	Find a new line character
text = "Visit W3Schools.\nLearn Javascript.";
pattern = /\n/;
result = text.search(pattern);  // 16

/*
* Description
The \n character matches newline characters.

* Syntax:
new RegExp("\\n")
    or
/\n/                                     */


//! \f	Find a form feed character
text = "Visit W3Schools.\fLearn Javascript.";
pattern = /\f/
result = text.search(pattern);  // 16

/*
* Description
The \f metacharacter matches form feed characters.

* Syntax:
new RegExp("\\f")
    or
/\f/

*/

//! \r	Find a carriage return character
text = "Visit W3Schools.\rLearn Javascript.";
pattern = /\r/;
result = text.search(pattern);  // 16

/*
* Description
The \r metacharacter matches carriage return characters.

* Syntax:
new RegExp("\\r")
    or
/\r/                                */


//! \t	Find a tab character
text = "Visit W3Schools.\tLearn Javascript.";
pattern = /\t/;
result = text.search(pattern);  // 16

/*
* Description
The \t metacharacter matches horizontal tabs (tabulators).

* Syntax:
new RegExp("\\t")
    or
/\t/                                    */


//! \v	Find a vertical tab character
text = "Visit W3Schools.\vLearn Javascript.";
pattern = /\v/;
result = text.search(pattern);  // 16

/*
* Description
The \v metacharacter matches vertical tab characters (tabulators).

* Syntax:
new RegExp("\\v")
    or
/\v/                                        */


//! \xxx	Find the character specified by an octal number xxx
text = "Visit W3Schools. Hello World!";
pattern = /\127/g;
result = text.match(pattern);   // W,W

/*
* Description
The \xxx metacharacters matches the Latin character by an octal number (xxx).

* Syntax:
new RegExp("\\xxx", "g")
    or
/\xxx/g                                 */

//! \xdd	Find the character specified by a hexadecimal number dd
text = "Visit W3Schools. Hello World!";
pattern = /\x57/g;
result = text.match(pattern);   // W,W

/*
* Description
The \xdd metacharacters matches Latin characters specified by a hexadecimal number (dd).

* Syntax:
new RegExp("\\xdd", "g")
    or
/\xdd/g                                 */


//! \udddd	Find the Unicode character specified by a hexadecimal number dddd
text = "Visit W3Schools. Hello World!";
pattern = /\u0057/g;
result = text.match(pattern);   // W,W

/*
* Description
The \udddd metacharacters matches Unicode characters specified by a hexadecimal number (dddd).

* Syntax
new RegExp("\\udddd", "g")
    or
/\udddd/g                               */


//! Quantifiers
//! n+	Matches any string that contains at least one n
// Do a global search for at least one "o":
text = "Hellooo World! Hello W3Schools!";
pattern = /o+/g;
result = text.match(pattern);   // ooo,o,o,oo

// Do a global search for at least one word character:
text = "Hellooo World! Hello W3Schools!";
pattern = /\w+/g;
result = text.match(pattern);   // Hellooo,World,Hello,W3Schools

/*
* Description
The n+ quantifier matches any string that contains at least one n.

* Syntax:
new RegExp("n+", "g")
    or
/n+/g                               */


//! n*	Matches any string that contains zero or more occurrences of n
// A global search for an "l", followed by zero or more "o" characters:
text = "Hellooo World! Hello W3Schools!";
pattern = /lo*/g;
result = text.match(pattern);   // l,looo,l,l,lo,l

// A global search for a "1", followed by zero or more "0" characters:
text = "1, 100 or 1000?";
pattern = /10*/g;
result = text.match(pattern);   // 1,100,1000

/*
* Description
The n* quantifier matches any string that contains zero or more occurrences of n.

* Syntax:
new RegExp("n*", "g")
    or
/n* /g                              */


//! n?	Matches any string that contains zero or one occurrences of n
// Do a global search for a "1", followed by zero or one "0" characters:
text = "1, 100 or 1000?";
pattern = /10?/g;
result = text.match(pattern);   // 1,10,10

/*
* Description
The n? quantifier matches any string that contains zero or one occurrences of n.

* Syntax:
new RegExp("n?", "g")
    or
/n?/g                               */


//! n{X}	Matches any string that contains a sequence of X n's
// A global search for a substring that contains a sequence of four digits:
text = "100, 1000 or 10000?";
pattern = /\d{4}/g;
result = text.match(pattern);   // 1000,1000

/*
* Description
The n{X} quantifier matches any string that contains a sequence of X n's.
X must be a number.

* Syntax:
new RegExp("n{X}", "g")
    or
/n{X}/g                             */


//! n{X,Y}	Matches any string that contains a sequence of X to Y n's
// A global search for a substring that contains a sequence of three to four digits:
text = "100, 1000 or 10000?";
pattern = /\d{3,4}/g;
result = text.match(pattern);   // 100,1000,1000

/*
* Description
The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's.
X and Y must be a number.

* Syntax:
new RegExp("n{X,Y}", "g")
    or
/n{X,Y}/g                               */


//! n{X,}	Matches any string that contains a sequence of at least X n's
// A global search for a sequence of at least three digits:
text = "100, 1000 or 10000?";
pattern
result = text.match(pattern);    // 100,1000,10000

/*
* Description
The n{X,} quantifier matches any string that contains a sequence of at least X n's.
X must be a number.

* Syntax:
new RegExp("n{X,}", "g")
    or
/n{X,}/g                                */


//! n$	Matches any string with n at the end of it
// A search for "is" at the end of a string:
text = "Is this his";
pattern = /is$/;
result = text.match(pattern);   // is

/*
* Description
The n$ quantifier matches any string with n at the end of it.

*Tip: 
Use the ^n quantifier to match any string with n at the BEGINNING of it.

* Syntax: 
new RegExp("n$", "g")
    or
/n$/g                               

* More Examples:
*/

// A global, multiline search for "is" at the end of each line:
text = `Is this
all there
is`

pattern = /is$/gm;
result = text.match(pattern);   // is, is

//! ^n	Matches any string with n at the beginning of it
// A global search for "Is" at the beginning of a string:
text = "Is this his";
pattern = /^Is/g;
result = text.match(pattern);   // Is

/*
* Description
The ^n quantifier matches any string with n at the beginning of it.

* Tip: 
Use the n$ quantifier to match any string with n at the END of it.

* Syntax:
new RegExp("^n", "g")
    or
/\^n/g

* More Examples:
*/
// A global, case-insensitive, multiline search for "is" at the beginning of each line:
text = `Is this
all there
is`

pattern = /^is/gmi;
result = text.match(pattern);   // Is, is


//! ?=n	Matches any string that is followed by a specific string n
// A search for "is" followed by " all":
text = "Is this all there is";
pattern = /is(?= all)/g;
result = text.match(pattern);   // is

/*
* Description
The ?=n quantifier matches any string that is followed by a specific string n.

* Tip: 
Use the ?!n quantifier to match any string that is NOT followed by a specific string n.

* Syntax:
new RegExp("regexp(?=n)", "g")
    or
/regexp(?=n)/g                          */


//! ?!n	Matches any string that is not followed by a specific string n
// Do a global, case insensitive search for "is" not followed by " all":
text = "Is this all there is";
pattern = /is(?! all)/gi;
result = text.match(pattern);   // Is,is

/*
* Description
The ?!n quantifier matches any string that is not followed by a specific string n.

* Tip: 
Use the ?=n quantifier to match any string that IS followed by a specific string n.

* Syntax:
new RegExp("regexp(?!n)", "g")
    or
/regexp(?!n)/g                              */


//! RegExp Object Properties
//! constructor	Returns the function that created the RegExp object's prototype
// The constructor property returns a regular expression's constructor function.
pattern = /Hello World/g;
text = pattern.constructor;     // function RegExp() { [native code] }

/*
* Description
The constructor property returns the function that created the RegExp prototype.
For a regular expression the constructor property returns:
    function RegExp() { [native code] }

* Syntax:
RegExpObject.constructor

* Return Value:
    function RegExp() { [native code] }
*/


//! global	Checks whether the "g" modifier is set
pattern = /W3S/g;
result = pattern.global;    // true

/*
* Description
The global property specifies whether or not the "g" modifier is set.
This property returns true if the "g" modifier is set, otherwise it returns false.

* Syntax:
RegExpObject.global

* Return Value:
Boolean	            Returns true if the "g" modifier is set, false otherwise            */


//! ignoreCase	Checks whether the "i" modifier is set
pattern = /W3S/i;
result = pattern.ignoreCase;    // true

/*
* Description
The ignoreCase property specifies whether or not the "i" modifier is set.
This property returns true if the "i" modifier is set, otherwise it returns false.

* Syntax:
RegExpObject.ignoreCase                             */


//! lastIndex	Specifies the index at which to start the next match
text = "The rain in Spain stays mainly in the plain";
pattern = /ain/g;

result = "";
while (pattern.test(text)==true) {
  result += "Found at pos " + pattern.lastIndex + "<br>";
}
// Found at position 8
// Found at position 17
// Found at position 28
// Found at position 43


/*
* Description
The lastIndex property specifies the index at which to start the next match.

* Note: 
This property only works if the "g" modifier is set.

This property returns an integer that specifies the character position immediately after the last match found by exec() or test() methods.

* Note: 
exec() and test() reset lastIndex to 0 if they do not get a match.

* Syntax:
RegExpObject.lastIndex

* Return Value:
Number	                An integer that specifies the character position immediately after the last match found by exec() or test() methods

*/


//! multiline	Checks whether the "m" modifier is set
text = "Visit W3Schools!";
pattern = /W3S/gi; // "g" and "i" is set, "m" is not.
result = pattern.multiline;             // false

/*
* Description
The multiline property specifies whether or not the m modifier is set.
This property returns true if the "m" modifier is set, otherwise it returns false.

* Syntax:
RegExpObject.multiline

* Return Value:
Boolean	Returns true if the "m" modifier is set, false otherwise

*/

//! source property	Returns the text of the RegExp pattern
text = "Visit W3Schools";
pattern = /W3S/g;
result = pattern.source;    // W3S

/*
* Description
The source property returns the text of the RegExp pattern.

* Syntax:
RegExpObject.source

* Return Value:
String	The text of the RegExp pattern                              */


//! RegExp Object Methods
//! compile()	Deprecated in version 1.5. Compiles a regular expression
/*
^ RegExp compile() has been deprecated since 1999.
^ Avoid using it.
^ It may cease to work in your browser at any time.

* Description
The compile() method was deprecated in JavaScript version 1.5.
The method was used to compile a regular expression during execution of a script.

* Syntax:
RegExpObject.compile(regexp, modifier)

* Parameter Values:
regexp	        A regular expression
modifier	    Specifies the type of matching. "g" for a global match, "i" for a case-insensitive match and "gi" for a global, case-insensitive match
*/


//! exec()	Tests for a match in a string. Returns the first match
// Search a string for the character "e":
text = "The best things in life are free";
result = /e/.exec(text);    // e

/*
* Description
The exec() method tests for a match in a string.
If it finds a match, it returns a result array, otherwise it returns null.

* Syntax:
RegExpObject.exec(string)

* Parameter Values:
string	        Required. The string to be searched

* Return Values:
Array	        An array containing the matched text if it finds a match, otherwise it returns null

* More Examples:
*/

// Do a global search for "Hello" and "W3Schools" in a string:
text = "Hello world!";

// Look for "Hello"
result1 = /Hello/.exec(text);

// Look for "W3Schools"
result2 = /W3Schools/.exec(text);


//! test()	Tests for a match in a string. Returns true or false
// Search a string for the character "e":
text = "The best things in life are free"; 
pattern = /e/;
result = pattern.test(text);    // true

/*
* Description
The test() method tests for a match in a string.
If it finds a match, it returns true, otherwise it returns false.

* Syntax:
RegExpObject.test(string)

* Parameter Values:
string	        Required. The string to be searched

* Return Value:
Boolean	        Returns true if it finds a match, otherwise false

* More Examples:
*/

// Do a global search, and test for "Hello" and "W3Schools" in a string:
// The string:
text = "Hello world!";

// Look for "Hello"
pattern1 = /Hello/g;
result1 = pattern1.test(text);      // true

// Look for "W3Schools"
pattern2 = /W3Schools/g;
result2 = pattern2.test(text);      // false


//! toString()	Returns the string value of the regular expression
// Return the string value of the regular expression:
pattern = new RegExp("Hello World", "g");
text = pattern.toString();              // /Hello World/g

// Return the string value of the regular expression:
pattern = /Hello World/g;
text = pattern.toString();              // /Hello World/g

/*
* Description
The toString() method returns the string value of the regular expression.

* Syntax:
RegExpObject.toString()

* Parameters:
None.

* Return Value:
String	            The string value of the regular expression              */



