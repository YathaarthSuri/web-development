// Variables store values
// In JS we don't need to specify type of variable like int, float, string, etc. So JS is dynamically types language

// This is how you comment in JS

// We declare variables in JS using var, let, const

var a; // variable will always be initialised by an undefined value
console.log(a); // will output undefined

a=3;                // initialising the variable
console.log(a);     // prints 3
console.log(typeof(a)); // this is a number (all types: int, float, double all are number in JS)

// JS is a single threaded language, that is JS runs line by line or one can say synchronously

a = 'This is a string'   // So now we can again reinitialise it, and JS gives us no error, even when the type of variable is different. A string can also contain just a character but that will also be treated like a string
console.log(a);
console.log(typeof(a));     // this is a string

a=null;                // null ka data type is object
console.log(a);     
console.log(typeof(a)); 

// Datatypes in JS: number, string, boolean, undefined, null (JS doesn't ask you to explicitly define variable datatypes (since it is dynamically typed and not strictly typed like Java and C++) but that doesn't mean it does not have variable datatypes)

// Note: Difference between undefined and null. Null means that we have defined the variable but it has no value, whereas undefined means that we have not even defined the variable. When we use null, we mean that the variable does have a value but that value doesn't mean anything

var c;              // Undefined
var t = null;       // It does contain some value, that is, it is defined but that value has no meaning



// --------------------------------------------------------------------------

// var keyword has some problems

// Problem 1: We can re-declare var variable

var x = 'hello'
console.log(x);

var x = 'hi'
console.log(x);

// Above says that var x contains hello as well as hi

// So when codebase is very large, there can be ambiguity, due to same name usage of variables

// In order to overcome this problem, we use let keyword
// let keyword doesn't allow redeclaration, but you can reassign let
// var is now obsolete

let m = 'hello';
console.log(m);

m = 'hi'
console.log(m);

// Below will give us error
// let m = 'hi';
// console.log(m);


// LOOPS
//Prime Question
// var num = 29;
// var flag = 0;

// for (var i = 2; i*i <= num; i++){
//     if(num % i == 0){
//         flag = 1;
//         break;
//     }
// }
// if(flag == 0)   console.log("prime");
// else            console.log("not prime")


// Problem 2: Scoping

if(10 % 2 == 0){
    var ans = "number is divided by 2";
    console.log('this is block code', ans);
}
console.log('this is out of block code', ans);           // Even the variable defined inside a scope, can be used outside the scope, so this is not good
// But if we used let then this problem will be overcome as let is BLOCK SCOPED, that is scope of let is only inside that scope where it is defined

// var is function scoped


// const

const p = 2; // we have to initialise the variable here itself

// Now we can neither redeclare nor re-assign p
// const p = 3;
// p = 'huehue';