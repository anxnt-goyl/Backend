const express = require("express");

const getAllpost =((req,res)=>{
    res.send("All posts from controller");
})
const getpostbyid=((req,res)=>{
    const idd = req.params.id;
    res.send( `ID ${idd}`);
})
module.exports = {getAllpost,getpostbyid};