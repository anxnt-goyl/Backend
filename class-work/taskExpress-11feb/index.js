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