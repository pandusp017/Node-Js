const fs = require('fs')
const http = require("http")

fs.writeFile('index.html', "<h1>Hello world</h1> \n<p> Hello </p>", (err,data)=>{
   console.log('file is created')
})

const server = http.createServer((req,res)=>{ 
    const fileRead = fs.readFileSync('index.html')
    res.writeHead(200,{'content-type': 'text/html'})
    // res.write(fileRead)
    res.end(fileRead)
})
server.listen(4000,()=>{
    console.log("Done")
})
