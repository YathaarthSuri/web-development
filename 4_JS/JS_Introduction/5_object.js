// JS Objects are always in key-value pair

// Declaring an object

let obj = {};

let person = {
    name : 'Amit',        // Key : Value
    age : 20,
    phone : 9999999999,
    gender : 'male'
}

let cap = {
    firstname : 'Steve',
    lastname : 'Rogers',
    friends : ['Bucky', 'Tony', 'Dr Banner'],           // Array inside object
    age : 102,
    isAvenger : true,

    // Object inside Object (we need object sometimes inside object because sometimes one property might have many attributes)
    address : { 
        state : 'Manhattan',
        city : 'New York'
    },

    sayHi : function(){                                 // Function inside object
        console.log("Cap says Hi")
    }
}


// Dot notation

console.log(cap.firstname);

// Bracket notation

console.log(cap['lastname']);

// Accessing nested key value pairs

console.log(cap.address.state);

// Accessing array elements

console.log('My best friend is ', cap.friends[0])


// Function calling which is inside an object

cap.sayHi();


// For in loop for objects

for(let key in cap){
    console.log('Key: ', key, ', Value: ', cap[key]);            // Dot notation doesn't work in for-in loop
    // No need to pass value like this: cap['key'] , since for in loop converts key into string automatically
}

// To update value

cap.isAvenger = false;
console.log(cap);

// To add new properties to object 

cap.movies = ['Age of Ultron', 'Civil War', 'First Avenger'];
console.log(cap);

// Delete a key

delete cap.age;
console.log(cap);