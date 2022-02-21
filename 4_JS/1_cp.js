// Node JS is a runtime environment

// Some modules are in-built inside node, other than that we have NPM(node package manager) from where we can have external modules, according to our requirements

// Child Process : Module of Node, used to create sub-processes inside of script (That is by using child process we can use external commands of our computer through the program script only)

// We can import different modules using require
const cp = require('child_process')
// Now we have the module on this cp variable

console.log('Trying to open calculator with Child Process')

cp.execSync('calc')     // Works on windows

// Basically what child process is doing is that, it is accessing external processes and also using it. Calc command on windows opens a calculator, so child process also does that from inside the script.

console.log('Calculator Opened')

// similarly to open VS Code in Windows

// console.log("Trying to open VScode")
// cp.execSync('code')
// console.log("VS Code opened")

// Below Works on Mac Perfectly

// console.log("Trying to open Chrome")
// cp.execSync('open "/Applications/Google Chrome.app"')
// console.log("Chrome opened")

