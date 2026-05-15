const express = require("express");
const app = express();
const data = require("./data.json");
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Welcome");
})
app.get("/about",(req,res)=>{
    res.send("About");
})
app.get("/contact",(req,res)=>{
    res.send("Contact Page");
})
app.get("/data",(req,res)=>{
    res.send(data);
})
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    const da = data.find(u=>u.id === parseInt(id));
    if(!da){
        return res.status(404).send("Id not found" );
    }
    
    res.send(da);
})
app.post("/users",(req,res)=>{
    const data = req.body;
    let userdata = JSON.parse(fs.readFileSync("data.json",'utf-8'));
    userdata.push(data);
    fs.writeFileSync("data.json",JSON.stringify(userdata,null,2));    
    res.send("Done");
})
app.put("/users/:id",(req,res)=>{
    const id = req.params.id;
    const da = data.find(u=>u.id === parseInt(id));
    da.title = req.body.title || da.title;
    res.send("Updated successfully");
    fs.writeFileSync("data.json",JSON.stringify(data)); 

})
app.listen(8080);