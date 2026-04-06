<<<<<<< HEAD

=======
// const { createDiffieHellmanGroup } = require("crypto");
// const e = require("express");
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
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
<<<<<<< HEAD
const { json } = require("stream/consumers");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"components")));
app.post('/submit',(req,res)=>{
    const { name, email , age } = req.body; 
    const content = `Name: ${name}, Email: ${email},Age:${age}\n`;
    const ct = JSON.stringify(content);
    fs.appendFile('data.json',ct,(err)=>{
=======
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"components")));
app.post('/submit',(req,res)=>{
    const { name, email } = req.body; 
    const content = `Name: ${name}, Email: ${email}\n`;
    fs.appendFile('data.txt',content,(err)=>{
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
        if(err){
            console.log(err);
            res.status(500).send("Error saving data");
        }else{
            res.send("Data saved successfully");
        }    });
});
app.listen(8080);