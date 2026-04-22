const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
app.use(cookieparser());

app.get("/setcookie",(req,res)=>{
    res.cookie("name","Secfb",
        {
            maxAge:24*60*60*1,
            httpOnly:true,
            secure:false
        });
    res.send("Cookie is setup");
});
app.listen(8080);