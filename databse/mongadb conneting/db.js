


let  connectin_success     = "Database Conneting Successfulley"
let  connectin_failed      = "Database Conneting failed "



        //* Data Base Connating*//

const mongoose     = require('mongoose');        

mongoose.connect  ("mongodb://localhost:27017/nodejs_db")
    .then(()=>{
        console.log(connectin_success);
    })

    .catch((error)=>{
        console.log(connectin_failed, error);

    });










