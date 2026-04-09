



const  express = require('express');  
const mongoose_db = require('./db');
const app  = express();
const restfullapiS = require("./cureapis/api");
const Posrt = 8000




const Middlewhare_const = "RequestURL:" 

app.use(express.json());

app.use((req, res, next)=>{
        console.log(Middlewhare_const,req.url)
        next();
});


app.use('/hema/datas',restfullapiS);



app.use((req, res, next)=>{
        res.status(404).send("404 Page not found plese check URL");
});



const server_const  = "Server Connecting Successfully and listening on Port 8000";

app.listen (Posrt,()=>{
        console.log(server_const);     
});



