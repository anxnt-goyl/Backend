const url = require("url");
const fs = require("fs");
const http = require("http");
const server = http.createServer((request,response)=>{
    console.log(request.url);
    response.write("<h1 style='color:red; margin:87px; align-items:center;'> Welcome to our website</h1>");
    const da = new Date();
    console.log(da);
    if(request.url==="/favicon.ico") response.end();
    else{
    fs.appendFile("serverlog.txt",`${da}${request.url}:new request record \n`,(err)=>{
        if(err) throw err;
    })}
    response.end();
    
}).listen(8000,'localhost',(err)=>{
    if(err) console.log(err);
    console.log("Server Started at http://localhost:8000")
})