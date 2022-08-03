const fs  = require('fs')
const path = require('path')

// Rename file
fs.rename(
    path.join(__dirname,'/test','new.txt'),
    path.join(__dirname,'/test','newFile.txt'),
    function(err){
        if(err) throw err ;
        console.log("File renamed")
        
    },
    
)
