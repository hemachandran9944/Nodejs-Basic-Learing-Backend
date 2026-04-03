

        /*Aync method write and read*/


const aync_filesystem  = require('fs');



aync_filesystem.writeFile("aync.txt","aync file creact successfulley *Check ayn read file*",(error)=> {
        if (error) throw error;
        console.log("File written successfulley")



        aync_filesystem.readFile("aync.txt",{encoding:"utf-8"},(error,data)=>{
            if (error) throw error;
            console.log("Read File Async",data)
            
        });    

});

console.log("File wrting processing");
