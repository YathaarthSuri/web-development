// String is a group of characters

let str = 'Pepcoders'

console.log(str);

// Length Property

console.log(str.length);

// String methods

// 1. Extraction methods

// slice method

let slicedStr = str.slice(3, 7);        // parameters are starting index and ending index + 1
console.log(slicedStr);

// substr method is also used for same purpose with a different syntax for its parameters. This is deprecated

let subString = str.substr(3, 4)        // parameters are starting index and length upto which we want
console.log(subString);

// 2. Replacing String content

// replace method

let sayHello = 'Hello There';
console.log(sayHello);
let sayBye = sayHello.replace('Hello', 'Hi');       // Parameters are (value to be replaced, value to be repplaced with)
console.log(sayBye);
// If there are multiple instances of the same word, then the first word encountered will only be replaced


// Uppercase and lowercase methods

let text1 = 'Hehe';
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// Concatenation

let str1 = 'Hi';
let str2 = 'There';
let concatenatedStr = str1.concat(' hehe ', str2);      // parameters are ('something in between the two strings', second string)
console.log(concatenatedStr);

// Trim method : used to remove all the unnecessary white spaces (white spaces around the words (but not in between them, because they are important))

let text = '          Hi         ';
console.log(text);
console.log(text.trim());