// Normal Functions
// Functions are used for reusing code (that is to reduce writing same code again and again for same tasks), to focus on one thing at a time

// We give input, and we get output, so function is the abstract body that performs an operation for generating the output from the input

// Functions definition
function sum(a, b){
    console.log(a+b);   // function body
}

let a = 3;
let b = 4;
// Arguments in functions
sum(a, b);      // function calling or invoking the function

// Types of functions: 
// -> function returning nothing and accepting no parameter
// -> function returning nothing but accepting parameters
// -> function returning something but accepting no parameter
// -> function returning something and accepting parameters


// Functions are treated as First-Class citizen in JS, because in JS functions can be treated like variables
// In other languages variables are first-class citizens, that is a program can't work without variables
// But in JavaScript, functions and variabels both are first class citizens, that is JS doesn't differentiate between functions and variables

let sayHi = function(){                             // Anonymous function, since this does not have any name
    console.log('Hi I am a first class citizen');
} // function expression

sayHi();        // now we are calling the variable basically, so functions can be treated as variables


// Note: in JS if we call the function first and then define it, then also it will give no error, so this is not good practice and also not a good thing in a programming language. So this is why we can use functions like variables, so if we define the function like a variable then it can't be called before its definition.



//  IIFE (immediately invoked function expression) : These are used when the function written has no more work than just returning some data. This function can't be used again

let subtract = (function(a, b){
    console.log(a-b);
})(4, 5)