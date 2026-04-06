
const expressframe      =  require('express');
const app               =  expressframe();
let  listen_portnumber  = "Listen 8000 Port Number"
let  Middlewhare_let    = "Request URL:"



        //*  Middlewhare *//

app.use((req, res, next) =>{
    console.log("Request",req.url)
    next();
});


app.get('/',(req, res ) => {
    res.status(200).send("Get method working successfulley")   
});  


app.post('/',(req, res ) => {   
    res.status(200).send("Post method working successfulley")   
});  


app.use((req, res, next) =>{
    res.status(404).send("404 Page Not Found!")
});



app.listen(5000, ()=>{
    console.log(listen_portnumber);
});