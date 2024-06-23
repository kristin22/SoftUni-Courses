//! JavaScript Regular Expressions
//? https://www.w3schools.com/js/js_regexp.asp?goalId=59b0b296-b8cd-47b1-a417-a598d70a130a

//! Using String Methods
/*  In JS, regular expressions are often used with the two string methods: 
    search() and replace().

    search()  - uses an expression to search for a match, and returns the position of the match.
    replace() - returns a modified string where the pattern is replaced.
*/

// Using  search() with string
let text = "Visit W3Schools!";
let n = text.search("W3Schools");          //* The result in n is 6

// Using search() with regular expression
text = "Visit W3Schools";
n = text.search(/w3schools/i);             //* The result in n is 6


// Using replace() with string
text = "Visit Microsoft!";
result = text.replace("Microsoft", "W3Schools");

// Using replace() with regular expression
text = "Visit Microsoft!";
result = text.replace(/microsoft/i, "W3Schools");


//! Regular Expression Modifiers
// i case-insensitive matching

// g a global match (find all)
text = "Is this all there is?";
result = text.match(/is/g);     //  ['is', 'is']

// m multiline matching
text = "\nIs th\nis it?";
result = text.match(/^is/m);    // ['is']

// d start and end matching (New in ES2022)


//! Regular Expression Patterns  

//* Brackets are used to find a range of characters:

// [abc] Find any of the characters between the brackets
text = "Is this all there is?";
result = text.match(/[h]/g);        // ['h', 'h']

// [0-9]	Find any of the digits between the brackets
text = "123456789";
result = text.match(/[1-4]/g);  // ['1', '2', '3', '4']

// (x|y)	Find any of the alternatives separated with |
text = "re, green, red, green, gren, gr, blue, yellow";
result = text.match(/(red|green)/g);    // ['green', 'red', 'green']


//* Metacharacters are characters with a special meaning:

// \d	Find a digit
text = "Give 100%!"; 
result = text.match(/\d/g);     // ['1', '0', '0']

// \s	Find a whitespace character
text = "Is this all there is?";
result = text.match(/\s/g);     // [' ',' ', ' ']

// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
text = "HELLO, LOOK AT YOU!"; 
result = text.search(/\bLO/);   // 7
result = text.search(/LO\b/);   // 3

// \uxxxx	Find the Unicode character specified by the hexa
text = "Visit W3Schools. Hello World!"; 
result = text.match(/\u0057/g);     // W, W

//* Quantifiers define quantities:

// n+	Matches any string that contains at least one n
text = "Hellooo World! Hello W3Schools!"; 
result = text.match(/o+/g);     // ooo, o, o, oo

// n*	Matches any string that contains zero or more occurrences of n
text = "Hellooo World! Hello W3Schools!"; 
result = text.match(/lo*/g);    // l, looo, l, l, lo, l

// n?	Matches any string that contains zero or one occurrences of n
text = "1, 100 or 1000?";
result = text.match(/10?/g);    // 1, 10, 10

//! Using the RegExp Object
//* In JS, the RegExp object is a regular expression object with predefined properties and methods.

//* Using test() 

/*
The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":
*/
const pattern = /e/;
pattern.test("The best things in life are free!");  // true - because there is "e" in the string

//* You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:
/e/.test("The best things in life are free!");



//* Using exec()
/*
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.

The following example searches a string for the character "e":
*/
/e/.exec("The best things in life are free!");
