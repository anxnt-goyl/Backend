const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
<<<<<<< HEAD
=======
const { escape } = require("querystring");
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
const server = http.createServer((request,response)=>{
    switch(request.url){
        case('/'):
        fs.readFile('./components/home.html',(err,page)=>{
            if(err){
                response.end();
            }
            else{
                response.write(page);
                response.end();
            }
        })
        break;
        case('/about'):
        fs.readFile('./components/about.html',(err,page)=>{
            if(err){
                response.end();
            }
            else{
                response.write(page);
                response.end();
            }
        })
        break;
        case('/p'):
<<<<<<< HEAD
        fs.readFile(    './components/p.html',(err,page)=>{
=======
        fs.readFile('./components/p.html',(err,page)=>{
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
            if(err){
                response.end();
            }
            else{
                response.write(page);
                response.end();
            }
        })
        break;
    }
    console.log(request.url);
}).listen(8000,'localhost',(err)=>{
    if(err) console.log(err);
    console.log("Server Started at http://localhost:8000")
})