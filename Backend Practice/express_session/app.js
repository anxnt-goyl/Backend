const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();
const session = require("express-session");
const path = require("path");
const ejs = require("ejs");

//middleware
app.use(express.urlencoded({ extended: true }));
//view engine setup
app.set("view engine","ejs");
//session setup middleware
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie:{
      maxAge: 5*60*1000 //5 min;
    }

  })
);

app.use(cookieparser());
app.get("/", (req, res) => {
  res.render("login")
}); 
app.get("/home",(req,res)=>{  
  if(!req.session.user){
    return res.redirect("/");
  }
  res.render("home",{username:req.session.user});
})
app.get("/profile",(req,res)=>{
   if(!req.session.user){
    return res.redirect("/");
  }
  res.render("profile",{username:req.session.user});
})
app.get("/logout",(req,res)=>{
   req.session.destroy(()=>{
    res.redirect("/")
  })

})
app.post("/login",(req, res)=>{
  const {username } = req.body;
  req.session.user = username;
  res.redirect("/home")   ;
})
app.listen(8088);