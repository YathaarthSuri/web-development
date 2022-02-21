// Array is a collection of elements stored in a contiguous fashion (In JS, array elements might not be similar)

let arr = []; // array declaration

let cars = ['Mustang', 'BMW', 'Mercedes']; // same datatype

let testArr = ['Beetle', null, 3, 4.89, undefined, true]; // different data types

console.log(cars);

console.log(testArr);

// -------------------------------------------------------------------


// Accessing the elements of an array

console.log(cars[1]);


// Replacing an element in an array

cars[0] = 'Beetle';
console.log(cars);

// Add elements in array

// If we don't add element in a contiguous array then output will show the in between elements as an <empty item>
cars[3] = 'Tesla';
console.log(cars);

// Array Methods

// Pop Method: Removes the element from the last of the array

let removedElement = cars.pop();

console.log(removedElement);
console.log(cars);

// push method: this method adds an element to the end of the array

cars.push('Jaguar');
console.log(cars);

// shift and unshift

// shift : removes element from 0th index of an array

cars.shift();
console.log(cars);

// unshift : adds element to the 0th index

cars.unshift('Aston Martin');
console.log(cars);

// length property of an array

console.log('The length of cars array is : ', cars.length);


// 2D Array : Creation and accessing elements

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matrix[0][1]);