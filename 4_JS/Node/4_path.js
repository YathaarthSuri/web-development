const { basename } = require('path')
const path = require('path')

let filePath =
  '\\Users\\yathaarthsuri\\Desktop\\Desktop\\Web Development\\web-development\\4_JS\\Node\\1.txt'      
            // Have to give double slashes in order for this to be read by node

let extensionName = path.extname(filePath) // This will print the extension name
console.log(extensionName)

let fileName = path.basename(filePath)      // This will print the file name (1.txt in this case)
console.log(fileName)

console.log(__dirname)                      // Gives the name of the directory in which you are currently present

console.log(__filename)                     // Gives the name of the file in which you are currently present