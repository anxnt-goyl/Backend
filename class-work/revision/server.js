const ht = require("http");
const url = require("url");
const fs = require("fs");
const server = ht.createServer((req,res)=>{
    res.write(`<h1 style = 'color:red; background:pink;' >Welcome hai ji welcome</h1>`);
    const date = Date.now();
    console.log(date);
    if(req.url == '/dash'){
        res.write("Welcome hai ji dashboard pr");
    }
    if(req.url!='/favicon.ico')
    fs.appendFile("data.txt",`${date} \n ${req.url}\n`,(err)=>{
        if(err)console.log(err);
    });
    fs.appendFile("data.txt",`${url.parse(req.url)}`,(err)=>{
        if(err)console.log(err);
    });
    
    res.end("Server Created");
}).listen(7070,"localhost",(err)=>{
    if(err)console.log(err);
})  