// File System Module

//**** Files ****//

const fileSystem = require('fs')

//1.  We will be reading writing updating and deleting in a file

let content = fileSystem.readFileSync('f1.txt')           // To read a file
console.log('This is my file data: ' + content)           // We need to concatenate with string else it gives output in buffer format