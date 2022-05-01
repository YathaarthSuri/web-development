const os = require('os')

console.log('System architecture ' + os.arch())          // this prints your system architecture

console.log('Platform ' + os.platform())                // this shows system's platform

console.log(os.networkInterfaces())                     // gives wifi information

console.log(os.cpus())                                  // gives details about your cpu