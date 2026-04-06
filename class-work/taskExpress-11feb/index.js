<<<<<<< HEAD
// const express = require('express');
// const app = express();
// // const data = require("./data.json");
// app.get("/",(req,res)=>{
//     res.send("Hello ji")
// });
// app.get("/home",(req,res)=>{
//     res.send(`<h1>Swagat hai apka home page pr </h1>    
//         <a href='/about'>click kariye mere bare mai janne ke liye <a/>`);
// });
// // app.get("/users", (req, res) => {
// //     res.json(data);
// // });
// app.get("/about",(req,res)=>{
//     res.send("Swagat hai apka about page pr ")
// });
// app.get("/contact",(req,res)=>{
//     res.send("Swagat hai apka contact page pr ")
// });
// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("Seach result served " +req.query.name);
// });
// app.use((req,res)=>{
//     res.status(404).send("Page not found"); 
// })
// app.listen(8000); 
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded());
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
            console.log(content);
        }    });
});
app.listen(8080);
=======
const express = require('express');
const app = express();
// const data = require("./data.json");
app.get("/",(req,res)=>{
    res.send("Hello ji")
});
app.get("/home",(req,res)=>{
    res.send(`<h1>Swagat hai apka home page pr </h1>    
        <a href='/about'>click kariye mere bare mai janne ke liye <a/>`);
});
// app.get("/users", (req, res) => {
//     res.json(data);
// });
app.get("/about",(req,res)=>{
    res.send("Swagat hai apka about page pr ")
});
app.get("/contact",(req,res)=>{
    res.send("Swagat hai apka contact page pr ")
});
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("Seach result served " +req.query.name);
});
app.use((req,res)=>{
    res.status(404).send("Page not found"); 
})
app.listen(8000); 
>>>>>>> 7fa714606eb9c1918e9bdc927bee014f91ec0a2e
