const path = require('path')

// Base file name
console.log(path.basename(__filename))

// Dir name 
console.log(path.dirname(__filename))

// File extension 
console.log(path.extname(__filename))

// Create path object 

console.log(path.parse(__filename))

// Concatenate paths 
console.log(path.join(__dirname,'test','main.py'))