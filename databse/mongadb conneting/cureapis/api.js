


const  express = require('express');
const routes_apiS  = express.Router();
const hema_information = require("../fields/schemadt");




    // Post  Methods//


routes_apiS.post('/', async(req, res )=>{
        try {

        const hema_data = req.body 
        const new_creact = new hema_information(hema_data);
        const creactadata_saved = await  new_creact.save();
        let respones_return    = " Create Successfully "
        let success_msg  = "success"

        res.status(201).json({
                status: success_msg,
                message: respones_return,
                data:creactadata_saved
        });
    
        } catch (error) {
                let error_msg  = " Failed "
                console.log(error_msg);
                res.status(400).json({
                        status: error_msg,
                        message: error.message 
                });

                
        }
  

});


//Get All Users//



routes_apiS.get('/',async(req, res)=>{
    try {
    const get_method = await hema_information.find();
    const getall_usres = "Get All Uesrs Successfully ";
    const getall_ApiS = "Success";
    res.status(200).json({
        status:getall_usres,
        message:getall_ApiS,
        results: get_method.length,
        data:get_method 
    })


    } catch (error) {
        let get_error_Let  = "Could Not Get Method Usres Data!";
        let get_cantake_users = "Failed";
        res.status(500).json({
            status:get_cantake_users,
            message:get_error_Let,
            error:error.message

        })
        
    }
});




            // Get Sigle Users//


routes_apiS.get("/:id",async(req, res)=>{
    try {
        const get_single_usersID    = req.params.id;
        const  users_id   = await hema_information.findById(get_single_usersID);
        if (!users_id) {
            return res.status(404).json({
                   status: "Not Found",
                   message: "User with this ID does not exist " 
            });
            
        }
        let  seccess_msg = "Get Single Users Id Successfulley";
        let  singleId_msg = "Success"
        res.status(200).json({
            status: singleId_msg,
            message:seccess_msg,
            data:users_id

        });      

            
    } catch (error) {

        const Error_msg = "Failed"
        const error_can = " Internal Server Error or Invalid ID format"

        res.status(500).json({
            status:Error_msg,
            message: error_can,
            error:error.message

        })


        
    }
})  




            // Update Method //


routes_apiS.put('/:id',async(req, res)=>{
    try {
        const UesrsUpadateid_params = req.params.id;
        const New_data = req.body;
        const Upadate_usersdata_const = await hema_information.findByIdAndUpdate
        (UesrsUpadateid_params,New_data,{
            returnDocument: 'after',
            runValidators: true 
        });

        if (!Upadate_usersdata_const) {
            return res.status(404).json({
                status: "failed",
                message: "No user found with the provided ID"

            });
            
        }
        res.status(200).json({ 
            status: "success",
            message: "User updated successfully",
            data:Upadate_usersdata_const
         });
 

        
    } catch (error) {
        let Update_id_error = "Resource not found: The user ID is invalid or does not exist."
        let error_status = "Failed"

        res.status(500).json({
            status:error_status,
            message:error_status,
            error:error.message     
        });
        
    }
});


        // Delete Method //


routes_apiS.delete('/:id',async(req, res)=>{
    try {
        const Dateuser_data  = req.params.id
        const data_deletd = await hema_information.findByIdAndDelete(Dateuser_data); 

        if (!data_deletd) {
            let data_baseid = "fail"
            let error_msg_delete = "No user found with the provided ID to delete"
            return res.status(404).json({
                status: data_baseid,
                message: error_msg_delete 

            });
            
        }

        const date_ures_date = 'User record deleted successfully from the database'
        const data_dellte_msg = "Success"

        res.status(200).json({
            status: data_dellte_msg,
            message: date_ures_date,
            //data:data_deletd
        });
    
    
    } catch (error) {

        const delete_error = "Could not find user id"
        const delete_error_msg = "Internal Server Error: Invalid ID format or Database issue"
        res.status(500).json({
            status: delete_error,
            message: delete_error_msg,
            error:error.message

        });

        
    }
});


           




module.exports = routes_apiS;


