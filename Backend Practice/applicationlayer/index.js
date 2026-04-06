// const express = require("express");
// const app= express();
// app.set("view engine", "ejs");
// app.use((req,res,next)=>{
//     console.log("hello");
//     res.end();
//     req.next();
// })
// app.use(()=>{})

// let student ={
//     name:"anant",
//     age:20,
//     city:"mathura",
//     email:"anant@gmail.com",
//     hobbies:['coding','gaming','photography','solo traveller']
// }
// app.get("" , (req,res)=>{
//     res.render("home",{student:student});
// })
const express = require("express");
const app= express();
const fs = require("fs");
const user = require("./users_400.json");
const { url } = require("inspector");
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/api/users',(req,res)=>{
    return res.json(user);
});
app.get('/users',(req,res)=>{
   const html = `<ul>
   ${user.map((u)=>{ return `<li>${u.name}</li>` }).join(' ')}
   </ul>`;
    res.send(html);
});
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const userdata = user.find(u=>u.id === parseInt(id));
    console.log(id);
    return res.json(userdata);
})
app.post('/users',(req,res)=>{ //we use this through mongo db
    const data = {
        "id": 402   ,
        "name": "User_pgvjvN",
        "email": "user1@example.com",
        "address": "382, Lwomzi Street, City_34",
        "contact": "1664943781"
    };
    fs.appendFile("users_400.json", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to save user data" });
        }
        res.send("User data saved successfully");  
        return res.status(201).json({ message: "User data saved successfully" });

    });
})
app.post('/api/users',(req,res)=>{
    const data = req.body;
    console.log(data);
    return res.send("User data received successfully");

})
app.patch('/api/users/:id',(req,res)=>{
    //we will use this through mongo db
})
app.patch('/api/users/:id',(req,res)=>{
    //we will use this through mongo db
})
app.patch('/api/users/:id',(req,res)=>{
    //we will use this through mongo db
})
app.delete('/api/users/:id',(req,res)=>{
    //we will use this through mongo db
})


app.listen(8000);