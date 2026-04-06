<<<<<<< HEAD
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
http.createServer((req,res)=>{
    if(req.url=="/notes" && req.method=='GET'){
        const data = fs.readFileSync("todo.json","utf8");
        res.write(data);
        res.end();
    }
    else if(req.url=="/notes" && req.method=="POST"){
        const body = "";
        req.on("data",(chunk)=>{
            body +=chunk; 
        })
        req.on("end",()=>{
            const newtodo = JSON.parse(body);
            const dat = fs.readFileSync("todo.json","utf8");
            const todos = JSON.parse(dat);
            const todo = {
                id : Date.now(),
                title : newtodo.title,
            };
                todos.push(todo); 
        })
    }

}).listen(8000);
=======
const fs = require()
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
