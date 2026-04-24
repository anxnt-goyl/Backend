// const { createDiffieHellmanGroup } = require("crypto");
// const e = require("express");
// const express = require("express");
// const app = express();
// const path = require("path");
// const pathj  = path.join(__dirname,"pages");
// app.use(express.static(pathj));
// app.get('/da',(req,res)=>{
//     res.sendFile(path.join(pathj,"dashboard.html"));
// })
// app.get('/profile',(req,res)=>{
//     res.sendFile(path.join(pathj,"profile.html"));
// });
// app.get('/a',(req,res)=>{
//     res.sendFile(path.join(pathj,'about.html'));
// })
// app.get('/style',(req,res)=>{
//     res.sendFile(path.join(pathj,'style.css'));
// });
// app.listen(8080);

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"components")));
app.post('/submit',(req,res)=>{
    const { name, email } = req.body; 
    const content = `Name: ${name}, Email: ${email}\n`;
    fs.appendFile('data.txt',content,(err)=>{
        if(err){
            console.log(err);
            res.status(500).send("Error saving data");
        }else{
            res.send("Data saved successfully");
        }    });
});
app.listen(8080);