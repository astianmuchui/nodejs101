const http = require('http')
const fs  = require('fs')
const path = require('path')

const server = http.createServer(function(request,response){
       console.log(request.url) 
//        if(request.url == '/'){
//             fs.readFile(path.join(__dirname,'public','index.html'),'utf-8',(err,content)=>{
//                 if(err) throw err;
//                 response.writeHead(200,{'Content-Type': 'text/html'})
//                 response.end(content)
//             })

//        }
//        if(request.url == '/about'){
//         fs.readFile(path.join(__dirname,'public','about.html'),'utf-8',(err,content)=>{
//             if(err) throw err;
//             response.writeHead(200,{'Content-Type': 'text/html'})
//             response.end(content)
//         })

//    }

    let filePath = path.join(__dirname,'public',request.url == '/'? 'index.html': request.url+".html")

    let extension = path.extname(filePath)
    let contentType = 'text/html'
    
    switch(extension){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
        
    }
    
    // Read 
    fs.readFile(filePath,(err,content)=>{
        if(err) {

            if(err.code == 'ENOENT' ){
                //            
                fs.readFile(path.join(__dirname,'public','404.html'),(error,data)=>{
                    response.writeHead(200,{'Content-type':'text/html'})
                    response.end(data,'utf-8')
                })
        }
        
     }else{
        response.writeHead(200,{'Content-type': contentType})
        response.end(content,'utf-8')
   }
    }
   )
  }
)

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))