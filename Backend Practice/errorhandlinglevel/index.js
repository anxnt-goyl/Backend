const express = require('express');
const app = express();
const errorHandler = require('./middleware/error');

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
})
app.use((req,res,next)=>{
    const error = new Error("Page not found");
    error.statusCode = 404;
    error.status = "Fail";
    next(error);
});
app.use(errorHandler);
app.listen(3000);
