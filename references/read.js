const fs  = require('fs')
const path = require('path')

// Read file
fs.readFile(
    path.join(__dirname,'/test','new.txt'),
    'utf8',
    function(err,data){
        if(err) throw err ;
        console.log(data)
        
    },
    
)