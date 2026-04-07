


let name_field          = String;
let Mobile_no           = Number;
let your_gmail          = String;
let fav_game            = String;
let fav_movies          = String;
let fav_os              = String;
let fav_code_language   = String;
let fav_food            = String;
let dream_tech_company  = String;
let dream_department    = String;







 // Schema with writre//

const mongoose = require('mongoose');


// Creact type of fields - Objects//

const schema_fields = new mongoose.Schema({
    name:{
        type: name_field,
        required: true,
        trim: true 
    },
    Mobile_Numbers:{
        type: Mobile_no,
        required: true   
    },
    gmail:{
        type: your_gmail,
        required: true,
        lowercase: true,
        trim: true
    },
    my_company:{
        type: dream_tech_company,
        trim: true
    },
    my_roll:{
        type: dream_department,
        trim: true
    },
    fav_foods:{
        type:fav_food,
        trim: true 
    },
    fav_movies_websires:{
        type: fav_movies,
        trim: true
    },
    fav_opratingsystem:{
        type: fav_os,
        trim: true
    },
    fav_programing:{
        type:fav_code_language,
        trim: true
    },
    fav_games:{
        type:fav_game,
        trim: true
    }
    
});



const my_profiles  = mongoose.model('hema_favarates',schema_fields);
module.exports = my_profiles;











 