const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome");
})

app.use('/posts',postRoutes);

app.listen(8080);