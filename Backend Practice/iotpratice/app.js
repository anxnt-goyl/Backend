    const express = require("express");
    const mongoose = require("mongoose");
    const app = express();
    mongoose.connect("mongodb://127.0.0.1:27017/iot")
    .then(()=>console.log("Connected MongoDB")).catch((err)=>console.log(err))
    const iotschema = new mongoose.Schema({
        temp:{
            type : String,
            required : true
        },
        humidity:{
            type : String,
            required : true
        }
        ,
        createdat:{
            type:Date,
            default: Date.now
        }
    });
    const iot = mongoose.model('iot',iotschema);
    app.use(express.json());

    app.get("/",(req,res)=>{
        res.send("Welcome");
    })

    app.post("/data", async (req,res)=>{
        const {temp,humidity } = req.body;
        const newData = new iot({
            temp,
            humidity
        });
        await newData.save();
        console.log("Saved :" , newData);

        res.status(200).send("Send");
    })
    app.listen(8000);