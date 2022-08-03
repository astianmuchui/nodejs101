const fs  = require('fs')
const path = require('path')

// Make folder 
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err;
    console.log("Folder created")
});

// Create and write to file 
fs.writeFile(path.join(__dirname,'/test','new.txt'),'Hello world',function(err){
    if(err) throw err;
    console.log("File created and written to")
});

// Append to file 

fs.appendFile(
    path.join(__dirname,'/test','new.txt'),
    'I love node.js',
    function(err){
        if(err) throw err ;
        console.log("Appended....")
        
    },
    
)