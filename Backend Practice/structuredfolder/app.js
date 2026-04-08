const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));    
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Failed to connect to MongoDB", err);
})
const newsSchema = new mongoose.Schema({
    name: {type: String , required: true },
    email: {type: String , required: true , unique: true },
    contact: {type: String , required: true },
    password: {type: String , required: true , minlength: 6 }

});
const user = mongoose.model('User', newsSchema);
const port = 3400;
app.listen(3400);