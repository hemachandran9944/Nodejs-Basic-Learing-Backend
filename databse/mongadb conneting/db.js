


let  connectin_success     = "Database Conneting Successfulley"
let  connectin_failed      = "Database Conneting failed "



        //* Data Base Connating*//

const mongoose     = require('mongoose');        

const mongocluster_Database = "mongodb://hemachandranhema8754_db_user:F09oZcrRvHjg9hvj@ac-cduwql2-shard-00-00.62bc372.mongodb.net:27017,ac-cduwql2-shard-00-01.62bc372.mongodb.net:27017,ac-cduwql2-shard-00-02.62bc372.mongodb.net:27017/Hemachandran_DB?ssl=true&replicaSet=atlas-fmbi4s-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(mongocluster_Database)
    .then(()=>{
        console.log(connectin_success);
    })

    .catch((error)=>{
        console.log(connectin_failed, error);

    });










