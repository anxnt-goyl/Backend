const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
app.use(cookieparser());

app.get("/setcookie",(req,res)=>{
    res.cookie("name","Secfb",
        {
            maxAge:24*60*60*1000,
            httpOnly:true,
            secure:false
        });
    res.send("Cookie is setup");
});

app.get("/getcookie",(req,res)=>{
    const data = req.cookies.name;
    if(data){
        res.send(data);
    }
    else{
        res.send("First create cookie");
    } 
})
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("name");
    res.send("Cookie deleted");
})
app.listen(8080);