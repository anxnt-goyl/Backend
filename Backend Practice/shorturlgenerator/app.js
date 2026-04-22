const express = require('express');
const router  = require('./routes/urlRoute');
const { connection } = require('./Config/db');
const ejs = require('ejs');
const app = express();
const port = 3000;
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
//app.use('/url', router);
// app.get('/', (req,res)=>{
//     res.send('Hello World!');
// })
connection("mongodb://127.0.0.1:27017/urlDb")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Failure: " + err));
app.use('/url', router );
app.get('/', (req,res)=>{
    res.render('index');
    
});
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('http://localhost:' + port);
});
