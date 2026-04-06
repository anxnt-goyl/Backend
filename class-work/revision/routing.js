const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
http.createServer((req,res)=>{
    //res.end("Hello");
    if(req.url == "/home"){
        fs.readFile("./components/home.html",(err,data)=>{
            if(err) console.log(err);
            else res.write(data);
            res.end();
        })
    }
    else{
        res.write("<h2 style='color:red; margin:87px; align-items:center;'>Error 404 </h2>");
        res.end();
    }

    console.log(req.url);
}).listen(8080);