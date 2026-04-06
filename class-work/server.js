const ht = require("http");
const server = ht.createServer((request,response)=>{
    console.log(request)
    response.end("Server started ")
})
server.listen(8000,'localhost',(err)=>{
    if(err) console.log(err);
    console.log("Server started at http://localhost:8000");
    
})